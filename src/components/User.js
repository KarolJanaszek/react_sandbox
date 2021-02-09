import {Component} from "react";
import * as React from "react";
import UserDelete from "./UserDelete";

class User extends React.Component {

    state = {
        userList: [
            {id: '1', name: 'Albert', surname: 'Dziąslo'},
            {id: '2', name: 'Zenon', surname: 'Piękny'}
        ]
    }

    deleteUser(id) {
        const idx = this.state.userList.findIndex(i => i.id == id)
        // const updatedUserList = this.state.userList.splice(idx, 1)
        // this.setState({userList: updatedUserList})
        console.log(id)
    }



    render() {
        const users = this.state.userList.map(u => {
            return (
                <li key={u.id}>
                    {u.name} {u.surname} <UserDelete user={u} clicked={() => this.deleteUser()} />
                </li>
            )
        })
        return (
            <div>
                {users}
            </div>
        );
    }
}

export default User;
