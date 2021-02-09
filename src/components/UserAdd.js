import * as React from "react";
import User from "./User";

class UserAdd extends React.Component {
    state = {
        id: '',
        name: '',
        surname: ''
    }

    addUser() {
        const user = {
            id: Math.random(),
            name: this.state.name,
            surname: this.state.surname
        }
        const newEl = [user, this.props]
    }

    render() {
        return(
            <div>
                <p>Add new User</p>
                <input type="text" value={this.state.name} placeholder="Name..." />
                <input type="text" value={this.state.surname} placeholder="Surname..." />
                <button>Add</button>
            </div>
        )
    }
}

export default UserAdd
