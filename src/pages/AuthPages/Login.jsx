import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./auth.css";
import axios from "axios";
import { toast } from "react-toastify";

import { useAuth } from "../../contexts/auth-context";

export default function Login() {
  const initialLogindata = { email: "", password: "" };

  const testCredentials = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };

  const [loginData, setLoginData] = useState(initialLogindata);

  const { email, password } = loginData;

  const { setAuth } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const testCredentialsHandler = (e) => {
    e.preventDefault();

    setLoginData(testCredentials);
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });

      const { encodedToken, foundUser } = resp.data;

      if (resp.status === 200) {
        setAuth({
          isAuth: true,
          token: encodedToken,
          user: foundUser,
        });
      }

      localStorage.setItem("token", encodedToken);
      localStorage.setItem("user", JSON.stringify(foundUser));
      setLoginData(initialLogindata);

      toast.success("Logged in ");

      setTimeout(()=>navigate(from, {replace: true}), 2000);
    } catch (error) {
      toast.error("Invalid input");
    }
  };

  return (
    <div className="auth-container">
      <form className="login-card" onSubmit={loginHandler}>
        <h3>Login</h3>

        <input
          className="auth-input"
          type="email"
          placeholder="Enter your mail"
          value={email}
          required
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Enter your password"
          value={password}
          required
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />

        <div className="remember-forgot">
          <div className="checkbox-div">
            <input type="checkbox" id="remember-me" />

            <label htmlFor="remember-me">Remember Me</label>
          </div>

          <span>Forgot Password?</span>
        </div>
        <button className="auth-btn">Login</button>

        <button className="auth-btn" onClick={(e) => testCredentialsHandler(e)}>
          Test Credentials
        </button>

        <Link to="/register">
          <div>Don't have an accounnt? Sign up</div>
        </Link>
      </form>
    </div>
  );
}
