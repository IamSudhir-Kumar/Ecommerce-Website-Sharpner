import React from "react";
import { useParams } from "react-router-dom";
import { productsArr } from "../../assets/data";
import { usecontextallthetime } from "../../Stroe/Storeprovider";

const ProductProfile = () => {
  const { title } = useParams();
  const { additem } = usecontextallthetime();
  const product = productsArr.find((p) => p.title === title);

  const OnClickAdd = (item) => {
    additem(item);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-light-gray min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-64 w-full object-cover md:h-full md:w-64"
              src={product.imageUrl}
              alt={product.title}
            />
          </div>
          <div className="p-8 flex flex-col justify-between">
            <div>
              <h1 className="block mt-1 text-2xl leading-tight font-bold text-dark-gray">
                {product.name}
              </h1>
              <p className="mt-4 text-gray-600">{product.description}</p>
              <div className="mt-4">
                <span className="text-gray-600 text-lg">Price: </span>
                <span className="text-primary text-lg font-semibold">
                  ${product.price}
                </span>
              </div>
            </div>
            <div className="mt-8 flex justify-center md:justify-start">
              <button
                className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition duration-300"
                onClick={() => OnClickAdd(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductProfile;
