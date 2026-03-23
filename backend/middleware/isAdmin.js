import messageHandler from "../utils/messageHandler.js"

const isAdmin = (req,res,next) =>{
    try {

        const tokenUser = req.user

        if(tokenUser.role == "admin")
        {
            next()
        }
        else{
        return messageHandler(res,401,"you r not admin","This is for only admin")
        }
        
    } catch (error) {
        return messageHandler(res,500,"IsAdmin-error")
    }
}

export default isAdmin;