import React, { useState, useCallback, useEffect } from "react";
import cn from "classnames/bind";

import style from "./sidebar.scss";
import Buy from "./Buy";
import Sell from "./Sell";

import Spinner from "components/Spinner";

import Decimal from "decimal.js-light";
import { oneDecimal } from "utils/constants";
import { calcSelectedMarketProbabilitiesFromPositionProbabilities } from "utils/probabilities";

const TabComponents = {
  Buy,
  Sell
};

const cx = cn.bind(style);

const Sidebar = ({
  markets,
  lmsrState,
  stagedTradeAmounts,
  positions,
  marketSelections
}) => {
  const [selectedTab, setSelectedTab] = useState("Buy");
  const makeButtonSelectCallback = useCallback(
    tab => () => {
      setSelectedTab(tab);
    },
    [selectedTab]
  );

  let marketProbabilities = null;
  let marketProbabilitiesAfterStagedTrade = null;
  if (lmsrState != null) {
    const { funding, positionBalances } = lmsrState;
    // funding = 1000
    // positionBalances = [100, 500]

    const invB = new Decimal(positionBalances.length)
      .ln()
      .div(funding.toString());
    // 1e-123

    const positionProbabilities = positionBalances.map(balance =>
      invB
        .mul(balance.toString())
        .neg()
        .exp()
    );
    // [ 1e-1000, 5e-1000 ]

    marketProbabilities = calcSelectedMarketProbabilitiesFromPositionProbabilities(
      markets,
      positions,
      marketSelections,
      positionProbabilities,
    );
    // [ 0.4, 0.6 ]

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

      marketProbabilitiesAfterStagedTrade = calcSelectedMarketProbabilitiesFromPositionProbabilities(
        markets,
        positions,
        marketSelections,
        positionProbabilitiesAfterStagedTrade
      );
    }
  }

  if (!marketProbabilities) {
    return <Spinner />;
  }

  const SelectedComponent = TabComponents[selectedTab];
  const targetProps = {
    market: markets[0],
    probabilities: marketProbabilities && marketProbabilities[0],
    lmsrState,
  };

  return (
    <div className={cx("sidebar")}>
      <ul className={cx("tabs")}>
        <li>
          <button
            type="button"
            className={cx("tab-select")}
            onClick={makeButtonSelectCallback("Buy")}
          >
            Buy
          </button>
        </li>
        <li>
          <button
            type="button"
            className={cx("tab-select")}
            onClick={makeButtonSelectCallback("Sell")}
          >
            Sell
          </button>
        </li>
      </ul>
      <div className={cx("sidebar-content")}>
        {SelectedComponent && <SelectedComponent {...targetProps} />}
      </div>
    </div>
  );
};

export default Sidebar;
