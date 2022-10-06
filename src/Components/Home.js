// Importing the necessary modules 
import React, { Component } from "react"; 
import "../Css/Home.css"; 
import { NavLink, Link } from "react-router-dom";
import loginImage from "../Images/signin-logo.jpg"; 
import logo from "../Images/logo.png"; 
import logoOne from "../Images/logo-one.png"; 
import { useNavigate } from "react-router-dom"; 



// Creating a UI component for the react home page 
const Home = () => {
    // Navigating to the dashboard section 
    const navigate = useNavigate(); 

    // Creating a function for navigating to the dashboard section 
    let onClick = () => {
        navigate("/dashboard")
    }

    // Render the home page 
        return (
            <React.Fragment> 
                <div className="container"> 
                    <section className="image-section"> 
                        <div className="logo-div"> 
                            <img src={logo} class="logo" alt="logo" /> 
                            <img src={logoOne} class="logoOne" /> 
                        </div>
                        <div className="signin-logo"> 
                            <img src={loginImage} class="image-icon" alt="login-image" />
                        </div>
                    </section>
                    <section className="login-section"> 
                        <form className="login-form"> 
                            <h3 className="welcome"> Welcome!</h3> <br />
                            <p className="para"> Enter details to login. </p> <br /> 

                            <input type="email" placeholder="Email" className="email-value" /> <br /> 
                            <input type="password" placeholder="Password" className="password-value" /> <br /> 

                            <p className="forgot-password"> Forgot Password </p> <br /> 

                            <button onClick={onClick}className="login-btn"> LOG IN </button>
                        </form>
                    </section>               
                </div>
            </React.Fragment>
        )
}

// Exporting the home class 
export default Home; 