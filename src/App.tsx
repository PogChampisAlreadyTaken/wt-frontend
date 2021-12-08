import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageWrapper from "./components/PageWrapper";
import { Overview } from "./pages/Overview";
import { History } from "./pages/History";
import { Exchange } from "./pages/Exchange";
import { Explore } from "./pages/Explore";
import { Login } from "./pages/Login";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
