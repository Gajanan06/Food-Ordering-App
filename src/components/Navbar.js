import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="logo"><Link className = "nav-link" to="/">🍔 FoodApp</Link></div>

      <ul className="nav-links">
        <li><Link className = "nav-link" to="/">Home</Link></li>
        <li><Link className = "nav-link" to="/about">About</Link></li>
        <li><Link className = "nav-link" to="/contact">Contact</Link></li>
        <li><Link className = "nav-link" to="/cart">Cart</Link></li>
      </ul>

    </div>
  );
};

export default Navbar;