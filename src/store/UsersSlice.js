export const createUsersSlice = (set, get) => ({
    users: [],

    setUsers: (usersList) => {
        set({users: usersList})
    }
})