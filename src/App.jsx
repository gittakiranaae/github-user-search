import "./index.css";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

function App() {
  return (
    <div className="app-container">
      <div className="app">
        <Header />
        <SearchBar />
        <Profile />
      </div>
    </div>
  );
}

export default App;
