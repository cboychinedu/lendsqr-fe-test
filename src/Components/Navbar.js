// Importing the necessary modules 
import React from "react"; 
import "../Css/Navbar.css"; 
import logo from "../Images/logo.png"; 
import search from "../Images/search.png"; 
import logoOne from "../Images/logo-one.png"; 
import alarm from "../Images/alarm.png"; 
import profileImage from "../Images/profile_image.png"; 
import dropDownArrow from "../Images/down_arrow.png"; 
import {
    NavLink, 
    useNavigate
} from "react-router-dom"; 

// Creating a UI component for the Navbar 
const Navbar = (props) => {
    // Creating the navigator object 
    const navigate = useNavigate(); 

    // Rendering 
    return (
        <React.Fragment> 
            <div className="nav-div"> 
                <div className="navigator-logo-div" onClick={() => navigate("/")}>
                    <img src={logo} class="logo" alt="logo" /> 
                    <img src={logoOne} class="logoOne" /> 
                </div> 
                <section className="nav-main-section">
                    <div className="search-div"> 
                        <input type="text" placeholder="Search for anything" className="search-input" /> 
                        <button className="search-btn"> 
                            <img src={search} /> 
                        </button>
                    </div>
                    <div className="profile-div"> 
                    <NavLink to="/dashboard"> Dashboard </NavLink> 
                        <NavLink to="#"> Docs </NavLink> 
                        <NavLink to="#"> 
                            <img src={alarm} /> 
                        </NavLink>
                        <NavLink to="#"> 
                            <div className="profile-image-div"> 
                                <img className="profile-image" src={profileImage} /> 
                                <p className="profile-name"> Adedeji</p>
                                <img src={dropDownArrow} /> 
                            </div>
                        </NavLink>
                    </div> 
                </section>
               
            </div>

        </React.Fragment>
    )
}

// Exporting the navbar 
export default Navbar; 