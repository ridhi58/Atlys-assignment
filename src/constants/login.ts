import { formData } from "../models/form.model";

export const loginData:formData ={
    header:{
        text:"WELCOME BACK",
        subText:"Log into your account"
    },
    inputs:[
        {
            label:"Email or Username",
            type:"text",
            placeholder:"Enter your email or username"
        },
        {
            label:"Password",
            type:"text",
            placeholder:"Choose a strong password",
            showForgotPass:true
        },

    ],
    action: "Login now",
    footer:{
        text:"Not registered yet?",
        action:"Register ->"
    }
 }