import { generateAccessToken } from "./generateTokens.js";
import messageHandler from "./messageHandler.js";
import jwt from "jsonwebtoken";

export const refreshToken = (req, res) => {
  try {
    const { refreshToken:token } = req.body;
    if (!token) {
      return messageHandler(res, 404, "no refresh token found");
    }
    if (token) {
      const decode = jwt.verify(token, process.env.REFRESH);

      //generate new access token

      const newAccessToken = generateAccessToken({
        id: decode.id,
        role: decode.role,
      });
      return messageHandler(res,200,"newAccess-token issued",{accessToken:newAccessToken})
    }
  } catch (error) {
    return messageHandler(res, 500, error, error.message);
  }
};
