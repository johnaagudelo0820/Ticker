import React from "react";
import TrendingDownIcon from "./assets/trending-down.svg";
import TrendingUpIcon from "./assets/trending-up.svg";
import TrendingFlatIcon from "./assets/trending-flat.svg";

const TrendingIcon = (props) => {
  const { value } = props;
  if (value === 0)
    return (
      <img
        src={TrendingFlatIcon}
        style={{ width: 20, height: 20 }}
        alt="Trending flat"
      />
    );

  return value > 0 ? (
    <img
      src={TrendingUpIcon}
      style={{ width: 20, height: 20 }}
      alt="Trending Up"
    />
  ) : (
    <img
      src={TrendingDownIcon}
      style={{ width: 20, height: 20 }}
      alt="Trending Down"
    />
  );
};

export default TrendingIcon;
