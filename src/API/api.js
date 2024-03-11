import axios from "axios";

export default function api() {
    const token = localStorage.getItem("token");
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
    };

    if (token) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    return axios.create({
        baseURL: "http://localhost:8001/api/",
        headers: headers
    });
}