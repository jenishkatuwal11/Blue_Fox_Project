import React, { useState } from 'react';

const BathroomsFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedBathrooms, setSelectedBathrooms] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleBathroomsChange = (event) => {
    const value = event.target.value;
    setSelectedBathrooms((prev) =>
      prev.includes(value) ? prev.filter((bathroom) => bathroom !== value) : [...prev, value]
    );
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className="px-4 py-2 bg-gray-700 text-white rounded-md flex items-center">
        Bathrooms
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
          {['1', '2', '3', '4', '5', '6+'].map((bathroom) => (
            <label key={bathroom} className="block px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer">
              <input
                type="checkbox"
                value={bathroom}
                checked={selectedBathrooms.includes(bathroom)}
                onChange={handleBathroomsChange}
                className="mr-2"
              />
              {bathroom}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default BathroomsFilter;
