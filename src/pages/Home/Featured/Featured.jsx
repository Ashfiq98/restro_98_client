import { Link } from "react-router-dom";
import featuredImage from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-20">
      <SectionTitle
        subHeading="check it out"
        heading="Featured item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-800 bg-opacity-60 pb-20 pt-12 px-36">
        <div>
          <img className="rounded-lg" src={featuredImage} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Sept 12, 2028</p>
          <p className="uppercase">where can i get food?</p>
          <p>
            <span className="text-yellow-200">Pizza</span> is a popular and
            versatile dish originating from Italy.
            <span className="text-yellow-200">Desserts</span> are sweet treats
            enjoyed after a meal or as a standalone indulgence.
            <span className="text-yellow-200">Soup</span> is a nourishing dish
            made by simmering ingredients like vegetables, meat, seafood, or
            legumes in liquid, often broth or stock.
            <span className="text-yellow-200">Salad</span> is a dish made by
            combining various raw or cooked ingredients, such as vegetables,
            fruits, proteins (like chicken or seafood), and sometimes grains.
            <span className="text-yellow-200">Drinks</span> encompass a wide
            range of beverages, both alcoholic and non-alcoholic, that
            complement meals or refresh on their own. To get all of these ,
            Please
          </p>
          <Link to="/order/salad">
            <button className="uppercase btn btn-outline bg-slate-200  text-black  mt-6  hover:bg-red-700 hover:text-white">
              Order now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
