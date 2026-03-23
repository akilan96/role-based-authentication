import User from "../models/user.model.js";
import { generateAccessToken, generateRefreshToken } from "../utils/generateTokens.js";
import messageHandler from "../utils/messageHandler.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { name, email, password, mobile, role } = req.body;
    console.log(req.body);

    const item = await User.create({
      name,
      email,
      password,
      mobile,
      role,
    });

    return messageHandler(res, 200, "user-created", item);
  } catch (error) {
    return messageHandler(res, 500, error, error.message);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isMailPresent = await User.findOne({ email });

    if (isMailPresent) {
      if (password == isMailPresent.password) {
        // Password matched then issue the jwt token
        // const token = jwt.sign(
        //   { id: isMailPresent._id, role: isMailPresent.role },
        //   process.env.SECRET,
        //   { expiresIn: "1d" },
        // );
        const role = isMailPresent.role
        const accessToken = generateAccessToken({id:isMailPresent._id,role:isMailPresent.role})
        const refreshToken = generateRefreshToken({id:isMailPresent._id,role:isMailPresent.role})

        return messageHandler(res, 200, "login-success", {accessToken,refreshToken,role});
      }
    }
    if (!isMailPresent) {
  return messageHandler(res, 400, "User not found");
}

if (password !== isMailPresent.password) {
  return messageHandler(res, 400, "Invalid password");
}
  } catch (error) {
    return messageHandler(res, 500, error, error.message);
  }
};


export const about = async(req,res) =>{
  try {
    return messageHandler(res,200,"profile page ok","About Page ==== User & Admin Can Access")
  } catch (error) {
    return messageHandler(res,500,error.message)
  }

}

export const profile = async (req,res) =>{
  try {
    return messageHandler(res,200,"Admin-Dashboard"," Profile Page  ==== Admin Only Access")
  } catch (error) {
    return messageHandler(res,500,error.message)
  }
}

export  const logout = async(req,res) =>{
  try {

    req.user = ""
    return messageHandler(res,200,"logout-sucess")
    
  } catch (error) {
    return messageHandler(res,500,error.message)
  }
}
