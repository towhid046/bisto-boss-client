import swal from "sweetalert";
import SectionHeader from "./../../../components/shared/SectionHeader/SectionHeader";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaPenToSquare } from "react-icons/fa6";
import useMenu from "./../../../hooks/useMenu";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";

const ManageItems = () => {
  const { menus, refetch, isLoading } = useMenu();

  const axiosSecure = useAxiosSecure();

  const handleR = (id) => {
    swal({
      title: "Are you sure?",
      text: "Want to delete this item!! ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const deleteData = async () => {
          const res = await axiosSecure.delete(`/menu/${id}`);
          console.log(res?.data);
          if (res.data.deletedCount) {
            refetch();
          }
        };
        deleteData();
      }
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (menus.length <= 0) {
    return (
      <div className="flex justify-center items-center flex-col min-h-screen gap-3">
        <h2 className="text-3xl font-semibold italic text-base-300">
          You have not added any item yet!{" "}
        </h2>
        <Link
          to={"/dashboard/add-item"}
          className="btn btn-sm btn-primary btn-outline"
        >
          Add Item
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-base-200 lg:px-28 px-10 py-6">
      <SectionHeader title="My Cart" heading="Wanna Add More?" />
      <div className="bg-base-100 p-10 rounded">
        <div className="uppercase flex-wrap flex justify-between mb-6">
          <h2 className="text-2xl font-semibold">
            Total Items: {menus.length}
          </h2>
        </div>
        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#d4a358] py-8">
              <tr className="uppercase text-base-100 text-md">
                <th>SN.</th>
                <th>ITEM IMAGE</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {menus?.map((cart, index) => (
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
                    <Link to={`/dashboard/update-item/${cart._id}`}>
                    <button
                      // onClick={() => handleMakeAdmin(user._id)}
                      className="text-lg btn bg-[#d4a358] text-base-100 hover:bg-[#d4a359] "
                    >
                      <FaPenToSquare />
                    </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleR(cart._id)}
                      className="text-lg btn bg-red-500 text-base-100  hover:bg-red-600"
                    >
                      <RiDeleteBin5Fill />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ManageItems;
