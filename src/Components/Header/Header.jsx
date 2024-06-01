import React from "react";
import { usecontextallthetime } from "../../Stroe/Storeprovider";
import { Link } from "react-router-dom";
import { auth } from "../../firbase";
import { signOut } from "firebase/auth";

const Header = () => {
  const { CartState, logout, IsUserlogin } = usecontextallthetime();

  const numberofitems = CartState.items.reduce(
    (acc, cur) => acc + cur.count,
    0
  );

  const Onuserlogout = async () => {
    try {
      await signOut(auth);
      logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="bg-gradient-to-r from-red-500 to-pink-500 text-white h-20 shadow-lg">
      <nav className="container mx-auto flex items-center justify-between px-6 h-full">
        <div className="flex items-center space-x-4">
          <Link
            to="/Home"
            className="text-white hover:text-blue-300 font-bold text-xl"
          >
            Home
          </Link>
          <Link
            to="/Contact"
            className="text-white hover:text-blue-300 font-bold text-xl"
          >
            Contact Us
          </Link>
          <Link
            to="/About"
            className="text-white hover:text-blue-300 font-bold text-xl"
          >
            About
          </Link>
          <Link
            to="/"
            className="text-white hover:text-blue-300 font-bold text-xl"
          >
            Product
          </Link>
          <Link
            to="/Cart"
            className="text-white hover:text-blue-300 font-bold text-xl"
          >
            Cart ({numberofitems})
          </Link>
        </div>
        <div>
          {IsUserlogin && (
            <button
              onClick={Onuserlogout}
              className="text-white hover:text-blue-300 focus:outline-none font-bold text-xl"
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
