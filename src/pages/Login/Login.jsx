import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: "success",
        title: `Hello ${user.displayName}! Welcome to Restro98`,
      });
      navigate(from, { replace: true });
    });
  };
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>Restro98 | Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content  flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <p className="py-6">
              Nestled in the heart of the city,{" "}
              <span className="text-red-700">Restro98</span> is a culinary haven
              that delights in offering a diverse gastronomic experience. To
              enjoy this, <h1 className="text-5xl font-bold">Login now!</h1>
            </p>
          </div>
          <form
            onSubmit={handleLogin}
            className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate></LoadCanvasTemplate>
                </label>
                <input
                  type="text"
                  onBlur={handleValidateCaptcha}
                  name="captcha"
                  placeholder="enter captcha carefully"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-4">
                <input
                  disabled={disabled}
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>

              <p>
                <small className="ml-10">
                  Don't have any account?
                  <Link to="/signup">
                    <span className="text-red-500 text-center text-xl hover:text-white ml-2 mr-2">
                      Register
                    </span>{" "}
                    here
                  </Link>
                </small>
              </p>
              <SocialLogin text="login with google"></SocialLogin>
              <button className="animate-bounce repeat-infinite ... text-yellow-300 uppercase">
                After entering captcha , you have to enable the Login button by
                pressing it. If you enter correct captcha it will enable
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
