import api from "@/API/api.js";

export const getUsers = async () => {
    const result = await api().get("/users");
    return result.data;
}

export const getUser = async (id) => {
    const result = await api().get(`/users/${id}`);
    return result.data;
}

export const currentUser = async () => {
    const result = await api().get("/user");
    return result.data.user;
}

export const deleteUser = async (id)=>{
    return await api().delete(`/users/${id}`);
}

