import {useState} from 'react' ;
import {Link} from 'react-router-dom' ;
import {message} from 'antd' ;
import axios from 'axios' ;
import {useNavigate} from 'react-router-dom' ;
const Register = () => 
{

   var nav = useNavigate() ; 
   const[userType,setUserType] = useState('') ;
   const[email,setEmail] = useState('') ;
   const[password,setPassword] = useState('') ;
   
   const handleSubmit = async (e) => {
    e.preventDefault();
     try
     {
      const res = await axios.post("http://localhost:3500/api/users/postRegister", {
        userType:userType ,
        email: email,
        password: password
      });
      if (res.data.success) {
        message.success("Successfully registered");
        nav("/UserProfile");
      }
    }
    catch {
     message.error("Unable to register");
    }
  };

   return (
   <div className = "Register">
   <h2 className = "registrationHeading">Enter your registration details</h2> 
   <form className = "registerForm">
   <div>
        <input
          className = "registerFormInput"  
          type="text"
          value={userType}
          required
          placeholder="User type :- general/admin"
          onChange={(e) => setUserType(e.target.value)}
        />
      </div>
      <br/>
      <div>
        <input
          className = "registerFormInput"  
          type="email"
          value={email}
          required
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br/>
      <div>
        <input
          className="registerFormInput"
          type="password"
          value={password}
          required
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br/>
      <button type="submit" className = "registerButton" onClick={handleSubmit}>Register</button>
      <br/>
      <p>
      <Link to = "/Login" className="loginRedirect">
      Already registered login
      </Link>    
      </p>
    </form>
   </div> 
   ) 
}

export default Register ;