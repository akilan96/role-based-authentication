import axios from "axios"
import api from "./axios"

export const refreshToken = async(data) =>{

    const res = await api.get("/refresh-token",data)
    return res.data.data

}