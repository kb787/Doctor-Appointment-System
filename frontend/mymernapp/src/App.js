import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom' ;
import Homepage from "./Homepage" ;
import Login from "./Login" ;
import Register from "./Register" ;
import DocAccount from "./DocAccount" ;
import DocProfile from "./DocProfile" ;
import UserProfile from "./UserProfile" ;


// import ProtectedRoutes  from './ProtectedRoutes';
// import PublicRoutes from './PublicRoutes' ;
 
function App() {
  return (
  <div className="App">
    <BrowserRouter>
     <Routes>
        <Route path="/" element = {<Homepage/> } />
        <Route path="/Login" element = {<Login/>} />
        <Route path="/Register" element = {<Register/>} />
        <Route path="/DocAccount" element = {<DocAccount/>} />
        <Route path="/DocProfile" element = {<DocProfile/>}/>
        <Route path="/UserProfile" element = {<UserProfile/>}/> 
     </Routes> 
    </BrowserRouter>
    </div>
  );
}

export default App;
