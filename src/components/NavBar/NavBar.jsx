import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context/Context";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";


function NavBar() {
  const activeStyle = "underline underline-offset-4";
  const { count, setsearchByCategory } = useContext(ShoppingCartContext);  


  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm  font-semibold top-0">
      <ul className="flex items-center gap-3">
        <li className="font-bold text-lg">
          <NavLink 
          to="/" 
          onClick={()=> setsearchByCategory(null)}
          >Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/All"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={()=> setsearchByCategory(null)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={()=> setsearchByCategory("clothes")}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={()=> setsearchByCategory("Electronics")}

          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Furnitures"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={()=> setsearchByCategory("Furniture")}

          >
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={()=> setsearchByCategory("Others")}

          >
            Others
          </NavLink>
        </li>
      </ul>

      <ul className="flex items-center gap-3">
        <li>
          <NavLink
            to="/MyAccount"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            MyAccount
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/MyOrders/0"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            MyOrder
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/MyOrders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            MyOrders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/SignIn"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            SignIn
          </NavLink>
        </li>

        <li className="flex gap-1">
          <ShoppingCartIcon className="h-6 w-6 text-black" /> {count}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
