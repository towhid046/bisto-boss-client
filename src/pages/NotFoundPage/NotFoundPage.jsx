import errorImg from "../../assets/404.gif";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
const NotFoundPage = () => {
  return (
    <section className="flex justify-center items-center min-h-screen relative">
      <img src={errorImg} alt="" />
      <Link to="/" className="flex items-center gap-2 btn btn-outline absolute bottom-[10%] right-[30%]">
        <FaArrowLeft className="text-xl text-blue-400" />
        Back to home
      </Link>
    </section>
  );
};

export default NotFoundPage;
