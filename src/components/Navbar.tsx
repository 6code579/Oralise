import { Link, Outlet } from "react-router-dom"

const Navbar = () => {
  return (
    <>
     <nav className="bg-light shadow-2xl w-10/12 mx-auto mt-5 flex justify-between items-center py-4 px-12  rounded-full shadow-3xl ">
      <div>
        <a href="#"><img src="/logo.png" alt="Logo" className="w-40 h-auto object-cover " />
        </a>
      </div>
      <ul className="flex gap-9 text-black  text-base  font-bold-md items-center ">
        <li className=" hover:text-blue-600 duration-1000 ">
          <Link to="/">Acceuil</Link>
        </li>
        <li className=" hover:text-blue-600 duration-1000 ">
          <Link to="/services">Services</Link>
        </li>
        <li className=" hover:text-blue-600 duration-1000 ">
          <Link to="/language">Nos langues</Link>
        </li>
        <li className=" hover:text-blue-600 duration-1000 ">
          <Link to="/training">Nos formations</Link>
        </li>

        <li className=" hover:text-blue-600 duration-1000 ">
          <Link to="/about">A propos</Link>
        </li>

        <li><button className="btn bg-sky-500 text-white rounded-full font-bold outline-none shadow-3xl"> <Link to="/contact">Contact</Link></button></li>
      </ul>

    </nav >

    <Outlet />

    < footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Oralise. All rights reserved.</p>
      </div>
    </footer>
    </>

   

  )
}

export { Navbar }