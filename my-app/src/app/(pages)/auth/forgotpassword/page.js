"use client";
import { useState } from "react";
import './page.css';
export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    
  return (
    <div className="forgotpassword-component">
        <div className="forgotpassword-in">
            <div className="form">
                <h1>Forgot Password</h1>
                <p>Please enter your email to reset your password</p>
                <input type="email" placeholder="Email" />
                <button>Reset Password</button>
            </div>
        </div>
    </div>
  );
}