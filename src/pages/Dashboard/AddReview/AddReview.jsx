import { useRef, useState } from "react";
import SectionHeader from "./../../../components/shared/SectionHeader/SectionHeader";
import { FaLocationArrow } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import swal from "sweetalert";

const AddReview = () => {
  const ratingRef = useRef(null);
  const [rating, setRating] = useState(0);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const handleAddReview = async (e) => {
    e.preventDefault();

    if (rating <= 0) {
      alert("You should give the rating");
      return;
    }
    const form = e.target;
    // const name = form.recipeName.value;
    const name = user?.displayName;
    const details = form.details.value;
    const suggestion = form.suggestion.value;

    const review = {
      name,
      details,
      rating,
      suggestion,
    };
    //    Send review data to SERVER:
    try {
      const res = await axiosSecure.post("/reviews", review);
      if(res.data.insertedId){
        swal('Thanks for you Rating')
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section>
      <SectionHeader title="Sharing is Caring!!!" heading="Give A Review..." />

      <div className="lg:p-12 p-6 bg-base-200">
        <div className="flex flex-col items-center gap-4 mb-12">
          <h2 className="uppercase text-2xl font-semibold">Rate us</h2>
          <Rating
            style={{ maxWidth: 180 }}
            ref={ratingRef}
            value={rating}
            onChange={setRating}
          />
        </div>
        <form onSubmit={handleAddReview} className="space-y-3">
          <div className="w-full">
            <label className="label">
              <strong className="label-text">
                Which recipe you liked most?
              </strong>
            </label>
            <input
              type="text"
              name="recipeName"
              placeholder="Recipe you liked most"
              className="focus:outline-none input w-full rounded-md outline-none"
              required
            />
          </div>

          <div className="w-full">
            <label className="label">
              <strong className="label-text">
                Do you have any suggestion for us?
              </strong>
            </label>
            <input
              type="text"
              name="suggestion"
              placeholder="Suggestion"
              className="focus:outline-none input w-full rounded-md outline-none"
              required
            />
          </div>
          <div>
            <label className="label">
              <strong className="label-text">
                Kindly express your care in a short way.
              </strong>
            </label>
            <textarea
              className="focus:outline-none input w-full rounded-md outline-none textarea  text-base xl:h-50 h-40"
              required
              name="details"
              placeholder="Review in detail"
            ></textarea>
          </div>

          <div className="pt-2">
            <button className="flex items-center gap-4 btn border-none  rounded-md hover:bg-black text-white bg-[#d4a358]">
              <p> Send Review</p>
              <span>
                <FaLocationArrow className="text-base-100" />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddReview;
