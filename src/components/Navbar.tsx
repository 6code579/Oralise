import { Link, Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronUp, Facebook, Linkedin, Instagram, MessageCircle } from "lucide-react";
import Button from "./Button";

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

          {/* Toggle menu mobile */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Menu desktop */}
          <ul className="hidden lg:flex gap-6 text-xs font-semibold items-center">
            <li><Link to="/">Accueil</Link></li>

            <li className="group relative">
              <button className="inline-flex items-center gap-1 hover:main-color dark:hover:text-sky-400">
                Nos services <ChevronDown size={16} />
              </button>
              <ul className="absolute hidden group-hover:block bg-base-100 rounded-md shadow-lg z-10 w-40 mt-1 border">
                <li><Link to="#" className="block px-4 py-2 hover:bg-main-color">Coaching</Link></li>
                <li><Link to="#" className="block px-4 py-2 hover:bg-main-color">Formations</Link></li>
                <li><Link to="#" className="block px-4 py-2 hover:bg-main-color">Préparation aux examens</Link></li>
              </ul>
            </li>

            <li className="group relative">
              <button className="inline-flex items-center gap-1 hover:main-color dark:hover:text-sky-400">
                Nos langues <ChevronDown size={16} />
              </button>
              <ul className="absolute hidden group-hover:block bg-base-100 rounded-md shadow-lg z-10 w-40 mt-1 border">
                <li><Link to="/french" className="block px-4 py-2 hover:bg-main-color">Français</Link></li>
                <li><Link to="/english" className="block px-4 py-2 hover:bg-main-color">English</Link></li>
              </ul>
            </li>

            <li className="group relative">
              <button className="inline-flex items-center gap-1 hover:main-color dark:hover:text-sky-400">
                Nos formations <ChevronDown size={16} />
              </button>
              <ul className="absolute hidden group-hover:block bg-base-100 rounded-md shadow-lg z-10 w-44 mt-1 border">
                <li><Link to="/entrepriseTraining" className="block px-4 py-2 hover:bg-main-color">En entreprise</Link></li>
                <li><Link to="/individuelTraining" className="block px-4 py-2 hover:bg-main-color">Individuelle</Link></li>
                <li><Link to="/groupTraining" className="block px-4 py-2 hover:bg-main-color">En groupe</Link></li>
                <li><Link to="/childrenTraining" className="block px-4 py-2 hover:bg-main-color">Pour enfants</Link></li>
              </ul>
            </li>
            <li><Link to="/about">À propos</Link></li>
            <li><Link to="/contact"><Button label="Contact" changeColor={true} /></Link></li>
            <li>
              <button onClick={toggleTheme} className="ml-2 px-4 py-2 rounded-full border bg-gray-200 dark:bg-gray-800">
                {theme === "dark" ? "☀️" : "🌙"}
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
              <Link to="/services" onClick={toggleMenu} className="block px-4 py-2">Coaching</Link>
              <Link to="/services" onClick={toggleMenu} className="block px-4 py-2">Formations</Link>
              <Link to="/services" onClick={toggleMenu} className="block px-4 py-2">Préparation examens</Link>
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

            <li>
              <button
                onClick={() => {
                  toggleTheme();
                  toggleMenu();
                }}
                className="w-full mt-2 px-4 py-2 rounded-full border bg-gray-200 dark:bg-gray-800 dark:text-white"
              >
                {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
      {/* Footer professionnel inspiré de Freepik */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-10 pt-10 pb-6 px-4 md:px-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & description */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2">
              <img src="/logo.png" alt="Oralise Logo" className="w-32 h-auto object-contain" />
            </a>
            <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
              Oralise, votre partenaire pour l’expression orale et la maîtrise des langues. Formations, coaching et accompagnement sur-mesure.
            </p>
          </div>
          {/* Navigation */}
          <div>
            <h4 className="font-bold text-gray-800 dark:text-white mb-3">Navigation</h4>
            <ul className="flex flex-col gap-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li className="group relative">
                <button className="inline-flex items-center gap-1 hover:main-color dark:hover:text-sky-400">
                  Nos langues <ChevronDown size={16} />
                </button>
                <ul className="absolute hidden group-hover:block bg-base-100 rounded-md shadow-lg z-10 w-40 mt-1 border">
                  <li><Link to="/french" className="block px-4 py-2 hover:bg-main-color">Français</Link></li>
                  <li><Link to="/english" className="block px-4 py-2 hover:bg-main-color">English</Link></li>
                </ul>
              </li>
              <li className="group relative">
                <button className="inline-flex items-center gap-1 hover:main-color dark:hover:text-sky-400">
                  Nos formations <ChevronDown size={16} />
                </button>
                <ul className="absolute hidden group-hover:block bg-base-100 rounded-md shadow-lg z-10 w-44 mt-1 border">
                  <li><Link to="/entrepriseTraining" className="block px-4 py-2 hover:bg-main-color">En entreprise</Link></li>
                  <li><Link to="/individuelTraining" className="block px-4 py-2 hover:bg-main-color">Individuelle</Link></li>
                  <li><Link to="/groupTraining" className="block px-4 py-2 hover:bg-main-color">En groupe</Link></li>
                  <li><Link to="/childrenTraining" className="block px-4 py-2 hover:bg-main-color">Pour enfants</Link></li>
                </ul>
              </li>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          {/* Formations */}
          <div>
            <h4 className="font-bold text-gray-800 dark:text-white mb-3">Formations</h4>
            <ul className="flex flex-col gap-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
              <li>Coaching individuel</li>
              <li>Formation en groupe</li>
              <li>Formation en entreprise</li>
              <li>Préparation aux examens</li>
              <li>Ateliers enfants</li>
            </ul>
          </div>
          {/* Contact & réseaux */}
          <div>
            <h4 className="font-bold text-gray-800 dark:text-white mb-3">Contact</h4>
            <ul className="flex flex-col gap-2 text-gray-600 dark:text-gray-300 text-sm md:text-base">
              <li>Email : <a href="mailto:contact@oralise.com" className="hover:underline main-color">contact@oralise.com</a></li>
              <li>Téléphone : <a href="tel:+33123456789" className="hover:underline main-color">+212 607041226</a></li>
              <li className="flex gap-3 mt-2">
                <a href="https://www.facebook.com/profile.php?id=61571529371866" aria-label="Facebook" className="hover:text-blue-600"><Facebook /></a>
                <a href="#" aria-label="Instagram" className="hover:text-pink-500"><Instagram /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-sky-500"><Linkedin /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-green-600"><MessageCircle /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 text-xs md:text-sm">
          <span>&copy; {new Date().getFullYear()} Oralise. Tous droits réservés.</span>
          <span>Conçu par Oralise Team</span>
        </div>
      </footer>
    </>
  );
};

// ✅ Composant Dropdown Mobile (accordéon animé)
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
