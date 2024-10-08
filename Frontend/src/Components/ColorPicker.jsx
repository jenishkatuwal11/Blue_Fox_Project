import React from "react";

const ColorPicker = ({ onColorChange }) => {
  const colors = ["#ff5722", "#ff9800", "#4caf50", "#2196f3", "#3f51b5", "#9c27b0", "#00bcd4", "#795548"];

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
              onClick={() => onColorChange(color)} // Call the function passed as a prop
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
