export interface User {
  _id: String;
  name: String;
  email: String;
  friends?: User[];
  photoUrl?: String;
  gameStats: GameStats;
}

export interface GameStats {
  portfolio: Map<string, Portfolio>;
  portfolioValueYesterday: number;
  lastRoundProfit: number;
  dailyProfit: number;
  totalProfit: number;
  roundProfit: number;
  recentTransactions: Transaction[];
}
export interface Transaction {
  name: String;
  amount: number;
  price: number;
  activity: String;
  date: number;
}

export interface Portfolio {
  name: String;
  amount: number;
}

export function emptyUser(): User {
  return {
    _id: "",
    name: "",
    email: "",
    gameStats: {
      portfolio: new Map([]),
      dailyProfit: 0,
      lastRoundProfit: 0,
      totalProfit: 0,
      portfolioValueYesterday: 0,
      roundProfit: 0,
      recentTransactions: [],
    },
  };
}
