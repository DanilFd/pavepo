import { FilterBy, User, UsersDTO } from "../utils/Types"
import users from "./users.json"

export const fetchUsers = async (
    page = 1,
    userName = '',
    filterBy: FilterBy,
    filterValue?: string
): Promise<UsersDTO> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                let filteredUsers = users as User[]

                //Поиск по username
                if (userName.trim() !== '') {
                    const lowerUserName = userName.toLowerCase()
                    filteredUsers = filteredUsers.filter((user) => user.username.toLowerCase().includes(lowerUserName))
                }

                //Фильтрация по age
                if (filterBy && filterValue) {
                    filteredUsers = filteredUsers.filter(user => user[filterBy] === filterValue)
                }

                //Пагинация
                const pageSize = 18
                const totalPages = Math.ceil(filteredUsers.length / pageSize)
                const actualPage = Math.min(page, totalPages || 1)
                const start = (actualPage - 1) * pageSize
                const paginatedUsers = filteredUsers.slice(start, start + pageSize)

                resolve({
                    users: paginatedUsers,
                    totalPages,
                })
            } catch (err) {
                reject(err)
            }
        }, 0)
    })
}

export const fetchCities = async (): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const cities = [...new Set(users.map(user => user.city))]

                resolve(cities)
            } catch (err) {
                reject(err)
            }
        }, 0)
    })
}

export const fetchUserDetail = async (userId: number): Promise<User | undefined> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const user = users.find(user => user.id === userId)

                resolve(user)
            } catch (err) {
                reject(err)
            }
        }, 0)
    })
}
