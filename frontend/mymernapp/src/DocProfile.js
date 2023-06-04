import { useNavigate } from "react-router-dom";

const DocProfile = () => 
{

var navg = useNavigate() ;  
const handleAppointment = (e) => 
{
     e.preventDefault() ;
     navg("/Register") ;
}  
   return (
   <div className = "DocProfile">
    <ul className = "cardCollection">
    <li> 
     <div className="doctorCard" style={{ width: "18rem" , height:"20rem"}}>
       <div className="card-body">
         <h5 className="doctorCardHeading">Dr P.Ramalingam</h5>
           <ul className = "doctorCardList">
             <li>Email :- prm@gmail.com</li>
             <li>Address :- Mumbai</li>
             <li>Specialization :- Neurologist</li>
             <li>Fees:- 500 INR</li>
             <li>Timings :- 9am to 11am</li>
            <br/>
            <button type="submit" className = "docProfileButton" onClick={handleAppointment}>Book Appointment</button>
          </ul>
       </div>   
    </div>
    </li>
    <li> 
     <div className="doctorCard" style={{ width: "18rem", height:"20rem" }}>
       <div className="card-body">
         <h5 className="doctorCardHeading">Dr P.Sharma</h5>
           <ul className = "doctorCardList">
             <li>Email :- prs@gmail.com</li>
             <li>Address :- Mumbai</li>
             <li>Specialization :- Neurologist</li>
             <li>Fees:- 600 INR</li>
             <li>Timings :- 9am to 12am</li>
            <br/>
            <button type="submit" className = "docProfileButton"  onClick={handleAppointment}>Book Appointment</button>
          </ul>
       </div>   
    </div>
    </li>
    <li> 
     <div className="doctorCard" style={{ width: "18rem", height:"20rem" }}>
       <div className="card-body">
         <h5 className="doctorCardHeading">Dr S.Maheshwari</h5>
           <ul className = "doctorCardList">
             <li>Email :- prsss@gmail.com</li>
             <li>Address :- Mumbai</li>
             <li>Specialization :- Dentist</li>
             <li>Fees:- 300 INR</li>
             <li>Timings :- 9am to 12am</li>
            <br/>
            <button type="submit" className = "docProfileButton"  onClick={handleAppointment}>Book Appointment</button>
          </ul>
       </div>   
    </div>
    </li>
    <li> 
     <div className="doctorCard" style={{ width: "18rem", height:"20rem" }}>
       <div className="card-body">
         <h5 className="doctorCardHeading">Dr P.Raza</h5>
           <ul className = "doctorCardList">
             <li>Email :- praasjkasj@gmail.com</li>
             <li>Address :- Mumbai</li>
             <li>Specialization :- Dentist</li>
             <li>Fees:- 300 INR</li>
             <li>Timings :- 9am to 11am</li>
            <br/>
            <button type="submit" className = "docProfileButton"  onClick={handleAppointment}>Book Appointment</button>
          </ul>
       </div>   
    </div>
    </li>  
    </ul>
    <br/>
    <ul className = "cardCollection">
    <li> 
     <div className="doctorCard" style={{ width: "18rem", height:"20rem" }}>
       <div className="card-body">
         <h5 className="doctorCardHeading">Dr S.Chandrashekhar</h5>
           <ul className = "doctorCardList">
             <li>Email :- prdsdwd@gmail.com</li>
             <li>Address :- Mumbai</li>
             <li>Specialization :- Neurologist</li>
             <li>Fees:- 500 INR</li>
             <li>Timings :- 9am to 11am</li>
            <br/>
            <button type="submit" className = "docProfileButton"  onClick={handleAppointment}>Book Appointment</button>
          </ul>
       </div>   
    </div>
    </li>
    <li> 
     <div className="doctorCard" style={{ width: "18rem", height:"20rem" }}>
       <div className="card-body">
         <h5 className="doctorCardHeading">Dr R.Sharma</h5>
           <ul className = "doctorCardList">
             <li>Email :- prm@gmail.com</li>
             <li>Address :- Mumbai</li>
             <li>Specialization :- Ayurveda</li>
             <li>Fees:- 600 INR</li>
             <li>Timings :- 9am to 12am</li>
            <br/>
            <button type="submit" className = "docProfileButton"  onClick={handleAppointment}>Book Appointment</button>
          </ul>
       </div>   
    </div>
    </li>
    <li> 
     <div className="doctorCard" style={{ width: "18rem", height:"20rem" }}>
       <div className="card-body">
         <h5 className="doctorCardHeading">Dr S.Mondal</h5>
           <ul className = "doctorCardList">
             <li>Email :- prm@gmail.com</li>
             <li>Address :- Mumbai</li>
             <li>Specialization :- Pediatrac</li>
             <li>Fees:- 300 INR</li>
             <li>Timings :- 9am to 12am</li>
            <br/>
            <button type="submit" className = "docProfileButton"  onClick={handleAppointment}>Book Appointment</button>
          </ul>
       </div>   
    </div>
    </li>
    <li> 
     <div className="doctorCard" style={{ width: "18rem", height:"20rem" }}>
       <div className="card-body">
         <h5 className="doctorCardHeading">Dr S.Khan</h5>
           <ul className = "doctorCardList">
             <li>Email :- prm@gmail.com</li>
             <li>Address :- Mumbai</li>
             <li>Specialization :- Dentist</li>
             <li>Fees:- 300 INR</li>
             <li>Timings :- 9am to 11am</li>
            <br/>
            <button type="submit" className = "docProfileButton"  onClick={handleAppointment}>Book Appointment</button>
          </ul>
       </div>   
    </div>
    </li>  
    </ul>
   </div> 
   )  
}

export default DocProfile ;