import swal from "sweetalert";
import SectionHeader from "./../../../components/shared/SectionHeader/SectionHeader";
import useCart from "./../../../hooks/useCart";
import { RiDeleteBin5Fill } from "react-icons/ri";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyCart = () => {
  const { carts, refetch } = useCart();
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
      <th>
        <button
          onClick={() => handleDeleteItem(cart._id)}
          className="text-lg btn bg-red-500 text-base-100  hover:bg-red-600"
        >
          <RiDeleteBin5Fill />
        </button>
      </th>
    </tr>
  ));

  const handleDeleteItem = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
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
