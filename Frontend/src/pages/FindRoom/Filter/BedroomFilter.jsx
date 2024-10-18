import React, { useState } from 'react';

const BedroomsFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBedrooms, setSelectedBedrooms] = useState(['1']);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleBedroomsChange = (event) => {
    const value = event.target.value;
    setSelectedBedrooms((prev) =>
      prev.includes(value) ? prev.filter((bedroom) => bedroom !== value) : [...prev, value]
    );
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className="px-4 py-2 bg-gray-700 text-white rounded-md flex items-center">
        Bedrooms
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
          {['Studio', '1', '2', '3', '4', '5', '6+'].map((bedroom) => (
            <label key={bedroom} className="block px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer">
              <input
                type="checkbox"
                value={bedroom}
                checked={selectedBedrooms.includes(bedroom)}
                onChange={handleBedroomsChange}
                className="mr-2"
              />
              {bedroom}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default BedroomsFilter;
