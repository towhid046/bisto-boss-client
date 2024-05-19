import PropTypes from "prop-types";
const MenuListCard = ({ menu }) => {
  const { name, recipe, price, image } = menu;
  return (
    <div className="bg-base-300 border-2 hover:border-blue-300 border-white cursor-pointer ">
      <figure className="relative">
        <img className="w-full" src={image} alt={name + " Image"} />
        <strong className="absolute top-4 right-4 bg-neutral text-base-100 px-5 py-2">
          ${price}
        </strong>
      </figure>
      <div className="p-5 space-y-2">
        <h2 className="text-xl font-bold text-center">{name}</h2>
        <p>{recipe}</p>
        <div className=" flex justify-center">
          <button className="btn border-b-2 border-b-yellow-600 uppercase text-yellow-600 hover:bg-neutral">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

MenuListCard.propTypes = {
  menu: PropTypes.object.isRequired,
};

export default MenuListCard;
