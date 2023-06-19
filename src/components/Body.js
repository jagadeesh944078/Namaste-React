import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  /* local state variable - super power of variable */
  /* React constantly monitor this state variable as soon as u call setListOfRestaurant function
   react will use diff alogrithm to find out diffrence in old & new virtual DOM  and update the ui */
  const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);

  /* its array Destructuring u can write useState() like this also just for understanding */
  //   const arr = useState(restaurantList);
  //   const [listOfRestaurant, setListOfRestaurant] = arr;

  /* OR everthing is same */
  //   const listOfRestaurant = arr[0];
  //   const setListOfRestaurant = arr[1];

  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (item) => item.data.avgRating >= 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Filter
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((resData) => (
          <RestaurantCard key={resData.data.id} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
