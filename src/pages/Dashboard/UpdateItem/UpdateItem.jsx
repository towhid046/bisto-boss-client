import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
import { useForm } from "react-hook-form";

import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import swal from "sweetalert";
import { useLoaderData, useNavigate } from "react-router";

const UpdateItem = () => {
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()

  const { _id, name, recipe, category, price } = useLoaderData();

  const onSubmit = async (data) => {
    const item = {
      name: data?.name,
      recipe: data?.recipe,
      category: data?.category,
      price: data?.price,
    };


    try {
      // send data to server:
      const res = await axiosSecure.patch(`/menu?id=${_id}`, item);
      if(res.data.modifiedCount){
        swal('Updated', 'Menu Item is updated', 'success')
        navigate('/dashboard/manage-items')
      }
    } catch (error) {
      console.error(error.message);
    }

    // const result = await axiosSecure.post("/add-menu", item);
    // if (result?.data?.insertedId) {
    //   reset();
    //   swal("Added", "Item is added to the menu", "success");
    // }
  };

  return (
    <section className="mb-16">
      <SectionHeader title="What's new?" heading="Add an Item" />
      <div className="bg-base-300 lg:p-12 p-5">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="space-y-4">
            <div className="w-full">
              <label className="label">
                <strong className="label-text">Recipe Name *</strong>
              </label>
              <input
                type="text"
                // name="recipeName"
                {...register("name")}
                defaultValue={name}
                placeholder="Recipe name"
                className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
                required
              />
            </div>

            <div className="flex flex-col lg:flex-row w-full gap-6">
              <div className="flex-1">
                <label className="label">
                  <strong className="label-text">Category *</strong>
                </label>
                <select
                  //   name="category"
                  {...register("category")}
                  defaultValue={category}
                  className="select focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
                >
                  <option>Category</option>
                  <option value={"salad"}>Salad</option>
                  <option value={"pizza"}>Pizza</option>
                  <option value={"soup"}>Soup</option>
                  <option value={"dessert"}>Dessert</option>
                  <option value={"drinks"}>Drink</option>
                </select>
              </div>
              <div className="flex-1">
                <label className="label">
                  <strong className="label-text">Price *</strong>
                </label>
                <input
                  type="number"
                  //   name="price"
                  {...register("price")}
                  defaultValue={price}
                  placeholder="Price"
                  className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3]"
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <label className="label">
              <strong className="label-text">Recipe Details *</strong>
            </label>
            <textarea
              className="focus:outline-none input w-full rounded-none outline-none bg-[#f3f3f3] textarea  text-base xl:h-60 h-40"
              //   name="recipeDetails"
              {...register("recipe")}
              defaultValue={recipe}
              required
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div className="pt-2 flex justify-center">
            <button className="btn border-none  rounded-none hover:bg-black text-white bg-[#d1a045]">
              Update Recipe Item
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateItem;
