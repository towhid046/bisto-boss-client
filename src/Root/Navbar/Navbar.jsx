import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/our-menu"}>Our Menu</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/contact-us"}>Contact us</NavLink>
      </li>
      <li>
        <NavLink to={"/our-shop"}>Our Shop</NavLink>
      </li>
    </>
  );

  return (
    <nav className="  text-white uppercase sticky top-0 z-50 bg-neutral">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl">
            <img className="max-w-44" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="navbar-end space-x-4">
          <div className="hidden lg:flex ">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div>
            <Link>
              <FaCartPlus className="text-xl" />
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <button className="font-bold">Log Out</button>
            <Link>
              <CgProfile className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
