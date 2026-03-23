import api from "./axios"

export const aboutApi = async() =>{

    const response = await api.get("/about")
    return response.data.data
}