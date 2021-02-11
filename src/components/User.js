import * as React from "react";
import UserDelete from "./UserDelete";
import UserAdd from "./UserAdd";

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: this.props.userList
        }
    }

    deleteUser(id) {
        const idx = this.state.userList.findIndex(i => i.id == id)
        if(idx !== -1) {
            const updatedUserList =  [...this.state.userList]
            updatedUserList.splice(idx, 1)
            this.setState({userList: updatedUserList})
        }
    }

    addUser = (id, name, surname) => {
        const user = {id, name, surname}
        this.setState((state) => ({
            userList: [user, ...state.userList]
        }))
    }

    render() {
        let lastId = 0;
        if (this.state.userList !== 'undefined' && this.state.userList.length > 0){
            lastId=this.state.userList[this.state.userList.length-1].id
        }
        const users = this.state.userList.map(u => {
            return (
                <li key={u.id}>
                    {u.name} {u.surname} ({u.id}) <UserDelete user={u} clicked={() => this.deleteUser(u.id)} />
                </li>
            )
        })
        return (
            <div>
                <div>
                    <UserAdd lastId={lastId} onSubmit={this.addUser}/>
                </div>
                <div>
                    <ul>
                     {users}
                    </ul>
                </div>
            </div>
        );
    }
}

export default User;
