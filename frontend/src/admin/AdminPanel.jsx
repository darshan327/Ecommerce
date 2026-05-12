import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AddItems from "./AddItems";
import ListItems from "./ListItems";
import Orders from "./Orders";

function AdminPanel() {

  const [tab, setTab] = useState("add");

  const navigate = useNavigate();

  // LOGOUT FUNCTION
  const handleLogout = () => {

    // remove login
    localStorage.removeItem("admin");

    // go to home page
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* TOP BAR */}

      <div className="flex justify-between items-center px-10 py-5 bg-white border-b">

        <div>
          <h1 className="text-5xl font-bold">
            FOREVER<span className="text-pink-400">.</span>
          </h1>

          <p className="text-pink-400 font-semibold">
            ADMIN PANEL
          </p>
        </div>

        {/* LOGOUT BUTTON */}

        <button
          onClick={handleLogout}
          className="bg-slate-600 text-white px-8 py-3 rounded-full"
        >
          Logout
        </button>
      </div>

      {/* BODY */}

      <div className="flex">

        {/* SIDEBAR */}

        <div className="w-[250px] bg-white min-h-screen border-r p-5 space-y-6">

          <button
            onClick={() => setTab("add")}
            className={`w-full text-left border p-4 text-xl ${
              tab === "add"
                ? "bg-pink-100"
                : "bg-white"
            }`}
          >
            ➕ Add Items
          </button>

          <button
            onClick={() => setTab("list")}
            className={`w-full text-left border p-4 text-xl ${
              tab === "list"
                ? "bg-pink-100"
                : "bg-white"
            }`}
          >
            ☑️ List Items
          </button>

          <button
            onClick={() => setTab("orders")}
            className={`w-full text-left border p-4 text-xl ${
              tab === "orders"
                ? "bg-pink-100"
                : "bg-white"
            }`}
          >
            📦 Orders
          </button>
        </div>

        {/* CONTENT */}

        <div className="flex-1 p-10">

          {tab === "add" && <AddItems />}

          {tab === "list" && <ListItems />}

          {tab === "orders" && <Orders />}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;