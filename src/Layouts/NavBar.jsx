import React, { useState } from "react";
import { FiBell } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import DropDown from "../Components/DropDown";
import DropDownSec from "../Components/DropDownSec";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdownSecond = () => {
    setIsOpened(!isOpened);
  };

  const dropdownOptions = [
    { label: "English (EN)", img: "uk.png" },
    { label: "Frençais (FR)", img: "fr.png" },
    { label: "Nederlands (NL)", img: "nl.png" },
    { label: "Español (ES)", img: "sp.png" },
    { label: "Deutsch (DE) ", img: "dt.png" },
  ];

  return (
    <>
      <div className="h-[70px] w-full bg-white shadow flex flex-row justify-between p-5">
        <div className="flex flex-row w-[65%]">
          <div className="flex flex-row justify-around w-[100%] top-[-2px] relative">
            <img
              className="w-[150px] h-[45px] top-[-8px] relative"
              src="logo.jpg"
              alt=""
            />
            <div className="w-[392px] h-8 relative flex-col justify-start items-start flex">
              <div className="absolute pointer-events-auto ...">
                <span
                  className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                  id="basic-addon2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </div>
              <input
                placeholder="Quick search ..."
                style={{
                  width: 392,
                  height: 32,
                  background: "#F6F6F6",
                  borderRadius: 5,
                  padding: "0px 0px 0 40px",
                }}
              />
            </div>
          </div>
          <div className="flex flex-row justify-center items-center gap-[27px] ">
            <div className="text-zinc-400 text-sm font-semibold cursor-pointer">
              Dashboard
            </div>
            <div className="text-blue-500 text-sm font-semibold cursor-pointer">
              Trainings
            </div>
            <div className="text-zinc-400 text-sm font-semibold cursor-pointer">
              Users
            </div>
            <div className="w-[52px] h-[17px] relative flex-row justify-center items-center gap-[8px] flex">
              <div className="text-zinc-400 text-sm font-semibold cursor-pointer">
                More
              </div>
              <span>
                <AiOutlineDown
                  color="gray"
                  className="w-4 h-6 mt-1 justify-center"
                />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between w-[15%]">
          <div className="w-[19px] h-[19px] relative flex-row justify-between items-start flex">
            <div className="w-[17.81px] h-[17.81px] relative top-2">
              <FiBell className="w-4 h-6 rounded-full" color="gray" />
            </div>
          </div>
          <div className="w-[19px] h-[19px] relative flex-row justify-between items-start flex">
            <div className="w-[17.43px] h-[6.95px] relative top-2">
              <button type="button" id="menu-button" onClick={toggleDropdown}>
                <img className="w-8 h-4 rounded-full " src="uk.png" alt="" />
              </button>
              {isOpen && <DropDown options={dropdownOptions} />}
            </div>
          </div>
          <div className="w-[120px] h-8 relative flex-row justify-between items-start flex">
            <button type="button" onClick={toggleDropdownSecond}>
              <img className="w-8 h-8 rounded-full" src="profile.jpeg" alt="" />
            </button>
            {isOpened && <DropDownSec />}
            <div>
              <div className="text-neutral-500 text-[13px] font-semibold">
                Blaise Defloo
              </div>
              <div className="w-[67px] text-neutral-400 text-[11px] font-medium">
                Administrator
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
