  import {  toast } from 'react-toastify';

  export const toastSuccess = (data) =>{
 
 toast.success(`🦄 ${data}`, {
position: "bottom-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "colored",
});

  }