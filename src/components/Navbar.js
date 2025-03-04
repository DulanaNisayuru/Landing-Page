import { useState, useEffect } from "react";
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">MyBrand</h1>

        {/* Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-x-6">
          <a href="#" className="text-gray-900 dark:text-white">Home</a>
          <a href="#" className="text-gray-900 dark:text-white">Contact Us</a>
          <a href="#" className="text-gray-900 dark:text-white">Test</a>
          <a href="#" className="text-gray-900 dark:text-white">Test</a>
        </div>

        {/* Dark Mode & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-900" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-900 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (Hidden by Default) */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <a href="#" className="text-gray-900 dark:text-white">Home</a>
          <a href="#" className="text-gray-900 dark:text-white">Contact Us</a>
          <a href="#" className="text-gray-900 dark:text-white">Test</a>
          <a href="#" className="text-gray-900 dark:text-white">Test</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
