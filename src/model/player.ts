import { Coin } from "./coin";

export interface Player {
  name: string;
  gameStats: GameStats;
}

export interface GameStats {
  portfolio: Portfolio[];
  dailyProfit: number;
  totalProfit: number;
  roundProfit: number;
  recentTransactions: Transaction[];
}
interface Transaction {
  coin: Coin;
  amount: number;
  price: number;
}

interface Portfolio {
  coin: Coin;
  amount: number;
}
