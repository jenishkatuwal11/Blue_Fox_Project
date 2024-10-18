import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MoveInDateFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleDateChange = (date) => setSelectedDate(date);

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} className="px-4 py-2 bg-gray-700 text-white rounded-md flex items-center">
        Move-in Date
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-10">
          <p className="px-4 text-sm">We will show you places available ±30 days from your desired move-in date:</p>
          <div className="px-4">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              placeholderText="Select a date"
              className="w-full px-2 py-1 border rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MoveInDateFilter;
