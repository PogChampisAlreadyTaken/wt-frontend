import { User as FirebaseUser} from "firebase/auth";
import { Coin, CoinList, User } from "../model";



export async function postUser(user: FirebaseUser) {
  const url = "http://localhost:8080/users/";
  console.log("hallo");
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({id: user.uid, name: user.displayName, email: user.email })
  }).then(response => response.json())
  .then(data=> {
      console.log('Success:', data);
  }).catch((error)=>{
      console.error('Error:', error)
  });
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
