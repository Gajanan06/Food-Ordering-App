import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-white shadow-md ">

      <div className="text-xl font-bold text-orange-500 "><Link className = "nav-link" to="/">🍔 FoodApp</Link></div>

      <ul className="flex gap-5">
        <li className=" mx-3 cursor-pointer font-medium"><Link className = "nav-link" to="/">Home</Link></li>
        <li className="mx-3 cursor-pointer font-medium"><Link className = "nav-link" to="/about">About</Link></li>
        <li className="mx-3 cursor-pointer font-medium"><Link className = "nav-link" to="/contact">Contact</Link></li>
        <li className="mx-3 cursor-pointer font-medium"><Link className = "nav-link" to="/cart">Cart</Link></li>
      </ul>

    </div>
  );
};

export default Navbar;