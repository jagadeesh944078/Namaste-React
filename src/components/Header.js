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
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
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
