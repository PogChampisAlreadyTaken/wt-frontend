import { User as FirebaseUser} from "firebase/auth";
import { Coin, CoinList, User } from "../model";



export async function postUser(user: FirebaseUser): Promise<User> {
  const url = "http://localhost:8080/users/";
  console.log("hallo");
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({id: user.uid, name: user.displayName, email: user.email, photourl: user.photoURL })
  })
  return response.json();
}

export async function getUsers(): Promise<User[]> {
  const url = "https://wt-backend-liimootbm.cloud.okteto.net";

  const response = await fetch(url + "/users/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response.json();
}
