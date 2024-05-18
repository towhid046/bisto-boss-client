import SectionHeader from "./../../../components/shared/SectionHeader/SectionHeader";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ItemList = () => {
  const slides = [
    { img: slide1, title: "Salads" },
    { img: slide2, title: "Soups" },
    { img: slide3, title: "Pizzas" },
    { img: slide4, title: "Desserts" },
    { img: slide5, title: "Salad" },
  ];
  return (
    <section className="mb-16">
      <SectionHeader title="From 11:00am to 10:00pm" heading="Order online" />
      <div>
        <Swiper
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <img src={slide.img} alt="" />
                <p className="uppercase relative -top-14 text-base-100 text-2xl text-center font-light">
                  {slide.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ItemList;
