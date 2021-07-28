import React, { useState } from "react";

import { formatNumber, MEXICAN_CURRENCY, PERCENTAGE_ELEMENT } from "./helpers";

import TrendingIcon from "./TrendingIcon";

import {
  TickerElementContainer,
  ChangingTickerTextColor,
  TickerText,
  useStyles,
  initialColors,
  valueIncreaseColors,
  valueDecreaseColors
} from "./components/Ticker/styles";

export const TICKER_CONTAINER = "tickerContainer";
export const VARIATION_ELEMENT = "unitVariation";
export const MarketTypesIdsForIndexes = [2048, 64];

const ItemTicker = ({
  displaySymbol,
  marketTypeId,
  precioActual: currentPrice,
  porcentaje: changePercentage,
  variacion: change
}) => {
  const [isPositiveChange, setIsPositiveChange] = useState(true);
  const classes = useStyles();

  const formatPercentage = (changePercentage) => {
    if (Number(changePercentage) % 1 === 0) {
      return parseInt(changePercentage, 10).toFixed(2);
    }
    return parseFloat(changePercentage).toFixed(2);
  };

  let color;
  if (parseFloat(change) === 0) color = initialColors.text;
  else if (change > 0) color = valueIncreaseColors.text;
  else color = valueDecreaseColors.text;

  const changingVarationStyle = {
    color
  };

  return (
    <TickerElementContainer data-testid={TICKER_CONTAINER} key={displaySymbol}>
      <ChangingTickerTextColor
        className={classes.symbol}
        isPositiveChange={isPositiveChange}
      >
        {displaySymbol}
      </ChangingTickerTextColor>
      <ChangingTickerTextColor
        className={
          MarketTypesIdsForIndexes.includes(marketTypeId)
            ? classes.priceIndex
            : classes.price
        }
        isPositiveChange={isPositiveChange}
      >
        {`${
          MarketTypesIdsForIndexes.includes(marketTypeId) ? "" : "$"
        }${formatNumber(currentPrice || 0, false, 2)} ${
          MarketTypesIdsForIndexes.includes(marketTypeId)
            ? ""
            : MEXICAN_CURRENCY
        }`}
      </ChangingTickerTextColor>
      <ChangingTickerTextColor
        data-testid={PERCENTAGE_ELEMENT}
        className={classes.percentageVariation}
        isPositiveChange={isPositiveChange}
      >
        {changePercentage && formatPercentage(changePercentage)}
        <span>%</span>
      </ChangingTickerTextColor>
      <TickerText
        data-testid={VARIATION_ELEMENT}
        style={changingVarationStyle}
        className={classes.unitVariation}
      >
        (
        {`${parseFloat(change).toFixed(2)} ${
          MarketTypesIdsForIndexes.includes(marketTypeId)
            ? ""
            : MEXICAN_CURRENCY
        }`}
        )
      </TickerText>
      <TrendingIcon value={parseFloat(changePercentage)} />
    </TickerElementContainer>
  );
};

export default ItemTicker;
