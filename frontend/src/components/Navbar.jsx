import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import logo from "../assets/frontend_assets/logo.png";

import search_icon from "../assets/frontend_assets/search_icon.png";
import profile_icon from "../assets/frontend_assets/profile_icon.png";
import cart_icon from "../assets/frontend_assets/cart_icon.png";
import menu_icon from "../assets/frontend_assets/menu_icon.png";

const Navbar = ({ cartItems }) => {

  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const [showMobile, setShowMobile] = useState(false);

  // LOGOUT

  const handleLogout = () => {

    localStorage.removeItem("admin");

    navigate("/");
  };

  return (

    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">

      <div className="flex items-center justify-between px-[8%] py-5">

        {/* LOGO */}

        <Link to="/">

          <img
            src={logo}
            alt=""
            className="w-36"
          />

        </Link>

        {/* DESKTOP MENU */}

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">

          <li>
            <Link to="/">HOME</Link>
          </li>

          <li>
            <Link to="/collection">
              COLLECTION
            </Link>
          </li>

          <li>
            <Link to="/about">
              ABOUT
            </Link>
          </li>

          <li>
            <Link to="/contact">
              CONTACT
            </Link>
          </li>

        </ul>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-6">

          {/* ADMIN PANEL */}

          <button
            onClick={() => navigate("/admin")}
            className="
            hidden
            md:block
            border
            px-5
            py-2
            rounded-full
            hover:bg-gray-100
            "
          >
            Admin Panel
          </button>

          {/* SEARCH */}

          <img
            onClick={() => navigate("/collection")}
            src={search_icon}
            alt=""
            className="w-5 cursor-pointer"
          />

          {/* PROFILE */}

          <div className="relative">

            <img
              onClick={() =>
                setShowMenu(!showMenu)
              }
              src={profile_icon}
              alt=""
              className="w-5 cursor-pointer"
            />

            {/* DROPDOWN */}

            {showMenu && (

              <div
                className="
                absolute
                right-0
                pt-4
                "
              >

                <div
                  className="
                  flex
                  flex-col
                  gap-3
                  w-36
                  py-3
                  px-5
                  bg-slate-100
                  text-gray-500
                  rounded
                  shadow-md
                  "
                >

                  <p
                    onClick={() =>
                      navigate("/login")
                    }
                    className="cursor-pointer hover:text-black"
                  >
                    Login
                  </p>

                  <p
                    onClick={() =>
                      navigate("/orders")
                    }
                    className="cursor-pointer hover:text-black"
                  >
                    Orders
                  </p>

                  <p
                    onClick={handleLogout}
                    className="cursor-pointer hover:text-black"
                  >
                    Logout
                  </p>

                </div>

              </div>

            )}

          </div>

          {/* CART */}

          <Link
            to="/cart"
            className="relative"
          >

            <img
              src={cart_icon}
              alt=""
              className="w-5 min-w-5"
            />

            <p
              className="
              absolute
              right-[-5px]
              bottom-[-5px]
              w-4
              text-center
              leading-4
              bg-black
              text-white
              aspect-square
              rounded-full
              text-[8px]
              "
            >

              {cartItems.length}

            </p>

          </Link>

          {/* MOBILE MENU ICON */}

          <img
            onClick={() =>
              setShowMobile(!showMobile)
            }
            src={menu_icon}
            alt=""
            className="w-5 cursor-pointer md:hidden"
          />

        </div>

      </div>

      {/* MOBILE MENU */}

      {showMobile && (

        <div
          className="
          md:hidden
          flex
          flex-col
          gap-4
          px-8
          py-5
          border-t
          bg-white
          "
        >

          <Link to="/">
            HOME
          </Link>

          <Link to="/collection">
            COLLECTION
          </Link>

          <Link to="/about">
            ABOUT
          </Link>

          <Link to="/contact">
            CONTACT
          </Link>

          <button
            onClick={() =>
              navigate("/admin")
            }
            className="
            border
            py-2
            rounded-full
            "
          >
            Admin Panel
          </button>

        </div>

      )}

    </nav>
  );
};

export default Navbar;