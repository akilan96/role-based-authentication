import messageHandler from "../utils/messageHandler.js"
import verifyToken from "../utils/verifyToken.js"

export const authMiddleware = (req,res,next) =>{
    try {

         console.log("coming to authMiddleware",req.headers);
         
        const token = req.headers.authorization.split(" ")[1]
        

        if(!token)
        {
            return messageHandler(res,401,"no token found")
        }
        if(token)
        {
            const decodeToken = verifyToken(token)

            if(!decodeToken)
            {
                return messageHandler(res,401,"invalid token")
            }

            req.user = decodeToken
            console.log("Decoded token", decodeToken)
            next ();
        }
        
    } catch (error) {
        return messageHandler(res,401,"token-error",error)
    }
}