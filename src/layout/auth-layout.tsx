import { Navigate, Outlet } from "react-router-dom";
import { getMe } from "../services/hooks/user/use-user-hooks";
import { useEffect, useState } from "react";

const AuthLayout = () => {
  const { data, isLoading } = getMe();
  const [loading, setLoading] = useState(isLoading);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);
  if (loading) {
    return (
      <div className="text-center align-middle justify-center flex h-screen w-screen">
        Loading...
      </div>
    );
  }

  if (data) {
    return <Navigate to="/" />;
  }
  

  return (
    <>
      <Outlet />
    </>
  );
};

export default AuthLayout;
