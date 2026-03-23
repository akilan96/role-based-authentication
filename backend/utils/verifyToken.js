import jwt from "jsonwebtoken";
import messageHandler from "./messageHandler.js";

const verifyToken =  (token) => {
  try {
    const decodeToken = jwt.verify(token, process.env.SECRET);
    return  decodeToken;
  } catch (error) {
    return messageHandler("response-error", 500, "token-error from verify token", error.message);
  }
};

export default verifyToken;