import hero_img from "../assets/frontend_assets/hero_img.png";

const Hero = () => {
  return (
    <section
      className="
      w-full
      flex
      flex-col
      md:flex-row
      items-center
      border
      border-gray-200
      "
    >

      {/* LEFT SIDE */}

      <div
        className="
        w-full
        md:w-1/2
        flex
        items-center
        justify-center
        py-16
        md:py-0
        "
      >

        <div className="text-center md:text-left">

          <div className="flex items-center gap-2 justify-center md:justify-start">

            <p className="w-10 md:w-12 h-[2px] bg-black"></p>

            <p
              className="
              font-medium
              text-sm
              md:text-base
              "
            >
              OUR BESTSELLERS
            </p>

          </div>

          <h1
            className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-semibold
            leading-tight
            py-6
            "
          >
            Latest <br /> Arrivals
          </h1>

          <div className="flex items-center gap-2 justify-center md:justify-start">

            <p
              className="
              font-semibold
              text-sm
              md:text-base
              "
            >
              SHOP NOW
            </p>

            <p className="w-10 md:w-12 h-[1px] bg-black"></p>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="w-full md:w-1/2">

        <img
          src={hero_img}
          alt="hero"
          className="w-full"
        />

      </div>

    </section>
  );
};

export default Hero;