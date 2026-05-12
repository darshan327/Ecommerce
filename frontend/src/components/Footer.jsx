import { Link } from "react-router-dom";

import logo from "../assets/frontend_assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-20">

      <div
        className="
        px-[8%]
        py-16
        grid
        grid-cols-1
        md:grid-cols-3
        gap-12
        "
      >

        {/* LEFT */}

        <div>

          <img
            src={logo}
            alt="logo"
            className="w-36 mb-5"
          />

          <p className="text-gray-600 leading-7 text-sm">

            Forever is your one-stop fashion destination
            for trendy and premium clothing collections.
            Explore the latest arrivals and elevate your
            style with modern fashion.

          </p>

        </div>

        {/* CENTER */}

        <div>

          <h3 className="text-lg font-semibold mb-5">
            COMPANY
          </h3>

          <ul className="flex flex-col gap-3 text-gray-600 text-sm">

            <li>
              <Link to="/" className="hover:text-black">
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/collection"
                className="hover:text-black"
              >
                Collection
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-black"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-black"
              >
                Contact
              </Link>
            </li>

          </ul>

        </div>

        {/* RIGHT */}

        <div>

          <h3 className="text-lg font-semibold mb-5">
            GET IN TOUCH
          </h3>

          <div className="flex flex-col gap-3 text-gray-600 text-sm">

            <p>+91 9876543210</p>

            <p>contact@forever.com</p>

            <p>Mysore, Karnataka, India</p>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}

      <div
        className="
        border-t
        border-gray-200
        py-5
        text-center
        text-sm
        text-gray-500
        "
      >

        © 2026 forever.com — All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;