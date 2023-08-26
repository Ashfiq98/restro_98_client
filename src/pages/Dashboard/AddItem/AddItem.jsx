import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgURL,
          };
          newItem.image = imgURL;
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((res) => {
            console.log("After posting new menu item", res.data);
            if (res.data.insertedId) {
              reset();
              Swal.fire({
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };
  console.log(errors);
  // console.log(img_hosting_token);
  return (
    <div className="w-full max-w-screen-md	mx-auto px-12">
      <SectionTitle
        subHeading="What's new"
        heading="Add an item"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full  mb-4">
          <label className="label">
            <span className="label-text  font-semibold">Recipe name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            {...register("name", { required: true, maxLength: 80 })}
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex my-2">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Category*</span>
            </label>
            <select
              defaultValue="Pick One"
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick one</option>
              <option>salad</option>
              <option>pizza</option>
              <option>soup</option>
              <option>dessert</option>
              <option>drinks</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs ml-4">
            <label className="label">
              <span className="label-text  font-semibold">Price*</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              {...register("price", { required: true })}
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Receipe details*</span>
          </label>
          <textarea
            {...register("recipe", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs my-4">
          <label className="label">
            <span className="label-text">Item image</span>
          </label>
          <input
            type="file"
            placeholder="choose file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <input
          className="btn btn-sm mt-4 bg-[#006353] text-white hover:bg-white hover:text-black border-0"
          type="submit"
          value="Add Item"
        />
      </form>
    </div>
  );
};

export default AddItem;
