import { Outlet } from "react-router";
import Navbar from './Navbar/Navbar';
const Root = () => {
  return (
    <div className="container mx-auto px-4">
      <Navbar/>
      <main  >
      <Outlet />
      </main>
    </div>
  );
};

export default Root;
