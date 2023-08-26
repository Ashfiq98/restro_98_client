import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Catergory from "../Category/Catergory";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Restro98 | Home</title>
      </Helmet>
      <Banner></Banner>
      <Catergory></Catergory>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
