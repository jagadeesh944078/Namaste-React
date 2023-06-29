import { useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { useDispatch } from "react-redux";
import { clearItem } from "../utils/createSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const clearItems = () => {
    dispatch(clearItem());
  };

  return (
    <div>
      <h1 className="font-bold text-2xl">Cart Items</h1>
      <button className="bg-green-100 m-2 p-2" onClick={() => clearItems()}>
        clear items
      </button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <FoodItems {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
