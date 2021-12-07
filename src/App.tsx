import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import PageWrapper from "./components/PageWrapper";
import { Overview } from "./pages/Overview";
import { History } from "./pages/History";
import { Exchange } from "./pages/Exchange";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
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
                <History />
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
