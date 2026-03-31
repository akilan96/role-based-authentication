import { useMutation } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import { loginApi } from "../api/loginApi";
import { useForm } from "react-hook-form";
import { toastSuccess } from "../utils/toastSuccess";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useAuthStore } from "../store/useAuthStore";

const Login = () => {

  const {register,handleSubmit,reset} = useForm();

  const navigate = useNavigate();

  // const {login} = useAuth();

  const login = useAuthStore((state)=>state.login)

  const loginMutation = useMutation({
    mutationFn:loginApi,
    onSuccess: (data)=>{
      //  setToken(data.accessToken)
      //  localStorage.setItem("refreshToken",data.refreshToken)
      //  setRole(data.role)
      login(data)
       toastSuccess(`${data.role} :: Login Success ` )
       reset()
      
       setTimeout(()=>{
        navigate("/")
       },1000)
    }
  })

  const onSubmit = (values) =>{
    console.log(values)
    loginMutation.mutate(values)
  }

  return (
    <div className=" flex justify-center mt-5">
      <div className="card w-98 bg-teal-200 card-md shadow-md">
        <div className="card-body">
          <h2 className="card-title mb-3 text-center text-gray-900 text-md font-bold">
            Login Form After CI/CD
          </h2>
           <form onSubmit={handleSubmit(onSubmit)}>
          <input type="email" placeholder="Email" className="input  mb-2" {...register("email")} required />
          <input type="text" placeholder="Password" className="input " {...register("password")}  required/>

          <button className="btn btn-primary w-80 mt-2" type="submit">Login</button>
          </form>
          <p className="mt-1 text-right  text-sm text-gray-600 hover:text-primary"><Link to="/register">For Registeration ➜</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
