import { Link } from "react-router-dom";

const ProductCard = ({ id, image, name, price }) => {
  return (
    <Link
      to={`/product/${id}`}
      className="block"
    >

      <div className="overflow-hidden">

        <img
          src={image}
          alt={name}
          className="
          w-full
          hover:scale-110
          transition
          duration-300
          cursor-pointer
          "
        />

      </div>

      <div className="pt-3">

        <p className="text-sm font-medium">
          {name}
        </p>

        <p className="text-sm font-semibold mt-1">
          ${price}
        </p>

      </div>

    </Link>
  );
};

export default ProductCard;