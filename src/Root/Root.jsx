import { Outlet } from "react-router";
import Navbar from "./Navbar/Navbar";
import Footer from './Footer/Footer';
const Root = () => {
  return (
    <div >
      <Navbar />
      <main className="container mx-auto px-4 min-h-screen">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Root;
