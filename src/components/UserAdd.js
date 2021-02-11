import * as React from "react";
import PropTypes from "prop-types";
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';

class UserAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            surname: '',
        }
    }

    static propTypes = {
        onSubmit: PropTypes.func
    }

    addUser = () => {
        const nextId = (Number(this.props.lastId) + 1).toString()
        this.props.onSubmit(nextId, this.state.name, this.state.surname);
        this.setState({
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
                <Input type="text" label="Standard" value={this.state.name} placeholder="Name..."
                       onChange={(event)=>this.inputNameHandler(event)} style={{color: "white"}} />
                <Input type="text" label="Standard" value={this.state.surname} placeholder="Surname..."
                       onChange={(event)=>this.inputSurnameHandler(event)} style={{color: "white"}} />
                <Button color="primary" variant="outlined" onClick={this.addUser}>Add</Button>
            </div>
        )
    }
}

export default UserAdd
