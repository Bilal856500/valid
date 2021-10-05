import React from "react";
import Input from "./input";
import Joi from "joi-browser";
import Form from "./form";
import "./login.css";

class Login extends Form {
  state = {
    data: {
      email: "",
      password: "",
    },

    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string()
      //   .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/)
      .required()
      .label("Password"),
  };

  doSubmit = () => {
    console.log("submittred");
  };

  render() {
    return (
      <div className="container">
        <div className="main">
          <h1>Login</h1>
          <div>
            <form onSubmit={this.handleSubmit}>
              <Input
                name="email"
                className="input"
                value={this.state.data.email}
                label="Email"
                onChange={this.handleChange}
                error={this.state.errors.email}
                type="email"
              />
              <Input
                name="password"
                className="input"
                value={this.state.data.password}
                label="Password"
                error={this.state.errors.password}
                onChange={this.handleChange}
                type="password"
              />
              <div className="form-check">
                <label htmlFor="check">Remember me</label>
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="check"
                />
              </div>

              <div className="Btn">
                {" "}
                <button id="btn">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
