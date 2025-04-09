import { useNavigate } from "react-router-dom"
import { User } from "../../../utils/Types"
import classes from "./userCard.module.scss"

type Props = {
    user: User
}

export const UserCard = ({ user }: Props) => {
    const navigate = useNavigate()

    const handleGoUserDetailClick = () => {
        navigate(`/${user.id}`)
    }

    return (
        <div onClick={handleGoUserDetailClick} className={classes.card}>
            <p>Name: {user.name}</p>
            <p>Surname: {user.surname}</p>
            <p>Username: {user.username}</p>
            <p>Age: {user.age}</p>
        </div>
    )
}