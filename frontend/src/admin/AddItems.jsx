import { useState } from "react";

const AddItems = () => {

  const [images, setImages] = useState([
    null,
    null,
    null,
    null,
  ]);

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: "Men",
    subCategory: "Topwear",
    price: "",
    bestseller: false,
    sizes: [],
  });

  // HANDLE IMAGE

  const handleImage = (e, index) => {

    const updatedImages = [...images];

    updatedImages[index] = URL.createObjectURL(
      e.target.files[0]
    );

    setImages(updatedImages);
  };

  // HANDLE SIZE

  const handleSize = (size) => {

    let sizes = [...productData.sizes];

    if (sizes.includes(size)) {

      sizes = sizes.filter((item) => item !== size);

    } else {

      sizes.push(size);
    }

    setProductData({
      ...productData,
      sizes,
    });
  };

  // ADD PRODUCT

  const handleSubmit = () => {

    const product = {
      ...productData,
      images,
    };

    console.log(product);

    alert("Product Added Successfully");
  };

  return (

    <div className="max-w-4xl">

      {/* IMAGE */}

      <p className="text-2xl mb-5">
        Upload Image
      </p>

      <div className="flex gap-4 mb-8">

        {images.map((img, index) => (

          <label
            key={index}
            htmlFor={`image${index}`}
            className="
            w-28
            h-28
            border
            border-dashed
            flex
            items-center
            justify-center
            cursor-pointer
            overflow-hidden
            "
          >

            {img ? (

              <img
                src={img}
                alt=""
                className="
                w-full
                h-full
                object-cover
                "
              />

            ) : (

              <p className="text-gray-400">
                Upload
              </p>

            )}

            <input
              type="file"
              hidden
              id={`image${index}`}
              onChange={(e) =>
                handleImage(e, index)
              }
            />

          </label>

        ))}

      </div>

      {/* PRODUCT NAME */}

      <div className="mb-6">

        <p className="mb-2 text-xl">
          Product name
        </p>

        <input
          type="text"
          placeholder="Type here"
          className="
          w-full
          border
          px-4
          py-3
          outline-none
          "
          value={productData.name}
          onChange={(e) =>
            setProductData({
              ...productData,
              name: e.target.value,
            })
          }
        />

      </div>

      {/* DESCRIPTION */}

      <div className="mb-6">

        <p className="mb-2 text-xl">
          Product description
        </p>

        <textarea
          rows="5"
          placeholder="Write content here"
          className="
          w-full
          border
          px-4
          py-3
          outline-none
          "
          value={productData.description}
          onChange={(e) =>
            setProductData({
              ...productData,
              description: e.target.value,
            })
          }
        />

      </div>

      {/* CATEGORY */}

      <div className="flex gap-6 mb-8">

        {/* CATEGORY */}

        <div>

          <p className="mb-2">
            Product category
          </p>

          <select
            className="border px-4 py-3"
            value={productData.category}
            onChange={(e) =>
              setProductData({
                ...productData,
                category: e.target.value,
              })
            }
          >

            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>

          </select>

        </div>

        {/* SUB CATEGORY */}

        <div>

          <p className="mb-2">
            Sub category
          </p>

          <select
            className="border px-4 py-3"
            value={productData.subCategory}
            onChange={(e) =>
              setProductData({
                ...productData,
                subCategory: e.target.value,
              })
            }
          >

            <option>Topwear</option>
            <option>Bottomwear</option>
            <option>Winterwear</option>

          </select>

        </div>

        {/* PRICE */}

        <div>

          <p className="mb-2">
            Product Price
          </p>

          <input
            type="number"
            placeholder="25"
            className="
            border
            px-4
            py-3
            w-32
            "
            value={productData.price}
            onChange={(e) =>
              setProductData({
                ...productData,
                price: e.target.value,
              })
            }
          />

        </div>

      </div>

      {/* SIZES */}

      <div className="mb-8">

        <p className="mb-3 text-xl">
          Product Sizes
        </p>

        <div className="flex gap-4">

          {["S", "M", "L", "XL", "XXL"].map(
            (size) => (

              <button
                key={size}
                onClick={() =>
                  handleSize(size)
                }
                className={`
                px-5
                py-3
                border
                ${
                  productData.sizes.includes(
                    size
                  )
                    ? "bg-black text-white"
                    : "bg-slate-200"
                }
                `}
              >
                {size}
              </button>

            )
          )}

        </div>

      </div>

      {/* BESTSELLER */}

      <div className="flex items-center gap-3 mb-8">

        <input
          type="checkbox"
          checked={productData.bestseller}
          onChange={() =>
            setProductData({
              ...productData,
              bestseller:
                !productData.bestseller,
            })
          }
        />

        <p className="text-xl">
          Add to bestseller
        </p>

      </div>

      {/* BUTTON */}

      <button
        onClick={handleSubmit}
        className="
        bg-black
        text-white
        px-16
        py-4
        text-lg
        "
      >
        ADD
      </button>

    </div>
  );
};

export default AddItems;