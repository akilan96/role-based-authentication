//context creation

import { useContext, useState } from "react";
import { createContext } from "react";
import { getToken } from "../utils/getToken";
import { getRole } from "../utils/getRole";
import { setRole } from "../utils/setRole";
import { setToken } from "../utils/setToken";
import { emptyToken } from "../utils/emptyToken";
import { emptyRole } from "../utils/emptyRole";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {


const [tokenAuth, setTokenAuth] = useState(getToken());
   const [roleAuth, setRoleAuth] = useState(getRole());



  const login = (data) => {
    console.log(data);
    
    setTokenAuth(setToken("token",data.accessToken));
    setTokenAuth(setToken("refreshToken",data.refreshToken));
    setRoleAuth(setRole(data.role));
  };

  const logout = () =>{
    emptyToken();
    emptyRole();
    setTokenAuth(null)
    setRoleAuth(null)
  }

  return (
    <AuthContext.Provider value={{token:tokenAuth,role:roleAuth,login,logoutAuth:logout}}>
         {children}
    </AuthContext.Provider>
  )

};

export const useAuth = ()=> useContext(AuthContext)
