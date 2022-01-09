import { User as FirebaseUser } from "firebase/auth";
import { emptyUser, User } from "../model";

//const url = "https://wt-backend-liimootbm.cloud.okteto.net";
const url = "http://localhost:8080";

export async function postUser(user: FirebaseUser): Promise<User> {
  const User: User = emptyUser();
  User._id = user.uid;
  User.name = user.displayName ?? "";
  User.email = user.email ?? "";
  User.photoUrl = user.photoURL ?? "";
  const response = await fetch(url + "/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(User),
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
    if (response.status === 200) {
      return true;
    }
    return false;
  });
  return response;
}

export async function updateUser(user: User): Promise<User> {
  const response = await fetch(url + "/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(user),
  });
  return response.json();
}
