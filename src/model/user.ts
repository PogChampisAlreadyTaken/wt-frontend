export interface User {
  _id: String;
  name: string;
  email: String;
  friends?: (User | String)[];
  photoUrl?: String;
  gameStats: GameStats;
  rank: number;
}
export interface GameStats {
  portfolio: Map<string, Portfolio>;
  portfolioValueYesterday: number;
  lastRoundProfit: number;
  dailyProfit: number;
  totalProfit: number;
  roundProfit: number;
  history: [[Number, Number]];
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
    rank: 0,
    gameStats: {
      portfolio: new Map(),
      dailyProfit: 0,
      lastRoundProfit: 0,
      totalProfit: 0,
      portfolioValueYesterday: 0,
      roundProfit: 0,
      recentTransactions: [],
      history: [[0, 0]],
    },
  };
}
export function setUserHelper(user: User) {
  user.gameStats.portfolio = new Map(Object.entries(user.gameStats.portfolio));
  return user;
}
