import React, { useState } from "react";
import "./auth.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useAuth } from "../../contexts/auth-context";
import { toast } from "react-toastify";

export default function SignUp() {
  const { setAuth } = useAuth();

  const initialSignUpData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [signUpData, setSignUpData] = useState(initialSignUpData);

  const { firstName, lastName, email, password } = signUpData;

  const navigate = useNavigate();

  const signUpHandler = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post("/api/auth/signup", {
        email,
        password,
        firstName,
        lastName,
      });

      const { encodedToken, createdUser } = resp.data;

      setAuth(() => ({
        isAuth: true,
        token: encodedToken,
        user: createdUser,
      }));

      localStorage.setItem("token", encodedToken);
      localStorage.setItem("user", JSON.stringify(createdUser));

      setSignUpData(initialSignUpData);

      toast.success("Sign up successfull");

      setTimeout(()=>navigate("/", {replace: true}), 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="auth-container">
        <form className="login-card signup-card" onSubmit={signUpHandler}>
          <h3>Sign up</h3>

          <div className="auth-input-container">
            <label htmlFor="first-name">First Name :</label>
            <input
              className="auth-input auth-input-signup"
              id="first-name"
              type="text"
              value={firstName}
              required
              onChange={(e) =>
                setSignUpData({ ...signUpData, firstName: e.target.value })
              }
              placeholder="first name"
            />
          </div>

          <div className="auth-input-container">
            <label htmlFor="first-name">Last Name :</label>
            <input
              className="auth-input auth-input-signup"
              id="last-name"
              type="text"
              value={lastName}
              required
              onChange={(e) =>
                setSignUpData({ ...signUpData, lastName: e.target.value })
              }
              placeholder="last name"
            />
          </div>

          <div className="auth-input-container">
            <label htmlFor="first-name">E-mail :</label>
            <input
              className="auth-input auth-input-signup"
              id="email"
              type="email"
              value={email}
              required
              onChange={(e) =>
                setSignUpData({ ...signUpData, email: e.target.value })
              }
              placeholder="email"
            />
          </div>

          <div className="auth-input-container">
            <label htmlFor="first-name">Password :</label>
            <input
              className="auth-input auth-input-signup"
              id="password"
              type="password"
              value={password}
              required
              onChange={(e) =>
                setSignUpData({ ...signUpData, password: e.target.value })
              }
              placeholder="first name"
            />
          </div>

          <button className="auth-btn">Sign up</button>
        </form>
      </div>
    </>
  );
}
