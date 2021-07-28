import React, { useState } from "react";
import Ticker from "react-ticker";

import {
  Container,
  TickerContainer,
  TickerBodyContainer,
  Separator
} from "./styles";

const TickerComponent = ({ maxSpeed, items, renderItem, height }) => {
  const [speed, setSpeed] = useState(maxSpeed);
  return (
    <Container height={height}>
      <TickerContainer
        onMouseEnter={() => setSpeed(0)}
        onMouseLeave={() => setSpeed(maxSpeed)}
        height={height}
        font={20}
      >
        <Ticker speed={speed}>
          {() => (
            <TickerBodyContainer>
              {items.map((item) => (
                <>
                  {renderItem(item)}
                  <Separator />
                </>
              ))}
            </TickerBodyContainer>
          )}
        </Ticker>
      </TickerContainer>
    </Container>
  );
};

export default TickerComponent;
