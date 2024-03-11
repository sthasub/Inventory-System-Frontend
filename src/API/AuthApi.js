import api from "@/API/api.js";

export const signUpApi = async (data)=>{
    await api().post("/signup",data);
}

export const logoutApi = async () => {
    await api().post("/logout");
}

export const addUser = async (data) =>{
    await api().post("/users", data);

}

export const editUser = async (data, id) =>{
    await api().put(`/users/${id}`, data);

}