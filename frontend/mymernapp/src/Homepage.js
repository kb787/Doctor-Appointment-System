import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faList, faUser, faUserDoctor ,faSignOutAlt,faSignIn} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom' ;
import {message} from 'antd' ;
import {useNavigate} from 'react-router-dom' ;
const Homepage = () => {

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
<header className = "homepageHeader">
 <h1 className = "homepageHeading">Welcome to DocAPP</h1>
 </header>
 <main className = "homepageMain">
 <h5 className = "homepageHeading">
 Health Facts...   
 </h5>
 <ul className = "cardCollection">
    <li> 
     <div className="doctorCard" style={{ width: "14rem", height:"20rem" }}>
       <div className="card-body">
       <p className = "doctorPara">
       Glucose is a kind of sugar that your cells use for energy. Your body makes it from the food you eat and delivers it to your cells through your blood. A "blood sugar" level -- or how much glucose is in your blood -- is usually measured in milligrams per deciliter (mg/dL).
       </p> 
       </div>   
    </div>
    </li>
    <li> 
     <div className="doctorCard" style={{ width: "14rem", height:"20rem" }}>
     <div className="card-body">
       <p className = "doctorPara">
       A device that measures your blood sugar. First you put a test strip in the meter. Then you prick your fingertip with a lancet, a gizmo with a spring inside that pops a small needle out against your skin to get a drop of blood.
       </p> 
      </div>  
    </div>
    </li>
    <li> 
     <div className="doctorCard" style={{ width: "14rem", height:"20rem" }}>
     <div className="card-body">
       <p className = "doctorPara">
       These are the doctors' way of saying your blood sugar is high or low. (A good way to remember the difference is that "O" sound is in both "hypo-" and "low.") Usually hyperglycemia is over 160 mg/dL, but your doctor may have set a different target for you.
       </p> 
       </div>  
    </div>
    </li>
    <li> 
     <div className="doctorCard" style={{ width: "14rem", height:"20rem" }}>
     <div className="card-body">
       <p className = "doctorPara">
       The somogayi effect is also called the "rebound effect," it's when your blood glucose gets really high after it's been really low, typically while you were sleeping. If it happens a lot, you might need to check your blood sugar in the middle of the night.
       </p> 
       </div>   
    </div>
    </li>  
    </ul>
    <ul className = "cardCollection">
    <li> 
     <div className="doctorCard" style={{ width: "14rem", height:"20rem" }}>
     <div className="card-body">
       <p className = "doctorPara">
       Pancreas is
a gland about the size of your hand, just below and behind your stomach. Groups of cells called islets (sometimes called islets of Langerhans) make hormones and digestive juices that help you break down and use food.
Its beta cells make insulin, and its alpha cells make glucagon.
       </p> 
       </div>      
    </div>
    </li>
    <li> 
     <div className="doctorCard" style={{ width: "14rem", height:"20rem" }}>
     <div className="card-body">
       <p className = "doctorPara">
       Insulin is
the hormone that helps your cells use glucose. If your pancreas doesn't make any or can't make enough, you can take man-made insulin. Types of insulin describe how fast and how long they work: rapid-acting, regular or short-acting, intermediate-acting, and long-acting. 
       </p> 
       </div>   
    </div>
    </li>
    <li> 
     <div className="doctorCard" style={{ width: "14rem", height:"20rem" }}>
     <div className="card-body">
       <p className = "doctorPara">
       It's not a kind of insulin, but rather a reason for taking it. Also called "basal insulin replacement," it helps keep your blood glucose steady between meals and overnight. People with type 1 diabetes take a basal insulin because their pancreas is broken. 
       </p> 
       </div>    
    </div>
    </li>
    <li> 
     <div className="doctorCard" style={{ width: "14rem", height:"20rem" }}>
     <div className="card-body">
       <p className = "doctorPara">
       How you get insulin into your body. One way is a shot with a needle and syringe. The syringe has two parts: the tube where the insulin goes, and the plunger, the part you push down. Insulin pens look a lot like the pens you write with.  
       </p> 
       </div>   
    </div>
    </li>  
    </ul> 
    <p className = "homePageFooter">For more such content vist wikipedia</p> 
 </main>    
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
<Link to = "/DocProfile" className = "itemLinking">
 Contact Doctors
 </Link> 
 </li>
 <br/>
 <li className = "item4">
<FontAwesomeIcon icon={faUserDoctor} />
<Link to = "/DocAccount" className = "itemLinking">
 Apply as doctor
 </Link> 
 </li>
 <br/>
 <li className = "item5">
<FontAwesomeIcon icon={faSignIn} />
<Link to = "/Login" className = "itemLinking">
 Login
 </Link> 
 </li>
 <br/>
 <li className = "item6" >
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

export default Homepage;



