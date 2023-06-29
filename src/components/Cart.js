import { useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { useDispatch } from "react-redux";
import { clearItem } from "../utils/createSlice";

const Cart = () => {
  /* if u write like below line its like you are subscried to entire store so u dont need to write like this 
   because each time it will be subscribed to entire store instead of slice of store because of that 
   whenever store update each time it will rerender component  in large scale applications there will be lot of slices
   so everytime u should subscribe to specific slice data only*/
  //   const cartItems = useSelector((store) => store)
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
