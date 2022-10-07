/* eslint-disable jsx-a11y/alt-text */
// Importing the necessary modules 
import React from "react"; 
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
import starOne from "../Images/star1.png"; 
import starTwo from "../Images/star2.png"; 
import starThree from "../Images/star3.png"; 
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
import Navbar from "./Navbar";
import "../Css/Users.css"; 
import { useSearchParams } from 'react-router-dom';


// Creating the ui component 
const Users = (props) => {
    // Getting the user's id 
    const [searchparams] = useSearchParams(); 
    let data = searchparams.get("data"); 

    // Converting back into json 
    data = JSON.parse(data); 

    console.log(data); 


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

                    <div className="dashboard-doc-users"> 
                        <section className="data-section"> 
                            <div> 
                                <h2 className="users-para"> Users </h2>
                            </div>
                            <div className="data-section-first-div-users"> 
                                <div className="first-div">
                                    <div className="username-image"> 
                                        <img src={data["profile"]["avatar"]} className="user-image" /> 
                                    </div> 
                                    <div className="username-div"> 
                                        <ul> 
                                            <li className="list-items list-items-heading"> {data["profile"]["firstName"]} {data["profile"]["lastName"]} </li>
                                            <li className="list-items para"> {data["profile"]["address"]} </li>
                                        </ul>
                                    </div>
                                   
                                    <div className="divider"> </div>

                                    <div className="username-div"> 
                                        <ul> 
                                            <li className="list-items list-items-heading"> {data["userName"]} </li>
                                            <li className="list-items"> 
                                                <div className="star"> 
                                                    <img src={starOne} /> 
                                                    <img src={starTwo} /> 
                                                    <img src={starThree} /> 
                                                </div>
                                             </li>
                                        </ul>
                                    </div>

                                    <div className="divider"> </div>

                                    <div className="username-div"> 
                                        <ul> 
                                            <li className="list-items list-items-heading"> ₦{data["accountBalance"]} </li>
                                            <li className="list-items account-number para"> {data["accountNumber"]}/Providus Bank </li>
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
                                        <p className="para-information"> {data["profile"]["firstName"]} {data["profile"]["lastName"]} </p>
                                    </div>

                                    <div className="item">
                                        <h2 className="sub-header"> PHONE NUMBER </h2> < br/> 
                                        <p className="para-information"> {data["phoneNumber"]} </p> 
                                    </div>

                                    <div className="item"> 
                                        <h2 className="sub-header"> EMAIL ADDRESS </h2> < br/> 
                                        <p className="para-information"> {data["email"]} </p>
                                    </div>

                                    <div className="item"> 
                                        <h2 className="sub-header"> BVN </h2> < br/> 
                                        <p className="para-information"> {data["profile"]["bvn"]} </p>
                                    </div>

                                    <div className="item">
                                        <h2 className="sub-header"> GENDER </h2> < br/> 
                                        <p className="para-information"> {data["profile"]["gender"]} </p> 
                                    </div>
                                   
                                </div>

                                <div className="personal-information"> 
                                    <div className="item"> 
                                        <h2 className="sub-header"> MARITAL STATUS </h2> < br/> 
                                        <p className="para-information"> ------ </p>
                                    </div>

                                    <div className="item">
                                        <h2 className="sub-header"> CHILDREN </h2> < br/> 
                                        <p className="para-information"> ------- </p> 
                                    </div>

                                    <div className="item"> 
                                        <h2 className="sub-header"> TYPE OF RESIDENCE </h2> < br/> 
                                        <p className="para-information"> ------- </p>
                                    </div>

                                    <div className="item"> 
                                        
                                    </div>

                                    <div className="item">
                                        
                                    </div>
                                   
                                </div>

                                <hr class="horizontal-divider" /> 

                                <div className="education"> 
                                    <h1 className="header"> Education And Employment </h1>
                                </div>

                                <div className="personal-information"> 
                                    <div className="item"> 
                                        <h2 className="sub-header"> LEVEL OF EDUCATION </h2> < br/> 
                                        <p className="para-information"> {data["education"]["level"]} </p>
                                    </div>

                                    <div className="item">
                                        <h2 className="sub-header"> EMPLOYMENT STATUS  </h2> < br/> 
                                        <p className="para-information"> {data["education"]["employmentStatus"]} </p> 
                                    </div>

                                    <div className="item"> 
                                        <h2 className="sub-header"> SECTOR OF EMPLOYMENT </h2> < br/> 
                                        <p className="para-information"> {data["education"]["sector"]} </p>
                                    </div>

                                    <div className="item"> 
                                        <h2 className="sub-header"> DURATION OF EMPLOYMENT </h2> < br/> 
                                        <p className="para-information"> {data["education"]["duration"]} </p>
                                    </div>

                                    <div className="item">
                                       
                                    </div>
                                   
                                </div>

                                <div className="personal-information"> 
                                    <div className="item"> 
                                        <h2 className="sub-header"> OFFICE EMAIL </h2> < br/> 
                                        <p className="para-information"> {data["education"]["officeEmail"]} </p>
                                    </div>

                                    <div className="item">
                                        <h2 className="sub-header"> MONTHLY INCOME </h2> < br/> 
                                        <p className="para-information"> ₦{data["education"]["monthlyIncome"][0]} - ₦{data["education"]["monthlyIncome"][1]}   </p> 
                                    </div>

                                    <div className="item"> 
                                        <h2 className="sub-header"> LOAD REPAYMENT </h2> < br/> 
                                        <p className="para-information"> {data["education"]["loanRepayment"]} </p>
                                    </div>

                                    <div className="item"> 
                                        
                                    </div>

                                    <div className="item"> 
                                       
                                    </div>
                                   
                                </div>

                                <hr class="horizontal-divider" /> 

                                <div className="education"> 
                                    <h1 className="header"> Socials </h1>
                                </div>

                                <div className="personal-information"> 
                                    <div className="item"> 
                                        <h2 className="sub-header"> TWITTER </h2> < br/> 
                                        <p className="para-information"> {data["socials"]["twitter"]} </p>
                                    </div>

                                    <div className="item">
                                        <h2 className="sub-header"> FACEBOOK </h2> < br/> 
                                        <p className="para-information"> {data["socials"]["facebook"]} </p> 
                                    </div>

                                    <div className="item"> 
                                        <h2 className="sub-header"> INSTAGRAM </h2> < br/> 
                                        <p className="para-information"> {data["socials"]["instagram"]} </p>
                                    </div>

                                    <div className="item"> 
                                        
                                    </div>

                                    <div className="item">
                                         
                                    </div>
                                   
                                </div>

                                <hr class="horizontal-divider" /> 

                                <div className="education"> 
                                    <h1 className="header"> Guarantor </h1>
                                </div>

                                <div className="personal-information"> 
                                    <div className="item"> 
                                        <h2 className="sub-header"> FULL NAME </h2> < br/> 
                                        <p className="para-information"> {data["guarantor"]["firstName"]} {data["guarantor"]["lastName"]}</p>
                                    </div>

                                    <div className="item">
                                        <h2 className="sub-header"> PHONE NUMBER </h2> < br/> 
                                        <p className="para-information"> {data["guarantor"]["phoneNumber"]} </p> 
                                    </div>

                                    <div className="item"> 
                                        <h2 className="sub-header"> ADDRESS </h2> < br/> 
                                        <p className="para-information"> {data["guarantor"]["address"]} </p>
                                    </div>

                                    <div className="item"> 
                                        <h2 className="sub-header"> GENDER </h2> < br/> 
                                        <p className="para-information"> {data["guarantor"]["gender"]} </p>
                                    </div>

                                    <div className="item">
                                        
                                    </div>
                                   
                                </div>

                            </div>

                            
                        </section>
                    </div> 
                
                
                </div>
        </React.Fragment>
    )
}



// Exporing the user's page 
export default Users; 