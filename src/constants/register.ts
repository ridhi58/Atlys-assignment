export const registerData = {
    header:{
        text:"SIGN UP",
        subText:"Create an account to continue"
    },
    inputs:[
        {
            label:"Email",
            type:"text",
            placeholder:"Enter your email"
        },
        {
            label:"Username",
            type:"text",
            placeholder:"Choose a preferred username"
        },
        {
            label:"Password",
            type:"text",
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