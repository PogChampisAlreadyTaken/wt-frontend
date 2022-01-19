import { getAuth } from "firebase/auth";
import { Transaction, User } from "../model";
import { url } from "./endpoints";

export async function postTransaction(
  transaction: Transaction,
  id: String
): Promise<User | null> {
  const user = getAuth().currentUser;
  const token = await user?.getIdToken(true);
  const activity = transaction.activity;
  const response = await fetch(url + "/game/" + activity, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({
      userId: id,
      coinId: transaction.name,
      amount: transaction.amount,
    }),
  });
  return response.json();
}
