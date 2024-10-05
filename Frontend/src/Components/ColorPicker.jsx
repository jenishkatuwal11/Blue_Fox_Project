import React, { useState } from "react";

const ColorPicker = () => {
  const [themeColor, setThemeColor] = useState("#000000"); // Default color
  // jhjhdbjhdb

  const colors = [
    "#ff5722",
    "#ff9800",
    "#4caf50",
    "#2196f3",
    "#3f51b5",
    "#9c27b0",
    "#00bcd4",
    "#795548",
  ];

  // Function to change the color
  const changeThemeColor = (color) => {
    setThemeColor(color);
    document.documentElement.style.setProperty("--primary-color", color); // Change CSS variable
  };

  return (
    <div className="fixed left-0 top-0 bg-gray-800 p-4 z-50 text-white w-64 h-screen shadow-lg">
      <h3 className="text-lg font-bold">Choose Options</h3>

      {/* Multiple Colors */}
      <div className="mt-4">
        <h4 className="font-semibold">Multiple Colors</h4>
        <div className="grid grid-cols-4 gap-2 mt-2">
          {colors.map((color) => (
            <button
              key={color}
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: color }}
              onClick={() => changeThemeColor(color)}
            />
          ))}
        </div>
      </div>

      {/* Other Options */}
      <div className="mt-6">
        <h4 className="font-semibold">RTL VERSION</h4>
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
          RTL Version
        </button>
        <button className="mt-2 ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
          LTR Version
        </button>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold">Boxed Version</h4>
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
          Boxed
        </button>
        <button className="mt-2 ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
          Full Width
        </button>
      </div>

      <div className="mt-6">
        <h4 className="font-semibold">Want Sticky Header</h4>
        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
          Yes
        </button>
        <button className="mt-2 ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
          No
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;
