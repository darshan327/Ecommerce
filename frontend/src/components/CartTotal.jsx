const CartTotal = ({ subtotal = 0, shipping = 10 }) => {

  const total = subtotal + shipping;

  return (
    <div
      className="
      w-full
      md:w-[400px]
      border
      border-gray-200
      p-6
      rounded-lg
      "
    >

      <h2
        className="
        text-2xl
        font-semibold
        mb-6
        "
      >
        Cart Totals
      </h2>

      {/* SUBTOTAL */}

      <div
        className="
        flex
        items-center
        justify-between
        border-b
        border-gray-200
        py-3
        text-sm
        "
      >

        <p>Subtotal</p>

        <p>${subtotal}</p>

      </div>

      {/* SHIPPING */}

      <div
        className="
        flex
        items-center
        justify-between
        border-b
        border-gray-200
        py-3
        text-sm
        "
      >

        <p>Shipping Fee</p>

        <p>${shipping}</p>

      </div>

      {/* TOTAL */}

      <div
        className="
        flex
        items-center
        justify-between
        py-4
        font-semibold
        text-lg
        "
      >

        <p>Total</p>

        <p>${total}</p>

      </div>

      {/* BUTTON */}

      <button
        className="
        w-full
        bg-black
        text-white
        py-3
        mt-5
        text-sm
        hover:bg-gray-800
        transition
        "
      >

        PROCEED TO CHECKOUT

      </button>

    </div>
  );
};

export default CartTotal;