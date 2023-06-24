import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  /* if no dependency array - useEffect() called on each render cycle */
  // useEffect(() => {
  //   console.log("useEffect called");
  // });

  /*if there is a dependency array "[]" => useEffect() will call on intial render(just once) */
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, []);

  /* if dependecy array is "[btnNameReact]" => called everytime btnNameReact updated */
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [btnNameReact]);

  return (
    <div className="flex justify-between bg-purple-50 mb-4">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div>
        <ul className="flex my-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <Link to="/instamart">InstaMart</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("LogOut")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
