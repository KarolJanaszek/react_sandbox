import * as React from "react";
import PropTypes from "prop-types";

class UserAdd extends React.Component {
    state = {
        id: '',
        name: '',
        surname: '',
    }

    static propTypes = {
        onSubmit: PropTypes.func
    }

    addUser = () => {
        const nextId = (Number(this.props.lastId) + 1).toString()
        this.props.onSubmit(nextId, this.state.name, this.state.surname);
        this.setState({
            id:  '',
            name: '',
            surname: ''});
    }

    inputNameHandler = (event) => {
        const updatedName = event.target.value;
        this.setState({name: updatedName})
    }

    inputSurnameHandler = (event) => {
        const updatedSurname = event.target.value;
        this.setState({surname: updatedSurname})
    }

    render() {
        return(
            <div>
                <p>Add new User</p>
                <input type="text" value={this.state.name} placeholder="Name..." onChange={(event)=>this.inputNameHandler(event)} />
                <input type="text" value={this.state.surname} placeholder="Surname..." onChange={(event)=>this.inputSurnameHandler(event)} />
                <button onClick={this.addUser}>Add</button>
            </div>
        )
    }
}

export default UserAdd
