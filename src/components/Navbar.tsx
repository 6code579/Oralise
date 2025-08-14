import { Link, Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp, Facebook, Linkedin, Instagram, MessageCircle } from "lucide-react";
import Button from "./Button";
import { Sun, Moon } from "lucide-react";


const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <nav className="w-11/12 mx-auto items-center mt-5 md:mt-10 shadow-2xl bg-base-100 rounded-xl lg:rounded-full transition-all duration-300">
        <div className="flex justify-between items-center py-4 px-6">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="w-32 sm:w-40 h-auto object-cover" />
          </Link>

          {/* Zone regroupée pour les boutons mobile */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Toggle menu mobile */}
            <button onClick={toggleMenu} className="text-2xl">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Toggle dark-light mode mobile */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 p-1 rounded-full border border-main-color-mobile dark:border-yellow-400 duration-300  hover:bg-main-color-opacity hover:text-white dark:bg-gray-800/70 dark:hover:bg-gray-600 shadow-2xl"
            >
              {theme === "dark" ? (
                <Sun className="text-yellow-400 " size={15} />
              ) : (
                <Moon className="main-color" size={15} />
              )}
            </button>
          </div>


          {/* Menu desktop */}
          <ul className="hidden lg:flex gap-6 text-xs font-semibold items-center">
            <li><Link to="/">Accueil</Link></li>

            <li className="group relative">
              <button className="inline-flex items-center gap-1 hover:main-color dark:hover:text-sky-400">
                Nos services <ChevronDown size={16} />
              </button>
              <ul className="absolute hidden group-hover:block bg-base-100 rounded-md shadow-lg z-10 w-40 mt-0 border">
                <li><Link to="/coaching" className="block px-4 py-2 hover:bg-main-color hover:text-white">Coaching</Link></li>
                <li><Link to="/training" className="block px-4 py-2 hover:bg-main-color hover:text-white">Formations</Link></li>
                <li><Link to="examen" className="block px-4 py-2 hover:bg-main-color hover:text-white">Préparation aux examens</Link></li>
              </ul>
            </li>

            <li className="group relative">
              <button className="inline-flex items-center gap-1 hover:main-color dark:hover:text-sky-400">
                Nos langues <ChevronDown size={16} />
              </button>
              <ul className="absolute hidden group-hover:block bg-base-100 rounded-md shadow-lg z-10 w-40 mt-0 border">
                <li><Link to="/french" className="block px-4 py-2 hover:bg-main-color hover:text-white">Français</Link></li>
                <li><Link to="/english" className="block px-4 py-2 hover:bg-main-color hover:text-white">English</Link></li>
              </ul>
            </li>

            <li className="group relative">
              <button className="inline-flex items-center gap-1 hover:main-color dark:hover:text-sky-400">
                Nos formations <ChevronDown size={16} />
              </button>
              <ul className="absolute hidden group-hover:block bg-base-100 rounded-md shadow-lg z-10 w-44 mt-0 border ">
                <li><Link to="/entrepriseTraining" className="block px-4 py-2 hover:bg-main-color hover:text-white">En entreprise</Link></li>
                <li><Link to="/individuelTraining" className="block px-4 py-2 hover:bg-main-color hover:text-white">Individuelle</Link></li>
                <li><Link to="/groupTraining" className="block px-4 py-2 hover:bg-main-color hover:text-white">En groupe</Link></li>
                <li><Link to="/childrenTraining" className="block px-4 py-2 hover:bg-main-color hover:text-white">Pour enfants</Link></li>
              </ul>
            </li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/contact"><Button label="Contact" changeColor={true} /></Link></li>
            <li>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 p-2 rounded-full border dark:border-yellow-400 border-main-color  duration-300 hover:bg-main-color-opacity hover:text-white dark:bg-gray-800/70 dark:hover:bg-gray-600 shadow-2xl"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="text-yellow-400" size={20} />

                  </>
                ) : (
                  <>
                    <Moon className="main-color" size={20} />

                  </>
                )}
              </button>

            </li>
          </ul>
        </div>

        {/* Menu mobile animé */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
          <ul className="flex flex-col gap-4 px-6 py-4 text-base font-semibold mt-4">
            <li className="text-center rounded-full border p-2 hover:main-color">
              <Link to="/" onClick={toggleMenu}>Accueil</Link>
            </li>

            {/* Dropdown Services */}
            <li><MobileDropdown title="Services">
              <Link to="/coaching" onClick={toggleMenu} className="block px-4 py-2">Coaching</Link>
              <Link to="/training" onClick={toggleMenu} className="block px-4 py-2">Formations</Link>
              <Link to="examen" onClick={toggleMenu} className="block px-4 py-2">Préparation examens</Link>
            </MobileDropdown></li>

            {/* Dropdown Langues */}
            <li><MobileDropdown title="Nos langues">
              <Link to="/french" onClick={toggleMenu} className="block px-4 py-2">Français</Link>
              <Link to="/english" onClick={toggleMenu} className="block px-4 py-2">English</Link>
            </MobileDropdown></li>

            {/* Dropdown Formations */}
            <li><MobileDropdown title="Nos formations">
              <Link to="/entrepriseTraining" onClick={toggleMenu} className="block px-4 py-2">En entreprise</Link>
              <Link to="/individuelTraining" onClick={toggleMenu} className="block px-4 py-2">Individuelle</Link>
              <Link to="/groupTraining" onClick={toggleMenu} className="block px-4 py-2">En groupe</Link>
              <Link to="/childrenTraining" onClick={toggleMenu} className="block px-4 py-2">Pour enfants</Link>
            </MobileDropdown></li>

            <li className="text-center rounded-full border p-2 hover:main-color">
              <Link to="/about" onClick={toggleMenu}>À propos</Link>
            </li>

            <li>
              <Link to="/contact" onClick={toggleMenu}>
                <Button label="Contact" changeColor={true} className="w-full" />
              </Link>
            </li>


          </ul>
        </div>
      </nav>

      <Outlet />
      {/* Footer professionnel inspiré de Freepik */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-10 pt-10 pb-6 px-4 sm:px-6 lg:px-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & description */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2">
              <img src="/logo.png" alt="Oralise Logo" className="w-28 sm:w-32 h-auto object-contain" />
            </a>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              Oralise, votre partenaire pour l’expression orale et la maîtrise des langues. Formations, coaching et accompagnement sur-mesure.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-gray-800 dark:text-white mb-3 text-base sm:text-lg">Navigation</h4>
            <ul className="flex flex-col gap-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              <li className="duration-300 hover:main-color"><Link to="/">Accueil</Link></li>

              <li className="group relative">
                <button className="inline-flex items-center gap-1 hover:main-color dark:hover:text-sky-400">
                  Nos services <ChevronDown size={16} />
                </button>
                <ul className="absolute hidden group-hover:block bg-base-100 rounded-md shadow-lg z-10 w-40 mt-1 border">
                  <li><Link to="/coaching" className="block px-4 py-2 hover:bg-main-color hover:text-white">Coaching</Link></li>
                  <li><Link to="/training" className="block px-4 py-2 hover:bg-main-color hover:text-white">Formations</Link></li>
                  <li><Link to="/examen" className="block px-4 py-2 hover:bg-main-color hover:text-white">Préparation aux examens</Link></li>
                </ul>
              </li>

              <li className="group relative">
                <button className="inline-flex items-center gap-1 hover:main-color dark:hover:text-sky-400">
                  Nos langues <ChevronDown size={16} />
                </button>
                <ul className="absolute hidden group-hover:block bg-base-100 rounded-md shadow-lg z-10 w-40 mt-1 border">
                  <li><Link to="/french" className="block px-4 py-2 hover:bg-main-color hover:text-white">Français</Link></li>
                  <li><Link to="/english" className="block px-4 py-2 hover:bg-main-color hover:text-white">English</Link></li>
                </ul>
              </li>

              <li className="group relative">
                <button className="inline-flex items-center gap-1 hover:main-color dark:hover:text-sky-400">
                  Nos formations <ChevronDown size={16} />
                </button>
                <ul className="absolute hidden group-hover:block bg-base-100 rounded-md shadow-lg z-10 w-44 mt-1 border">
                  <li><Link to="/entrepriseTraining" className="block px-4 py-2 hover:bg-main-color hover:text-white">En entreprise</Link></li>
                  <li><Link to="/individuelTraining" className="block px-4 py-2 hover:bg-main-color hover:text-white">Individuelle</Link></li>
                  <li><Link to="/groupTraining" className="block px-4 py-2 hover:bg-main-color hover:text-white">En groupe</Link></li>
                  <li><Link to="/childrenTraining" className="block px-4 py-2 hover:bg-main-color hover:text-white">Pour enfants</Link></li>
                </ul>
              </li>

              <li className="duration-300 hover:main-color"><Link to="/about">À propos</Link></li>
              <li className="duration-300 hover:main-color"><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Formations */}
          <div>
            <h4 className="font-bold text-gray-800 dark:text-white mb-3 text-base sm:text-lg">Formations</h4>
            <ul className="flex flex-col gap-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              <li>Coaching individuel</li>
              <li>Formation en groupe</li>
              <li>Formation en entreprise</li>
              <li>Préparation aux examens</li>
              <li>Ateliers enfants</li>
            </ul>
          </div>

          {/* Contact & réseaux */}
          <div>
            <h4 className="font-bold text-gray-800 dark:text-white mb-3 text-base sm:text-lg">Contact</h4>
            <ul className="flex flex-col gap-2 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
              <li>Email : <a href="mailto:contact@oralise.pro" className="hover:underline main-color">contact@oralise.pro</a></li>
              <li>Téléphone : <a href="tel:+212607041226" className="hover:underline main-color">+212 607041226</a></li>
              <li className="flex gap-3 mt-2">
                <a href="https://www.facebook.com/profile.php?id=61571529371866"  target="_blank" aria-label="Facebook" className="hover:text-blue-600"><Facebook /></a>
                <a href="#" aria-label="Instagram" className="hover:text-pink-500"><Instagram /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-sky-500"><Linkedin /></a>
                <a href="https://wa.me/212607041226"   target="_blank" aria-label="Message" className="hover:text-green-600"><MessageCircle /></a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 text-xs sm:text-sm text-center gap-4 sm:gap-0">
          <span>&copy; {new Date().getFullYear()} Oralise. Tous droits réservés.</span>
          <span>Oralise Team</span>
        </div>
      </footer>

    </>
  );
};

// Composant Dropdown Mobile (accordéon animé)
const MobileDropdown = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-xl mb-1 overflow-hidden">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex justify-between items-center px-4 py-3 font-semibold"
      >
        <span>{title}</span>
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      <div className={`transition-all duration-300 ease-in-out ${open ? "max-h-[500px]" : "max-h-0"} overflow-hidden`}>
        <div className="flex flex-col bg-gray-100 dark:bg-gray-800">{children}</div>
      </div>
    </div>
  );

};

export { Navbar };
