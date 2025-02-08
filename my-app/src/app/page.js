"use client";
import { useState } from "react";
import Image from "next/image";
import Auth from "./assets/Auth.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Home() {
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="auth-component">
      <div className="auth-component-in">
        <div className="auth-component-in-one">
          <Image src={Auth} alt="Auth Illustration" width={500} height={500} />
        </div>
        <div className="auth-component-in-two">
          <div className="auth-component-in-two-heading">
            <h1>KLEF'S Emergency WarRoom</h1>
            <p>{isSignup ? "Create an account to continue" : "Please Login to continue"}</p>
          </div>
          <form className="auth-form">
            {isSignup && (
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="Enter your name" required />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-container">
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="password" 
                  placeholder="Enter your password" 
                  required 
                />
                <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            {isSignup && (
              <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <div className="password-input-container">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    id="confirm-password" 
                    placeholder="Re-enter password" 
                    required 
                  />
                  <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            )}
            <div className="form-group-button">
              <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
            </div>
            {!isSignup && (
              <div className="form-group-forgotpassword">
                <a href="/forgot-password">Forgot Password?</a>
              </div>
            )}
          </form>
          <div className="toggle-auth">
            <p>
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <span onClick={() => setIsSignup(!isSignup)}>
                {isSignup ? "Login" : "Sign Up"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
