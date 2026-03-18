import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    const {resId} = useParams();
    
    const menuData = useRestaurantMenu(resId);
  
    if (menuData === null) return <Shimmer />;


    const info = menuData?.data?.cards[2]?.card?.card?.info;


    const itemCards = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    // console.log(itemCards);
  
   
  return (
    <>
     <div className="max-w-3xl mx-auto p-5">
     <h2 className="text-2xl font-bold mb-1">{info?.name}</h2>
      <p className="text-gray-600 text-sm">{info?.cuisines.join(", ")}</p>
      <p className="text-sm text-gray-700 mb-4"> {info?.avgRating}</p>


      <h3  className="text-center text-lg font-semibold border-b pb-2 mb-3">Menu</h3>


      <ul>
        <div className="space-y-2">
        {itemCards?.map((item, index) => (
          <li key={index}>
            {item?.card?.card?.itemCards?.map((food) => (
              <div key={food.card.info.id} className="flex justify-between items-center p-3 bg-white rounded-md shadow-sm hover:shadow-md transition">
                <span className="text-sm font-medium">{food.card.info.name}</span>
                <span className="text-sm text-gray-700">₹{food.card.info.price / 100}</span>
              </div>
            ))}
          </li>
        ))}
        </div>
      </ul>



    </div>
    </>
  );
};

export default RestaurantMenu