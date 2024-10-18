import React, { useState } from 'react';

const VerifiedFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVerifiedOnly, setIsVerifiedOnly] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleVerifiedChange = (event) => setIsVerifiedOnly(event.target.checked);

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className="px-4 py-2 bg-gray-700 text-white rounded-md flex items-center">
        Verified
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-10">
          <p className="px-4 text-sm">Only show users who have successfully verified their ID:</p>
          <label className="block px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer">
            <input
              type="checkbox"
              checked={isVerifiedOnly}
              onChange={handleVerifiedChange}
              className="mr-2"
            />
            Only show verified users
          </label>
        </div>
      )}
    </div>
  );
};

export default VerifiedFilter;
