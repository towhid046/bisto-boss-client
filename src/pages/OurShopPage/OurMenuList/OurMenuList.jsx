import { useEffect, useState } from "react";
import MenuListCard from "./../MenuListCard/MenuListCard";
import PropTypes from "prop-types";
const OurMenuList = ({ category }) => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_URL}/menu/${category}`);
        const data = await res.json();
        setMenus(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [category]);

  if (loading) {
    return (
      <div className="flex justify-center py-12 min-h-[80vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return <h2 className="text-3xl font-semibold text-base-300">{error}</h2>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {menus.map((menu) => (
        <MenuListCard key={menu._id} menu={menu} />
      ))}
    </div>
  );
};

OurMenuList.propTypes = {
  category: PropTypes.string.isRequired,
};

export default OurMenuList;
