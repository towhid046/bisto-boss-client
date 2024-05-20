import {
  Link,
  useLoaderData,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import scrollOnMount from "./../../utilities/scrollOnMount";
import loginImg from "../../assets/login/login.svg";
import useAuth from "./../../hooks/useAuth";
import { toast } from "react-toastify";

import {
  loadCaptchaEnginge,
  // LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    scrollOnMount();
    loadCaptchaEnginge(6);
  }, []);

  const handleLoginForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userCaptcha = form.captcha.value;

    if (validateCaptcha(userCaptcha) === true) {
      await loginUser(email, password);
      toast.success("Login Success");
    navigate(`${location.state ? location.state : "/"}`);
      return;
    } else {
      toast.error("Captcha do not match");
    }
  };

  return (
    <div>
      <div className="hero md:min-h-screen container-fluid my-16">
        <div className="w-full px-5 shadow-2xl flex md:p-12 py-8 lg:flex-row flex-col justify-between gap-8 items-center">
          <div className="flex-1">
            <img src={loginImg} alt="" />
          </div>
          <div className="flex-1 w-full bg-base-100 mx-auto ">
            <h1 className="text-2xl font-bold text-center mb-8">Login</h1>
            <hr />
            <form onSubmit={handleLoginForm} className="mt-5">
              <div>
                <label className="label">
                  <strong className="label-text">Email address</strong>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="focus:outline-none input w-full rounded-lg outline-none bg-[#f3f3f3]"
                  required
                />
              </div>
              <div className="relative">
                <label className="label">
                  <strong className="label-text">Password</strong>
                </label>
                <input
                  type={"password"}
                  name="password"
                  placeholder="Password"
                  className="focus:outline-none w-full input rounded-lg outline-none bg-[#f3f3f3]"
                  required
                />

                {/* password show eye off-on */}
                <div className="absolute right-3 bottom-4 ">
                  {/* {isShowPassword ? ( */}
                  <span
                    className="cursor-pointer"
                    //   onClick={handelShowPassword}
                  >
                    <LuEye />
                  </span>
                  {/* ) : ( */}
                  <span
                    className="cursor-pointer"
                    //   onClick={handelShowPassword}
                  >
                    {/* <LuEyeOff /> */}
                  </span>
                  {/* )} */}
                </div>
              </div>

              {/* Captcha */}
              <div className="py-3">
                <button>
                  <LoadCanvasTemplateNoReload />
                </button>
              </div>

              <div>
                <input
                  type="text"
                  name="captcha"
                  placeholder="Type here"
                  className="focus:outline-none input w-full rounded-lg outline-none bg-[#f3f3f3]"
                  required
                />
              </div>

              <div className="my-5">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-info w-full"
                />
              </div>
            </form>
            <div>
              <div className="text-center mb-4">
                <h2 className="text-2xl">Or</h2>
                <p>Log In</p>
              </div>
              <div className="flex justify-center gap-5">
                <button
                  //   onClick={handelLogInWithGoogle}
                  className="btn flex items-center gap-2"
                >
                  <span>With Google</span>
                </button>
                <button
                  //   onClick={handelLogInWithGithub}
                  className="btn flex items-center gap-2"
                >
                  <span>With GitHub</span>
                </button>
              </div>
            </div>
            <p className="text-center mt-5">
              Don't have an account?{" "}
              <Link
                to={"/register"}
                className=" cursor-pointer text-red-400 font-semibold"
              >
                Regester
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
