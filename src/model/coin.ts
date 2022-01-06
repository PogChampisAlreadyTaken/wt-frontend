export interface Coin {
  id: string;
  name: string;
  market_data: MarketData;
  timestamp?: Date;
}

export interface MarketData {
  current_price: { [key: string]: number };
  market_cap: { [key: string]: number };
  market_cap_rank: number;
  price_change_percentage_7d: number;
}

export function checkData(coins: Coin[]) {
  if (coins.length === 0) {
    return true;
  }
  const data = coins.map((coin) => {
    return coin === null || coin === undefined;
  });
  return data;
}
