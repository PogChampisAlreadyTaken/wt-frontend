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
import { CoinList, emptyUser, User } from "./model";
import { CoinContext } from "./context/coinContext";
import { getAllCoins } from "./request/coinService";
import { UserContext } from "./context/userContext";
import { AllUserContext } from "./context/allUserContext";
import { getUsers } from "./request/userService";
import RecentTransactions from "./components/cards/RecentTransactions";

function App() {
  const [coin, setCoin] = React.useState<CoinList>({ coins: [], timestamp: 0 });
  const [user, setUser] = React.useState<User>();
  const [allUsers, setAllUsers] = React.useState<User[]>([]);
  const [userContext, setUserContext] = React.useContext(UserContext);

  React.useEffect(() => {
    if (coin.coins.length === 0) {
      getAllCoins().then((coins) => setCoin(coins));
    }
    getUsers().then(setAllUsers);
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
                      <RecentTransactions />
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
