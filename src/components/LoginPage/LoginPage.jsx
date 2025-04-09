import React from "react";
import "../LoginPage/LoginPage.css";
import { FaRegUser } from "react-icons/fa";
import { IoLockClosed } from "react-icons/io5";
import { IoIosStarOutline } from "react-icons/io";
import { MdOutlineStarRate } from "react-icons/md";


const LoginPage = () => {
    return (
        <div className="title">
            
            <h1>Girl Math</h1>
            <h2>Currency Converter</h2>

            <form className="wrapper">
                <h3>Email/ Username</h3>
                <div className="input-box">
                    <FaRegUser className="icon" />
                    <input type="text" placeholder="Email/ Username" required />
                </div>
                <div className="input-box">
                    <IoLockClosed className="icon" />
                    <input type="password" placeholder="Password" required />
                </div>

                <div className="remember-forgot">
                    <label><input type="checkbox" /> Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>

                <button type="submit"> Login & Justify</button>

                <div className="register-link">
                    <p>New here? Create an <a href="#">account</a> and make math fun!</p>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
