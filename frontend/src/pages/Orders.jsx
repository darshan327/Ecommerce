const Orders = () => {
  return (
    <div className="px-[8%] py-20">

      <h1 className="text-4xl font-semibold mb-10">
        My Orders
      </h1>

      <div
        className="
        border
        border-gray-200
        p-5
        rounded-lg
        "
      >

        <h2 className="font-medium">
          Women Cotton Top
        </h2>

        <p className="text-gray-500 mt-2">
          Order Status: Delivered
        </p>

        <p className="text-gray-500 mt-2">
          Price: $100
        </p>

      </div>

    </div>
  );
};

export default Orders;