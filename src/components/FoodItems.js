import { IMAGE_URL } from "../utils/constant";

const FoodItems = ({ imageId, name, price }) => {
  return (
    <div className="border bg-purple-100 w-56 m-2 p-2">
      <img src={IMAGE_URL + imageId} />
      <h2 className="font-bold">{name}</h2>
      <p className="font-bold p-2">Rs.{price / 100}/-</p>
    </div>
  );
};
export default FoodItems;
