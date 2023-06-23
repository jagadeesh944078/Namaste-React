import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurentMenu from "./components/RestaurentMenu";
// import InstaMart from "./components/InstaMart";
/* upon on-demand loading -> upon render -> suspend loading */
const InstaMart = lazy(() => import("./components/InstaMart"));
const AboutUs = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

/* router configuration */

const appRoot = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: (
          <Suspense fallback="Loading...">
            <AboutUs />
          </Suspense>
        ),
      },
      { path: "/contact", element: <Contact /> },
      { path: "/restarent/:resId", element: <RestaurentMenu /> },
      {
        path: "/instamart",
        element: (
          /* u can add shimmer also in the place of loading */
          <Suspense fallback={<h1>Loading....</h1>}>
            <InstaMart />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoot} />);
