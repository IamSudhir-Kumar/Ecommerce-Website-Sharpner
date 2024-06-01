import React from "react";
import { productsArr } from "../../assets/data";
import { usecontextallthetime } from "../../Stroe/Storeprovider";
import { Link } from "react-router-dom";

const Product = () => {
  const { additem } = usecontextallthetime();

  const AddTheProductIntoTheCart = (obj) => {
    additem({ ...obj, count: 1 });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsArr.map((obj) => (
          <div
            key={obj.title}
            className="border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex justify-center">
              <img
                src={obj.imageUrl}
                className="h-48 w-48 object-contain"
                alt={obj.title}
              />
            </div>
            <div className="mt-4 text-center">
              <h2 className="text-xl font-semibold text-gray-800">{obj.title}</h2>
              <p className="text-gray-600 mt-2">{obj.description}</p>
              <div className="mt-4">
                <span className="text-xl font-bold text-rose-600">
                  ${obj.price}
                </span>
                <div className="mt-4 flex justify-center space-x-4">
                  <Link
                    to={`/ProductProfile/${obj.title}`}
                    className="text-rose-600 font-semibold hover:underline"
                  >
                    See The Details
                  </Link>
                  <button
                    className="bg-rose-600 text-white px-4 py-2 rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 transition duration-300"
                    onClick={() => AddTheProductIntoTheCart(obj)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
