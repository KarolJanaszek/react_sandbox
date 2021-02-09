

const UserDelete = pros => {
    return <button onClick={() => pros.clicked(pros.user.id)}>Delete</button>
}

export default UserDelete;
