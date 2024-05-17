import { Outlet } from "react-router";
const Root = () => {
  return (
    <div className="container mx-auto px-4">
      <Outlet />
    </div>
  );
};

export default Root;
