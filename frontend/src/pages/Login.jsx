const Login = () => {
  return (
    <div
      className="
      min-h-[80vh]
      flex
      items-center
      justify-center
      "
    >

      <form
        className="
        w-[90%]
        md:w-[400px]
        border
        border-gray-200
        p-8
        rounded-lg
        "
      >

        <h1 className="text-3xl font-semibold mb-8 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="
          w-full
          border
          border-gray-300
          p-3
          mb-5
          outline-none
          "
        />

        <input
          type="password"
          placeholder="Password"
          className="
          w-full
          border
          border-gray-300
          p-3
          mb-5
          outline-none
          "
        />

        <button
          className="
          w-full
          bg-black
          text-white
          py-3
          hover:bg-gray-800
          transition
          "
        >

          LOGIN

        </button>

      </form>

    </div>
  );
};

export default Login;