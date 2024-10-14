import { useState } from "react";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemList from "./ItemList";

const RestaurentCategory = ({ data }) => {
  const [showItem, setShowItem] = useState(true);

  const handleClick = () => {
    setShowItem(!showItem);
  };

  return (
    <div>
      <div className="w-[55%] mx-auto my-4 shadow-lg p-4 ">
        <div
          className="flex justify-between hover:cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            {showItem === true ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </span>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurentCategory;
