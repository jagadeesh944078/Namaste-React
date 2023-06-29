import { IMAGE_URL } from "../utils/constant";
import { useContext } from "react";
import UseContext from "../utils/UseContext";
import MyContext from "../utils/MyContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData.data;

  const { user } = useContext(UseContext);
  const { myContext } = useContext(MyContext);

  return (
    <div className="m-5 w-[200px] h-[400px] hover:border border-indigo-600 shadow-2xl">
      <img
        className="w-[190px] px-2"
        alt="res-logo"
        src={IMAGE_URL + cloudinaryImageId}
      />
      <h3 className="font-bold text-xl">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹ {costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>
        {user.name} - {myContext.text}
      </h4>
    </div>
  );
};

export default RestaurantCard;
