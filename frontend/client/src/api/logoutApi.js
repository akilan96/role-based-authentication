

export const logoutApi =  () =>{
   
    localStorage.removeItem("token") ;
    localStorage.removeItem("refreshToken") ;
    localStorage.removeItem("role");
}