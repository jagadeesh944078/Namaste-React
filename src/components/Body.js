import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  /* local state variable - super powerful of variable */
  /* react constantly monitor the useState() function & whenever local state variable changes it rerender UI */

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestarentList, setFilteredRestarentList] = useState([]);
  const [searchText, setSearchText] = useState("");

  /* useEffect calls after body component renders */
  /* here we pass 2 arguments 1 is arrow function(call back function) another one is dependency array*/

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.943818&lng=77.619004&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    /* setListRestaurant function is coming from local state variable not javascript function */
    /* optional chaining */
    setListOfRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestarentList(json?.data?.cards[2]?.data?.data?.cards);
  };

  /* Conditional Rendering (rendering basis on the condition) */
  //   if (listOfRestaurant.length === 0) {
  //     return <Shimmer />;
  //   }

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredRestroList = listOfRestaurant.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestarentList(filteredRestroList);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.data.avgRating >= 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Filter
        </button>
      </div>
      <div className="res-container">
        {filteredRestarentList?.map((resData) => (
          <Link key={resData.data.id} to={"/restarent/" + resData.data.id}>
            <RestaurantCard resData={resData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
