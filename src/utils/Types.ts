export type User = {
    id: number,
    name: string,
    surname: string,
    username: string,
    age: number,
    email: string,
    company: string,
    phoneNumber: string,
    city: string
}
export type UsersDTO = {
    users: User[]
    totalPages: number,
}
export type FilterBy = 'city' | null
