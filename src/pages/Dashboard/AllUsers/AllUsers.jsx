import swal from "sweetalert";
import SectionHeader from "./../../../components/shared/SectionHeader/SectionHeader";
import { RiDeleteBin5Fill } from "react-icons/ri";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa6";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data;
    },
  });

  const handleMakeAdmin = async (id) => {
    swal({
      title: "Are you sure?",
      text: "Want to Make Admin this User!! ",
      icon: "info",
      buttons: true,
    }).then((willDelete) => {
      if (willDelete) {
        const makeAdmin = async () => {
          try {
            const { data } = await axiosSecure.patch(`/users/admin/${id}`);
            if (data.modifiedCount > 0) {
              refetch();
            }
          } catch (error) {
            console.error(error.message);
          }
        };
        makeAdmin();
      }
    });
  };

  const handleDeleteUser = (id) => {
    swal({
      title: "Are you sure?",
      text: "Want to delete this item!! ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const deleteData = async () => {
          const res = await axiosSecure.delete(`/users/${id}`);
          if (res.data.deletedCount) {
            refetch();
          }
        };
        deleteData();
      }
    });
  };

  const items = users.map((user, index) => (
    <tr key={user._id}>
      <th>{index + 1}</th>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        {user.role === "admin" ? (
          <button className="btn btn-success">Admin</button>
        ) : (
          <button
            onClick={() => handleMakeAdmin(user._id)}
            className="text-lg btn bg-[#d4a358] text-base-100 hover:bg-[#d4a359] "
          >
            <FaUsers />
          </button>
        )}
      </td>
      <td>
        <button
          onClick={() => handleDeleteUser(user._id)}
          className="text-lg btn bg-red-500 text-base-100  hover:bg-red-600"
        >
          <RiDeleteBin5Fill />
        </button>
      </td>
    </tr>
  ));

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (users.length <= 0) {
    return (
      <div className="flex justify-center items-center flex-col min-h-screen gap-3">
        <h2 className="text-3xl font-semibold italic text-base-300">
          No users have registered yet!{" "}
        </h2>
      </div>
    );
  }

  return (
    <section className="bg-base-200 lg:px-28 px-10 py-6">
      <SectionHeader title="How Many" heading="Manage all Users" />
      <div className="bg-base-100 p-10 rounded">
        <h2 className="text-2xl font-semibold mb-6">
          Total Users: {users.length}
        </h2>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#d4a358] py-8">
              <tr className="uppercase text-base-100 text-md">
                <th>SN.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
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

export default AllUsers;
