import React from "react";
import PropTypes from "prop-types";
import cn from "classnames/bind";

import style from "./probabilities.scss";
import { probabilityDecimalPlaces } from "utils/constants";
import { blueColor, redColor } from "scss/_variables.scss";
const scalarMarketColor = {
  0: "#8884d8"
};
const categoricalMarketColors = {
  0: blueColor,
  1: redColor
};

import { formatProbability } from "utils/formatting";

const cx = cn.bind(style);

const Probabilities = ({ outcomes, probabilities, stagedProbabilities }) => {
  const displayedProbabilities = probabilities
    ? probabilities
    : stagedProbabilities;
  return (
    <div className={cx("probabilities")}>
      {displayedProbabilities && (
        <>
          {outcomes.map((outcome, index) => {
            const changeInProbability = (probabilities || stagedProbabilities)[
              index
            ]
              .sub(stagedProbabilities[index])
              .mul(100)
              .toDecimalPlaces(probabilityDecimalPlaces);
            return (
              <div
                className={cx("outcome-bar", {
                  "staged-display": changeInProbability.abs().gt(0.01)
                })}
                key={outcome.short}
              >
                <div className={cx("probability")}>
                  <div className={cx("label", "outcome")}>
                    <i
                      className={cx("dot")}
                      style={{
                        color: categoricalMarketColors[index]
                      }}
                    />{" "}
                    <span>{outcome.title}</span>
                  </div>
                  <div className={cx("label", "amount")}>
                    ({formatProbability(displayedProbabilities[index])})
                  </div>
                </div>

                {changeInProbability.abs().gt(0.01) && (
                  <span
                    className={cx("change-percentage", {
                      negative: changeInProbability.lt(0)
                    })}
                  >
                    {changeInProbability.toString()}%
                  </span>
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

Probabilities.propTypes = {
  outcomes: PropTypes.arrayOf(PropTypes.object),
  probabilities: PropTypes.arrayOf(PropTypes.number),
  stagedProbabilities: PropTypes.arrayOf(PropTypes.object)
};

export default Probabilities;
