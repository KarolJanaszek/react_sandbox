import { Button } from '@material-ui/core';

const UserDelete = pros => {
    return <Button color="secondary" variant="outlined" onClick={() => pros.clicked(pros.userId)}>Delete</Button>
}

export default UserDelete;
