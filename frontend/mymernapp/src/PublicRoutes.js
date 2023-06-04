import {Navigate} from 'react-router-dom' ;

const PublicRoutes = (props) => 
{
    if(!localStorage.getItem("token"))
    {
        return (
        <Navigate to = "/" />    
        )
    }
    else 
    {
         return <div>props.children</div> ;
    }    

}

export default PublicRoutes ;