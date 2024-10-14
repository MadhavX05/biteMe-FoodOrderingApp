import { useSelector, useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeItem,
  selectItemsInCart,
} from "../utils/cartSlice";
import { IMG_CDN_URL } from "./Contants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CartItemList = () => {
  const cartItems = useSelector(selectItemsInCart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => dispatch(removeItem({ id }));
  const decreaseQuantity = (id) => dispatch(decreaseItemQuantity({ id }));
  const increaseQuantity = (id) => dispatch(increaseItemQuantity({ id }));

  // console.log('cart: ', cartItems);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col mt-20  items-center ">
        <div className="text-4xl font-bold uppercase text-[#2E8B57] my-4 flex gap-2 items-center ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
            alt="Updated Soon"
            className="h-96 justify-center ml-5"
          />
          <div className="flex flex-col">
            Your cart is currently on a diet! Go ahead, fill it up with
            delicious options!
            <div className="mt-10 flex text-[#f37645] justify-between">
              <div className="text-2xl">
                Let’s turn that empty cart into a feast! Check out our delicious
                selections
              </div>
              <Link to="/">
                <button className="ml-9 px-3 py-1 text-white bg-[#38a567] rounded-2xl">
                  <FontAwesomeIcon icon={faArrowRight} size="2xl" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ul className="basis-7/12">
      {cartItems &&
        cartItems.map((item) => (
          <li
            key={item?.item?.card?.info?.id}
            className="flex gap-4 hover:scale-105 transition delay-150 justify-between max-w-[600px] my-4"
          >
            <div className="basis-3/12 ">
              <img
                className="w-full h-full md:h-auto object-cover block rounded-md aspect-square"
                src={IMG_CDN_URL + item?.item?.card?.info?.imageId}
                alt=""
              />
            </div>
            <div className="basis-9/12">
              <p className="text-lg font-semibold text-[#414449]">
                {item?.item?.card?.info?.name}
              </p>

              <p className="hidden md:block text-base text-[#676a6d] font-medium opacity-85">
                {item?.item?.card?.info?.description?.length > 50
                  ? item?.item?.card?.info?.description.slice(0, 50) + "..."
                  : item?.item?.card?.info?.description}
              </p>

              <p className="my-2 space-x-1">
                <span className="font-bold">
                  ₹&nbsp;
                  {parseFloat(
                    (
                      item?.quantity *
                      parseFloat(
                        item?.item?.card?.info?.price
                          ? item?.item?.card?.info?.price / 100
                          : item?.item?.card?.info?.defaultPrice / 100
                      )
                    ).toFixed(2)
                  )}
                </span>
                <span className="text-gray-800 font-normal">
                  (
                  {item?.item?.card?.info?.price
                    ? item?.item?.card?.info?.price / 100
                    : item?.item?.card?.info?.defaultPrice / 100}
                  × {item?.quantity})
                </span>
              </p>

              {/* actions */}
              <div className="flex justify-between items-center mt-2">
                <div className="flex justify-center">
                  <button
                    onClick={() => decreaseQuantity(item?.item?.card?.info?.id)}
                    disabled={item?.quantity === 1}
                    className={
                      "bg-[#7fba24] disabled:bg-[#7fba24]/50 disabled:cursor-not-allowed text-white font-extrabold w-8 h-8 rounded-md"
                    }
                  >
                    -
                  </button>
                  <p className="font-bold w-8 h-8 flex justify-center items-center">
                    {item?.quantity}
                  </p>
                  <button
                    onClick={() => increaseQuantity(item?.item?.card?.info?.id)}
                    className="bg-[#7fba24] text-white font-extrabold w-8 h-8 rounded-md"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item?.item?.card?.info?.id)}
                  className="border border-[#7fba24] text-sm font-semibold text-[#7fba24] hover:bg-[#7fba24] hover:text-white p-2 px-4 rounded-md "
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default CartItemList;
