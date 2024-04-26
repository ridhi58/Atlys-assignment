import { registerData } from "../../constants/register";
import { loginData } from '../../constants/login';
import { useState } from 'react';
import Login from "../../components/Login/login";
import { useNavigate } from "react-router-dom";

export default function LoginRegister(){
    const [isLogin, setIsLogin] = useState(true);
    const [formData , setFormData] = useState(loginData);
    const navigate = useNavigate();
  
  
    const switchAction = ()=>{
      setIsLogin(!isLogin);
      if(isLogin){
          setFormData(registerData)
      }
      else{
        setFormData(loginData)
      }
    }

    const goToPosts = ()=>{
     navigate("/posts")
    }

    return(
        <Login data={formData} action={switchAction} successAction={goToPosts} />    
    )
}