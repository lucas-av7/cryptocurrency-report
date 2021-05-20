import styled from "styled-components";
import Crypto from "./components/Crypto";

const Title = styled.h1`
  text-align: center;
  margin-top: 5px;
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: auto;
  justify-content: space-around;
  min-height: calc(100vh - 38px);
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  flex-wrap: wrap;
`;

function App() {
  return (
    <div className="App">
      <Title>cryptocurrency-report</Title>
      <Wrapper>
        <Crypto id="bitcoin" />
        <Crypto id="ethereum" />
        <Crypto id="bitcoin-cash" />
        <Crypto id="litecoin" />
        <Crypto id="tether" />
        <Crypto id="xrp" />
      </Wrapper>
    </div>
  );
}

export default App;
