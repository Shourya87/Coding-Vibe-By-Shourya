import React, { useState, useEffect } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "./ReactIcons";
import Card from "./Card";

export default function TopRestaurant() {
  const [chains, setChains] = useState([]);

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

  const [slide, setSlide] = useState(0);

  const prevSlide = () => {
    if (slide < -560) return false;
    setSlide((prev) => prev - 80);
  };

  const nextSlide = () => {
    if (slide > -80) return false;
    setSlide((prev) => prev + 80);
  };

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="flex items-center justify-between">
        <div className="text-[21px] font-bold">
          Top restaurants chains in Muzaffarnagar
        </div>
        <div className="flex">
          <div
            onClick={nextSlide}
            className="cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center text-[20px]"
          >
            <IoMdArrowBack />
          </div>
          <div
            onClick={prevSlide}
            className="cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center text-[20px]"
          >
            <IoMdArrowForward />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden gap-5">
        {
          chains.map(
            (chai, j) => {
              return (
                <div style={{
                  transform:`translateX(${slide}%)`
                }}>
                  <Card {...chai} key={j}/>
                </div>
              )
            }
          )
        }
      </div>
      <hr className="border-1 border-gray-200 mt-12"/>
    </div>
  );
}
