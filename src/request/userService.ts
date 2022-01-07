import { User } from "firebase/auth";
import { Coin, CoinList } from "../model";

export async function postUser(user: User) {
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
