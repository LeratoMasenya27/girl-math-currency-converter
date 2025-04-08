import React from "react";
import "../LoginPage/LoginPage.css";

const LoginPage = () => {
    return (
        <div className="wrapper">
            <form action="">
                <h1>Girl Math</h1>
                <h2>Currency Converter</h2>
                <h3>Email/ Username</h3>
                <div className="input-box">
                    <input type="text" placeholder="Email/ Username" required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" />Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit">Login & Justify</button>

                <div className="register-link">
                    <p>New here? Create an <a href="#">account</a> and make math fun!</p>
                </div>
            </form>

        </div>
    );
};

export default LoginPage;