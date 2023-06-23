import { useEffect, useState } from "react";
import { API_URL } from "./constant";

const useRestaurant = (resId) => {
  const [resList, setResList] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL + resId);
    const json = await data.json();
    console.log(json.data);
    setResList(json.data);
  };
  return resList;
};

export default useRestaurant;
