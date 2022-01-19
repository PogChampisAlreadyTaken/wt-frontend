import { User as FirebaseUser } from "firebase/auth";
import { emptyUser, User } from "../model";
import { replacer } from "../utils";
import { url } from "./endpoints";
import { getAuth } from "firebase/auth";

export async function postUser(user: FirebaseUser): Promise<User> {
  const User: User = emptyUser();
  User._id = user.uid;
  User.name = user.displayName ?? "";
  User.email = user.email ?? "";
  User.photoUrl = user.photoURL ?? "";
  const token = await user?.getIdToken(true);
  const response = await fetch(url + "/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(User, replacer),
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
  const user = getAuth().currentUser;
  const token = await user?.getIdToken(true);
  const response = await fetch(url + "/users/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + token,
    },
  });
  return response.json();
}

export async function checkFirebaseUserExists(id: String) {
  const user = getAuth().currentUser;
  const token = await user?.getIdToken(false);
  const response = await fetch(url + "/users/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + token,
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
  const fUser = getAuth().currentUser;
  const token = await fUser?.getIdToken(true);
  const response = await fetch(url + "/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(user, replacer),
  });
  return response.json();
}
