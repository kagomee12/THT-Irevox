import { Navigate, Outlet } from "react-router-dom";
import Layout from "../compnent/layout";
import { getMe } from "../services/hooks/user/use-user-hooks";
import { useEffect } from "react";

const RootLayout = () => {
  const { data, isLoading } = getMe();
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



  if (!data) {
    return <Navigate to="/auth/login" />;
  }

  if (data.data.role === "admin") {
    return <Navigate to="/admin" />;
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

export default RootLayout;
