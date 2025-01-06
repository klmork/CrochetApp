import { NavLink } from "react-router-dom";
import "./Navbar.css";

interface MenuItemProps {
  label: string;
  to: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "active-link" : "")}
    >
      {label}
    </NavLink>
  );
};

export default MenuItem;
