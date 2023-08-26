import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Category.css";
const Catergory = () => {
  return (
    <section>
      <SectionTitle
        heading={"Order online"}
        subHeading={"From 11.00am to 10.00 pm"}
      ></SectionTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
          <img className="swiper-img" src={slide1} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-18 text-white">
            Salad
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-img" src={slide2} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-18 text-white">
            Pizza
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-img" src={slide3} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-18 text-white">
            Soup
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-img" src={slide4} alt="" />
          <h3 className="text-4xl uppercase text-center -mt-18 text-white">
            Dessert
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Catergory;
