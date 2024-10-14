import { useState, useEffect } from "react";
import { RES_MENU_URL } from "../components/Contants";

const useRestaurantMenu = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurentInfo();
  }, []);

  async function getRestaurentInfo() {
    const data = await fetch(RES_MENU_URL + resId);
    const json = await data.json();
    setRestaurantMenu(json.data);
  }
  // console.log(restaurantMenu);

  return restaurantMenu;
};

export default useRestaurantMenu;
