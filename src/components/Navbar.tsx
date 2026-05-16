import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-black via-gray-900 to-black text-white fixed top-0 left-0 w-full shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        
        <h1 className="text-2xl font-extrabold tracking-wide cursor-pointer hover:text-yellow-400 transition duration-300">
          FleetMaster
        </h1>

        <ul className="flex gap-8 text-lg font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-400 transition duration-300 hover:scale-110 inline-block"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/cars"
              className="hover:text-yellow-400 transition duration-300 hover:scale-110 inline-block"
            >
              Cars
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-yellow-400 transition duration-300 hover:scale-110 inline-block"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-400 transition duration-300 hover:scale-110 inline-block"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;