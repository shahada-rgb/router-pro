import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-4 bg-blue-300 flex gap-5 justify-center  font-semibold">
      <NavLink to="/" className={({ isActive }) =>
        isActive ? "font-bold-underline mix-blend-color-burn" : "hover:underline"
      }>Home</NavLink>

      <NavLink to="/about" className={({ isActive }) =>
        isActive ? "font-bold-underline mix-blend-color-burn px-3 py-2 rounded-b-md" : "hover:underline" 
      }>About</NavLink>

      <NavLink to="/users" className={({isActive})=>
      isActive ? "font-bold-underline mix-blend-color-burn px-3 py-2 rounded-md":"hover:underline"
      } >Users</NavLink>
    </nav>
  );
}

export default Navbar;
