import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {MENU_URL} from "../utils/constants"
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
    const {resId} = useParams();
    const [menuData, setmenuData] = useState(null);
    

    useEffect(() =>{
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
  try {
    // const API =
    //   "https://corsproxy.io/?" +
    //   encodeURIComponent(
    //     MENU_URL + resId
    //   );

    const data = await fetch(MENU_URL + resId);

    if (!data.ok) throw new Error("API failed");

    const json = await data.json();

    setmenuData(json);

  } catch (err) {
    console.log("Error:", err.message);
  }
};


    if (menuData === null) return <Shimmer />;

    const info = menuData?.data?.cards[2]?.card?.card?.info;

    const itemCards = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    console.log(itemCards);

   


  return (
    <>
     <div className="menu">

      <h2>{info?.name}</h2>
      <p>{info?.cuisines.join(", ")}</p>
      <p>⭐ {info?.avgRating}</p>

      <h3>Menu</h3>

      <ul>
        {itemCards?.map((item, index) => (
          <li key={index}>
            {item?.card?.card?.itemCards?.map((food) => (
              <div key={food.card.info.id} className="menu-item">
                <span>{food.card.info.name}</span>
                <span>₹{food.card.info.price / 100}</span>
              </div>
            ))}
          </li>
        ))}
      </ul>

    </div>
    </>
  );
};

export default RestaurantMenu