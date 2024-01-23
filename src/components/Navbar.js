import {AuthContext} from "../context/AuthContextProvider";
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/header.css"
function Navbar() {
  const {logout,authDetails}=useContext(AuthContext);
  const navigate=useNavigate();
  const handleLogout=()=>{
    logout();
    navigate("/login")
  }
  return (
    <header>
     <div>
     <Link to="/">Dashboard</Link>
     {authDetails.isAuth?<button onClick={handleLogout}>Logout</button>:<Link to="/login">Login</Link>}
     </div>
     {authDetails.isAuth&&<h2>Hello {authDetails.token}</h2>}
    </header>
  );
}

export default Navbar;
