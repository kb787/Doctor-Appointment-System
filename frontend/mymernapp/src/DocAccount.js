import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {message} from "antd" ;
import axios from 'axios' ; 

const DocAccount = () => 
{
    const [docId,setDocId] = useState('') ;
    const [email,setEmail] = useState('') ;
    const [password,setPassword] = useState('') ;
    const [docFirstName,setDocFirstName] = useState('') ;
    const [docLastName,setDocLastName] = useState('') ;
    const [docEmail,setDocEmail] = useState('') ;
    const [docAddress,setDocAddress] = useState('') ;
    const [docWebsite,setDocWebsite] = useState('') ;
    const [docSpecialization,setDocSpecialization] = useState('') ;
    const [docExperience,setDocExperience] = useState('') ;
    const [docFees, setDocFees] = useState('') ;
    const [docTimings,setDocTimings] = useState('') ;

    var navigate = useNavigate() ;

    const handleSubmitDocAccount = async(e) => 
    {
        e.preventDefault() ;
        try 
        {
            const accountResponse = axios.post("http://localhost:3500/v2/api/doctors/postNewDoctorAccount" , {
                 docId:docId ,
                 email:email ,
                 password:password ,
                 docFirstName:docFirstName ,
                 docLastName:docLastName ,
                 docEmail:docEmail,
                 docAddress:docAddress ,
                 docWebsite:docWebsite ,
                 docSpecialization:docSpecialization ,
                 docExperience:docExperience ,
                 docFees:docFees ,
                 docTimings:docTimings
                }) ;
               console.log(accountResponse)  ;
           
            if(accountResponse.data && accountResponse.data.success) 
               {
                  message.success(" Successfully saved your account details ") ;
                  navigate("/") ;
               }  
        }
        catch(error)
        {
             message.error(" Server side error had occured ") ;
        } 
    }
    

   return (
   <div className = "DocAccount">
    <br/>
      <form className = "registerForm">
     <div>
        <input
          className = "registerFormInput"  
          type="text"
          value={docId}
          required
          placeholder="Enter your docId"
          onChange={(e) => setDocId(e.target.value)}
        />
      </div>
      <br/>
      <div>
      <div>
        <input
          className = "registerFormInput"  
          type="email"
          value={email}
          required
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br/> 
      <div>
        <input
          className = "registerFormInput"  
          type="password"
          value={password}
          required
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br/> 
        <input
          className = "registerFormInput"  
          type="text"
          value={docFirstName}
          required
          placeholder="Enter your first name"
          onChange={(e) => setDocFirstName(e.target.value)}
        />
      </div>
      <br/>
      <div>
        <input
          className="registerFormInput"
          type="text"
          value={docLastName}
          required
          placeholder="Enter your last name"
          onChange={(e) => setDocLastName(e.target.value)}
        />
      </div>
      <br/>
      <div>
        <input
          className="registerFormInput"
          type="text"
          value={docEmail}
          required
          placeholder="Enter your professional email"
          onChange={(e) => setDocEmail(e.target.value)}
        />
      </div>
      <br/>
      <div>
        <input
          className="registerFormInput"
          type="text"
          value={docAddress}
          required
          placeholder="Enter your address"
          onChange={(e) => setDocAddress(e.target.value)}
        />
      </div>
      <br/>
      <div>
        <input
          className="registerFormInput"
          type="text"
          value={docWebsite}
          required
          placeholder="Enter your website"
          onChange={(e) => setDocWebsite(e.target.value)}
        />
      </div>
      <br/>
      <div>
        <input
          className="registerFormInput"
          type="text"
          value={docSpecialization}
          required
          placeholder="Enter your specialization"
          onChange={(e) => setDocSpecialization(e.target.value)}
        />
      </div>
      <br/>
      <div>
        <input
          className="registerFormInput"
          type="number"
          value={docExperience}
          required
          placeholder="Enter your experience"
          onChange={(e) => setDocExperience(e.target.value)}
        />
      </div>
      <br/>
      <div>
        <input
          className="registerFormInput"
          type="number"
          value={docFees}
          required
          placeholder="Enter your fees"
          onChange={(e) => setDocFees(e.target.value)}
        />
      </div>
      <br/>
      <div>
        <input
          className="registerFormInput"
          type="text"
          value={docTimings}
          required
          placeholder="Enter your timings"
          onChange={(e) => setDocTimings(e.target.value)}
        />
      </div>
      <br/>
      <button type="submit" className = "docAccountButton" onClick={handleSubmitDocAccount}>Create your account</button>
      <br/>
    </form>
   </div> 
   ) 
}

export default DocAccount ;
