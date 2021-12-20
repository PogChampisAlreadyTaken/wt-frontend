import Coin from "../model/coin";

export async function getAllCoins(): Promise<Coin[]> {
  const url = "https://wt-backend-liimootbm.cloud.okteto.net/coins/list";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return await response.json();
}
