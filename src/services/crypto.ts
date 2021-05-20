import axios from "axios";
import moment from "moment";

const instance = axios.create({
  baseURL: "https://api.coincap.io/v2/",
});

interface CryptoResponse {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  priceUsd: string;
  updated: string;
}

export const getCryptoInfo = async (
  crypto: string
): Promise<CryptoResponse> => {
  let response = await (await instance.get(`assets/${crypto}`)).data;

  let updated = moment(response.timestamp).format("DD/MM/YYYY - HH:mm:ss");

  return {
    id: response.data.id,
    rank: response.data.rank,
    symbol: response.data.symbol,
    name: response.data.name,
    priceUsd: response.data.priceUsd,
    updated,
  };
};
