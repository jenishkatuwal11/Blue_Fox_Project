import React, { useState } from 'react';

const TypeFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleTypeChange = (event) => {
    const value = event.target.value;
    setSelectedTypes((prev) =>
      prev.includes(value) ? prev.filter((type) => type !== value) : [...prev, value]
    );
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className="px-4 py-2 bg-gray-700 text-white rounded-md flex items-center">
        Type
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
          {['House', 'Apartment', 'Townhouse', 'Condo', 'Other'].map((type) => (
            <label key={type} className="block px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer">
              <input
                type="checkbox"
                value={type}
                checked={selectedTypes.includes(type)}
                onChange={handleTypeChange}
                className="mr-2"
              />
              {type}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default TypeFilter;
