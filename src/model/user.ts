import { Coin } from ".";

export interface User {
  id: String;
  name: String;
  email: String;
  friends?: User[];
  photourl?: String;
  gameStats?: GameStats;
}

export interface GameStats {
  portfolio: Record<string, Portfolio>;
  dailyProfit: number;
  totalProfit: number;
  roundProfit: number;
  recentTransactions: Transaction[];
}
export interface Transaction {
  name: String;
  amount: number;
  price: number;
  date: number;
}

export interface Portfolio {
  name: String;
  amount: number;
}

export function emptyUser(): User {
  return {
    id: "",
    name: "",
    email: "",
  };
}
