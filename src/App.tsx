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
import { Coin, CoinList, User } from "./model";
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
      id: "1",
      name: "Hanswurst",
      email: "hans@flamme",
      friends: [{ id: "2", name: "hans", email: "hansmail@blah", friends: [] }],
    };
    user.gameStats = {
      portfolio: {
        ["USD"]: {
          amount: 500,
          name: "USD",
        },
      },
      dailyProfit: 1,
      totalProfit: 2,
      roundProfit: 3,
      recentTransactions: [],
    };
    const transaction = {
      name: "Trans1",
      amount: 255,
      price: 432323,
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
          </AllUserContext.Provider>
        </UserContext.Provider>
      </CoinContext.Provider>
    </div>
  );
}

export default App;
