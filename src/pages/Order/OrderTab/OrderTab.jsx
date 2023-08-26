import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import FoodCard from "../../../components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  // console.log(items);
  let i = 0;
  let finalArray = [];
  while (i < items.length) {
    let arr = [];
    for (let j = 0; j < 3 && i < items.length; j++) {
      arr.push(items[i]);
      i++;
    }
    finalArray.push(arr);

    // console.log(arr);
  }

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="btn btn-circle bg-red-700 text-white hover:text-white hover:bg-[#006353] mb-4 ' +
        className +
        '">' +
        (index + 1) +
        "</span>"
      );
    },
  };

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {finalArray.map((arr) => (
          <>
            <SwiperSlide>
              <div className="grid md:grid-cols-3 gap-10 m-10">
                {arr.map((item) => (
                  <FoodCard key={item._id} item={item}></FoodCard>
                ))}
              </div>
            </SwiperSlide>
            ;
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
