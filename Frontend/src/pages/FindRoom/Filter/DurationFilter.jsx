import React, { useState } from 'react';

const DurationFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState('Flexible');

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleDurationChange = (event) => setSelectedDuration(event.target.value);

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className="px-4 py-2 bg-gray-700 text-white rounded-md flex items-center">
        Duration
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
          {['Flexible', 'Month to month', '6 months', '9 months', '12 months'].map((duration) => (
            <label key={duration} className="block px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer">
              <input
                type="radio"
                value={duration}
                checked={selectedDuration === duration}
                onChange={handleDurationChange}
                className="mr-2"
              />
              {duration}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default DurationFilter;
