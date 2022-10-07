// Importing the necessary modules  
import "../Css/DashboardData.css"
import filter from "../Images/filter.png"; 
import React, { Component } from "react"; 
import Pagination from "./Pagnation"; 
import Modal from "./Modal";
import { Link } from "react-router-dom";

// Creating a ui component for the react dashboard page 
class DashboardData extends Component {
    // setting the state 
    state = {
        datas: [], 
        pageCount: 1, 
        filterStatus: false, 
        Modalstatus: false, 
    }

    // Filter data 
    filterData = (data) => {
        // Filtering 
        const result = this.state.datas.filter((items) => {
            return items["orgName"] === data["organization"] ||
            items["userName"] === data["username"] || 
            items["email"] === data["email"] || items["phoneNumber"] === data["phoneNumber"]
        })

        // Setting the state 
        this.setState({
            datas: result, 
        })
    }

    // Creating a function for displaying the modal 
    DisplayModal = (event) => {
        // Displaying the modal 
        this.setState({
            Modalstatus: true, 
        })

        console.log(this.state.datas); 
       
    }

    // Creating a function for removing the modal 
    RemoveModal = (event) => {
        // Removing the modal 
        this.setState({
            Modalstatus: false, 
        })
    }

    // Creating a function for changing the page 
    changePage = (event) => { 
        // If the button pressed was to change to page one 
        if (event.target.id === "pageOne") {
            this.setState({
                pageCount: 1
            })

            
        } 

        // Else if the button pressed was to change to page two 
        else if (event.target.id === "pageTwo") {
            this.setState({
                pageCount: 2
            })
        }

        // Else if the button pressed was to change to page three 
        else if (event.target.id === "pageThree") {
            this.setState({
                pageCount: 3
            })
        }

        // Else if the button pressed was to change to page four 
        else if (event.target.id === "pageFour") {
            this.setState({
                pageCount: 4 
            })
        }

        // Else if the button pressed was to change to page five 
        else if (event.target.id === "pageFive") {
            this.setState({
                pageCount: 5
            })
        }

        // Else if the button pressed was to change to page six 
        else if (event.target.id === "pageSix") {
            this.setState({
                pageCount: 6
            })
        }
        
    }

    // Execute this block of code when the component mounts 
    componentDidMount() {
        // Fetching the data 
        fetch('https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users')
        .then(data => {
            return data.json();
        })
        .then(post => {
            this.setState({
                datas: post
            })
        });
    }
    // Render the jsx component 
    render() { 
        // Return 
        return (
            <React.Fragment > 
                    <div className="table-header-div" > 
                        <table> 
                            <tr className="table-header">
                                <th onClick={this.DisplayModal}> ORGANIZATION <img src={filter} className="filter-image"/> </th> 
                                <th class="t-header"> USERNAME <img src={filter} className="filter-image"/> </th>
                                <th class="t-header"> EMAIL <img src={filter} className="filter-image"/> </th>
                                <th class="t-header"> PHONE NUMBER <img src={filter} className="filter-image"/> </th>
                                <th class="t-header"> DATE JOINED <img src={filter} className="filter-image"/> </th>
                                <th class="t-header"> STATUS <img src={filter} className="filter-image"/> </th>
                            </tr>
                                <hr className="horizontal-line" />
                                { this.state.Modalstatus && <Modal RemoveModal={this.RemoveModal} filterData={this.filterData}/> }
                                
                                < Pagination props={this.state} filterStatus={this.state.filterStatus}/> 
                        </table>
                    </div>
                    <div className="pagnation-div"> 
                        <div> 
                        </div>
                            {/*Adding pagnations */}
                        <div className="pagination">
                            <Link to="#">&laquo;</Link>
                            <Link to="#" onClick={this.changePage} id="pageOne">1</Link>
                            <Link  to="#" onClick={this.changePage} id="pageTwo" >2</Link>
                            <Link to="#" onClick={this.changePage} id="pageThree">3</Link>
                            <Link to="#" onClick={this.changePage} id="pageFour">4</Link>
                            <Link to="#" onClick={this.changePage} id="pageFive">5</Link>
                            <Link to="#" onClick={this.changePage} id="pageSix">6</Link>
                            <Link to="#">&raquo;</Link>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
} 


// Exporting the data 
export default DashboardData; 