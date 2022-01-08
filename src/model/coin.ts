export interface Coin {
  id: string;
  name: string;
  image: string;
  market_data: MarketData;
}

interface MarketData {
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  price_change_percentage_7d: number;
}

export interface CoinList {
  coins: Coin[];
  timestamp: number;
}

export function checkData(coinList: CoinList) {
  const { coins, timestamp } = coinList;
  if (coins.length === 0) {
    return true;
  }
  if (new Date(timestamp).getDate() - Date.now() > 1000 * 60) {
    return true;
  }
  const data = coins.map((coin) => {
    return coin === null || coin === undefined;
  });
  return data;
}
