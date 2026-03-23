
import api from "./axios"

export const loginApi = async(data) =>{

    const response = await api.post("/login",data)
    return  response.data.data

}