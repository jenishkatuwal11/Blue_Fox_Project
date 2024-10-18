import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([500, 5000]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSliderChange = (value) => setPriceRange(value);

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className="px-4 py-2 bg-gray-700 text-white rounded-md flex items-center">
        Price
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-4 z-10">
          <p className="px-4 text-sm">Only show places within your specified price range:</p>
          <div className="px-4">
            <Slider
              range
              min={500}
              max={10000}
              value={priceRange}
              onChange={handleSliderChange}
            />
            <div className="flex justify-between text-sm mt-2">
              <span>Min price: {priceRange[0]}</span>
              <span>Max price: {priceRange[1]}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceFilter;
