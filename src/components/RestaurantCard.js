import {CDN_URL} from "../utils/constants"

const RestaurantCard = ({ name,imgId, cuisine, rating, cost }) => {

  return (
    <div className="w-[240px] p-4 bg-white rounded-lg shadow-md hover:scale-95 hover:shadow-lg transition-all cursor-pointer h-70">
      <div className = "flex justify-center">
        <img className = "h-[100px] w-[150px] object-cover rounded-md" src = {CDN_URL + imgId } alt = "restaurant" />
      </div>

       <h3 className=" text-center object-cover rounded-md font-bold">{name}</h3>

      <p className="my-2 text-center mt-2 font-light text-sm">{cuisine}</p>

      <p className="my-2 text-8px text-gray-600 mt-1 text-center">⭐ {rating} Rating</p>

      <p className="text-15px text-gray-700 mt-1 text-center">{cost}</p>

    </div>
  );
};

export default RestaurantCard;
