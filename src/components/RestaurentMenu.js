import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils/constant";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/createSlice";
import { useDispatch } from "react-redux";

const RestaurentMenu = () => {
  const { resId } = useParams();

  const resList = useRestaurant(resId);

  const dispatch = useDispatch();

  const handleItems = () => {
    dispatch(addItem("Grapes"));
  };

  const addItemsToCart = (item) => {
    dispatch(addItem(item));
  };

  if (resList === null) return <Shimmer />;

  const { name, cuisines } = resList?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;

  return (
    <div>
      <h1 className="font-bold text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">{cuisines.join(", ")}</h3>
      <button className="m-2 p-2 bg-green-400" onClick={() => handleItems()}>
        Add Item
      </button>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            <button
              className="bg-green-100 m-2 p-2"
              onClick={() => addItemsToCart(item.card.info)}
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
