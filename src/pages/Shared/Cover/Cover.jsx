import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-300}
    >
      <div className="hero h-[600px]">
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="uppercase mb-5 text-5xl font-bold text-white">
              {title}
            </h1>

            {title === "our menu" ? (
              <p className="mb-5 text-2xl text-white">
                We have delicious food item. Please check all the items such as
                Pizza,Drinks,Dessert and many more
              </p>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
