import { useNavigate, useParams } from "react-router-dom"
import { useGetUserDetail } from "./userDetailQuery"
import classes from "./userDetailPage.module.scss"

export const UserDetailPage = () => {
    const { userId } = useParams<{ userId: string }>()
    const navigate = useNavigate()

    const {
        userDetail,
        errorByFetchUserDetail,
        isErrorByFetchUserDetail,
        isLoadingByFetchUserDetail
    } = useGetUserDetail(+userId!)

    if (isErrorByFetchUserDetail) {
        return (<div>{errorByFetchUserDetail?.message}</div>)
    }
    if (isLoadingByFetchUserDetail) {
        return (
            <div>Loading...</div>
        )
    }
    if (!userDetail) {
        return (<div>User not found</div>)
    }

    const handleGoBackClick = () => {
        navigate('/')
    }

    return (
        <div className={classes.container}>
            <button onClick={handleGoBackClick} className={classes.backButton}>Back to the list of users</button>

            <div className={classes.userDetail}>
                <h2>{userDetail.name} {userDetail.surname}</h2>
                <div>
                    <p>Username: {userDetail.username}</p>
                    <p>Age:{userDetail.age}</p>
                    <p>Email: {userDetail.email}</p>
                    <p>Company: {userDetail.company}</p>
                    <p>Phone: {userDetail.phoneNumber}</p>
                    <p>City: {userDetail.city}</p>
                </div>
            </div>
        </div>
    )
}