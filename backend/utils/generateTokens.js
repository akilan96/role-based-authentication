import messageHandler from "./messageHandler.js"
import jwt from "jsonwebtoken"

export const generateAccessToken = (payload) =>{
    try {
        const token = jwt.sign(payload,process.env.SECRET,{expiresIn:"2m"})
        return token;
        
    } catch (error) {
        return messageHandler("res",500,error,error.message)
    }
}

export const generateRefreshToken = (payload) =>{
    try {
        const token = jwt.sign(payload,process.env.REFRESH,{expiresIn:"3m"})
        return token;
    } catch (error) {
         return messageHandler("res",500,error,error.message)
    }
}