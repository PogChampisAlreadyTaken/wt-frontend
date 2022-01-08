import * as React from "react";
import { User } from "../model";

type Dispatch = (users: User[]) => void;
type State = User[] | undefined;

export const AllUserContext = React.createContext<[State, Dispatch]>([
  undefined,
  () => {},
]);
