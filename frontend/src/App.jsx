import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Orders from "./pages/Orders";

/* ADMIN IMPORTS */

import AdminPanel from "./admin/AdminPanel";
import AdminLogin from "./admin/AdminLogin";

function App() {

  const [cartItems, setCartItems] = useState([]);

  return (

    <div>

      {/* NAVBAR */}

      <Navbar cartItems={cartItems} />

      {/* ROUTES */}

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* COLLECTION */}

        <Route
          path="/collection"
          element={<Collection />}
        />

        {/* PRODUCT */}

        <Route
          path="/product/:id"
          element={
            <Product
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        {/* CART */}

        <Route
          path="/cart"
          element={
            <Cart cartItems={cartItems} />
          }
        />

        {/* PLACE ORDER */}

        <Route
          path="/place-order"
          element={
            <PlaceOrder
              cartItems={cartItems}
            />
          }
        />

        {/* USER LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* ABOUT */}

        <Route
          path="/about"
          element={<About />}
        />

        {/* CONTACT */}

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* USER ORDERS */}

        <Route
          path="/orders"
          element={<Orders />}
        />

        {/* ADMIN LOGIN */}

        <Route
          path="/admin-login"
          element={<AdminLogin />}
        />

        {/* ADMIN PANEL */}

        <Route
          path="/admin"
          element={<AdminPanel />}
        />

      </Routes>

      {/* FOOTER */}

      <Footer />

    </div>
  );
}

export default App;