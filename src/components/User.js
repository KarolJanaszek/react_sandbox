import React from 'react';
import UserDelete from "./UserDelete";
import UserAdd from "./UserAdd";
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: this.props.userList
        }
    }

    deleteUser(id) {
        console.log("id: " + id)
        const idx = this.state.userList.findIndex(i => i.id === id)
        console.log("idx: " + idx)
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

        const StyledTableCell = withStyles((theme) => ({
            head: {
                backgroundColor: theme.palette.common.black,
                color: theme.palette.common.white,
            },
            body: {
                fontSize: 14,
            },
        }))(TableCell);

        const StyledTableRow = withStyles((theme) => ({
            root: {
                '&:nth-of-type(odd)': {
                    backgroundColor: theme.palette.action.hover,
                },
            },
        }))(TableRow);

        let lastId = 0;
        if (this.state.userList !== 'undefined' && this.state.userList.length > 0){
            lastId=this.state.userList[0].id
        }

        const rows = this.state.userList

        return (
            <div>
                <div>
                    <UserAdd lastId={lastId} onSubmit={this.addUser}/>
                </div>
                <div>
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>ID</StyledTableCell>
                                    <StyledTableCell>Name</StyledTableCell>
                                    <StyledTableCell>Surname</StyledTableCell>
                                    <StyledTableCell align="center">Options</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <StyledTableRow key={row.id}>
                                        <StyledTableCell>{row.id}</StyledTableCell>
                                        <StyledTableCell>{row.name}</StyledTableCell>
                                        <StyledTableCell>{row.surname}</StyledTableCell>
                                        <StyledTableCell>
                                            <UserDelete userId={row.id} clicked={() => this.deleteUser(row.id)} />
                                        </StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        );
    }
}

export default User;
