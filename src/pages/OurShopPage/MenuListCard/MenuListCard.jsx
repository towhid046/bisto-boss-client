import PropTypes from "prop-types";

import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";
import { useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import useCart from "../../../hooks/useCart";

const MenuListCard = ({ menu }) => {
  const { name, recipe, price, image, _id } = menu;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const { refetch } = useCart();

  const axiosSecure = useAxiosSecure();

  const handleAddToCart = async (item) => {
    if (user && user.email) {
      const newItem = {};
      newItem.user_email = user?.email;
      newItem.name = item.name;
      newItem.recipe = item.recipe;
      newItem.image = item.image;
      newItem.current_id = item._id;
      newItem.category = item.category;
      newItem.price = item.price;

      try {
        await axiosSecure.post("/carts", { newItem });
        toast.success(`${item.name} is added to cart`, {
          position: "top-center",
          autoClose: 2000,
        });
        refetch();
      } catch (error) {
        console.error(error.message);
        toast.error(`${error.message}`);
      }
    } else {
      swal({
        title: "You are not Logged In",
        text: "Please login to add item to the Cart",
        icon: "info",
        buttons: true,
      }).then((willDelete) => {
        if (willDelete) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="bg-base-300 border-2 hover:border-blue-300 border-white cursor-pointer transition ease-in-out duration-300">
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
          <button
            onClick={() => handleAddToCart(menu)}
            className="btn border-b-2 border-b-yellow-600 uppercase text-yellow-600 hover:bg-neutral"
          >
            Add to Cart
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
