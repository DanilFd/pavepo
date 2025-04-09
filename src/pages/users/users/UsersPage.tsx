import { useEffect, useState } from "react"
import { useGetCities, useGetUsers } from "../usersQuery"
import { UserList } from "../userList/UserList"
import classes from "./usersPage.module.scss"
import { CustomSelect } from "../../../components/customSelect/CustomSelect"
import { CustomSearchField } from "../../../components/customSearchField/CustomSearchField"
import { CustomPagination } from "../../../components/customPagination/CustomPagination"
import { useDebouncedValue } from "../../../utils/hooks"

export const UsersPage = () => {
    const [query, setQuery] = useState('')
    const [selectedCity, setSelectedCity] = useState('')
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const debouncedQuery = useDebouncedValue(query)

    const {
        users,
        totalPages: totalPagesOfUsers,
        errorMessageByFetchUsers,
        isErrorByFetchUsers,
        isLoadingByFecthUsers
    } = useGetUsers(debouncedQuery, page, selectedCity)
    const {
        cities,
        errorByFecthCities,
        isErrorByFecthCities,
        isLoadingByFecthCities
    } = useGetCities()

    useEffect(() => {
        if (totalPagesOfUsers) {
            setTotalPages(totalPagesOfUsers)
        }
    }, [totalPagesOfUsers])
    useEffect(() => {
        setPage(1)
    }, [debouncedQuery, selectedCity])

    if (isErrorByFetchUsers || isErrorByFecthCities) {
        return (<div>{errorMessageByFetchUsers?.message || errorByFecthCities?.message}</div>)
    }

    return (
        <div className={classes.container}>
            <div className={classes.filtersGroup}>
                <CustomSearchField value={query} setValue={setQuery} placeholder="Username..." />
                <CustomSelect isLoading={isLoadingByFecthCities} onChange={setSelectedCity} value={selectedCity} options={cities} />
            </div>
            <div className={classes.listWrapper}>
                {
                    isLoadingByFecthUsers
                        ? <div>Loading...</div>
                        : <UserList users={users} />
                }
            </div>
            <CustomPagination currentPage={page} totalPages={totalPages} onChange={setPage} />
        </div>
    )
}