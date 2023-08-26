import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(data.name, data.photoURL).then(() => {
          const saveUser = { name: data.name, email: data.email };

          fetch("https://restro-98-server-ashfiq98.vercel.app/users", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  text: "Please Login with registered information",
                  position: "top-end",
                  icon: "success",
                  title: "User successfully registered",
                  showConfirmButton: false,
                  timer: 2000,
                });
                navigate("/login");
              }
            });
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "warning",
          title: "Email is already used. Please enter new email",
          showConfirmButton: false,
          timer: 2000,
        });
        console.error(error);
      });
  };

  return (
    <>
      <Helmet>
        <title>Restro98 | Sign up</title>
      </Helmet>{" "}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  flex-col md:flex-row-reverse">
          <div className="text-center lg:text-left">
            <p className="py-6">
              Nestled in the heart of the city,{" "}
              <span className="text-red-700">Restro98</span> is a culinary haven
              that delights in offering a diverse gastronomic experience. To
              enjoy this, <h1 className="text-5xl font-bold">SignUp now!</h1>
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: false })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-orange-400">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[#$@!&*])(?=.*[a-z])(?=.*[0-9])/,
                  })}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-orange-400">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-orange-400">
                    Password must have minimum 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-orange-400">
                    Password must have maximum 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-orange-400">
                    Password must have minimum (1 uppercase,1 lowercase,1
                    special character(#!@$&*) & 1 digit)
                  </p>
                )}
              </div>

              <div className="form-control mt-4">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
              <p>
                <small className="ml-10">
                  Already have an account?
                  <Link to="/login">
                    <span className="text-red-500 text-center text-xl hover:text-white ml-2 mr-2">
                      Login
                    </span>{" "}
                    here
                  </Link>
                </small>
              </p>
              <SocialLogin text="SignUp with google"></SocialLogin>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
