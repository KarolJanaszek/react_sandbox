import logo from './logo.svg';
import './App.css';
import User from "./components/User";
import UserAdd from "./components/UserAdd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Users</h1>
          <UserAdd />
          <ul>
            <User />
          </ul>
      </header>
    </div>
  );
}

export default App;
