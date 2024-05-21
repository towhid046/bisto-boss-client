import { Outlet } from "react-router";
import logo from "../assets/logo.svg";
import { IoHomeOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { MdPayment } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { MdOutlineReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { GiShoppingBag } from "react-icons/gi";
import { IoMail } from "react-icons/io5";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const {carts} = useCart()
  const lists = [
    {
      id: 11,
      link: "/dashboard/user-home",
      icon: <IoHomeOutline />,
      name: "User Home",
    },
    {
      id: 12,
      link: "/dashboard/reservation",
      icon: <SlCalender />,
      name: "Reservation",
    },
    {
      id: 13,
      link: "/dashboard/payment-history",
      icon: <MdPayment />,
      name: "Payment History",
    },
    {
      id: 14,
      link: "/dashboard/my-cart",
      icon: <FaCartPlus />,
      name: "My Cart",
      items:` (${carts.length})`,
    },
    {
      id: 15,
      link: "/dashboard/add-review",
      icon: <MdOutlineReviews />,
      name: "Add Review",
    },
    {
      id: 16,
      link: "/dashboard/my-booking",
      icon: <TbBrandBooking />,
      name: "My Booking",
    },
  ];
  const lists2 = [
    {
      id: 1,
      link: "/",
      icon: <IoHomeOutline />,
      name: "Home",
    },
    {
      id: 2,
      link: "/our-menu",
      icon: <FiMenu />,
      name: "Menu",
    },
    {
      id: 3,
      link: "/our-shop",
      icon: <GiShoppingBag />,
      name: "Shop",
    },
    {
      id: 4,
      link: "/contact",
      icon: <IoMail />,
      name: "Contact",
    },
  ];

const generateItems = (array)=>{
  const items = array.map((list) => (
    <li key={list.id}>
      <NavLink
        to={list.link}
        className="flex items-center gap-2 uppercase text-black"
      >
        {list.icon}
        {list.name}{list.items || ''}
      </NavLink>
    </li>
  ));
  return items;
}

  return (
    <div className="flex gap-6 container mx-auto px-4">
      <aside className="w-64 min-h-screen bg-[#D1A054] p-7">
        <Link to='/'>
          <img src={logo} alt="" />
        </Link>
        <div className="mt-16">
          <ul className="mb-7 dashboard-menu flex flex-col gap-3 text-lg">{generateItems(lists)}</ul>
          <hr />
          <ul className="mt-7 flex flex-col gap-3 text-lg">{generateItems(lists2)}</ul>
        </div>
      </aside>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
