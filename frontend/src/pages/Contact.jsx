import contact_img from "../assets/frontend_assets/contact_img.png";

const Contact = () => {

  return (
    <div className="px-[8%]">

      {/* TITLE */}

      <div className="text-center pt-14">

        <div className="inline-flex gap-3 items-center mb-3">

          <p className="text-gray-500 text-3xl">

            CONTACT <span className="text-gray-700 font-medium">US</span>

          </p>

          <p className="w-16 sm:w-24 h-[2px] bg-gray-700"></p>

        </div>

      </div>

      {/* CONTACT SECTION */}

      <div
        className="
        my-10
        flex
        flex-col
        md:flex-row
        gap-10
        mb-28
        "
      >

        {/* IMAGE */}

        <img
          className="w-full md:max-w-[480px]"
          src={contact_img}
          alt=""
        />

        {/* RIGHT SIDE */}

        <div
          className="
          flex
          flex-col
          justify-center
          items-start
          gap-6
          "
        >

          <p className="font-semibold text-2xl text-gray-600">

            Our Store

          </p>

          <p className="text-gray-500">

            54709 Willms Station <br />

            Suite 350, Washington, USA

          </p>

          <p className="text-gray-500">

            Tel: (415) 555-0132 <br />

            Email: admin@forever.com

          </p>

          <p className="font-semibold text-2xl text-gray-600">

            Careers at Forever

          </p>

          <p className="text-gray-500">

            Learn more about our teams and job openings.

          </p>

          <button
            className="
            border
            border-black
            px-8
            py-4
            text-sm
            hover:bg-black
            hover:text-white
            transition-all
            duration-500
            "
          >

            Explore Jobs

          </button>

        </div>

      </div>

      {/* SUBSCRIBE SECTION */}

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

export default Contact;