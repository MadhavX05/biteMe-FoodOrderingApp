export function filterData(searchText, restaurants) {
  const resFilter = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return resFilter;
}