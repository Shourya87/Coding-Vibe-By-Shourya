import React, { useEffect, useState } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "./ReactIcons";

export default function Category() {

  const [categories, setCategory] = useState([]);

  const fetchCategory = async () => {
    const response = await fetch("http://localhost:5000/categories");
    const data = await response.json();
    setCategory(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const [slide, setSlide] = useState(0);

  const prevSlide = () => {
    if(slide < -1170) return false;
    setSlide(prev => prev - 90);
  };

  const nextSlide = () => {
    if(slide > -90) return false;
    setSlide(prev => prev + 90);
  };





  return (
    <div className="max-w-6xl mx-auto mt-2">
      <div className="flex items-center justify-between">
        <div className="text-[23px] font-bold">What are you craving today?</div>
        <div className="flex">
          <div onClick={nextSlide} className="cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center text-[20px]">
            <IoMdArrowBack />
          </div>
          <div onClick={prevSlide} className="cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex justify-center items-center text-[20px]">
            <IoMdArrowForward />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden border-2 border-amber-600 rounded-[4.5rem] mt-3">
        {
          categories.map(
            (cat,index) => {
              return (
                <div  style={{
                  transform:`translateX(${slide}%)`
                }}  key={index} className="w-[150px] shrink-0 duration-500 overflow-hidden">
                  <img src={'http://localhost:5000/images/' + cat.image} alt="Food Images" />
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
