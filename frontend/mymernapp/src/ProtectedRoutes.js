import {Navigate} from 'react-router-dom' ;
const ProtectedRoutes = ({props}) => 
{
    if(localStorage.getItem("token"))
    {
        return <div>props.children</div> ;
    }
    else
    {
        return (
        <Navigate to = "/Login" />  
        )
    } 
}

export default ProtectedRoutes ;