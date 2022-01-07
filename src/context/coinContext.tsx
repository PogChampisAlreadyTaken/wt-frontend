import * as React from "react";
import { Coin, CoinList } from "../model";

type Dispatch = (coins: CoinList) => void;
type State = CoinList;

export const CoinContext = React.createContext<[State, Dispatch]>([
  { coins: [], timestamp: 0 },
  () => {},
]);
