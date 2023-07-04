import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import UseContext from "../utils/UseContext";
import { useSelector } from "react-redux";
import useOnline from "../utils/useOnline";
import Logo from "../assets/img/foodvilla.jpg";

const Header = () => {
  const { user } = useContext(UseContext);
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const cartItems = useSelector((store) => store.cart.items);
  const isOnline = useOnline();

  return (
    <div className="flex justify-between bg-purple-50 mb-4">
      <div className="logo-container">
        <img className="w-28" data-testid="logo" src={Logo} />
        {/* <img data-testid="logo" className="w-28" src={LOGO_URL} /> */}
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
          <li className="px-4">
            <Link to="/cart" data-testid="cart">
              Cart - {cartItems?.length}
            </Link>
          </li>
          <li>{user.name}</li>
          <li className="px-4">
            <Link to="/instamart">InstaMart</Link>
          </li>
          <li data-testid="online">{isOnline ? "✅" : "❌"}</li>
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
