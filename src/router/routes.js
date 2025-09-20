import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostPage from "../pages/PostPage";
import Error from "../pages/Error";
import Navbar from "../components/UI/navbar/Navbar";
import Login from "../pages/Login";
import RequireAuth from "../components/RequireAuth";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

// const isAuth = !!localStorage.getItem("token");

export const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {path: '/', element: <Login /> },
            {path: '/login', element: <Login /> },
            {path: '/about', element: <About /> },

            {
              element: <RequireAuth />,
              children: [
                {path: '/posts', element: <Posts />},
                {path: '/posts/:postId', element: <PostPage />},
              ],
            },

            
            {path: '/error', element: <Error /> },
            {path: '*', element: <Navigate to='/error' replace /> },
        ],
    },
]);
