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
import { checkData, CoinList, emptyUser, setUserHelper, User } from "./model";
import { CoinContext } from "./context/coinContext";
import { getAllCoins } from "./request/coinService";
import { UserContext } from "./context/userContext";
import { AllUserContext } from "./context/allUserContext";
import { getUser, getUsers } from "./request/userService";
import { useLocalStorage } from "./hooks/useLocalStorage";
import RecentTransactions from "./components/cards/RecentTransactions";

function App() {
  const [coins, setCoins] = React.useState<CoinList>({
    coins: [],
    timestamp: 0,
  });
  const [user, setUser] = useLocalStorage<User | null>("user", null);
  const [allUsers, setAllUsers] = useLocalStorage<User[]>("users", []);

  React.useEffect(() => {
    if (checkData(coins)) {
      getAllCoins().then((coins) => setCoins(coins));
    }
    getUsers().then(setAllUsers);
    getUsers().then(setAllUsers);
    if (user!== null) {
      getUser(user._id).then((u) => setUser(setUserHelper(u)));
    }

  }, []);

  React.useEffect(() => {}, []);

  return (
    <div className="App">
      <CoinContext.Provider value={[coins, setCoins]}>
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
