import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';

import { useEffect, useState } from "react";
import SectionHeader from "./../../../components/shared/SectionHeader/SectionHeader";

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("reviews.json");
      const data = await res.json();
      setReviews(data);
    };
    loadData();
  }, []);

  return (
    <section className="mb-16">
      <SectionHeader title="what our clients say" heading="TEstimonials" />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center max-w-3xl mx-auto text-center gap-5">
            <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
            <div>
              <FaQuoteLeft className="text-7xl text-neutral" />
            </div>
            <p>{review.details}</p>
            <h2 className="text-2xl uppercase text-yellow-600">{review.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
