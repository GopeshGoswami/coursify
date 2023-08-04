import React from "react";
import { AiFillCaretDown } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="mx-24 md:block hidden">
      <h2 className="text-black text-xl font-bold">Details</h2>

      <div className="mt-5 pb-6 border-t">
        <h3 className="mt-6">Schedule</h3>
        <div className="form-control flex gap-5 mt-5">
          <label className="cursor-pointer flex items-center gap-3">
            <input type="checkbox" className="checkbox" />
            <span className="label-text text-black">Full time</span>
          </label>

          <label className="cursor-pointer flex items-center gap-3">
            <input type="checkbox" className="checkbox" />
            <span className="label-text text-black">Part time</span>
          </label>

          <label className="cursor-pointer flex items-center gap-3">
            <input type="checkbox" className="checkbox" />
            <span className="label-text text-black">Internship</span>
          </label>
        </div>
      </div>

      <div className="mt-5 pb-6 border-t">
        <h3 className="mt-6">Employment type</h3>
        <div className="form-control flex gap-5 mt-5">
          <label className="cursor-pointer flex items-center gap-3">
            <input type="checkbox" className="checkbox" />
            <span className="label-text text-black">Full day</span>
          </label>

          <label className="cursor-pointer flex items-center gap-3">
            <input type="checkbox" className="checkbox" />
            <span className="label-text text-black">Shift work</span>
          </label>

          <label className="cursor-pointer flex items-center gap-3">
            <input type="checkbox" className="checkbox" />
            <span className="label-text text-black">Flexible schedule</span>
          </label>
        </div>
      </div>

      {/* <div className="border-t flex flex-col gap-5">
        <h3 className="mt-6">Pay Scale</h3>
        <input
          type="range"
          min={0}
          max="100"
          //   value="100"
          className="range range-xs"
        />
        <AiFillCaretDown className="text-gray-400" />
      </div> */}
    </div>
  );
};

export default Sidebar;
