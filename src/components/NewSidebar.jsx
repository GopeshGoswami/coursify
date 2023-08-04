import React, { useState, useRef, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const NewSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();

  // Function to handle clicks outside the modal
  const handleClickOutsideModal = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Adding event listener to handle clicks outside the modal
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideModal);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideModal);
    };
  }, []);
  return (
    <>
      <RxHamburgerMenu onClick={() => setIsOpen(true)} />
      {isOpen && (
        <div
          ref={modalRef}
          className="fixed  z-40 flex overflow-x-hidden overflow-y-auto outline-none bg-white min-w-full max-h-[90vh] top-0 rounded-b-3xl shadow-lg left-0 focus:outline-none"
        >
          <div className="relative flex flex-col overflow-scroll justify-center w-full mx-10">
            <div className="flex items-center mt-5">
              <button
                className="float-right absolute right-0 text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
              <h2 className="text-black text-xl font-bold">Details</h2>
            </div>

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
                  <span className="label-text text-black">
                    Flexible schedule
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewSidebar;
