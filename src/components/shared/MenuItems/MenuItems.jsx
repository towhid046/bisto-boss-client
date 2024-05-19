import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const MenuItems = ({ menuCategory }) => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_URL}/menu/${menuCategory}`
        );
        const data = await res.json();
        setMenus(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const menuList = menus.map((menu) => (
    <li key={menu._id} className="flex items-start gap-4">
      <figure>
        <img className="w-24 h-24 rounded-full" src={menu.image} alt="" />
      </figure>
      <div>
        <h3 className="uppercase text-lg font-medium">{menu.name}---------</h3>
        <p>{menu.recipe}</p>
      </div>
      <div>
        <strong className="text-yellow-600">{menu.price}</strong>
      </div>
    </li>
  ));

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  
  if (error) {
    return (
      <h2 className="text-center text-3xl text-gray-300 italic">{error}</h2>
    );
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">{menuList}</div>
  );
};

MenuItems.propTypes = {
  menuCategory: PropTypes.string.isRequired,
};
export default MenuItems;
