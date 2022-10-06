/* eslint-disable jsx-a11y/alt-text */
// Importing the necessary modules 
// Importing the necessary modules 
import React, { Component } from "react"; 
import { NavLink } from "react-router-dom";
import brifcase from "../Images/briefcase.png"; 
import home from "../Images/home.png"; 
import userFriends from "../Images/user-friends.png"; 
import guarantors from "../Images/guarantors.png"; 
import loansImage from "../Images/loans.png"; 
import decision from "../Images/decision.png"; 
import whitelist from "../Images/whitelist.png"; 
import loanProducts from "../Images/loan-products.png"; 
import karma from "../Images/karma.png"; 
import savings from "../Images/savings.png"; 
import reports from "../Images/reports.png"; 
import savingProducts from "../Images/saving-products.png"; 
import feesandcharges from "../Images/fees-and-charges.png"; 
import transactions from "../Images/transactions.png"; 
import services from "../Images/services.png"; 
import serviceAccount from "../Images/service-account.png"; 
import settlements from "../Images/settlements.png"; 
import preferences from "../Images/preferences.png"; 
import feesandpricing from "../Images/fees-and-pricing.png"; 
import auditlogs from "../Images/audit-logs.png"; 
import loanRequest from "../Images/loan_request.png"; 
import user from "../Images/user.png"; 
import users from "../Images/users.png"; 
import activeUsers from "../Images/active-users.png"; 
import usersWithLoans from "../Images/users-with-loans.png"; 
import userWithSavings from "../Images/users-with-savings.png"; 
import Navbar from "./Navbar";
import DashboardData from "./DashboardData";
import axios from 'axios'; 
import "../Css/Users.css"; 
import { useSearchParams, useParams } from 'react-router-dom';



