import React, { useState } from 'react';

const GenderFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState('All genders');

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleGenderChange = (event) => setSelectedGender(event.target.value);

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className="px-4 py-2 bg-gray-700 text-white rounded-md flex items-center">
        Gender
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
          {['All genders', 'Female', 'Male', 'Non-binary', 'Other'].map((gender) => (
            <label key={gender} className="block px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer">
              <input
                type="radio"
                value={gender}
                checked={selectedGender === gender}
                onChange={handleGenderChange}
                className="mr-2"
              />
              {gender}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default GenderFilter;
