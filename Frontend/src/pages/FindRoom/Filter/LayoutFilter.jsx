import React, { useState } from 'react';

const LayoutFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLayout, setSelectedLayout] = useState(['Entire Place']);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleLayoutChange = (event) => {
    const value = event.target.value;
    setSelectedLayout((prev) =>
      prev.includes(value) ? prev.filter((layout) => layout !== value) : [...prev, value]
    );
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className="px-4 py-2 bg-gray-700 text-white rounded-md flex items-center">
        Layout
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
          {['Entire Place', 'Private Room', 'Shared Room'].map((layout) => (
            <label key={layout} className="block px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer">
              <input
                type="checkbox"
                value={layout}
                checked={selectedLayout.includes(layout)}
                onChange={handleLayoutChange}
                className="mr-2"
              />
              {layout}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default LayoutFilter;
