import { Outlet } from "react-router-dom";
import { getMe } from "../services/hooks/user/use-user-hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../compnent/layout";

const AdminLayout = () => {
  const { data, isLoading } = getMe();
  const navigate = useNavigate();
  useEffect(() => {
    const load = async () => {
      if (isLoading) {
        return (
          <div className="text-center align-middle justify-center flex">
            Loading...
          </div>
        );
      }
    };
    load();
  }, [isLoading]);
  if (data?.data.role !== "admin" || !data) {
    navigate("/");
  }

  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <Layout />
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
