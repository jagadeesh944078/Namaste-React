import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurentMenu from "./components/RestaurentMenu";
import UseContext from "./utils/UseContext";
import MyContext from "./utils/MyContext";
// import InstaMart from "./components/InstaMart";
/* upon on-demand loading -> upon render -> suspend loading */
const InstaMart = lazy(() => import("./components/InstaMart"));
const AboutUs = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Rajendhar Vemula",
    email: "abc@gmail.com",
  });
  const [myText, setMyText] = useState({ text: "rajashekar" });

  return (
    <UseContext.Provider
      value={{
        user: user,
        setUser: setUser,
      }}
    >
      <MyContext.Provider
        value={{
          myContext: myText,
          setMyText: setMyText,
        }}
      >
        <Header />
        <Outlet />
      </MyContext.Provider>
    </UseContext.Provider>
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
