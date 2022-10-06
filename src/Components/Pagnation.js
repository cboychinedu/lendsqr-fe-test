// Importing the necessary modules  
import "../Css/DashboardData.css"
import React, { Component } from "react"; 
import { createSearchParams, Link, useNavigate} from "react-router-dom";



// Creating UI 
const SwitchPage = (props) => {
    // Creating the navigator object 
    const navigate = useNavigate(); 

    // Creating a function for navigating to the users page 
    let navigateUsers = (id) => {
        navigate({
            pathname: "/users", 
            search: createSearchParams({
                id: id
            }).toString()
        })
    }
    
    let pageCount = props.props.pageCount; 


    // For page one 
    if (pageCount === 1 ) {
        
        return (
            <React.Fragment> 
                {
                                
                    props.props.datas.slice(0, 20).map((item, i) => {
                        
                        return (
                            <React.Fragment> 
                                <tr className="table-data" onClick={ () => navigateUsers(item["id"])} > 
                                    <td className="table-data"> { item["orgName"] } </td>  
                                    <td> { item["userName"] } </td>
                                    <td> { item["email"] } </td>
                                    <td> { item["phoneNumber"] } </td>
                                    <td> { item["createdAt"] } </td>
                                    <td> <Link className="inactive"> Inactive </Link></td>
                                </tr>
                                <hr className="horizontal-line" />
                            </React.Fragment>

                        )
                    })
                }
            </React.Fragment>
        )
    }
    // For page two 
    else if (pageCount === 2) {
        return (
            <React.Fragment> 
                {
                    props.props.datas.slice(20, 40).map((item, i) => {
                        return (
                            <React.Fragment>
                                <tr className="table-data" id={item["id"]}> 
                                    <td className="table-data"> { item["orgName"] } </td>  
                                    <td> { item["userName"] } </td>
                                    <td> { item["email"] } </td>
                                    <td> { item["phoneNumber"] } </td>
                                    <td> { item["createdAt"] } </td>
                                    <td> <Link className="inactive"> Inactive </Link></td>
                                </tr>
                                <hr className="horizontal-line" />
                            </React.Fragment>
                        )
                    })
                }
            </React.Fragment>
        )
    }

    // For page three 
    else if (pageCount === 3) {
        return (
            <React.Fragment> 
                {
                    props.props.datas.slice(40, 60).map((item, i) => {
                        return (
                            <React.Fragment>
                                <tr className="table-data" id={item["id"]}> 
                                    <td className="table-data"> { item["orgName"] } </td>  
                                    <td> { item["userName"] } </td>
                                    <td> { item["email"] } </td>
                                    <td> { item["phoneNumber"] } </td>
                                    <td> { item["createdAt"] } </td>
                                    <td> <Link className="inactive"> Inactive </Link></td>
                                </tr>
                                <hr className="horizontal-line" />
                            </React.Fragment>
                        )
                    })
                }
            </React.Fragment>
        )
    }

    // For page four 
    else if (pageCount === 4) {
        return (
            <React.Fragment> 
                {
                    props.props.datas.slice(60, 80).map((item, i) => {
                        return (
                            <React.Fragment>
                                <tr className="table-data" id={item["id"]}> 
                                    <td className="table-data"> { item["orgName"] } </td>  
                                    <td> { item["userName"] } </td>
                                    <td> { item["email"] } </td>
                                    <td> { item["phoneNumber"] } </td>
                                    <td> { item["createdAt"] } </td>
                                    <td> <Link className="inactive"> Inactive </Link> </td>
                                </tr>
                                <hr className="horizontal-line" />
                            </React.Fragment>
                        )
                    })
                }
            </React.Fragment>
        )
    }

    // For page five 
    else if (pageCount === 5) {
        return (
            <React.Fragment> 
                {
                    props.props.datas.slice(80, 100).map((item, i) => {
                        return (
                            <React.Fragment>
                                <tr className="table-data" id={item["id"]}> 
                                    <td className="table-data"> { item["orgName"] } </td>  
                                    <td> { item["userName"] } </td>
                                    <td> { item["email"] } </td>
                                    <td> { item["phoneNumber"] } </td>
                                    <td> { item["createdAt"] } </td>
                                    <td> <Link className="inactive"> Inactive </Link> </td>
                                </tr>
                                <hr className="horizontal-line" />
                            </React.Fragment>
                        )
                    })
                }
            </React.Fragment>
        )
    }

    // For page six 
    else if (pageCount === 6) {
        return (
            <React.Fragment> 
                {
                    props.props.datas.slice(100, 200).map((item, i) => {
                        return (
                            <React.Fragment>
                                <tr className="table-data" id={item["id"]}> 
                                    <td className="table-data"> { item["orgName"] } </td>  
                                    <td> { item["userName"] } </td>
                                    <td> { item["email"] } </td>
                                    <td> { item["phoneNumber"] } </td>
                                    <td> { item["createdAt"] } </td>
                                    <td> <Link className="inactive"> Inactive </Link> </td>
                                </tr>
                                <hr className="horizontal-line" />
                            </React.Fragment>
                        )
                    })
                }
            </React.Fragment>
        )
    }
}

// Exporting 
export default SwitchPage; 
   


