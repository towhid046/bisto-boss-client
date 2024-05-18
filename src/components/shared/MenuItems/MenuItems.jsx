import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const MenuItems = ({ menuCategory }) => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("menu.json");
      const data = await res.json();
      setMenus(data);
    };
    loadData();
  }, []);

  const menuList = menus
    .filter((item) => item.category === menuCategory)
    .map((menu) => (
      <li key={menu._id} className="flex items-start gap-4">
        <figure>
          <img className="w-24 h-24 rounded-full" src={menu.image} alt="" />
        </figure>
        <div>
          <h3 className="uppercase text-lg font-medium">
            {menu.name}---------
          </h3>
          <p>{menu.recipe}</p>
        </div>
        <div>
          <strong className="text-yellow-600">{menu.price}</strong>
        </div>
      </li>
    ));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">{menuList}</div>
  );
};

MenuItems.propTypes = {
  menuCategory: PropTypes.string.isRequired,
};
export default MenuItems;
