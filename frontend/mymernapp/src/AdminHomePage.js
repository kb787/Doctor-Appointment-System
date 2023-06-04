import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faList, faUser, faUserDoctor ,faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom' ;
import {message} from 'antd' ;
import {useNavigate} from 'react-router-dom' ;
const AdminHomePage = () => {

var navigate = useNavigate() ;    

 const handleLogout = (e) => 
 {
    e.preventDefault() ;
    localStorage.clear() ;
    message.success(" You have been successfully logged out ") ;
    navigate("/Login") ;
 }   
 return (
 <div className="Homepage">
 <div className="sidebar">
 <ul className = "sidebarItems">
 <li className = "item1">
 <FontAwesomeIcon icon={faHouse} />
 <Link to = "/" className = "itemLinking">
 Home
 </Link>
 </li>  
 <br/>
 <li className = "item3">
<FontAwesomeIcon icon={faUser} /> 
<Link to = "/Profile" className = "itemLinking">
 Profile
 </Link> 
 </li>
 <br/>
 <li className = "item4">
<FontAwesomeIcon icon={faUserDoctor} />
<Link to = "/ApplyDoc" className = "itemLinking">
 Doctors
</Link> 
 </li>
 <br/>
 <li className = "item5" >
<FontAwesomeIcon icon={faSignOutAlt} />
<Link to = "/Login" className = "itemLinking" onClick={handleLogout}>
 Logout
 </Link> 
 </li>
 </ul>
 </div>
 </div>
 );
};

export default AdminHomePage;