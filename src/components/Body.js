import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { SWIGGY_API, CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {

  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {

    try {

      const data = await fetch(SWIGGY_API);

      const json = await data.json();
      // console.log(json);

      const restaurantList =
        json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setRestaurants(restaurantList);
      setFilteredRestaurants(restaurantList);

    } catch (err) {

      setError("Failed to load restaurants");

    }

  };

  if (error) return <h2>{error}</h2>;

  if (restaurants.length === 0) return <Shimmer />;

  return (

    <div>

      <div className="search-container">

        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          onClick={() => {

            const filtered = restaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilteredRestaurants(filtered);

          }}
        >
          Search
        </button>

        <button
          onClick={() => {

            const filtered = restaurants.filter(
              (res) => res.info.avgRating > 4.5
            );

            setFilteredRestaurants(filtered);

          }}
        >
          Top Rated
        </button>

      </div>

      <div className="body-container">

        {filteredRestaurants.map((restaurant) => (
          
          <Link className="res-link" key= {restaurant.info.id} to={"./menu/" + restaurant.info.id}>

          <RestaurantCard 
            key={restaurant.info.id}
            name={restaurant.info.name}
            imgId={restaurant.info.cloudinaryImageId}
            cuisine={restaurant.info.cuisines.join(", ")}
            rating={restaurant.info.avgRating}
            cost={restaurant.info.costForTwo}
          />
          </Link>

        ))}

      </div>

    </div>

  );
};

export default Body;
