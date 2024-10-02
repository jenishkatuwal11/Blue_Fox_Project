const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src="/assets/logo.png" alt="Logo" />
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Demo
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Properties
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Team
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Pages
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Blog
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
