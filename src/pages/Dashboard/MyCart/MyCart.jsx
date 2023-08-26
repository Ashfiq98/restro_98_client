import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart, refetch] = useCart();

  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
    Swal.fire({
      title: `Do you want to delete ${item.name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://restro-98-server-ashfiq98.vercel.app/carts/${item._id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire({
                text: `${item.name} has been deleted from your cart`,
                icon: "success",
                title: "Deleted!",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    });
  };

  return (
    <div className="w-full max-w-screen-md	mx-auto border-dotted  border-2 rounded-lg border-slate-600">
      <Helmet>
        <title>Restro98 | My cart</title>
      </Helmet>
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-xl">Total Items: {cart.length}</h3>
        <h3 className="text-xl">Price: {total} $</h3>
        <Link to="/dashboard/payment">
          {cart.length > 0 ? (
            <button className="btn btn-outline btn-sm bg-[#006353]  hover:bg-white hover:text-black  border-0">
              Pay now
            </button>
          ) : (
            <></>
          )}
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#004c40]">
            <tr className="p-10">
              <th>#</th>
              <th>Food</th>
              <th>Item name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="">{item.price} $</td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn btn-ghost text-white bg-red-800"
                  >
                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
