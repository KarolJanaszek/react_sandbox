import './App.css';
import User from "./components/User";
import * as React from "react";

class App extends React.Component{

    state = {
        userList: [
            {id: '1', name: 'Albert', surname: 'Dziąslo'},
            {id: '2', name: 'Zenon', surname: 'Piękny'}
        ]
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Users</h1>
                    <User userList={this.state.userList} />
                </header>
            </div>
        );
    }
}

export default App;
