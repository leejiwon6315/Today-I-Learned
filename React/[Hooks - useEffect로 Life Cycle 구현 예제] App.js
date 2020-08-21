import React, { useState, useEffect } from "react";
import CountButton from "./components/CountButton";
import Number from "./components/Number";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  margin-top: 100px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const App = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("useEffect -> componentDidMount");

    return () => {
      console.log("useEffect -> componentWillUnmount");
    };
  }, []);

  useEffect(() => {
    console.log(`componentDidUpdate (number) -> ${number}`);
  }, [number]);

  useEffect(() => {
    console.log("useEffect -> componentDidUpdate");
  });

  return (
    <Wrapper>
      <ButtonWrapper>
        <CountButton onClick={() => setNumber(number + 1)} text="+" />
        <CountButton onClick={() => setNumber(number - 1)} text="-" />
      </ButtonWrapper>
      <Number number={number} />
    </Wrapper>
  );
};

export default App;
