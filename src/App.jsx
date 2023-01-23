import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <Profile />
    </div>
  );
}

export default App;
