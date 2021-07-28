import styled, { keyframes } from "styled-components";
import { makeStyles } from "@material-ui/core";

export const priceUpdateAnimationDuration = "500ms";

export const WHITE_SMOKE = "#F2F2F2";
export const WHITE = "#ffffff";
export const BACKGROUND_COLOR = "#171a1f";
export const SHARK = "#1c1d1e";
export const GRAY_EVEN = "#303337";
export const BLACK = "#000000";
export const TICKER_TEXT_COLOR = "#fafeff";
export const LIGTHER_GREY = "#cedaeb";
export const INCREASING_GREEN = "#00b03d";
export const TORCH_RED = "#eb0029";

export const initialColors = {
  background: "transparent",
  text: LIGTHER_GREY
};

export const valueIncreaseColors = {
  background: INCREASING_GREEN,
  text: INCREASING_GREEN
};

export const valueDecreaseColors = {
  background: INCREASING_GREEN,
  text: TORCH_RED
};

export const Container = styled.div`
  // position: fixed;
  // bottom: 0px;
  width: 100%;
  height: ${(props) => props.height}px;
  background-color: ${BLACK};
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;

export const TickerContainer = styled.div`
  bottom: 0;
  -ms-flex-preferred-size: calc(100% - 30px);
  flex-basis: calc(100% - 30px);
  height: ${(props) => props.height}px;
  img {
    width: 24px;
  }
  & div:first-child {
    max-height: ${(props) => props.height}px;
  }
  color: "#000";
`;

export const TickerBodyContainer = styled.div`
  display: flex;
`;

export const Separator = styled.div`
  width: 2px;
  height: 18px;
  background-color: ${GRAY_EVEN};
  margin-top: 6px;
`;

export const TickerElementContainer = styled.div`
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 5px;
  min-width: 250px;
  filter: brightness(100%);
  &:hover {
    box-shadow: inset 0 0 100px 100px ${BACKGROUND_COLOR}90;
    background-color: ${SHARK};
  }
`;

export const TickerText = styled.p`
  margin: 0;
  padding: 0 4px;
  white-space: nowrap;
  color: ${TICKER_TEXT_COLOR};
`;

export const positiveChange = keyframes`
  0% {
    color: ${initialColors.text};
  }
  100% {
    color: ${valueIncreaseColors.text};
  }
`;

export const negativeChange = keyframes`
  0% {
    color: ${initialColors.text};
  }
  100% {
    color: ${valueDecreaseColors.text};
  }
`;

export const ChangingTickerTextColor = styled(TickerText)`
  animation-duration: ${priceUpdateAnimationDuration};
  animation-name: ${(props) =>
    props.isPositiveChange ? positiveChange : negativeChange};
`;

export const useStyles = makeStyles(() => ({
  symbol: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "12px",
    lineHeight: "14px",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    color: WHITE_SMOKE
  },
  price: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "14px",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    color: WHITE,
    "&::first-letter": {
      fontSize: "10px",
      lineHeight: "12px"
    }
  },
  priceIndex: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "14px",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    color: WHITE
  },
  percentageVariation: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "14px",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    color: WHITE,
    "& span ": {
      fontSize: "10px",
      lineHeight: "12px"
    }
  },
  unitVariation: {
    fontFamily: "Lato",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "12px",
    lineHeight: "14px",
    letterSpacing: "0.5px",
    textTransform: "uppercase"
  }
}));
