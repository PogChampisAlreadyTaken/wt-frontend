import * as React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageWrapper from "./components/PageWrapper";
import {
  Overview,
  Login,
  History,
  Explore,
  Exchange,
  CryptoGame,
  GameRanking,
} from "./pages";
import { Coin, CoinList } from "./model";
import { CoinContext } from "./context/coinContext";
import { getAllCoins } from "./request/coinService";

function App() {
  const [coin, setCoin] = React.useState<CoinList>({ coins: [], timestamp: 0 });

  React.useEffect(() => {
    if (coin.coins.length === 0) {
      getAllCoins().then((coins) => setCoin(coins));
    }
  }, []);

  return (
    <div className="App">
      <CoinContext.Provider value={[coin, setCoin]}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Login />
                </PageWrapper>
              }
            />
            <Route
              path="/ranking"
              element={
                <PageWrapper>
                  <GameRanking />
                </PageWrapper>
              }
            />
            <Route
              path="/game"
              element={
                <PageWrapper>
                  <CryptoGame />
                </PageWrapper>
              }
            />
            <Route
              path="/overview"
              element={
                <PageWrapper>
                  <Overview />
                </PageWrapper>
              }
            />
            <Route
              path="/history"
              element={
                <PageWrapper>
                  <History />
                </PageWrapper>
              }
            />
            <Route
              path="/explore"
              element={
                <PageWrapper>
                  <Explore />
                </PageWrapper>
              }
            />
            <Route
              path="/exchange"
              element={
                <PageWrapper>
                  <Exchange />
                </PageWrapper>
              }
            />
          </Routes>
        </BrowserRouter>
      </CoinContext.Provider>
    </div>
  );
}

export default App;
