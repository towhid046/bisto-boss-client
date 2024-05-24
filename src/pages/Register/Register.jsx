import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";
import scrollOnMount from "./../../utilities/scrollOnMount";
import regImg from "../../assets/login/login.svg";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import userAxiosPublic from "../../hooks/userAxiosPublic";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { createUser, updateUserProfile, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = userAxiosPublic();

  useEffect(() => {
    scrollOnMount();
  }, []);

  const handleRegisterForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const userName = form.name.value;
    const photoUrl = form.photoUrl.value;

    const user = { name: userName, email };
    try {
      await createUser(email, password);
      const res = await axiosPublic.post("/users", user);
      if (res.data.insertedId) {
        toast.success("Registration Success");
        navigate("/");
        await updateUserProfile(userName, photoUrl);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSignUpWithGoogle = async () => {
    try {
      const res = await loginWithGoogle();
      // send user data to server:
      const user = { name: res.user?.displayName, email: res.user?.email };
      await axiosPublic.post("/users", user);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <div className="hero md:min-h-screen container-fluid my-16">
        <div className="w-full flex shadow-2xl lg:flex-row justify-between gap-8 items-center flex-col md:p-12 py-8 px-6">
          <div className="flex-1 bg-base-100 mx-auto w-full">
            <h1 className="text-2xl font-bold text-center mb-8">Sign Up</h1>
            <hr />
            <form onSubmit={handleRegisterForm} className="mt-5">
              <div>
                <label className="label">
                  <strong className="label-text">Your Name</strong>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="focus:outline-none input w-full rounded-lg outline-none bg-[#f3f3f3]"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <strong className="label-text">Photo URL</strong>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="Enter your photo url"
                  className="focus:outline-none input w-full rounded-lg outline-none bg-[#f3f3f3]"
                  required
                />
              </div>
              <div>
                <label className="label">
                  <strong className="label-text">Email</strong>
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
                <div className="absolute right-3 bottom-4">
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
              <small className="text-red-600"></small>
              <div className="flex items-center gap-1 mt-6">
                <input
                  type="checkbox"
                  id="terms-condition"
                  className="checkbox checkbox-sm rounded"
                  required
                />
                <label htmlFor="terms-condition" className="cursor-pointer">
                  <span>Accept Term & Conditions</span>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn w-full rounded-lg hover:bg-black text-white bg-[#2B3440]">
                  Register
                </button>
              </div>
            </form>
            <div>
              <div className="text-center mb-4 mt-8">
                <h2 className="text-2xl">Or</h2>
                <p>Sign Up </p>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSignUpWithGoogle}
                  className="btn flex items-center gap-5 w-full"
                >
                  <FaGoogle className="text-2xl text-success" />
                  <span>With Google</span>
                </button>
              </div>
            </div>
            <p className="text-center mt-5">
              Already have an account?{" "}
              <Link
                to={"/login"}
                className=" cursor-pointer text-red-400 font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
          <div className="flex-1">
            <img src={regImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
