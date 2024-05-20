import { Outlet } from "react-router";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
