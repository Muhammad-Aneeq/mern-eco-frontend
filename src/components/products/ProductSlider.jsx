import React from "react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";
// import "swiper/swiper.min.css";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slideStyles = {
  boxSizing: "border-box",
  maxWidth: "350px",
};

const ProductSlider = ({ products }) => {
  const sliderSettings = {
    modules: [Navigation, A11y, Autoplay],
    spaceBetween: 20,
    slidesPerView: "auto",
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };
  return (
    <div className="h-full w-full my-8">
      <Swiper {...sliderSettings} className="h-full w-full">
        {products?.map((product, i) => (
          <SwiperSlide key={i} style={slideStyles}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
