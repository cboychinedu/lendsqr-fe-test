// Importing the necessary modules 
import React , { Component }from 'react'; 
import { useSearchParams, useParams } from 'react-router-dom';



// Creating the ui component 
const Users = (props) => {
    // Getting the user's id 
    const [searchparams] = useSearchParams(); 
    const userId = searchparams.get("id"); 
    let data = searchparams.get("data"); 

    // Converting back into json 
    data = JSON.parse(data); 


    console.log(data); 


    // Render the home page 
    return (
        <React.Fragment> 
            <h3> User's Page </h3>
        </React.Fragment>
    )
}



// Exporing the user's page 
export default Users; 