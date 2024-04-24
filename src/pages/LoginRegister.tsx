import { registerData } from "../constants/register";
import { loginData } from '../constants/login';
import { useState } from 'react';
import Login from "../components/Login/login";


export default function LoginRegister(){
    const [isLogin, setIsLogin] = useState(true);
    const [formData , setFormData] = useState(loginData)
  
  
    const switchAction = ()=>{
      setIsLogin(!isLogin);
      if(isLogin){
          setFormData(registerData)
      }
      else{
        setFormData(loginData)
      }
    }
    return(
        <Login data={formData} action={switchAction} />    
    )
}