import { Link, Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./bouton"; // Assuming Button is a custom component for buttons
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <nav className="w-11/12 mx-auto mt-5 md:mt-10 shadow-2xl bg-base-100 rounded-xl lg:rounded-full transition-all duration-300">
        <div className="flex justify-between items-center py-4 px-6">
          <a href="#">
            <img src="/logo.png" alt="Logo" className="w-32 sm:w-40 h-auto object-cover" />
          </a>

          {/* Mobile toggle */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop menu */}
          <ul className="hidden lg:flex gap-6 text-xs font-semibold items-center">
            <li className="hover:main-color duration-300">
              <Link to="/">Accueil</Link>
            </li>
           <li className="relative group ">
              <button
                className="hover:main-color dark:hover:text-sky-400 duration-500 inline-flex items-center gap-1"
                type="button"
              >
                Nos services
                <ChevronDown size={16} className="mt-0.5" />
              </button>
              <ul
                className="absolute left-0 mt-0 bg-white dark:bg-gray-800 shadow-lg rounded-md w-36 z-10 border border-gray-100 dark:border-gray-700
                hidden group-hover:block bg-base-100 "
              >
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-white hover:bg-main-color" 
                  >
                    Coaching
                  </Link>
                </li>
                 <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200  hover:text-white hover:bg-main-color "
                  >
                    Formations
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200  hover:text-white hover:bg-main-color "
                  >
                    Preparation aux examens
                  </Link>
                </li>
              </ul>
            </li>

            {/* Dropdown Nos langues au hover */}
            <li className="relative group ">
              <button
                className="hover:main-color dark:hover:text-sky-400 duration-500 inline-flex items-center gap-1"
                type="button"
              >
                Nos langues
                <ChevronDown size={16} className="mt-0.5" />
              </button>
              <ul
                className="absolute left-0 mt-0 bg-white dark:bg-gray-800 shadow-lg rounded-md w-36 z-10 border border-gray-100 dark:border-gray-700
                hidden group-hover:block bg-base-100 "
              >
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-white hover:bg-main-color" 
                  >
                    Français
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200  hover:text-white hover:bg-main-color "
                  >
                    English
                  </Link>
                </li>
              </ul>
            </li>

             <li className="relative group ">
              <button
                className="hover:main-color dark:hover:text-sky-400 duration-500 inline-flex items-center gap-1"
                type="button"
              >
                Nos formations
                <ChevronDown size={16} className="mt-0.5" />
              </button>
              <ul
                className="absolute left-0 mt-0 bg-white dark:bg-gray-800 shadow-lg rounded-md w-36 z-10 border border-gray-100 dark:border-gray-700
                hidden group-hover:block bg-base-100 "
              >
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-white hover:bg-main-color" 
                  >
                    Formation en entreprise
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200  hover:text-white hover:bg-main-color "
                  >
                    Formation individuelle
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200  hover:text-white hover:bg-main-color "
                  >
                    Formation en groupe
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="block px-4 py-2 text-gray-700 dark:text-gray-200  hover:text-white hover:bg-main-color "
                  >
                    Formation pour enfants
                  </Link>
                </li>
              </ul>
            </li>
            <li className="hover:text-blue-600 duration-300">
              <Link to="/about" className="hover:main-color duration-300">À propos</Link>
            </li>
            <li>
              <Link to="/contact">
                <button className="btn bg-main-color duration-300 hover:bg-hover-main-color text-white rounded-full font-bold shadow-md  border border-none shadow-cyan-500/50">
                  Contact
                </button>
              </Link>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="ml-2 px-4 py-2 rounded-full border border-gray-400 bg-gray-200 dark:bg-gray-800 dark:text-white"
              >
                {theme === "dark" ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile menu avec animation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <ul className="flex flex-col gap-4 px-6 py-4 text-base font-semibold mt-4">
            <li className="border border-gray-500  text-center rounded-full  hover:main-color transition-colors duration-300  p-2">
              <Link to="/" onClick={toggleMenu}>Accueil</Link>
            </li>
            <li className="border border-gray-500  text-center rounded-full hover:main-color transition-colors duration-300  p-2">
              <Link to="/services" onClick={toggleMenu}>Services</Link>
            </li>
            <li className="border border-gray-500  text-center rounded-full hover:main-color transition-colors duration-300  p-2">
              <Link to="/language" onClick={toggleMenu}>Nos langues</Link>
            </li>
            <li className="border border-gray-500  text-center rounded-full hover:main-color transition-colors duration-300  p-2">
              <Link to="/training" onClick={toggleMenu}>Nos formations</Link>
            </li>
            <li className="border border-gray-500  text-center rounded-full hover:main-color transition-colors duration-300  p-2">
              <Link to="/about" onClick={toggleMenu}>À propos</Link>
            </li>
            <li >
              <Link to="/contact" onClick={toggleMenu}>
                <Button label="Contact"></Button>
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  toggleTheme();
                  toggleMenu();
                }}
                className="w-full mt-2 px-4 py-2 rounded-full border border-gray-400 bg-gray-200 dark:bg-gray-800 dark:text-white"
              >
                {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export { Navbar };
