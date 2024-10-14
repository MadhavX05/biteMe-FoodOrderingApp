import { useParams } from "react-router-dom";
import ShimmerRestaurant from "./ShimmerRestaurant";
import useRestaurantMenu from "../utils/useRestaurentMenu";
import RestaurentCategory from "./RestaurentCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faLocationDot } from "@fortawesome/free-solid-svg-icons";
const RestaurentMenu = () => {
  const { resId } = useParams();

  const restaurantMenu = useRestaurantMenu(resId);

  if (restaurantMenu === null) return <ShimmerRestaurant />;

  const {
    name,
    cuisines,
    cloudinaryImageId,
    areaName,
    city,
    avgRating,
    costForTwoMessage,
    totalRatingsString,
    sla,
  } = restaurantMenu?.cards[2]?.card?.card?.info;

  const categories =
    restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return !restaurantMenu ? (
    <ShimmerRestaurant />
  ) : (
    <div className="restaurent-menu">
      <div className="sticky top-0 pt-1  w-[60%] m-auto backdrop-blur-lg z-20">
        <h1 className="font-bold text-left ml-5 my-5 text-3xl ">{name}</h1>
        <hr />
      </div>
      <div className="border border-white m-auto rounded-3xl w-[60%] bg-gradient-to-t from-gray-200 to-white to-70% ">
        <div className="border border-gray m-5 rounded-2xl bg-white">
          <div className="flex items-center pt-4">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 1024 1024"
              className="icon ml-4 mr-1"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z"
                  fill="#1e943c"
                ></path>
                <path
                  d="M512 234.666667l83.2 168.533333 185.6 27.733333-134.4 130.133334 32 185.6-166.4-87.466667-166.4 87.466667 32-185.6-134.4-130.133334 185.6-27.733333z"
                  fill="#ffffff"
                ></path>
              </g>
            </svg>
            <h2 className="font-bold text-base">
              {avgRating} ({totalRatingsString})
            </h2>
            <p className="mx-1 text-gray-500">•</p>
            <h2 className="font-bold text-base">{costForTwoMessage}</h2>
          </div>
          <span className="ml-5 font-semibold text-sm text-[#7fba24] underline">
            {cuisines.join(", ")}
          </span>
          <div className="flex flex-col ml-5 pb-4">
            <div className="flex items-center mt-3">
              <FontAwesomeIcon icon={faLocationDot} className="text-gray-400" />
              <p className="font-bold ml-2 text-sm flex">
                Outlet &nbsp;
                <p className=" font-normal opacity-70">{areaName}</p>
              </p>
            </div>
            <div className="flex items-center mt-3">
              <FontAwesomeIcon icon={faClock} className="text-gray-400" />
              <p className="font-bold ml-2 text-sm flex">{sla.slaString}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        {categories.map((category) => (
          <RestaurentCategory data={category?.card?.card} />
        ))}
      </div>
    </div>
  );
};

export default RestaurentMenu;
