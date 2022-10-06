// Importing the necessary modules 
import React, { Component } from 'react'; 
import "../Css/Modal.css"; 


// Creating the UI 
const modal = (props) => {
    // Creating a function for getting the elements 
    let handleSubmit = (event) => {
        let organization = document.getElementById("organization").value;
        let username = document.getElementById("username").value; 
        let email = document.getElementById("email").value;
        let date = document.getElementById("date").value; 
        let phoneNumber = document.getElementById("phoneNumber").value; 

        // Sending the values into filterData 
        props.filterData({organization, username, email, date, phoneNumber}); 

    }
    // Creating a function for removing the modal 
    return (
        <React.Fragment> 
            <div className="modalContainer"> 
                <div onClick={props.RemoveModal}className="close"> 
                    X
                </div>
                <div className="modalForm"> 
                    <label> Organization </label><br /> 
                    <input type="text" className="organization" id="organization" placeholder="Organization" /> <br /> 

                    <label> Username </label> <br /> 
                    <input type="text" className="username" id="username" placeholder="Username"/> <br /> 

                    <label> Email </label> <br /> 
                    <input type="email" className="email" id="email" placeholder='Email'/> <br /> 

                    <label> Date </label> <br /> 
                    <input type="date" className="date" id="date" placeholder="Date" /> <br /> 

                    <label> Phone Number </label> <br /> 
                    <input type="number" className="phoneNumber" id="phoneNumber" placeholder='Phone Number' /> <br /> 

                    <label> Status </label> <br /> 
                    <input type="text" className="status" placeholder='Select' /> <br /> 

                    <div className="buttonsDiv"> 
                        <button className="resetBtn"> Reset </button>
                        <button className="filterBtn" onClick={handleSubmit}> Filter </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
       
    )
}

// 
export default modal; 