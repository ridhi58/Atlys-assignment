import { useState } from "react";
import { FormInputs, formData } from "../../models/form.model";
import "./login.css";

export default function Login(props: {
  data: formData;
  action: any;
  successAction: any;
}) {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const formFieldData = props.data;

  function switchActionClick() {
    props.action();
  }

  function submitForm() {
    if(email==="" || pass==="" || (props.data.type==="register" && user==="")){
        return;
    }
    props.successAction();
  }

  function setInputs(event: any) {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "user":
        setUser(event.target.value);
        break;
      case "pass":
        setPass(event.target.value);
        break;

      default:
        break;
    }
  }

  return (
    <section className="login">
      <div className="login__cont">
        <div className="login__header">
          <p className="login__header__p1">{formFieldData.header.text}</p>
          <p className="login__header__p2">{formFieldData.header.subText}</p>
        </div>
        <form className="login__form" onSubmit={(e) => e.preventDefault()}>
          {formFieldData.inputs.map((item: FormInputs) => {
            return (
              <div className="login__fields">
                <div className="login__fields__cont">
                  <span className="login__label">{item.label}</span>
                  {item.showForgotPass && (
                    <span className="login__label login__small-label">
                      Forgot password?
                    </span>
                  )}
                </div>
                <input
                  onChange={(e) => {
                    setInputs(e);
                  }}
                  required
                  name={item.name}
                  className="login__input"
                  placeholder={item.placeholder}
                  type="text"
                />
              </div>
            );
          })}
          <button type="submit" onClick={submitForm} className="login__action">
            {formFieldData.action}
          </button>
        </form>
        <div className="login__footer">
          <span className="login__header__p1">{formFieldData.footer.text}</span>
          <span className="login__label" onClick={switchActionClick}>
            {" "}
            {formFieldData.footer.action}
          </span>
        </div>
      </div>
    </section>
  );
}
