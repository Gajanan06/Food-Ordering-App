import {CDN_URL} from "../utils/constants"

const RestaurantCard = ({ name,imgId, cuisine, rating, cost }) => {

  return (
    <div className="restaurant-card">
      <div className = "img-container">
        <img className = "res-img" src = {CDN_URL + imgId } alt = "restaurant" />
      </div>

       <h3 className="res-name">{name}</h3>

      <p className="res-name">{cuisine}</p>

      <p className="res-name">⭐ {rating}</p>

      <p className="res-name">{cost}</p>

    </div>
  );
};

export default RestaurantCard;
