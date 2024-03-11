export const createAuthSlice = (set, get) => ({
    user: null,
    isLoggedIn: false,

    setUser: (userProfile) => {
        set({user: userProfile})
    },

    setIsLoggedIn: (status) => {
        set({isLoggedIn: status})
    }
})