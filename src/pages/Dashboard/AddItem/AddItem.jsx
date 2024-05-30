import SectionHeader from "../../../components/shared/SectionHeader/SectionHeader";
import { FaUtensils } from "react-icons/fa6";
import { useForm } from "react-hook-form";

const imgbb_api_key = import.meta.env.VITE_IMGBB_API_KEY;
import useAxiosPublic from "./../../../hooks/useAxiosPublic";
import useAxiosSecure from "./../../../hooks/useAxiosSecure";
import swal from "sweetalert";

const img_hosting_api = `https://api.imgbb.com/1/upload?key=${imgbb_api_key}`;

const AddItem = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };

    const res = await axiosPublic.post(img_hosting_api, imageFile, {
      headers: { "content-type": "multipart/form-data" },
    });

    const imgUrl = res.data?.data.display_url;

    const item = {
      name: data?.name,
      recipe: data?.recipe,
      image: imgUrl,
      category: data?.category,
      price: data?.price,
    };

    const result = await axiosSecure.post("/add-menu", item);
    if (result?.data?.insertedId) {
      reset();
      swal("Added", "Item is added to the menu", "success");
    }
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
              required
              placeholder="Recipe Details"
            ></textarea>
          </div>
          <div>
            <input
              type="file"
              //   name="recipeImage"
              {...register("image")}
              className="file-input w-full max-w-xs"
            />
          </div>
          <div className="pt-2">
            <button className="flex items-center gap-4 btn border-none  rounded-none hover:bg-black text-white bg-[#D1A054]">
              <p> Add Item</p>
              <span>
                <FaUtensils className="text-base-100" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddItem;
