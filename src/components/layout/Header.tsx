import { NavLink } from "react-router-dom";
import "../../styles/layout.css";

const Header = () => {
  return (
    <header className="header">
      {/* Left side (logo / title) */}
      <div className="header-left">
        <h1 className="logo">Rath</h1>
      </div>

      {/* Right side (NavLink) */}
      <nav className="nav">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink to="/about" className="nav-link">
          About
        </NavLink>

        <NavLink to="/products" className="nav-link">
          Products
        </NavLink>


      </nav>
    </header>
  );
};

export default Header;
