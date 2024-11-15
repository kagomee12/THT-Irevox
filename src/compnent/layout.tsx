import { useEffect, useMemo } from "react";
import { getMe } from "../services/hooks/user/use-user-hooks";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { setAuthToken } from "../services/api";

const Layout = () => {
  const { data, isLoading } = getMe();
  const [isLogin, setIsLogin] = React.useState<Boolean>(false);
  const usequeryClient = useQueryClient();
  useEffect(() => {
    if (data && !isLoading) {
      setIsLogin(true);
    }
  }, [data, isLoading]);
  const navigate = useNavigate();
  const handleLogout = async () => {
    localStorage.removeItem("token");
    usequeryClient.invalidateQueries({ queryKey: ["me"] }).then(() => {
      setAuthToken();
      setIsLogin(false);
      navigate("/auth/login");
    });
    window.location.reload();
  };
  useMemo(() => {
    if (!isLogin) {
      navigate("/auth/login");
    }
  }, [isLogin]);

  return (
    <div className="w-full bg-primary flex h-20 justify-end mt-auto">
      <div
        className="p-4 gap-x-4 flex"
        style={isLogin ? { display: "none" } : {}}
      >
        <button
          className="bg-secondary"
          onClick={() => navigate("/auth/login")}
        >
          login
        </button>
        <button
          className="bg-secondary"
          onClick={() => navigate("/auth/register")}
        >
          Register
        </button>
      </div>
      <div
        className="p-4 gap-x-4 flex"
        style={data?.data.role === "admin" ? {} : { display: "none" }}
      >
        <button onClick={() => navigate("/admin/add")} className="bg-secondary">
          Add Admin
        </button>
      </div>
      <div
        className="py-4 gap-x-4 flex"
        style={isLogin ? {} : { display: "none" }}
      >
        <button
          className="bg-secondary"
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Layout;
