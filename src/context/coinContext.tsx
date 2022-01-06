import * as React from "react";
import { Coin } from "../model";

type Dispatch = (coins: Coin[]) => void;
type State = Coin[];

export const CoinContext = React.createContext<[State, Dispatch]>([
  [],
  () => {},
]);
