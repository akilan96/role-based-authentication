import api from "./axios"

export const registerApi = async(data) =>{

    const response = await api.post("/register",data)
    console.log(response)
    return  response.data.data

}