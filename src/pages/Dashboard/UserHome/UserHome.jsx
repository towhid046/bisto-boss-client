import { MdPayment } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {

  const {user} = useAuth();

  const lists = [
    {
      id: 1,
      bgColor: "#be3bf5",
      icon: <MdPayment />,
      count: 205,
      title: "Menu",
    },
    {
      id: 2,
      bgColor: "#d4a358",
      icon: <IoHomeOutline />,
      count: 103,
      title: "Shop",
    },
    {
      id: 3,
      bgColor: "#FE4C83",
      icon: <FiPhoneCall />,
      count: 30,
      title: "Contact",
    },
  ];

  const items = lists.map((list) => (
    <div
      key={list.id}
      className={`bg-gradient-to-r from-[#be3bf5] to-base-200  py-5 px-16 rounded-md flex-1`}
    >
      <div className="flex justify-center items-center gap-2 text-base-100">
        <span className="text-4xl">{list.icon}</span>
        <div>
          <strong className="text-2xl font-bold">{list.count}</strong>
          <p>{list.title}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="space-y-6 min-h-screen">
      <h2 className="text-2xl font-semibold my-7">Hi, Welcome Back</h2>
      <div className="flex gap-5 justify-between flex-wrap">{items}</div>
      <div className="flex lg:flex-row flex-col">
        <div className="flex-1 text-center bg-orange-100 flex justify-center py-8 items-center flex-col border-r-[#d4a358] border-2 border-orange-100">
          <div>
            <img src={user?.photoURL} className="border-2 border-[#d4a358]   w-32 h-32 rounded-full" alt="" />
          </div>
          <h2 className="text-2xl text-center font-semibold mt-5">{user?.displayName}</h2>
        </div>
        <div className="flex-1 p-10 bg-orange-200">
          <h2 className="uppercase mb-7 font-semibold text-2xl ">
            Your Activities
          </h2>
          <ul>
            <li>Orders: 6</li>
            <li>Reviews: 2</li>
            <li>Bookings: 1</li>
            <li>Payment: 3</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default UserHome;
