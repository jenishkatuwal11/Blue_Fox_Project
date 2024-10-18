import React, { useState } from 'react';

const AmenitiesFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleAmenitiesChange = (event) => {
    const value = event.target.value;
    setSelectedAmenities((prev) =>
      prev.includes(value) ? prev.filter((amenity) => amenity !== value) : [...prev, value]
    );
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className="px-4 py-2 bg-gray-700 text-white rounded-md flex items-center">
        Amenities
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-10">
          {['Furnished', 'Balcony/Patio', 'Air Conditioning', 'Alarm System', 'Dishwasher', 'Parking'].map((amenity) => (
            <label key={amenity} className="block px-4 py-2 text-sm hover:bg-gray-200 cursor-pointer">
              <input
                type="checkbox"
                value={amenity}
                checked={selectedAmenities.includes(amenity)}
                onChange={handleAmenitiesChange}
                className="mr-2"
              />
              {amenity}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default AmenitiesFilter;
