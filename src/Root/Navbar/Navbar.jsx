import logo from "../../assets/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const navigate = useNavigate();

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

  const handleLogOutUser = async () => {
    try {
      await logOutUser();
      toast.success("Logout success");
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <nav className="  text-white uppercase sticky top-0 z-50 bg-neutral">
      <div className="navbar flex justify-between">
        <div className="">
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
              className="menu menu-sm gap-2 dropdown-content mt-3 bg-neutral  z-[1] p-2 shadow text-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl">
            <img className="max-w-44" src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="space-x-7">
          <div className="hidden lg:flex ">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="relative">
            <Link to={"/cart"}>
              <FaCartPlus className="text-xl" />
              <span className="badge badge-primary absolute -top-3 left-3">0</span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            {user && (
              <button onClick={handleLogOutUser} className="font-bold">
                Log Out
              </button>
            )}

            {user ? (
              <img className="w-10 h-10 rounded-full cursor-pointer" title={user.displayName} src={user.photoURL} alt="User" />
            ) : (
              <Link to={"/login"} className="ml-1">
                <CgProfile className="text-3xl" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
