import { useState } from "react";

import ProductCard from "../components/ProductCard";

import p_img1 from "../assets/frontend_assets/p_img1.png";
import p_img2 from "../assets/frontend_assets/p_img2.png";
import p_img3 from "../assets/frontend_assets/p_img3.png";
import p_img4 from "../assets/frontend_assets/p_img4.png";
import p_img5 from "../assets/frontend_assets/p_img5.png";
import p_img6 from "../assets/frontend_assets/p_img6.png";
import p_img7 from "../assets/frontend_assets/p_img7.png";
import p_img8 from "../assets/frontend_assets/p_img8.png";

const Collection = () => {

  const [search, setSearch] = useState("");

  const products = [

    {
      id: 1,
      image: p_img1,
      name: "Women Round Neck Cotton Top",
      price: 149,
      category: "Women",
      type: "Topwear",
    },

    {
      id: 2,
      image: p_img2,
      name: "Men Round Neck Pure Cotton T-shirt",
      price: 64,
      category: "Men",
      type: "Topwear",
    },

    {
      id: 3,
      image: p_img3,
      name: "Girls Round Neck Cotton Top",
      price: 60,
      category: "Kids",
      type: "Topwear",
    },

    {
      id: 4,
      image: p_img4,
      name: "Women Zip-Front Relaxed Fit Jacket",
      price: 74,
      category: "Women",
      type: "Winterwear",
    },

    {
      id: 5,
      image: p_img5,
      name: "Kid Tapered Slim Fit Trouser",
      price: 38,
      category: "Kids",
      type: "Bottomwear",
    },

    {
      id: 6,
      image: p_img6,
      name: "Men Printed Plain Cotton Shirt",
      price: 70,
      category: "Men",
      type: "Topwear",
    },

    {
      id: 7,
      image: p_img7,
      name: "Women Casual Jacket",
      price: 89,
      category: "Women",
      type: "Winterwear",
    },

    {
      id: 8,
      image: p_img8,
      name: "Men Casual T-shirt",
      price: 55,
      category: "Men",
      type: "Topwear",
    },

  ];

  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-[8%] py-10">

      {/* SEARCH BAR */}

      <div
        className="
        border
        border-gray-300
        px-5
        py-4
        flex
        items-center
        justify-center
        mb-12
        "
      >

        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
          w-full
          max-w-[700px]
          border
          border-gray-400
          rounded-full
          px-6
          py-3
          outline-none
          "
        />

      </div>

      <div className="flex flex-col sm:flex-row gap-10">

        {/* LEFT FILTER */}

        <div className="min-w-60">

          <h2 className="text-2xl font-medium mb-6">
            FILTERS
          </h2>

          {/* CATEGORY */}

          <div
            className="
            border
            border-gray-300
            p-5
            mb-8
            "
          >

            <p className="mb-4 font-medium">
              CATEGORIES
            </p>

            <div className="flex flex-col gap-3 text-gray-700">

              <label className="flex gap-2">

                <input type="checkbox" />

                Men

              </label>

              <label className="flex gap-2">

                <input type="checkbox" />

                Women

              </label>

              <label className="flex gap-2">

                <input type="checkbox" />

                Kids

              </label>

            </div>

          </div>

          {/* TYPE */}

          <div
            className="
            border
            border-gray-300
            p-5
            "
          >

            <p className="mb-4 font-medium">
              TYPE
            </p>

            <div className="flex flex-col gap-3 text-gray-700">

              <label className="flex gap-2">

                <input type="checkbox" />

                Topwear

              </label>

              <label className="flex gap-2">

                <input type="checkbox" />

                Bottomwear

              </label>

              <label className="flex gap-2">

                <input type="checkbox" />

                Winterwear

              </label>

            </div>

          </div>

        </div>

        {/* RIGHT PRODUCTS */}

        <div className="flex-1">

          {/* TOP */}

          <div className="flex justify-between items-center mb-8">

            <div className="flex items-center gap-3">

              <h1 className="text-3xl font-medium">

                ALL COLLECTIONS

              </h1>

              <div className="w-16 h-[2px] bg-gray-700"></div>

            </div>

            {/* SORT */}

            <select
              className="
              border
              border-gray-300
              px-4
              py-2
              "
            >

              <option>
                Sort by: Relevant
              </option>

              <option>
                Low to High
              </option>

              <option>
                High to Low
              </option>

            </select>

          </div>

          {/* PRODUCTS */}

          <div
            className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-6
            "
          >

            {filteredProducts.map((item) => (

              <ProductCard
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
              />

            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default Collection;