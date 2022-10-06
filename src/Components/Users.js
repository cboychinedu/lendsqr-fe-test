// Importing the necessary modules 
import React from 'react'; 
import { useSearchParams } from 'react-router-dom';



// Creating the ui component 
const Users = (props) => {
    const [searchparams] = useSearchParams(); 
    console.log(searchparams.get("id")); 

    // Connect to the second database using the link 



    // Render the home page 
    return (
        <React.Fragment> 
            <h3> User's Page </h3>
        </React.Fragment>
    )
}

// Exporing the user's page 
export default Users; 