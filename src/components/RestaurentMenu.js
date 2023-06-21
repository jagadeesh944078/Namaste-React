import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { API_URL } from "../utils/constant";
const RestaurentMenu = () => {
  const [resList, setResList] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL + resId);
    const json = await data.json();
    console.log(json.data);
    setResList(json.data);
  };

  if (resList === null) return <Shimmer />;

  const { name, cuisines } = resList?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card.card;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurentMenu;
