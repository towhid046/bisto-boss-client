import MenuListCard from "./../MenuListCard/MenuListCard";
import PropTypes, { object } from "prop-types";
const OurMenuList = ({ menus }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {menus.map((menu) => (
        <MenuListCard key={menu._id} menu={menu} />
      ))}
    </div>
  );
};

OurMenuList.propTypes = {
  menus: PropTypes.arrayOf(object).isRequired,
};

export default OurMenuList;
