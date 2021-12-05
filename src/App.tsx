import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import PageWrapper from "./components/PageWrapper";
import { Homepage } from "./pages/Homepage";
import LeftSideMenu from "./components/LeftsideMenu";

function App() {
  return (
    <div className="App">
      <LeftSideMenu />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Homepage />
              </PageWrapper>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
