import { useState, useEffect } from "react";
import styled from "styled-components";
import { getCryptoInfo } from "../services/crypto";

const Wrapper = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 20px;
  background-color: #f94144;
  padding: 20px;
  border-radius: 5px;
  font-size: 1.8rem;
  position: relative;
  box-shadow: 1px 2px 5px #222;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Info = styled.p`
  margin: 5px 0;
`;

const CryptoIcon = styled.img`
  width: 36px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

function Crypto({ id }: { id: string }) {
  const [cryptoInfo, updateCryptoInfo] = useState({
    id: "",
    rank: "",
    symbol: "",
    name: "",
    priceUsd: "",
    updated: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      let result = await getCryptoInfo(id);
      updateCryptoInfo(result);
    };

    fetchData();

    setInterval(fetchData, 60000);
  }, [id]);

  return (
    <Wrapper>
      <Info>Rank: {cryptoInfo.rank}</Info>
      <Info>Symbol: {cryptoInfo.symbol}</Info>
      <Info>Name: {cryptoInfo.name}</Info>
      <Info>Price: ${cryptoInfo.priceUsd}</Info>
      <Info>Updated: {cryptoInfo.updated}</Info>

      <CryptoIcon
        src={`https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons/32/icon/${cryptoInfo.symbol.toLocaleLowerCase()}.png`}
        alt={id}
      />
    </Wrapper>
  );
}

export default Crypto;