// Creating the ui component 
const Users = (props) => {
    // Getting the user's id 
    const [searchparams] = useSearchParams(); 
    const userId = searchparams.get("id"); 
    let data = searchparams.get("data"); 

    // Converting back into json 
    data = JSON.parse(data); 


    // Render the home page 
    return (
        <React.Fragment> 
            {/* Adding the navbar */}
            <Navbar /> 
            
            {/* Adding the main div */}
            <div className="dashboard-main-div">
                    <div className="dashboard-menu"> 
                        
                        <ul> 
                            <div> 
                                <li className="switch-organization link"> 
                                    <img src={brifcase} className="imageClass"/> 
                                    <NavLink to=""> Switch Organization </NavLink>
                                </li>
                            </div>
                            

                            <div className="dashboard-icon">
                                <li>
                                    <img src={home} className="imageClass"/> 
                                    <NavLink to="" className=""> Dashboard </NavLink>

                                </li> 

                            </div>

                            <div className="customers-div"> 
                                <li className="customers"> 
                                    Customers 
                                </li>
                                <li className="users information"> 
                                    <img src={userFriends} className="imageClass"/> 
                                    <NavLink to="" className="link"> Users </NavLink>
                                </li>
                                <li> 
                                    <img src={guarantors} className="imageClass" /> 
                                    <NavLink to="" className="link"> Guarantors </NavLink>
                                </li>
                                <li> 
                                    <img src={loansImage} className="imageClass" /> 
                                    <NavLink to="" className="link"> Loans </NavLink>
                                </li>
                                <li> 
                                    <img src={decision} className="imageClass" /> 
                                    <NavLink to="" className="link"> Decision Models </NavLink>
                                </li>
                                <li> 
                                <img src={savings} className="imageClass" /> 
                                    <NavLink to="" className="link"> Savings </NavLink>
                                </li>
                                <li> 
                                    <img src={loanRequest} className="imageClass" /> 
                                    <NavLink className="link"> Loan Requests </NavLink>
                                </li>
                                <li> 
                                    <img src={whitelist} className="imageClass" /> 
                                    <NavLink className="link"> Whitelist </NavLink>
                                </li>
                                <li> 
                                    <img src={karma} className="imageClass" /> 
                                    <NavLink className="link"> Karma </NavLink>
                                </li>

                            </div>

                            <div className="business-div"> 
                                <li className="businesses"> 
                                    BUSINESSES 
                                </li>
                                <li> 
                                    <img src={brifcase} className="imageClass"/> 
                                    <NavLink className="link"> Organization </NavLink>
                                </li>
                                <li> 
                                    <img src={loanProducts} className="imageClass"/> 
                                    <NavLink className="link"> Loan Products </NavLink>
                                </li>
                                <li> 
                                    <img src={savingProducts} className="imageClass"/> 
                                    <NavLink className="link"> Saving Products </NavLink>
                                </li>
                                <li> 
                                    <img src={feesandcharges} className="imageClass"/> 
                                    <NavLink className="link"> Fees and Charges </NavLink>
                                </li>
                                <li> 
                                    <img src={transactions} className="imageClass"/> 
                                    <NavLink> Transactions </NavLink>
                                </li>
                                <li> 
                                    <img src={services} className="imageClass"/> 
                                    <NavLink> Services </NavLink>
                                </li>
                                <li> 
                                    <img src={serviceAccount} className="imageClass"/> 
                                    <NavLink> Service Account </NavLink>
                                </li>
                                <li>
                                    <img src={settlements} className="imageClass"/>  
                                    <NavLink> Settlements </NavLink>
                                </li>
                                <li>
                                    <img src={reports} className="imageClass"/>
                                    <NavLink> Reports </NavLink>
                                </li> 
                            
                            </div>


                            <div className="settings"> 
                                <li className="settings"> 
                                    SETTINGS
                                </li>
                                <li> 
                                    <img src={preferences} className="imageClass" /> 
                                    <NavLink> Preferences </NavLink>
                                </li>

                                <li> 
                                    <img src={feesandpricing} className="imageClass" /> 
                                    <NavLink> Fees and Pricing </NavLink>
                                </li>

                                <li> 
                                <img src={auditlogs} className="imageClass" /> 
                                    <NavLink> Audit Logs </NavLink> 
                                </li>
                            
                            </div>
                        </ul>
                    </div>

                    <div className="dashboard-doc"> 
                        <section className="data-section"> 
                            <div> 
                                <h2 className="users-para"> Users </h2>
                            </div>
                            <div className="data-section-first-div-users"> 
                                <div className="first-div">
                                    <div className="username-image"> 
                                        <img src={user} className="user-image" /> 
                                    </div> 
                                    <div className="username-div"> 
                                        <ul> 
                                            <li className="list-items"> Grace Effiong </li>
                                            <li className="list-items"> LSQRDEDEDODI </li>
                                        </ul>
                                    </div>
                                   
                                    <div className="divider"> </div>

                                    <div className="username-div"> 
                                        <ul> 
                                            <li className="list-items"> User Tier </li>
                                            <li className="list-items"> ********** </li>
                                        </ul>
                                    </div>

                                    <div className="divider"> </div>

                                    <div className="username-div"> 
                                        <ul> 
                                            <li className="list-items"> N200,000.00 </li>
                                            <li className="list-items account-number"> 9912345685748/Providus Bank </li>
                                        </ul>
                                    </div>
                                </div>

                               
                                
                                <div className="second-div"> 
                                </div>

                            </div>



                            <div className="data-section-second-div-users">
                                <div> 
                                    <h1 className="header"> Personal Information </h1>
                                </div> 

                                <div className="personal-information"> 
                                    <div className="item"> 
                                        <h2 className="sub-header"> FULL NAME </h2> < br/> 
                                        <p> Grace Effiom </p>
                                    </div>

                                    <div className="item">
                                        <h2 className="sub-header"> PHONE NUMBER </h2> < br/> 
                                        <p> 07060780922 </p> 
                                    </div>

                                    <div className="item"> 
                                        <h2 className="sub-header"> EMAIL ADDRESS </h2> < br/> 
                                        <p> grace@gmail.com </p>
                                    </div>

                                    <div className="item"> 
                                        <h2 className="sub-header"> BVN </h2> < br/> 
                                        <p> 0345e0503039392 </p>
                                    </div>

                                    <div className="item">
                                        <h2 className="sub-header"> GENDER </h2> < br/> 
                                        <p> Female </p> 
                                    </div>
                                   
                                </div>

                                <div className="personal-information"> 
                                    <div className="item"> 
                                        <h2 className="sub-header"> FULL NAME </h2> < br/> 
                                        <p> Grace Effiom </p>
                                    </div>

                                    <div className="item">
                                        <h2 className="sub-header"> PHONE NUMBER </h2> < br/> 
                                        <p> 07060780922 </p> 
                                    </div>

                                    <div className="item"> 
                                        <h2 className="sub-header"> EMAIL ADDRESS </h2> < br/> 
                                        <p> grace@gmail.com </p>
                                    </div>

                                    <div className="item"> 
                                        <h2 className="sub-header"> BVN </h2> < br/> 
                                        <p> 0345e0503039392 </p>
                                    </div>

                                    <div className="item">
                                        <h2 className="sub-header"> GENDER </h2> < br/> 
                                        <p> Female </p> 
                                    </div>
                                   
                                </div>

                                <hr class="horizontal-divider" /> 

                                <div className="education"> 
                                    <h1 className="header"> Education And Employment </h1>
                                </div>

                                <div className="personal-information"> 
                                    <div className="item"> 
                                        <h2 className="sub-header"> FULL NAME </h2> < br/> 
                                        <p> Grace Effiom </p>
                                    </div>

                                    <div className="item">
                                        <h2 className="sub-header"> PHONE NUMBER </h2> < br/> 
                                        <p> 07060780922 </p> 
                                    </div>

                                    <div className="item"> 
                                        <h2 className="sub-header"> EMAIL ADDRESS </h2> < br/> 
                                        <p> grace@gmail.com </p>
                                    </div>

                                    <div className="item"> 
                                        <h2 className="sub-header"> BVN </h2> < br/> 
                                        <p> 0345e0503039392 </p>
                                    </div>

                                    <div className="item">
                                        <h2 className="sub-header"> GENDER </h2> < br/> 
                                        <p> Female </p> 
                                    </div>
                                   
                                </div>

                                <div className="personal-information"> 
                                    <div className="item"> 
                                        <h2 className="sub-header"> FULL NAME </h2> < br/> 
                                        <p> Grace Effiom </p>
                                    </div>

                                    <div className="item">
                                        <h2 className="sub-header"> PHONE NUMBER </h2> < br/> 
                                        <p> 07060780922 </p> 
                                    </div>

                                    <div className="item"> 
                                        <h2 className="sub-header"> EMAIL ADDRESS </h2> < br/> 
                                        <p> grace@gmail.com </p>
                                    </div>

                                    <div className="item"> 
                                        <h2 className="sub-header"> BVN </h2> < br/> 
                                        <p> 0345e0503039392 </p>
                                    </div>

                                    <div className="item"> 
                                        {/* <h2> BVN </h2> < br/> 
                                        <p> 0345e0503039392 </p> */}
                                    </div>
                                   
                                </div>

                                <hr class="horizontal-divider" /> 

                                <div className="education"> 
                                    <h1 className="header"> Socials </h1>
                                </div>

                                <div className="personal-information"> 
                                    <div className="item"> 
                                        <h2 className="sub-header"> FULL NAME </h2> < br/> 
                                        <p> Grace Effiom </p>
                                    </div>

                                    <div className="item">
                                        <h2 className="sub-header"> PHONE NUMBER </h2> < br/> 
                                        <p> 07060780922 </p> 
                                    </div>

                                    <div className="item"> 
                                        <h2 className="sub-header"> EMAIL ADDRESS </h2> < br/> 
                                        <p> grace@gmail.com </p>
                                    </div>

                                    <div className="item"> 
                                        
                                    </div>

                                    <div className="item">
                                         
                                    </div>
                                   
                                </div>


                              <p> {data["accountBalance"]}</p>
                              <p> {data["accountNumber"] }</p>

                            </div>

                            
                        </section>
                    </div> 
                
                
                </div>
        </React.Fragment>
    )
}



// Exporing the user's page 
export default Users; 