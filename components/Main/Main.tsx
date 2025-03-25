"use client";

import Covid from "./Covid/Covid";
import FoodItem from "./Fooditem/FoodItem";
import Hero from "./Hero/Hero";
import StoreInfo from "./StoreInfo/StoreInfo";
import StoreList from "./StoreList/StoreList";

export default function Main() {
  return (
    <>
      <Hero />
      <Covid />
      <FoodItem />
      <StoreInfo />
      <StoreList />
    </>
  );
}
