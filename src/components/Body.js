import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { filterList } from "../utils/helper";
import UseContext from "../utils/UseContext";
import MyContext from "../utils/MyContext";

const Body = () => {
  /* local state variable - super powerful of variable */
  /* react constantly monitor the useState() function & whenever local state variable changes it rerender UI */

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestarentList, setFilteredRestarentList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UseContext);
  const { myContext, setMyText } = useContext(MyContext);

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

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Oops check your internet connection</h1>;
  }

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div data-testid="menu" className="body">
      <div className="filter">
        <div className="bg-purple-50 py-4">
          <input
            data-testid="search"
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            data-testid="search-btn"
            onClick={() => {
              const filteredRestroList = filterList(
                searchText,
                listOfRestaurant
              );
              setFilteredRestarentList(filteredRestroList);
            }}
          >
            search
          </button>
          <input
            value={user.name}
            onChange={(e) => {
              setUser({
                ...user,
                name: e.target.value,
              });
            }}
          ></input>
          <input
            value={myContext.text}
            onChange={(e) => {
              setMyText({
                text: e.target.value,
              });
            }}
          ></input>
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
      <div className="flex flex-wrap" data-testid="res-list">
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
