"use client"

import Covid from "./Covid";
import FoodItem from "./FoodItem";
import Hero from "./Hero";
import StoreInfo from "./StoreInfo";
import StoreList from "./StoreList";

export default function Main() {
    return (
        <>
            <Hero/>
            <Covid/>
            <FoodItem/>
            <StoreInfo/>
            <StoreList/>
        </>
    );

}
