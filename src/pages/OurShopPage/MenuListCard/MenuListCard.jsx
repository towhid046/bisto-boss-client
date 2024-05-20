import PropTypes from "prop-types";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
} from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";
import { useNavigate } from "react-router";

const MenuListCard = ({ menu }) => {
  const { user } = useAuth();
  const { name, recipe, price, image } = menu;
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  // Queries
  const query = useQuery({ queryKey: ["todos"], queryFn: () => {} });

  const handleAddToCart = (item) => {
    if (user && user.email) {
      // TODO: sent card data to DB
      console.log(item, user?.email);
    } else {
      swal({
        title: "You are not Logged In",
        text: "Please login to add to the cart",
        icon: "info",
        buttons: true,
      }).then((willDelete) => {
        if (willDelete) {
          navigate("/login");
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
