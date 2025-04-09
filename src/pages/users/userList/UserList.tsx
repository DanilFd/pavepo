import { User } from "../../../utils/Types"
import { UserCard } from "../userCard/UserCard"
import classes from "./userList.module.scss"

type Props = {
    users: User[]
}

export const UserList = ({ users }: Props) => {
    if (!users.length) {
        return <div>Users not found</div>
    }
    
    return (
        <div className={classes.list}>
            {users.map((user) => <UserCard key={user.id} user={user} />)}
        </div>
    )
}