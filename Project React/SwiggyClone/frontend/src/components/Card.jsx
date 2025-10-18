import React from "react";
import SvgIcon from "./RatingIcon";

export default function Card(props) {
  return (
    <div className="group w-[272px] shrink-0 grow mt-4">
      <div className="group-hover:scale-95 mb-1 h-[182px] rounded-[1.4rem] overflow-hidden relative">
        <img
          className="object-cover w-full h-full"
          src={"http://localhost:5000/images/" + props.image}
          alt=""
        />
        <div
          className="image-overlay absolute w-full h-full top-0 flex items-end 
        p-2 text-[20px] font-bold text-white tracking-tighter"
        >
          {props.offer}
        </div>
      </div>
      <div className="mt-1 ml-4 text-[1.2rem] font-bold">{props.title}</div>
      <div className="gap-1 pl-3 flex">
        <div className="gap-1 flex items-center text-md">
          <SvgIcon />
          {props.rating}
        </div>
        <div className="font-extrabold">
          ·
        </div>
        <div className="text-md  font-medium">
          {props.minTime}-{props.maxTime} mins
        </div>
      </div>
      <div className="ml-3 opacity-80">
        <div>
          {props.name}
        </div>
        <div>
          {props.place}
        </div>
      </div>
    </div>
  );
}
