import {create} from "zustand"
import {createAuthSlice} from "@/store/AuthSlice.js";
import {createUsersSlice} from "@/store/UsersSlice.js";

export const useStore = create((...a) => ({
    ...createAuthSlice(...a),
    ...createUsersSlice(...a)
}))