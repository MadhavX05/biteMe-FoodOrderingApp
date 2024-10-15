import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  selectItemsInCart,
  selectTotalPrice,
} from "../utils/cartSlice";

const OrderSummary = () => {
  const cartItems = useSelector(selectItemsInCart);
  const totalPrice = useSelector(selectTotalPrice);
  const discount = (totalPrice * 0.1) / 100;
  const deliveryCharges = (totalPrice * 0.05) / 100;
  const totalAmt = totalPrice / 100 + deliveryCharges - discount;
  const dispatch = useDispatch();

  function emptyCart() {
    dispatch(clearCart());
  }

  return (
    <div className=" basis-5/12 h-fit sticky top-40">
      <div className="   p-4 rounded-md border shadow-lg my-8 md:m-0">
        <diV className="flex justify-between border-b items-center">
          <div className="text-xl font-bold  pb-4">Order Summary</div>
          <button
            className="px-4 py-2 bg-[#F44336] hover:scale-105 transition delay-150 mb-3 text-white rounded-md font-bold"
            onClick={() => emptyCart()}
          >
            Clear Cart
          </button>
        </diV>
        {/* <p className="font-semibold">Order Details</p> */}
        <div className="py-4 text-lg space-y-4 ">
          <div className="flex justify-between items-center font-semibold">
            <p className="font-medium text-[#2c2d30]">
              MRP ({cartItems.length} items)
            </p>
            <p className="text-[#2c2d30]">₹ {totalPrice / 100}</p>
          </div>
          <div className="flex justify-between items-center font-semibold">
            <p className="font-medium text-[#2c2d30]">Delivery Fee (5%)</p>
            <p className="text-[#2c2d30]">
              + ₹ {parseFloat(deliveryCharges).toFixed(2)}
            </p>
          </div>
          <div className="flex justify-between items-center font-semibold">
            <p className="font-medium text-[#2c2d30]">Platform fee</p>
            <p className="text-[#2c2d30]">+ ₹ 7</p>
          </div>
          <div className="flex justify-between items-center font-semibold">
            <p className="font-medium text-[#2c2d30]">
              Extra discount for you (10%)
            </p>
            <p className="text-green-600 ">
              {" "}
              - ₹ {parseFloat(discount).toFixed(2)}
            </p>
          </div>

          {/* <p className="text-base font-bold my-2 text-green-700">
          You'll save ₹{parseFloat(discount).toFixed(2)} on this order 🎉
        </p> */}
        </div>
        <div className="my-4 border-b">
          <div className="md:flex py-4 border-t justify-between items-center font-bold text-lg md:text-2xl">
            <h1>Total Amount</h1>
            <h1 className="text-[#7fba24] text-3xl">
              ₹ {parseFloat(totalAmt).toFixed(2)}
            </h1>
          </div>
        </div>
        <button className="w-full block hover:scale-105 transition delay-150 mt-4 uppercase font-bold text-lg bg-[#7fba24] text-white text-center p-4 rounded-md">
          Place order
        </button>
      </div>
      <div className="bg-green-100 font-medium border rounded-sm mt-5 px-5 py-3 border-green-800 text-green-700">
        You'll save ₹{parseFloat(discount).toFixed(2)} on this order 🎉
      </div>
    </div>
  );
};

export default OrderSummary;
