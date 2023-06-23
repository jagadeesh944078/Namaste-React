export function filterList(searchText, listOfRestaurant) {
  return listOfRestaurant.filter((res) =>
    res.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
