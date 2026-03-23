import api from "./axios"

export const profileApi = async() =>{
    const response = await api.get("/profile")
    return response.data.data
}