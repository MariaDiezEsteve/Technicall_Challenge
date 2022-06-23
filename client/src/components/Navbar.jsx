import { NavLink } from "react-router-dom";

function Navbar() {
  
  return (
    <div>
      <NavLink to="/" > Home </NavLink>
      <NavLink to="/phones" > See Phones </NavLink>
      <NavLink to="/phones/:id" end={true} > See Details Phone</NavLink>

    </div>
  );
}

export default Navbar;
