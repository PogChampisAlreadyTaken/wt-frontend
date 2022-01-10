import { Transaction, User } from "../model";
import { Player } from "../model/player";

export async function getAllPlayers() {
  /*const url = "https://wt-backend-liimootbm.cloud.okteto.net/players/list";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return await response.json();*/
  return rows;
}

export async function postTransaction(
  transaction: Transaction,
  id: String
): Promise<User | null> {
  const activity = transaction.activity;
  const url = "https://wt-backend-liimootbm.cloud.okteto.net/game/" + activity;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      userId: id,
      coinId: transaction.name,
      amount: transaction.amount,
    }),
  });
  return response.json();
}

const rows: Player[] = [
  {
    name: "John Smith",
    gameStats: {
      portfolio: [],
      dailyProfit: 34510,
      totalProfit: 34510,
      roundProfit: 34510,
      recentTransactions: [],
    },
  },
  {
    name: "John ssSmith",
    gameStats: {
      portfolio: [],
      dailyProfit: 11230,
      totalProfit: 11230,
      roundProfit: 11230,
      recentTransactions: [],
    },
  },
  {
    name: "John sssSmith",
    gameStats: {
      portfolio: [],
      dailyProfit: 11230,
      totalProfit: 11230,
      roundProfit: 11230,
      recentTransactions: [],
    },
  },
  {
    name: "John ssssSmith",
    gameStats: {
      portfolio: [],
      dailyProfit: 1110,
      totalProfit: 1110,
      roundProfit: 1110,
      recentTransactions: [],
    },
  },
];
