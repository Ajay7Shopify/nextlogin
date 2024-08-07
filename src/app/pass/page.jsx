"use client"
import React, { useState } from 'react';

const DropdownRadio = ({na,option1,option2}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [buttonText, setButtonText] = useState("N/A"); // Default button text

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const closeDropdown = (event) => {
    setIsOpen(false);
    setButtonText(na);
    const value = event.target.value;
    setSelectedOption(value);
  };


  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    setButtonText(value); // Update button text with selected option
    setIsOpen(false); // Close dropdown after selection
  };

  return (
<div className="relative inline-block text-left flex sm:inline-block justify-center items-center">
      <button
        data-dropdown-toggle="dropdownRadioHelper"
        onClick={toggleDropdown}
        className={`text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
          selectedOption === {option1}
            ? 'bg-green-500 hover:bg-green-600'
            : selectedOption === {option2}
            ? 'bg-red-600 hover:bg-red-900'
            : selectedOption === {na}
            ? 'bg-white hover:bg-red-900'
            : 'bg-slate-500 hover:bg-black'
             
        }`}
        type="button"
      >
        {buttonText} {/* Display selected option or default text */}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id="dropdownRadioHelper"
          className="z-10 absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-22 dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div className="flex items-center h-5">
                  <input
                    id="helper-radio-5"
                    name="helper-radio"
                    type="radio"
                    value={option1}
                    checked={selectedOption === {option1}}
                    onChange={handleOptionChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                <div className="ms-2 text-sm font-medium px-1">
                  <label htmlFor="helper-radio-5" className="text-gray-900 dark:text-gray-300">
                    {option1}
                  </label>
                </div>
                <span    onClick={closeDropdown}
 className='relative items-end justify-end bg-red-600 p-0 pl-2 ml-1 -my-2 -mx-2 -mb-2 max-sm:h-5 h-6 w-6 max-sm:rounded-lg md:rounded-3xl cursor-pointer'>X</span>

                </div>

            </li>
            <li>
              <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <div className="flex items-center h-5">
                  <input
                    id="helper-radio-6"
                    name="helper-radio"
                    type="radio"
                    value={option2}
                    checked={selectedOption ==={option2}}
                    onChange={handleOptionChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                </div>
                <div className="ms-2 text-sm font-medium px-1">
                  <label htmlFor="helper-radio-6" className="text-gray-900 dark:text-gray-300">
                  {option2}
                  </label>
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownRadio;


