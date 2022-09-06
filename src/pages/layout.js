import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="container mx-auto pt-4">
        <Outlet />
      </div>
    </>
  );
};
export default MainLayout;
