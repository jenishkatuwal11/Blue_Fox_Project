import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const AgeFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ageRange, setAgeRange] = useState([18, 60]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSliderChange = (value) => setAgeRange(value);

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className="px-4 py-2 bg-gray-700 text-white rounded-md flex items-center">
        Age
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-4 z-10">
          <p className="px-4 text-sm">Select an age range to filter by user age:</p>
          <div className="px-4">
            <Slider
              range
              min={18}
              max={100}
              value={ageRange}
              onChange={handleSliderChange}
            />
            <div className="flex justify-between text-sm mt-2">
              <span>Min age: {ageRange[0]}</span>
              <span>Max age: {ageRange[1]}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgeFilter;
