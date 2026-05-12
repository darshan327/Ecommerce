import { useParams } from "react-router-dom";

import p_img1 from "../assets/frontend_assets/p_img1.png";
import p_img2 from "../assets/frontend_assets/p_img2.png";
import p_img3 from "../assets/frontend_assets/p_img3.png";
import p_img4 from "../assets/frontend_assets/p_img4.png";

const Product = ({ cartItems, setCartItems }) => {

  const { id } = useParams();

  const products = [

    {
      id: "1",
      image: p_img1,
      name: "Women Round Neck Cotton Top",
      price: 149,
      description:
        "Lightweight and stylish cotton top for daily fashion.",
    },

    {
      id: "2",
      image: p_img2,
      name: "Men Round Neck Pure Cotton T-shirt",
      price: 149,
      description:
        "Premium quality cotton t-shirt with soft fabric.",
    },

    {
      id: "3",
      image: p_img3,
      name: "Stylish Hoodie",
      price: 199,
      description:
        "Modern hoodie with trendy design and comfort.",
    },

    {
      id: "4",
      image: p_img4,
      name: "Fashion Jacket",
      price: 249,
      description:
        "Stylish jacket perfect for casual outfits.",
    },

  ];

  const product = products.find(
    (item) => item.id === id
  );

  if (!product) {

    return (
      <div className="text-center py-20 text-3xl">
        Product Not Found
      </div>
    );

  }

  return (
    <div className="px-[8%] py-14">

      <div
        className="
        flex
        flex-col
        md:flex-row
        gap-12
        "
      >

        {/* IMAGE */}

        <div className="flex-1">

          <img
            src={product.image}
            alt=""
            className="w-full"
          />

        </div>

        {/* DETAILS */}

        <div className="flex-1">

          <h1 className="text-3xl font-semibold">

            {product.name}

          </h1>

          <div className="flex items-center gap-1 mt-4">

            <span className="text-orange-500">
              ★★★★☆
            </span>

            <p className="text-gray-500 text-sm">
              (122)
            </p>

          </div>

          <p className="text-3xl font-bold mt-5">

            ${product.price}

          </p>

          <p
            className="
            text-gray-500
            mt-6
            leading-7
            "
          >

            {product.description}

          </p>

          {/* SIZE */}

          <div className="mt-8">

            <p className="font-medium mb-4">
              Select Size
            </p>

            <div className="flex gap-3">

              <button className="border px-5 py-2">
                S
              </button>

              <button className="border px-5 py-2">
                M
              </button>

              <button className="border px-5 py-2">
                L
              </button>

              <button className="border px-5 py-2">
                XL
              </button>

            </div>

          </div>

          {/* ADD TO CART */}

          <button
            onClick={() =>
              setCartItems([
                ...cartItems,
                product
              ])
            }
            className="
            bg-black
            text-white
            px-10
            py-4
            mt-10
            hover:bg-gray-800
            transition
            "
          >

            ADD TO CART

          </button>

          <hr className="mt-10" />

          <div
            className="
            text-sm
            text-gray-500
            mt-5
            flex
            flex-col
            gap-2
            "
          >

            <p>100% Original product.</p>

            <p>Cash on delivery available.</p>

            <p>Easy return and exchange policy.</p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Product;