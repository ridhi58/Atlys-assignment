export interface formData{
    type:string,
    header:Header,
    inputs:FormInputs[],
    action:string,
    footer:Footer
}

interface Header{
    text:string,
    subText:string
}

export interface FormInputs{
    label:string,
    type:string,
    placeholder:string,
    showForgotPass?:boolean
    name:string
}

interface Footer{
    text:string,
    action:string
}