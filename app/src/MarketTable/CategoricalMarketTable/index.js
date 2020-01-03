import React, { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";
import Web3 from "web3";
import cn from "classnames/bind";
import Decimal from "decimal.js-light";

import style from "./marketTable.scss";

import MarketRow from "./MarketRow";
import Spinner from "components/Spinner";
import HelpButton from "components/HelpButton";

import { oneDecimal } from "utils/constants";
import { calcSelectedMarketProbabilitiesFromPositionProbabilities } from "utils/probabilities";

const { BN } = Web3.utils;

const cx = cn.bind(style);

const MarketTable = ({
  markets,
  positions,
  lmsrState,
  marketSelections,
  setMarketSelections,
  resetMarketSelections,
  stagedTradeAmounts,
  openModal
}) => {
  useEffect(() => {
    resetMarketSelections();
    return () => {
      setMarketSelections(null);
    };
  }, []);

  const [marketProbabilities, setMarketProbabilities] = useState(null);
  const [
    marketProbabilitiesAfterStagedTrade,
    setMarketProbabilitiesAfterStagedTrade
  ] = useState(null);
  useMemo(() => {
    if (lmsrState != null) {
      const { funding, positionBalances } = lmsrState;
      const invB = new Decimal(positionBalances.length)
        .ln()
        .div(funding.toString());

      const positionProbabilities = positionBalances.map(balance =>
        invB
          .mul(balance.toString())
          .neg()
          .exp()
      );
      const newMarketProbabilities = calcSelectedMarketProbabilitiesFromPositionProbabilities(
        markets,
        positions,
        marketSelections,
        positionProbabilities
      );
      setMarketProbabilities(newMarketProbabilities);

      if (stagedTradeAmounts != null) {
        const unnormalizedPositionProbabilitiesAfterStagedTrade = positionProbabilities.map(
          (probability, i) =>
            probability.mul(stagedTradeAmounts[i].mul(invB).exp())
        );
        const normalizer = oneDecimal.div(
          unnormalizedPositionProbabilitiesAfterStagedTrade.reduce((a, b) =>
            a.add(b)
          )
        );
        const positionProbabilitiesAfterStagedTrade = unnormalizedPositionProbabilitiesAfterStagedTrade.map(
          probability => probability.mul(normalizer)
        );

        const newMarketProbabilitiesAfterStagedTrade = calcSelectedMarketProbabilitiesFromPositionProbabilities(
          markets,
          positions,
          marketSelections,
          positionProbabilitiesAfterStagedTrade
        );

        setMarketProbabilitiesAfterStagedTrade(
          newMarketProbabilitiesAfterStagedTrade
        );
      } else {
        setMarketProbabilitiesAfterStagedTrade(null);
      }
    }
  }, [lmsrState, markets, positions, marketSelections, stagedTradeAmounts]);

  const conditionalDisabled = markets.length === 1;

  const conditionalMarketIndices = (marketSelections || []).reduce(
    (acc, { isAssumed }, index) => (isAssumed ? [...acc, index] : acc),
    []
  );

  const marketsWithSetIndices = markets.map((market, index) => ({
    ...market,
    index
  }));

  const conditionalMarkets = [];
  const nonConditionalMarkets = [];

  marketsWithSetIndices.forEach(market => {
    if (
      conditionalMarketIndices.indexOf(marketsWithSetIndices.indexOf(market)) >
      -1
    ) {
      conditionalMarkets.push(market);
    } else {
      nonConditionalMarkets.push(market);
    }
  });

  const headings = [
    "#",
    "Market",
    "Implied probability",
    "",
    "Ends In",
    "Outcome",
    !conditionalDisabled && (
      <>
        <span>Conditional</span> <HelpButton openModal={openModal} />
      </>
    )
  ];

  if (!lmsrState) {
    return <Spinner />;
  }

  return (
    <table className={cx("market-table")}>
      <thead>
        <tr>
          <th>#</th>
          <th>Market</th>
          <th colSpan={2}>Implied probability</th>
          <th>Ends In</th>
          <th>Outcome</th>
          {!conditionalDisabled && (
            <>
              <span>Conditional</span> <HelpButton openModal={openModal} />
            </>
          )}
        </tr>
      </thead>
      <tbody>
        {conditionalMarkets.map(market => (
          <MarketRow
            key={market.conditionId}
            lmsrState={lmsrState}
            headings={headings}
            stagedProbabilities={
              marketProbabilities != null
                ? marketProbabilities[market.index]
                : null
            }
            probabilities={
              marketProbabilitiesAfterStagedTrade != null
                ? marketProbabilitiesAfterStagedTrade[market.index]
                : null
            }
            marketSelections={marketSelections}
            setMarketSelection={setMarketSelections}
            {...market}
          />
        ))}
        {conditionalMarkets.length > 0 && (
          <>
            <tr className={cx("explanation-row")}>
              <td
                colSpan={6}
                className={cx("explanation", "explanation-top", "arrow")}
              >
                <span>If</span>
              </td>
            </tr>
            <tr className={cx("explanation-row")}>
              <td
                colSpan={6}
                className={cx("explanation", "explanation-down", "arrow")}
              >
                <span>Then</span>
              </td>
            </tr>
          </>
        )}
        {nonConditionalMarkets.map(market => (
          <MarketRow
            key={market.conditionId}
            lmsrState={lmsrState}
            headings={headings}
            stagedProbabilities={
              marketProbabilities != null
                ? marketProbabilities[market.index]
                : null
            }
            probabilities={
              marketProbabilitiesAfterStagedTrade != null
                ? marketProbabilitiesAfterStagedTrade[market.index]
                : null
            }
            disableConditional={conditionalDisabled}
            marketSelections={marketSelections}
            setMarketSelection={setMarketSelections}
            {...market}
          />
        ))}
      </tbody>
    </table>
  );
};

MarketTable.propTypes = {
  markets: PropTypes.arrayOf(
    PropTypes.shape({
      conditionId: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  positions: PropTypes.arrayOf(
    PropTypes.shape({
      positionIndex: PropTypes.number.isRequired,
      outcomes: PropTypes.arrayOf(
        PropTypes.shape({
          marketIndex: PropTypes.number.isRequired,
          outcomeIndex: PropTypes.number.isRequired
        }).isRequired
      ).isRequired
    }).isRequired
  ).isRequired,
  lmsrState: PropTypes.shape({
    funding: PropTypes.instanceOf(BN).isRequired,
    positionBalances: PropTypes.arrayOf(PropTypes.instanceOf(BN).isRequired)
      .isRequired
  }),
  marketSelections: PropTypes.arrayOf(
    PropTypes.shape({
      selectedOutcomeIndex: PropTypes.number,
      isAssumed: PropTypes.bool.isRequired
    }).isRequired
  ),
  resetMarketSelections: PropTypes.func.isRequired,
  setMarketSelections: PropTypes.func.isRequired,
  stagedTradeAmounts: PropTypes.arrayOf(
    PropTypes.instanceOf(Decimal).isRequired
  ),
  openModal: PropTypes.func.isRequired
};

export default MarketTable;
