import p1 from "../assets/frontend_assets/p_img1.png";
import p2 from "../assets/frontend_assets/p_img2.png";
import p3 from "../assets/frontend_assets/p_img3.png";
import p4 from "../assets/frontend_assets/p_img4.png";

const products = [

  {
    image: p1,
    name: "Kid Tapered Slim Fit Trouser",
    category: "Kids",
    price: 38,
  },

  {
    image: p2,
    name: "Men Round Neck Pure Cotton T-shirt",
    category: "Men",
    price: 64,
  },

  {
    image: p3,
    name: "Boy Round Neck Pure Cotton T-shirt",
    category: "Kids",
    price: 60,
  },

  {
    image: p4,
    name: "Women Zip-Front Relaxed Fit Jacket",
    category: "Women",
    price: 74,
  },

];

const ListItems = () => {

  return (
    <div>

      <h1 className="text-3xl mb-8">
        All Products List
      </h1>

      {/* HEADER */}

      <div
        className="
        grid
        grid-cols-[1fr_3fr_1fr_1fr_1fr]
        border
        bg-white
        p-4
        font-semibold
        "
      >

        <p>Image</p>
        <p>Name</p>
        <p>Category</p>
        <p>Price</p>
        <p>Action</p>

      </div>

      {/* PRODUCTS */}

      {products.map((item, index) => (

        <div
          key={index}
          className="
          grid
          grid-cols-[1fr_3fr_1fr_1fr_1fr]
          items-center
          border
          border-t-0
          bg-white
          p-4
          "
        >

          <img
            src={item.image}
            className="w-16"
            alt=""
          />

          <p>{item.name}</p>

          <p>{item.category}</p>

          <p>${item.price}</p>

          <button className="text-2xl">
            x
          </button>

        </div>

      ))}

    </div>
  );
};

export default ListItems;