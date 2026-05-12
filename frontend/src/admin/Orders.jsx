const Orders = () => {

  return (
    <div>

      <h1 className="text-3xl mb-8">
        Order Page
      </h1>

      {[1, 2, 3].map((item) => (

        <div
          key={item}
          className="
          bg-white
          border
          p-8
          mb-6
          flex
          justify-between
          items-start
          "
        >

          {/* LEFT */}

          <div className="flex gap-6">

            <div className="text-5xl">
              📦
            </div>

            <div>

              <p className="text-xl mb-4">

                Women Zip-Front Relaxed Fit Jacket x 1 L

              </p>

              <p>John Doe</p>

              <p>123 Main St,</p>

              <p>New York, NY, USA, 10001</p>

              <p>1234567890</p>

            </div>

          </div>

          {/* CENTER */}

          <div className="space-y-2">

            <p>Items : 1</p>

            <p>Method : COD</p>

            <p>Payment : Pending</p>

            <p>Date : 5/13/2026</p>

          </div>

          {/* PRICE */}

          <div className="text-2xl font-medium">

            $78

          </div>

          {/* STATUS */}

          <select
            className="
            border
            px-6
            py-3
            outline-none
            "
          >

            <option>Order Placed</option>
            <option>Packing</option>
            <option>Shipped</option>
            <option>Out for delivery</option>
            <option>Delivered</option>

          </select>

        </div>

      ))}

    </div>
  );
};

export default Orders;