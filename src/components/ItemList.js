import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "./Contants";
import { addItem } from "../utils/cartSlice";
import toast from "react-hot-toast";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    console.log(item);
    dispatch(addItem(item));
    toast.success("Added to cart!");
  };
  return (
    <div>
      {items.map((item) => {
        const itemPrice =
          item?.card?.info?.price || item?.card?.info?.defaultPrice;
        return (
          <div
            key={item?.card?.info?.id}
            className="p-2 m-2 pb-8 border-b-2 border-gray text-left flex justify-between"
          >
            <div className="w-9/12 ">
              <div className="py-2">
                <div>
                  {item.card.info.itemAttribute.vegClassifier == "VEG" ? (
                    <p>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Veg_symbol.svg"
                        alt="File:Veg symbol.svg"
                        height="18"
                        width="18"
                      />
                    </p>
                  ) : (
                    <p>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Non_veg_symbol.svg"
                        alt="File:Non veg symbol.svg"
                        height="18"
                        width="18"
                      />
                    </p>
                  )}
                </div>
                <span className="text-lg font-semibold text-[#414449]">
                  {item.card?.info?.name}
                </span>
                <br />
                <div className="flex items-center">
                  <span className="font-bold mr-1">
                    ₹&nbsp;
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </span>
                  {item?.card?.info?.offerTags &&
                  item?.card?.info?.offerTags[0] !== null ? (
                    <>
                      <svg
                        fill="#1ba672"
                        height="12px"
                        width="20px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512.001 512.001"
                        xmlSpace="preserve"
                        transform="matrix(-1, 0, 0, 1, 0, 0)"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          {" "}
                          <g>
                            {" "}
                            <g>
                              {" "}
                              <path d="M506.513,311.066L253.87,58.423c-2.024-2.026-4.486-3.559-7.195-4.483L140.15,17.593 c-6.758-2.305-14.242-0.568-19.294,4.483L84.709,58.222L31.977,5.491c-7.314-7.315-19.176-7.315-26.49,0 c-7.315,7.315-7.315,19.175,0,26.49l52.732,52.731l-36.14,36.141c-5.051,5.05-6.79,12.534-4.483,19.294L53.943,246.67 c0.924,2.71,2.458,5.172,4.483,7.197L311.071,506.51c7.314,7.315,19.175,7.315,26.49,0l168.954-168.954 C513.83,330.241,513.83,318.382,506.513,311.066z M227.241,227.238c-21.817,21.819-57.132,21.82-78.952,0 c-21.768-21.768-21.768-57.185,0.001-78.953c21.817-21.819,57.132-21.82,78.953,0C249.009,170.053,249.009,205.47,227.241,227.238 z"></path>{" "}
                            </g>{" "}
                          </g>{" "}
                        </g>
                      </svg>
                      <p className="text-[0.7rem] text-[#676a6d] font-extrabold">
                        {item?.card?.info?.offerTags
                          ? item?.card?.info?.offerTags[0].title
                          : null}
                        {/* {item?.card?.info?.offerTags[0]?.subTitle} */}
                      </p>
                    </>
                  ) : null}
                </div>
                {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2 >
                0 ? (
                  <div className="flex items-center -ml-1">
                    <svg
                      width="22px"
                      height="22px"
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
                          fill="#ffffff"
                        ></path>
                        <path
                          d="M512 234.666667l83.2 168.533333 185.6 27.733333-134.4 130.133334 32 185.6-166.4-87.466667-166.4 87.466667 32-185.6-134.4-130.133334 185.6-27.733333z"
                          fill="#116649"
                        ></path>
                      </g>
                    </svg>
                    <p className="text-sm font-bold text-[#116649]">
                      {item?.card?.info?.ratings?.aggregatedRating?.rating}
                    </p>
                    <p className="text-sm font-light opacity-80">
                      (
                      {
                        item?.card?.info?.ratings?.aggregatedRating
                          ?.ratingCountV2
                      }
                      )
                    </p>
                  </div>
                ) : null}
              </div>
              <div className="">
                <p className="text-base text-[#676a6d] font-medium opacity-85">
                  {item?.card?.info?.description}
                </p>
              </div>
            </div>
            <div className="w-[20%]">
              {item?.card?.info?.imageId ? (
                <>
                  <div className="absolute">
                    <button
                      className=" font-bold text-lg py-[0.4rem] px-11 bg-white shadow-lg mx-[0.85rem] mt-28 text-green-600 hover:scale-110 transition delay-150 hover:bg-green-600 hover:text-white rounded-lg"
                      onClick={() => addFoodItem({ ...item, itemPrice })}
                    >
                      ADD
                    </button>
                  </div>
                  <img
                    src={IMG_CDN_URL + item?.card?.info?.imageId}
                    className="w-[100%] rounded-2xl h-36 object-cover"
                  ></img>
                </>
              ) : (
                <button
                  className=" font-bold text-lg p-2 px-9 bg-white shadow-lg mx-[1.6rem] mb-20 text-green-600 1rounded-lg hover:scale-110 transition delay-150"
                  onClick={() => addFoodItem({ ...item, itemPrice })}
                >
                  ADD
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
