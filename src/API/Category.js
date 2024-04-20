import api from "@/API/api.js";

export const getCategories = async ()=>{
    const result = await api().get("/categories");
    return result.data;
}

export const addCategory = async (data)=>{
    await api().post("/category", data);
}