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
import users from "../Images/users.png"; 
import activeUsers from "../Images/active-users.png"; 
import usersWithLoans from "../Images/users-with-loans.png"; 
import userWithSavings from "../Images/users-with-savings.png"; 
import Navbar from "./Navbar";
import DashboardData from "./DashboardData";
import axios from 'axios'; 
import "../Css/Dashboard.css"; 



// Creating a UI compoent for the react dashboard page 
class Dashboard extends Component {
    // Setting the state 
    state = {
        datas: []
    }

     // ComponentDidMount 
    componentDidMount() {
    axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
    .then((res) => {
        const data = res.data; 

        this.setState({
            datas: data
            })
        })
    }

    // Logging the values for the data 
    logState = () => {
        console.log(this.state); 
    }



    render() {
        // Render the dashboard page 
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
                            <div className="data-section-first-div"> 

                                <div className="users-div"> 
                                    <img src={users} className="users-image" /> 
                                    <p className="desc"> USERS </p>
                                    <h1 className="desc-heading"> 2, 453 </h1>
                                </div>

                                <div className="active-users"> 
                                    <img src={activeUsers} className="active-users-image" /> 
                                    <p className="desc"> ACTIVE USERS </p>
                                    <h1 className="desc-heading"> 2,453</h1>
                                </div>

                                <div className="users-with-loans"> 
                                    <img src={usersWithLoans} className="users-with-loans-image" /> 
                                    <p className="desc"> USERS WITH LOANS </p>
                                    <h1 className="desc-heading"> 12,453 </h1>
                                </div>

                                <div className="users-with-savings"> 
                                    <img src={userWithSavings} className="users-with-savings-image" /> 
                                    <p className="desc"> USERS WITH SAVINGS </p>
                                    <h1 className="desc-heading"> 102, 453 </h1>
                                </div>

                            </div>



                            <div className="data-section-second-div"> 
                               < DashboardData /> 

                            </div>

                            
                        </section>
                    </div> 
                
                
                </div>

            </React.Fragment>
        )
    }
}

// Exporting the dashboard class 
export default Dashboard; 