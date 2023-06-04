import {useState} from 'react' ;
import {Link} from 'react-router-dom' ;
import axios from 'axios' ;
import {message} from 'antd' ;
import {useNavigate} from 'react-router-dom' ;

const Login = () => 
{

   const[email,setEmail] = useState('') ;
   const[password,setPassword] = useState('') ;
   var navigate = useNavigate() ;
   const handleSubmitLogin = async(e) => 
   {
       e.preventDefault() ;
      try 
       {
          const resLogin = await axios.post("http://localhost:3500/api/users/postLogin", 
          {
             email:email ,
             password:password  
          }
          )
          if(resLogin.data.success)
          {
              localStorage.setItem("token",resLogin.data.token) ;
              message.success(" Login successfull ") ;
              navigate("/") ;
          }
          else 
          {
              message.error(" Unable to login ") ; 
          }
       }
        catch(error)
         {
           message.error(" Something went wrong ") ;
         }     
   }

   return (
   <div className = "Register">
   <h2 className = "registrationHeading">Enter your login details</h2> 
   <form className = "registerForm">
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
      <button type="submit" className = "registerButton" onClick={handleSubmitLogin}>Login</button>
      <br/>
      <p>
      <Link to = "/Register" className="loginRedirect">
      New user register
      </Link>    
      </p>
    </form>
   </div> 
   ) 
}

export default Login ;
