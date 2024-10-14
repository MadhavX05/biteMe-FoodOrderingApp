import { IMG_CDN_URL } from "./Contants";

const FoodCard = (item) => {
  console.log(item);
  return (
    <div className="card w-56 h-80  m-5 shadow-2xl rounded-2xl">
      <div className="">
        <img
          className="card-img pb-1 object-cover h-44 w-[100%] rounded-lg"
          src={IMG_CDN_URL + item.card.info.imageId}
          alt={item.card.info.name}
        ></img>
      </div>
      <div className="card-info p-1 font-medium">
        <h2 className="font-bold text-xl pb-4 truncate ">{item.card.info.name}</h2>
        <h5 className="truncate ">{item.card.info.description}</h5>
        <h3 className="font-bold">{item.card.info.price/100} Rupees</h3>
      </div>
    </div>
  );
};

export default FoodCard;
