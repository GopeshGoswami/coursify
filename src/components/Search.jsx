import { useState } from "react";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import { AiFillCaretDown } from "react-icons/ai";
import { useStore } from "../store";
import axios from "axios";

const Search = () => {
  const [designationInput, setDesignationInput] = useState("");
  const [locationInput, setLocationInput] = useState("");

  const [designationValue, setDesignationValue] = useStore((state) => [
    state.designationValue,
    state.setDesignationValue,
  ]);

  const [locationValue, setLocationValue] = useStore((state) => [
    state.locationValue,
    state.setLocationValue,
  ]);

  const handleStateUpdate = () => {
    setDesignationValue(designationInput);
    setLocationValue(locationInput);
  };

  return (
    <div className=" py-5 bg-white drop-shadow-md">
      <div className="flex justify-around mx-10">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Designation"
            className="input w-full text-sm max-w-xs bg-white focus:outline-none font-bold"
            onChange={(e) => setDesignationInput(e.target.value)}
            onBlur={handleStateUpdate}
          />
          <CiSearch className="text-2xl cursor-pointer hidden md:block" />
        </div>

        <div className="flex items-center">
          <CiLocationOn className="text-2xl md:block hidden" />
          <input
            type="text"
            placeholder="Work location"
            className="input w-full text-sm max-w-xs bg-white focus:outline-none font-bold"
            onChange={(e) => setLocationInput(e.target.value)}
            onBlur={handleStateUpdate}
          />
          <AiFillCaretDown className="text-gray-400" />
        </div>
      </div>

      {/* <div className="flex items-center"></div> */}
    </div>
  );
};

export default Search;
