import classNames from "classnames";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import Icon from "./Icon"
import noAvatar from './no-avatar.jpg'


const NavBar = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <nav className="flex gap-x-3 relative">
      <NavLink to="/kavun">
        {({ isActive }) => (
          <Icon name={isActive ? "home-filled" : "home"} size={24} />
        )}
      </NavLink>
      {/* <NavLink to="/kavun"> */}
      <NavLink to={`/kavun/${user.username}`}>
        {({ isActive }) => <img src={noAvatar} alt="" className={classNames({
          "w-6 h-6 rounded-full": true,
          "ring-1 ring-offset-1	ring-black": isActive
        })} />}
      </NavLink>
      <NavLink to="/kavun/logout">
        <h1 className="font-semibold">Log out</h1>
      </NavLink>
      <NavLink to="/kavun/inbox">
        {({ isActive }) => (
          <Icon name={isActive ? "direct-filled" : "direct"} size={24} />
        )}
      </NavLink>
    </nav>
  )
}
export default NavBar