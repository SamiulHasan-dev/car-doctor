import { Link } from "react-router-dom";
import logo from '../../../assets/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      console.log(error);
    })
  }

    const navItems = <>
    <li><Link to="/" className="font-bold">Home</Link></li>
    <li><Link to="/about" className="font-bold">About</Link></li>
    {
      user?.email ? <li><button onClick={handleLogOut}>Log Out</button></li> :
      <li><Link to="/login" className="font-bold">Login</Link></li>
    }
    
    
    </>

    
    return (
        <div>
            <div className="navbar bg-base-100 mb-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-xl md:mb-3"><img className="h-16 w-16 md:h-20 md:w-20" src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn uppercase font-semibold text-orange-500 border-2 border-orange-500 p-2 rounded-lg ">Appointment</button>
  </div>
</div>
        </div>
    );
};

export default NavBar;