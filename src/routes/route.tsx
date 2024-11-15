import { RouteObject } from "react-router-dom";
import Login from "../pages/login";
import AuthLayout from "../layout/auth-layout";
import Register from "../pages/register";
import RootLayout from "../layout/root-layout";
import EditTask from "../pages/edit-task";
import UserHome from "../pages/user-home";
import AdminLayout from "../layout/admin-layout";
import AdminHome from "../pages/admin-home";
import UserDetail from "../pages/user-detail";
import AddAdmin from "../pages/add-admin";

export const route: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <UserHome />,
      },
      {
        path: `edit/:id`,
        element: <EditTask />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
      {
        path: "user/:id",
        element: <UserDetail />,
      },
      {
        path: "add",
        element: <AddAdmin/>
      }
    ],
  },
];
