import { User as FirebaseUser } from "firebase/auth";
import { Coin, CoinList, User } from "../model";

//const url = "https://wt-backend-liimootbm.cloud.okteto.net";
const url = "http://localhost:8080"

export async function postUser(user: FirebaseUser): Promise<User> {
  const response = await fetch(url + "/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      _id: user.uid,
      name: user.displayName,
      email: user.email,
      photourl: user.photoURL,
    }),
  });
  return response.json();
}

export async function getUsers(): Promise<User[]> {
  
  const response = await fetch(url + "/users/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response.json();
}


export async function getUser(id: String): Promise<User> {
  
  const response = await fetch(url + "/users/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  return response.json();
}

export async function checkFirebaseUserExists(id: String) {
  
  const response = await fetch(url + "/users/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  }).then((response) => {
    if (response.status == 200) {
      return true;
    }  return false;
  });
  return response;
}


export async function updateUser(user: User): Promise<User> {
  const response = await fetch(url + "/users/" + user._id, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      photourl: user.photourl,
      friends: user.friends,
      gamestats: user.gameStats,
    }),
  });
  return response.json();
}

