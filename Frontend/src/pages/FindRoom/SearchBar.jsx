import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-100 my-8 pt-8 relative">
      <div className="flex items-center border border-black rounded-full p-2 max-w-md">
        {/* Icon */}
        <div className="bg-gray-200 rounded-full p-2 mr-2">
          <FaSearch />
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="Enter your location"
          className="outline-none flex-grow bg-transparent placeholder-gray-500 text-gray-700"
        />
      </div>

      {/* Post Room Button */}
      <button className="border border-gray-400 rounded-md px-4 py-2 text-black hover:bg-black hover:text-white transition absolute right-0 mr-4">
        Post Room
      </button>

      {/* Horizontal Line */}
      <hr className="mt-8 w-full border-gray-400" />
    </div>
  );
};

export default SearchBar;