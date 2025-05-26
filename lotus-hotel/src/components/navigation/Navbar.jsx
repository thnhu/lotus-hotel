import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="font-bold text-xl text-blue-600">Tripster</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-between items-center w-full ml-8">
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">Properties</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Attractions</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">Popular</a>
            </div>

            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Sign up
              </button>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50">
                Log in
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600"
          >
            {/* Icon có thể được thêm ở đây */}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleMenu}>
            <div className="absolute right-0 top-16 w-64 bg-white h-full shadow-lg p-4" onClick={(e) => e.stopPropagation()}>
              <div className="flex flex-col space-y-4">
                <a href="#" className="text-gray-600 hover:text-blue-600">Properties</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Attractions</a>
                <a href="#" className="text-gray-600 hover:text-blue-600">Popular</a>
                <div className="border-t pt-4">
                  <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Sign up
                  </button>
                  <button className="w-full mt-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50">
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;