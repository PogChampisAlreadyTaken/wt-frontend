import * as React from "react";
import { CoinList } from "../model";

type Dispatch = (coins: CoinList) => void;
type State = CoinList;

export const CoinContext = React.createContext<[State, Dispatch]>([
  { coins: [], timestamp: 0 },
  () => {},
]);
