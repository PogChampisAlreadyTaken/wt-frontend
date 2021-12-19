export default interface Coin {
  id: string;
  name: string;
  market_data: MarketData;
}

export interface MarketData {
  current_price: { [key: string]: number };
  market_cap: { [key: string]: number };
  market_cap_rank: number;
  price_change_percentage_7d: number;
}
