import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleNotch,
  faHeadset,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const Titel = () => (
  <div className="logo text-[2.2rem]  pl-16 ">
    <Link to="/">
      <div className="flex items-center hover:scale-105 transition  delay-150">
        <svg
          fill="#7fba24"
          width="60px"
          height="60px"
          viewBox="0 0 32.00 32.00"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#7fba24"
          stroke-width="0.00032"
          transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)"
          className="mr-2 bg-white rounded-lg "
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M24 18l4 4v4h-24v-4l4-4 4 4 4-4 4 4 4-4zM4 6v4l4 4 4-4 4 4 4-4 4 4 4-4v-4h-24z"></path>
          </g>
        </svg>
        <div className="afacad-flux-title text-white">biteMe.</div>
      </div>
    </Link>
  </div>
);

//functional component
const Header = () => {
  const [isLogBtn, setIsLogBtn] = useState(true);

  const online = useOnline();

  const { user } = useContext(userContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="z-60 navbar flex justify-center bg-[#28282B] h-24 pt-5 shadow-lg shadow-gray-500">
      <div className="w-[92%] flex justify-between">
        <Titel />
        <div className="nav-items flex gap-4  pt-2 text-white text-[1.25rem]  pr-6 work-sans-nav-items ">
          {/* <div className="py-1">
            <h2 data-testid="online-status ">{online ? "✅" : "🔴"}</h2>
          </div> */}
          <ul className="flex">
            <Link to="/about">
              <li className="px-2 py-1 transition  hover:text-[#87c727]  ease-in">
                <FontAwesomeIcon icon={faCircleNotch} className="pr-1" />
                About
              </li>
            </Link>
            <Link to="/contact">
              <li className="px-4 transition ease-in hover:text-[#87c727] py-1">
                <FontAwesomeIcon icon={faHeadset} className="pr-1" />
                Contact
              </li>
            </Link>
            {/* <Link to="/instamart">
              <li className="px-4">Instamart</li>
            </Link> */}
            <Link to="/cart">
              <li>
                <button
                  className="px-4 py-1 bg-white text-[#7fba24] rounded-md hover:scale-105 transition ease-in"
                  data-testid="cart"
                >
                  <div className="absolute pl-[4.2rem] -mt-[0.6rem]">
                    <span class="relative flex h-[1.2rem] w-[1.2rem]">
                      {cartItems.length > 0 ? (
                        <>
                          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-500 opacity-90"></span>
                          <span class="relative inline-flex rounded-full h-[1.2rem] w-[1.2rem] bg-[#7fba24]"></span>
                        </>
                      ) : null}
                    </span>
                  </div>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="text-lg pr-1"
                  />
                  Cart
                </button>
              </li>
            </Link>
          </ul>
          <div className="log-btn px-4 transition ease-in hover:text-[#87c727] py-1">
            {isLogBtn ? (
              <button onClick={() => setIsLogBtn(false)}>
                <FontAwesomeIcon icon={faRightFromBracket} className="pr-1" />
                logout
              </button>
            ) : (
              <Link to="/login">
                <button onClick={() => setIsLogBtn(true)}>
                  <FontAwesomeIcon icon={faRightFromBracket} className="pr-1" />
                  login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
