
//store creation

import {create} from "zustand"
import { getToken } from "../utils/getToken"
import { getRole } from "../utils/getRole"
import { setToken } from "../utils/setToken"
import { emptyToken } from "../utils/emptyToken"
import { emptyRole } from "../utils/emptyRole"
import { setRole } from "../utils/setRole"

export const useAuthStore = create((set) =>({

    token: getToken(),
    role: getRole(),

    login: (data)=>{

        //local storage update

        setToken("token",data.accessToken)
          setToken("refreshToken",data.refreshToken)
            setRole("role",data.role)

            //zustand state update

            set({
                token:data.accessToken,
                role:data.role
            })

    },

    logout: ()=> {

         //local storage remove
        emptyToken()
        emptyRole()

        //zustand state  update

        set({
            token:null,
            role:null
        })

    }



}))