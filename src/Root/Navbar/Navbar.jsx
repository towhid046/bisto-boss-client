import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item 2</a>
      </li>

      <li>
        <a>Item 3</a>
      </li>
    </>
  );

  return (
    <nav className="  text-white opacity-60 bg-neutral w-[91.4%] fixed z-10 ">
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
            <CgProfile className="text-2xl"/>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
