import { NavLink } from "react-router-dom"
import Icon from "./Icon"


const NavBar = ()=>{
    return(
        <nav className="flex flex-col items-center gap-y-3">
            <NavLink to="/kavun">
            {({ isActive }) => (
              <Icon name={isActive ? "home-filled" : "home"} size={24} />
            )}
          </NavLink>
          <NavLink to="/kavun/auth/login">
            {({ isActive }) => (
              <Icon name={isActive ? "direct-filled" : "direct"} size={24} />
            )}
          </NavLink>
          <NavLink to="/">
            <Icon name="explore" size={24} />
          </NavLink>
          <NavLink to="/">
            <Icon name="heart" size={24} />
          </NavLink>
        </nav>
    )
}
export default NavBar