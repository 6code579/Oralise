import { Link, Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <nav className="w-11/12 mx-auto mt-5 shadow-2xl bg-base-100 rounded-xl lg:rounded-full transition-all duration-300">
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
          <ul className="hidden lg:flex gap-6 text-base font-semibold items-center ">
            <li className="hover:text-blue-600 duration-300">
              <Link to="/">Accueil</Link>
            </li>
            <li className="hover:text-blue-600 duration-300">
              <Link to="/services">Services</Link>
            </li>
            <li className="hover:text-blue-600 duration-300">
              <Link to="/language">Nos langues</Link>
            </li>
            <li className="hover:text-blue-600 duration-300">
              <Link to="/training">Nos formations</Link>
            </li>
            <li className="hover:text-blue-600 duration-300">
              <Link to="/about">À propos</Link>
            </li>
            <li>
              <Link to="/contact">
                <button className="btn bg-sky-500 text-white rounded-full font-bold shadow-md">
                  Contact
                </button>
              </Link>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="ml-2 px-4 py-2 rounded-full border border-gray-400 bg-gray-200 dark:bg-gray-800 dark:text-white"
              >
                {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile menu avec animation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 px-6 py-4 text-base font-semibold mt-4">
            <li className="border border-gray-500  text-center rounded-full  hover:bg-sky-500 hover:text-white transition-colors duration-300  p-2">
              <Link to="/" onClick={toggleMenu}>Accueil</Link>
            </li>
            <li className="border border-gray-500  text-center rounded-full hover:bg-sky-500 hover:text-white transition-colors duration-300  p-2">
              <Link to="/services" onClick={toggleMenu}>Services</Link>
            </li>
            <li className="border border-gray-500  text-center rounded-full hover:bg-sky-500 hover:text-white transition-colors duration-300  p-2">
              <Link to="/language" onClick={toggleMenu}>Nos langues</Link>
            </li>
            <li className="border border-gray-500  text-center rounded-full hover:bg-sky-500 hover:text-white transition-colors duration-300  p-2">
              <Link to="/training" onClick={toggleMenu}>Nos formations</Link>
            </li>
            <li className="border border-gray-500  text-center rounded-full hover:bg-sky-500 hover:text-white transition-colors duration-300  p-2">
              <Link to="/about" onClick={toggleMenu}>À propos</Link>
            </li>
            <li >
              <Link to="/contact" onClick={toggleMenu}>
                <button className="btn bg-sky-500 text-white w-full mt-2 rounded-full">Contact</button>
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
