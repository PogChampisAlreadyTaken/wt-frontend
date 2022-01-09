import * as React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageWrapper from "./components/PageWrapper";
import {
  Overview,
  Login,
  History,
  Explore,
  CryptoGame,
  GameRanking,
} from "./pages";
import { CoinList, User } from "./model";
import { CoinContext } from "./context/coinContext";
import { getAllCoins } from "./request/coinService";
import { UserContext } from "./context/userContext";
import { AllUserContext } from "./context/allUserContext";
import { getUsers } from "./request/userService";

function App() {
  const [coin, setCoin] = React.useState<CoinList>({ coins: [], timestamp: 0 });
  const [user, setUser] = React.useState<User>();
  const [allUsers, setAllUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    if (coin.coins.length === 0) {
      getAllCoins().then((coins) => setCoin(coins));
    }
    getUsers().then(setAllUsers);
    const user: User = {
      _id: "1",
      name: "Hanswurst",
      email: "hans@flamme",
      gameStats: {
        portfolio: new Map(),
        portfolioValueYesterday: 0,
        lastRoundProfit: 0,
        dailyProfit: 1,
        totalProfit: 2,
        roundProfit: 3,
        recentTransactions: [],
      },
    };
    user.gameStats.portfolio.set("USD", {
      amount: 500000,
      name: "USD",
    });
    user.gameStats.portfolio.set("Bitcoin", {
      amount: 3,
      name: "Bitcoin",
    });
    user.gameStats.portfolio.set("Ethereum", {
      amount: 7,
      name: "Ethereum",
    });
    const transaction = {
      name: "Bitcoin",
      amount: 255,
      price: 432323,
      activity: "Buy",
      date: Date.now(),
    };
    user.gameStats?.recentTransactions.push(transaction);
    setUser(user);
  }, []);

  return (
    <div className="App">
      <CoinContext.Provider value={[coin, setCoin]}>
        <UserContext.Provider value={[user, setUser]}>
          <AllUserContext.Provider value={[allUsers, setAllUsers]}>
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
              </Routes>
            </BrowserRouter>
          </AllUserContext.Provider>
        </UserContext.Provider>
      </CoinContext.Provider>
    </div>
  );
}

export default App;
