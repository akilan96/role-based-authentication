import React from "react";
import { useForm } from "react-hook-form";

import { useMutation } from "@tanstack/react-query";
import { registerApi } from "../api/registerApi";
import { toastSuccess } from "../utils/toastSuccess";

import { useNavigate } from "react-router-dom";


const Register = () => {
  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationFn: registerApi,
    onSuccess: () => {
      console.log("coming to onsuccess");
      reset();
     toastSuccess("User Registeration Success.. Please Login")
     setTimeout(()=>{
      navigate("/login")
     },1000)
      

    },
  });

  const onSubmit = (values) => {
    console.log(values);
    registerMutation.mutate(values);
  };

  return (
    <div className=" flex justify-center mt-5">
      <div className="card w-98 bg-teal-200 card-md shadow-md">
        <div className="card-body">
          <h2 className="card-title mb-3 text-center text-gray-900 text-md font-bold">
            Register Form
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Name"
              className="input mb-2"
              {...register("name")}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="input mb-2"
              {...register("email")}
              required
            />
            <input
              type="text"
              placeholder="Password"
              className="input mb-2"
              {...register("password")}
              required
            />
            <input
              type="text"
              placeholder="Mobile"
              className="input mb-2"
              {...register("mobile")}
              required
            />

            <select   className="input mb-2" required {...register("role")} defaultValue="Select">
              
              <option  value="admin">
                Admin
              </option>
              <option value="user">User</option>
            </select>

            <button
              className="btn btn-primary mt-2 w-80"
              type="submit"
              disabled={registerMutation.isPending}
            >
              {registerMutation.isPending ? "Registering..." : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
