import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";

import p_img1 from "../assets/frontend_assets/p_img1.png";
import p_img2 from "../assets/frontend_assets/p_img2.png";
import p_img3 from "../assets/frontend_assets/p_img3.png";
import p_img4 from "../assets/frontend_assets/p_img4.png";

const Home = () => {

  const products = [

    {
      id: 1,
      image: p_img1,
      name: "Women Round Neck Cotton Top",
      price: 149,
    },

    {
      id: 2,
      image: p_img2,
      name: "Men Round Neck Pure Cotton T-shirt",
      price: 149,
    },

    {
      id: 3,
      image: p_img3,
      name: "Girls Round Neck Cotton Top",
      price: 149,
    },

    {
      id: 4,
      image: p_img4,
      name: "Men Printed Plain Cotton Shirt",
      price: 149,
    },

  ];

  return (
    <div>

      {/* HERO */}

      <Hero />

      {/* LATEST COLLECTION */}

      <div className="px-[8%] py-16">

        <div className="text-center mb-12">

          <h2 className="text-3xl font-medium">

            LATEST COLLECTIONS

          </h2>

          <p className="text-gray-400 mt-4">

            Lorem Ipsum is simply dummy text of
            the printing and typesetting industry.

          </p>

        </div>

        {/* PRODUCTS */}

        <div
          className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          gap-6
          "
        >

          {products.map((item) => (

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

      {/* POLICY SECTION */}

      <div
        className="
        flex
        flex-col
        sm:flex-row
        justify-around
        gap-12
        text-center
        py-20
        text-sm
        text-gray-700
        "
      >

        {/* POLICY 1 */}

        <div>

          <h3 className="font-semibold text-lg">

            Easy Exchange Policy

          </h3>

          <p className="text-gray-400 mt-2">

            We offer hassle free exchange policy

          </p>

        </div>

        {/* POLICY 2 */}

        <div>

          <h3 className="font-semibold text-lg">

            7 Days Return Policy

          </h3>

          <p className="text-gray-400 mt-2">

            We provide 7 days free return policy

          </p>

        </div>

        {/* POLICY 3 */}

        <div>

          <h3 className="font-semibold text-lg">

            Best customer support

          </h3>

          <p className="text-gray-400 mt-2">

            we provide 24/7 customer support

          </p>

        </div>

      </div>

      {/* NEWSLETTER */}

      <div className="text-center py-10">

        <h1 className="text-3xl font-medium">

          Subscribe now & get 20% off

        </h1>

        <p className="text-gray-400 mt-4">

          Lorem Ipsum is simply dummy text of
          the printing and typesetting industry.

        </p>

        {/* FORM */}

        <form
          className="
          w-full
          sm:w-1/2
          flex
          items-center
          mx-auto
          my-6
          border
          "
        >

          <input
            type="email"
            placeholder="Enter your email"
            className="
            w-full
            px-4
            py-4
            outline-none
            "
          />

          <button
            type="submit"
            className="
            bg-black
            text-white
            text-xs
            px-10
            py-5
            "
          >

            SUBSCRIBE

          </button>

        </form>

      </div>

    </div>
  );
};

export default Home;