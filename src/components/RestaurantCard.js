import { IMG_CDN_URL } from "./Contants";
import STAR from "../assets/rating-20.png";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  sla,
  locality,
}) => {
  return (
    <div className="card w-[16.52rem] h-72 m-5 mb-0.5  overflow-hidden">
      <div className="overflow-hidden shadow-xl rounded-2xl">
        <img
          className="card-img object-cover h-44  w-[100%] hover:scale-110 transition ease-linear delay-150 hover:opacity-80"
          src={IMG_CDN_URL + cloudinaryImageId}
          alt={name}
        ></img>
      </div>
      <div className="card-info p-1 px-3 font-medium">
        <h2 className="font-semibold text-lg truncate ">{name}</h2>
        <div className="flex items-center">
          <div>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 1024 1024"
              class="icon"
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
          </div>
          <h3 className="font-normal">&nbsp;{avgRating}</h3>
          <h3 className="font-semibold ">&nbsp;•{sla.slaString}</h3>
        </div>
        <h5 className="truncate opacity-50 font-medium">
          {cuisines.join(", ")}
        </h5>
        <h5 className="truncate opacity-50 font-medium">{locality}</h5>
      </div>
    </div>
  );
};

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className=" ">
        <label className="truncate bg-gradient-to-t from-slate-950 absolute block pl-[0.6rem] w-[16.52rem] ml-[1.28rem] mt-[8.9rem] rounded-b-2xl text-white font-extrabold text-[1.4rem] z-10">
          {props?.aggregatedDiscountInfoV3?.header}
          &nbsp;{props?.aggregatedDiscountInfoV3?.subHeader}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
