import React from "react";

const DropDown = ({ options }) => {
  return (
    <div
      className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex="-1"
    >
      <div className="py-1 " role="none">
        {options.map((option, i) => (
          <div key={i}>
            <span
              className={`text-[#ADADAD] px-4 py-2 text-sm flex justify-normal hover:bg-gray-200 ${
                i === 0 ? "text-black" : ""
              }`}
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
              key={i}
            >
              <img
                className="w-6 h-6 rounded-full mr-2 justify-center"
                src={option.img}
                alt=""
              />
              <span>{option.label}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
