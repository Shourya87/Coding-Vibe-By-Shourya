import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import { IoIosSearch } from "./ReactIcons";


export default function OnlineDelivery() {
  const [chains, setChains] = useState([]);
  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setIsAtTop(rect.top <= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchTopRestaurant = async () => {
    const response = await fetch(
      "http://localhost:5000/top-restaurant-chains/"
    );
    const apidata = await response.json();
    setChains(apidata);
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  return (
    <div className="max-w-6xl mx-auto mt-8" ref={componentRef}>
      <div className="flex items-center justify-between">
        <div className="text-[24px] font-bold tracking-tighter">
          Restaurants with Online food delivery in Muzaffarnagar
        </div>
      </div>
      <div
        className={
          isAtTop ? "fixed top-0 z-[999999] bg-white w-full left-0" : ""
        }
      >
        <div className="max-w-[1200px] mx-auto flex my-4 gap-3 items-center">
          <div className="p-2 rounded-full shadow bg-white">Filter</div>
          <div className="p-2 rounded-full shadow bg-white">Sort By</div>
          <div className="p-2 rounded-full shadow bg-white">Fast Delivery</div>
          <div className="p-2 rounded-full shadow bg-white">New on Swiggy</div>
          <div className="p-2 rounded-full shadow bg-white">Ratings 4.0+</div>
          <div className="p-2 rounded-full shadow bg-white">Pure Veg</div>
          <div className="p-2 rounded-full shadow bg-white">Offers</div>
          <div className="p-2 rounded-full shadow bg-white">Rs. 300-Rs. 600</div>
          <div className="p-2 rounded-full shadow bg-white">Less than Rs.300</div>
          {/* <div className="ml-2 flex items-center justify-between gap-1 p-4 rounded-md w-[340px] bg-gray-100">
            <input type="text" className="w-[85%] font-semibold" placeholder="Search for resturant and food" />
            <IoIosSearch />
          </div> */}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {chains.map((chai, i) => {
          return <Card {...chai} />;
        })}
      </div>
      <hr className="border-1 mt-12"/>
    </div>
  );
}
