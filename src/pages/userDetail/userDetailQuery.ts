import { useQuery } from "@tanstack/react-query"
import { fetchUserDetail } from "../../api/UserService"

const GET_USER_DETAIL = "USER_DETAIL"

export const useGetUserDetail = (userId: number) => {
    const { data, isLoading, error, isError } = useQuery({
        queryKey: [GET_USER_DETAIL, userId],
        queryFn: () => fetchUserDetail(userId)
    })
    
    return {
        userDetail: data,
        isLoadingByFetchUserDetail: isLoading,
        isErrorByFetchUserDetail: isError,
        errorByFetchUserDetail: error
    }
}