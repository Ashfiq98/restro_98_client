import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <div className="flex flex-row-reverse">
          <button className="uppercase btn btn-outline bg-slate-200 hover:bg-red-700 hover:text-white  text-black mb-20 ml-10 mr-10 ">
            Order now
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MenuCategory;
