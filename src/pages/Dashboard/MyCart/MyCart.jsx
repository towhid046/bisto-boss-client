import swal from "sweetalert";
import SectionHeader from "./../../../components/shared/SectionHeader/SectionHeader";
import useCart from "./../../../hooks/useCart";
import { RiDeleteBin5Fill } from "react-icons/ri";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const MyCart = () => {
  const { carts, refetch, isLoading } = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = carts.reduce((acc, curr) => acc + curr.price, 0);

  const items = carts.map((cart, index) => (
    <tr key={cart._id}>
      <th>{index + 1}</th>
      <td>
        <div className="mask mask-squircle w-12 h-12">
          <img src={cart.image} alt="Image" />
        </div>
      </td>
      <td>{cart.name}</td>
      <td>{cart.price}</td>
      <td>
        <button
          onClick={() => handleDeleteItem(cart._id)}
          className="text-lg btn bg-red-500 text-base-100  hover:bg-red-600"
        >
          <RiDeleteBin5Fill />
        </button>
      </td>
    </tr>
  ));

  const handleDeleteItem = (id) => {
    swal({
      title: "Are you sure?",
      text: "Want to delete this item!! ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const deleteData = async () => {
          const res = await axiosSecure.delete(`/carts/${id}`);
          if (res.data.deletedCount) {
            refetch();
          }
        };
        deleteData();
      }
    });
  };

  if(isLoading){
    return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
  }

  if(carts.length <= 0){
    return <div className="flex justify-center items-center flex-col min-h-screen gap-3">
        <h2 className="text-3xl font-semibold italic text-base-300">You have not added any item yet! </h2>
        <Link to={'/our-shop'} className="btn btn-sm btn-primary btn-outline">Add Item</Link>
    </div>
  }

  return (
    <section className="bg-base-200 lg:px-28 px-10 py-6">
      <SectionHeader title="My Cart" heading="Wanna Add More?" />
      <div className="bg-base-100 p-10 rounded">
        <div className="uppercase flex-wrap flex justify-between mb-6">
          <h2 className="text-2xl font-semibold">
            Total Orders: {carts.length}
          </h2>
          <h2 className="text-2xl font-semibold">
            Total Price: $ {totalPrice}
          </h2>
          <button className="btn bg-[#d4a358]">PAY</button>
        </div>
        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#d4a358] py-8">
              <tr className="uppercase text-base-100 text-md">
                <th>SN.</th>
                <th>ITEM iMAGE</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{items}</tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyCart;
