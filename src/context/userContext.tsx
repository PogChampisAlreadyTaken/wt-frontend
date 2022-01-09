import * as React from "react";
import { User } from "../model";

type Dispatch = (user: User) => void;

export const UserContext = React.createContext<[User | undefined, Dispatch]>([
  undefined,
  () => {},
]);
