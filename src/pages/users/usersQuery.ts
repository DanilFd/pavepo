import { useQuery } from "@tanstack/react-query"
import { fetchCities, fetchUsers } from "../../api/UserService"

const GET_USERS = 'USERS'
const GET_CITIES = 'CITIES'

export const useGetUsers = (userName: string, page: number, filterValue: string) => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: [GET_USERS, userName, page, filterValue],
        queryFn: () => fetchUsers(page, userName, 'city', filterValue),
    })
    return {
        users: data?.users || [],
        totalPages: data?.totalPages || 0,
        isLoadingByFecthUsers: isLoading,
        isErrorByFetchUsers: isError,
        errorMessageByFetchUsers: error
    }
}

export const useGetCities = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: [GET_CITIES],
        queryFn: fetchCities
    })

    return {
        cities: data || [],
        isLoadingByFecthCities: isLoading,
        isErrorByFecthCities: isError,
        errorByFecthCities: error
    }
}