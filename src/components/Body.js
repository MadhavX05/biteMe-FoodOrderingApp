import { restaurantList } from "./Contants";
import RestaurantCard, { withDiscountLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { filterData } from "../utils/helper";
import userContext from "../utils/userContext";

const Body = () => {
  const [allRestaurants, setallRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState();
  // const { user, setUser } = useContext(userContext);

  const RestaurantCardDiscount = withDiscountLabel(RestaurantCard);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setallRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  // const offline = useOnline();
  // if (!offline) {
  //   return <h1>🔴Offline, Please check your internet connection</h1>;
  // }

  if (!allRestaurants) return null;
  // if (filteredRestaurants.length === 0)
  //   return <h1>Restaurants are not found!!</h1>;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container m-2 flex justify-center z-20 sticky top-5">
        <input
          type="text"
          className="search-input p-3 mt-2 rounded-l-lg w-[600px] h-10 shadow-xl outline-indigo-500 z-10"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn p-1 bg-indigo-500 hover:bg-indigo-600 focus:ring focus:ring-indigo-300 mt-2 shadow-lg  rounded-r-md text-white font-bold h-10  w-16 "
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setfilteredRestaurants(data);
          }}
        >
          Search
        </button>

        {/* <input
          type="text"
          className="search-input p-3 mt-2 rounded h-10 shadow-xl outline-indigo-500"
          value={user.name}
          onChange={(e) => {
            setUser({
              name: e.target.value,
              email: "abc@gmail.com",
            });
          }}
        ></input> */}
      </div>
      <div className="restaurant-list flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurentmenu/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant?.info?.aggregatedDiscountInfoV3 == null ? (
                <RestaurantCard {...restaurant.info} />
              ) : (
                <RestaurantCardDiscount {...restaurant.info} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
