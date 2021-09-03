import React from "react";
import { Link,useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Logout } from "../../redux/actions";
const Navbar = () => {
  const dispatch=useDispatch();
  const history = useHistory();
  const handleLogout = () => {
   
      dispatch(Logout());
      // console.log(isLoggedIn);
      history.push("/login");
  
  };
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/homepage" >
          <h1>Event Finder</h1>
        </Link>
      </div>
      <div className="header__button">
        <div><button className="header__login" onClick={handleLogout}>Logout</button></div>
        <Link to="/homepage"> <div>  <button className="header__logout"><Link to={`/add-event`} className="add-btn"> Add Event</Link></button></div> </Link>
      </div>
    </div>
  );
};

export default Navbar;