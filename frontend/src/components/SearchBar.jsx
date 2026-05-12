import search_icon from "../assets/frontend_assets/search_icon.png";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div
      className="
      w-full
      flex
      items-center
      justify-center
      py-8
      "
    >

      <div
        className="
        w-[90%]
        md:w-[600px]
        flex
        items-center
        border
        border-gray-300
        rounded-full
        px-5
        py-3
        "
      >

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
          w-full
          outline-none
          text-sm
          bg-transparent
          "
        />

        <img
          src={search_icon}
          alt="search"
          className="w-5 cursor-pointer"
        />

      </div>

    </div>
  );
};

export default SearchBar;