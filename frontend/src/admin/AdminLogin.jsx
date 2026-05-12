import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AdminLogin = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    if (
      email === "admin@example.com" &&
      password === "123456"
    ) {

      localStorage.setItem("admin", true);

      navigate("/admin");

    } else {

      alert("Invalid Credentials");
    }
  };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <form
        onSubmit={handleLogin}
        className="
        bg-white
        p-10
        rounded-xl
        shadow-md
        w-[450px]
        "
      >

        <h1 className="text-5xl font-bold mb-10">
          Admin Panel
        </h1>

        {/* EMAIL */}

        <div className="mb-6">

          <p className="mb-2 text-lg">
            Email Address
          </p>

          <input
            type="email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            placeholder="admin@example.com"
            className="
            w-full
            border
            px-4
            py-4
            rounded
            outline-none
            "
          />

        </div>

        {/* PASSWORD */}

        <div className="mb-8">

          <p className="mb-2 text-lg">
            Password
          </p>

          <input
            type="password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            placeholder="********"
            className="
            w-full
            border
            px-4
            py-4
            rounded
            outline-none
            "
          />

        </div>

        {/* BUTTON */}

        <button
          type="submit"
          className="
          w-full
          bg-black
          text-white
          py-4
          rounded
          text-xl
          "
        >
          Login
        </button>

      </form>

    </div>
  );
};

export default AdminLogin;