import { formData } from "../models/form.model";

export const loginData:formData ={
    type:"login",
    header:{
        text:"WELCOME BACK",
        subText:"Log into your account"
    },
    inputs:[
        {
            label:"Email or Username",
            type:"text",
            name:"email",
            placeholder:"Enter your email or username"
        },
        {
            label:"Password",
            type:"text",
            placeholder:"Choose a strong password",
            name:"pass",
            showForgotPass:true
        },

    ],
    action: "Login now",
    footer:{
        text:"Not registered yet?",
        action:"Register ->"
    }
 }