import { useNavigate } from "react-router-dom";

const PlaceOrder = ({ cartItems }) => {

  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price,
    0
  );

  const shippingFee = 10;

  const total = subtotal + shippingFee;

  const handlePlaceOrder = (e) => {

    e.preventDefault();

    navigate("/orders");

  };

  return (
    <form
      onSubmit={handlePlaceOrder}
      className="
      flex
      flex-col
      lg:flex-row
      gap-14
      px-[8%]
      py-14
      min-h-screen
      "
    >

      {/* LEFT */}

      <div className="flex flex-col gap-4 w-full lg:max-w-[500px]">

        <div className="flex items-center gap-3 mb-5">

          <h1 className="text-3xl text-gray-700 font-medium">
            DELIVERY INFORMATION
          </h1>

          <div className="w-16 h-[2px] bg-gray-700"></div>

        </div>

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="First name"
            className="border px-4 py-2 w-full"
            required
          />

          <input
            type="text"
            placeholder="Last name"
            className="border px-4 py-2 w-full"
            required
          />

        </div>

        <input
          type="email"
          placeholder="Email address"
          className="border px-4 py-2"
          required
        />

        <input
          type="text"
          placeholder="Street"
          className="border px-4 py-2"
          required
        />

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="City"
            className="border px-4 py-2 w-full"
            required
          />

          <input
            type="text"
            placeholder="State"
            className="border px-4 py-2 w-full"
            required
          />

        </div>

        <div className="flex gap-3">

          <input
            type="number"
            placeholder="Zip code"
            className="border px-4 py-2 w-full"
            required
          />

          <input
            type="text"
            placeholder="Country"
            className="border px-4 py-2 w-full"
            required
          />

        </div>

        <input
          type="number"
          placeholder="Phone"
          className="border px-4 py-2"
          required
        />

      </div>

      {/* RIGHT */}

      <div className="flex-1">

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

        {/* PAYMENT */}

        <div className="mt-14">

          <div className="flex items-center gap-3 mb-6">

            <h1 className="text-2xl text-gray-700 font-medium">
              PAYMENT METHOD
            </h1>

            <div className="w-16 h-[2px] bg-gray-700"></div>

          </div>

          <div className="flex flex-col md:flex-row gap-4">

            <div
              className="
              border
              px-6
              py-4
              flex
              items-center
              gap-3
              cursor-pointer
              "
            >

              <div className="w-4 h-4 border rounded-full"></div>

              <p className="text-violet-600 font-semibold">
                Stripe
              </p>

            </div>

            <div
              className="
              border
              px-6
              py-4
              flex
              items-center
              gap-3
              cursor-pointer
              "
            >

              <div className="w-4 h-4 border rounded-full"></div>

              <p className="text-blue-700 font-semibold">
                Razorpay
              </p>

            </div>

            <div
              className="
              border
              px-6
              py-4
              flex
              items-center
              gap-3
              bg-green-50
              cursor-pointer
              "
            >

              <div className="w-4 h-4 bg-green-500 rounded-full"></div>

              <p className="font-medium">
                CASH ON DELIVERY
              </p>

            </div>

          </div>

          {/* BUTTON */}

          <div className="text-end mt-10">

            <button
              type="submit"
              className="
              bg-black
              text-white
              px-14
              py-3
              hover:bg-gray-800
              transition
              "
            >

              PLACE ORDER

            </button>

          </div>

        </div>

      </div>

    </form>
  );
};

export default PlaceOrder;