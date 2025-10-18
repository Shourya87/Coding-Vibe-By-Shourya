import React, { useState } from "react";
import {
    RxCaretDown,
    FiSearch,
    RiDiscountPercentLine,
    MdOutlineSupportAgent,
    SiIfood,
    IoFastFoodSharp,
} from "./ReactIcons";

export default function Header() {
    const [toggle, setToggle] = useState(false);

    const showSideMenu = () => {
        setToggle(true);
    };

    const hideSideMenu = () => {
        setToggle(false);
    };

    const link = [
        {
            icon: <FiSearch />,
            name: "Search",
        },
        {
            icon: <RiDiscountPercentLine />,
            name: "Offers",
        },
        {
            icon: <MdOutlineSupportAgent />,
            name: "Help",
        },
        {
            icon: <SiIfood />,
            name: "Sign In",
        },
        {
            icon: <IoFastFoodSharp />,
            name: "Cart",
        },
    ];

    return (
        <>
            <div
                className="black-overlay w-full h-full fixed duration-500"
                style={{
                    opacity: toggle ? 1 : 0,
                    visibility: toggle ? "visible" : "hidden",
                }}
                onClick={hideSideMenu}
            >
                <div
                    className="w-[500px] bg-white h-full absolute duration-[500ms]"
                    style={{
                        left: toggle ? "0%" : "-100%",
                    }}
                ></div>
            </div>
            <header className="p-3 shadow-xl sticky top-0 bg-white z-[999]">
                <div className="max-w-6xl mx-auto gap-2 flex items-center">
                    <div className="w-[40px]">
                        <img
                            className="w-full"
                            src="images/swiggy.png"
                            alt="Swiggy Image"
                        />
                    </div>
                    <div className="">
                        <span className="font-bold border-b-[2.5px] hover:text-[#fc8016] hover:border-[#fc8016] border-[black]">
                            New Mandi
                        </span>{" "}
                        Muzaffarnagar, Uttar Pradesh, India{" "}
                        <RxCaretDown
                            onClick={showSideMenu}
                            className="inline text-orange-500 size-5.5 hover:cursor-pointer"
                        />
                    </div>
                    <nav className="flex list-none gap-9 ml-auto font-semibold font-sans text-[18px]">
                        {link.map((link, index) => {
                            return (
                                <li
                                    key={index}
                                    className="flex cursor-pointer hover:text-[#fc8019] items-center gap-[6px]"
                                >
                                    {link.icon}
                                    {link.name}
                                </li>
                            );
                        })}
                    </nav>
                </div>
            </header>
        </>
    );
}
