import { formData } from "../models/form.model";

export const registerData:formData = {
    type:"register",
    header:{
        text:"SIGN UP",
        subText:"Create an account to continue"
    },
    inputs:[
        {
            label:"Email",
            type:"text",
            name:"email",
            placeholder:"Enter your email"
        },
        {
            label:"Username",
            type:"text",
            name:"user",
            placeholder:"Choose a preferred username"
        },
        {
            label:"Password",
            type:"text",
            name:"pass",
            placeholder:"Choose a strong password",
            showForgotPass:true
        },

    ],
    action: "Continue",
    footer:{
        text:"Already have an account?",
        action:"Login ->"
    }
 }