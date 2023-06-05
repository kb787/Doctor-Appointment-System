import { useNavigate } from "react-router-dom";
import {message} from "antd" ;
import axios from "axios" ;
import {useState} from "react" ;

const UserProfile = () => 
{

    const [userProfileId,setUserProfileId] = useState('') ;
    const [userProfileFirstName,setUserProfileFirstName] = useState('') ;
    const [userProfileLastName,setUserProfileLastName] = useState('') ;
    const [userProfilePhoneNo,setUserProfilePhoneNo] = useState('') ;
    const [userProfileEmail,setUserProfileEmail] = useState('') ;
    const [userProfileAge,setUserProfileAge] = useState('') ;
    const [userProfileCity,setUserProfileCity] = useState('') ;

    var navigate = useNavigate() ;

    const handleUserProfSub = async(e) => 
    {
        e.preventDefault() ;
        var profRes = await axios.post("http://localhost:3500/v1/api/profiles/postNewProfile" , 
        {
             userProfileId:userProfileId,
             userProfileFirstName:userProfileFirstName,
             userProfileLastName:userProfileLastName,
             userProfilePhoneNo:userProfilePhoneNo,
             userProfileEmail:userProfileEmail,
             userProfileAge:userProfileAge,
             userProfileCity:userProfileCity  
        }
        )
        try 
        {
             console.log(profRes) ;
             if(profRes.data && profRes.data.success)
             {
                 message.success(" Appointment booked successfully ") ;
                 navigate("/") ;
             }
        }
        catch(error)
        {
            message.error(" Unable to book slot ") ;
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
              value={userProfileId}
              required
              placeholder="Enter your profile Id"
              onChange={(e) => setUserProfileId(e.target.value)}
            />
          </div>
          <br/>
          <div>
          <div>
            <input
              className = "registerFormInput"  
              type="text"
              value={userProfileFirstName}
              required
              placeholder="Enter your first name"
              onChange={(e) => setUserProfileFirstName(e.target.value)}
            />
          </div>
          <br/> 
          <div>
            <input
              className = "registerFormInput"  
              type="text"
              value={userProfileLastName}
              required
              placeholder="Enter last name"
              onChange={(e) => setUserProfileLastName(e.target.value)}
            />
          </div>
          <br/> 
            <input
              className = "registerFormInput"  
              type="text"
              value={userProfilePhoneNo}
              required
              placeholder="Enter the phone no"
              onChange={(e) => setUserProfilePhoneNo(e.target.value)}
            />
          </div>
          <br/>
          <div>
            <input
              className="registerFormInput"
              type="text"
              value={userProfileEmail}
              required
              placeholder="Enter your email"
              onChange={(e) => setUserProfileEmail(e.target.value)}
            />
          </div>
          <br/>
          <div>
            <input
              className="registerFormInput"
              type="number"
              value={userProfileAge}
              required
              placeholder="Enter your age"
              onChange={(e) => setUserProfileAge(e.target.value)}
            />
          </div>
          <br/>
          <div>
            <input
              className="registerFormInput"
              type="text"
              value={userProfileCity}
              required
              placeholder="Enter the city"
              onChange={(e) => setUserProfileCity(e.target.value)}
            />
          </div>
          <br/>
          <button type="submit" className = "docAccountButton" onClick={handleUserProfSub}>Create your account</button>
          <br/>
        </form>
       </div>    
    )
}

export default UserProfile ;
