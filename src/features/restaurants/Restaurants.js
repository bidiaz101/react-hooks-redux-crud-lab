import React from "react";
import Resturant from './Restaurant'

function Restaurants({ restaurants }) {
  const restaurantList = restaurants.map(restaurant => {
    return <Resturant restaurant={restaurant} key={restaurant.id} />
  })
  return <ul>{restaurantList}</ul>;
}

export default Restaurants;
