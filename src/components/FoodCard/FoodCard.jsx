import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../providers/AuthProvider";
import "./FoodCard.css";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();

  const handleAddToCart = (item) => {
    // console.log(item);
    if (user) {
      const cartItem = { foodId: _id, name, image, price, email: user.email };
      fetch("https://restro-98-server-ashfiq98.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // to update the cart items
            Swal.fire({
              text: "Added to cart",
              icon: "success",
              title: `${item.name}`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Please! Login",
        text: "To get your food, you must logged in",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="css-card card w-96 bg-slate-750 shadow-2xl mb-10 ">
      <figure>
        <img
          src={image}
          style={{ height: "247px", width: "370px" }}
          alt="foods"
        />
      </figure>
      <p className="rounded-md absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        {price} $
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="uppercase btn btn-outline hover:bg-red-700 hover:text-white  mt-6"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
