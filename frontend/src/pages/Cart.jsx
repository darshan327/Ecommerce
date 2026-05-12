import { Link } from "react-router-dom";
import bin_icon from "../assets/frontend_assets/bin_icon.png";

const Cart = ({ cartItems }) => {

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price,
    0
  );

  const shippingFee = 10;

  const total = subtotal + shippingFee;

  return (
    <div className="px-[8%] py-14 min-h-screen">

      {/* TITLE */}

      <div className="flex items-center gap-3 mb-10">

        <h1 className="text-3xl text-gray-700 font-medium">
          YOUR CART
        </h1>

        <div className="w-16 h-[2px] bg-gray-700"></div>

      </div>

      {/* CART ITEMS */}

      {cartItems.length === 0 ? (

        <p className="text-lg text-gray-500">
          Cart is Empty
        </p>

      ) : (

        <div>

          {cartItems.map((item, index) => (

            <div
              key={index}
              className="
              border-t
              border-b
              border-gray-200
              py-5
              grid
              grid-cols-[4fr_1fr_0.5fr]
              items-center
              gap-5
              "
            >

              {/* PRODUCT */}

              <div className="flex items-start gap-6">

                <img
                  src={item.image}
                  alt=""
                  className="w-24"
                />

                <div>

                  <h2 className="text-lg font-medium">
                    {item.name}
                  </h2>

                  <div className="flex items-center gap-5 mt-2">

                    <p className="text-lg">
                      ${item.price}
                    </p>

                    <button
                      className="
                      border
                      px-3
                      py-1
                      bg-gray-100
                      "
                    >
                      S
                    </button>

                  </div>

                </div>

              </div>

              {/* QUANTITY */}

              <input
                type="number"
                min={1}
                defaultValue={1}
                className="
                border
                px-2
                py-1
                w-16
                "
              />

              {/* DELETE */}

              <img
                src={bin_icon}
                alt=""
                className="
                w-5
                cursor-pointer
                "
              />

            </div>

          ))}

          {/* TOTALS */}

          <div className="flex justify-end mt-20">

            <div className="w-full sm:w-[450px]">

              <div className="flex items-center gap-3 mb-8">

                <h1 className="text-3xl text-gray-700 font-medium">
                  CART TOTALS
                </h1>

                <div className="w-16 h-[2px] bg-gray-700"></div>

              </div>

              <div className="flex flex-col gap-4">

                <div className="flex justify-between">

                  <p>Subtotal</p>

                  <p>${subtotal.toFixed(2)}</p>

                </div>

                <hr />

                <div className="flex justify-between">

                  <p>Shipping Fee</p>

                  <p>${shippingFee.toFixed(2)}</p>

                </div>

                <hr />

                <div className="flex justify-between font-semibold text-lg">

                  <p>Total</p>

                  <p>${total.toFixed(2)}</p>

                </div>

              </div>

              <div className="text-end mt-8">

                <Link to="/place-order">

                  <button
                    className="
                    bg-black
                    text-white
                    px-8
                    py-3
                    hover:bg-gray-800
                    transition
                    "
                  >
                    PROCEED TO CHECKOUT
                  </button>

                </Link>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default Cart;