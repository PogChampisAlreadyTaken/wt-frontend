import * as React from "react";
import { User } from "../model";

type Dispatch = (user: User | null ) => void;

export const UserContext = React.createContext<[User | null, Dispatch]>([
  null,
  () => {},
]);
