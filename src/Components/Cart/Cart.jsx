import { usecontextallthetime } from "../../Stroe/Storeprovider";
import { Cartimages } from "../../assets/data";

const Cart = () => {
  const { deleteitem, CartState } = usecontextallthetime();

  const CartArray = CartState.items;
  const TotalAmount = CartState.amount;

  if (CartArray.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 h-3/5 flex flex-col items-center justify-center text-center">
        <p className="text-gray-700 text-2xl font-semibold mb-4">Your cart is empty.</p>
        <img src={Cartimages} alt="Empty cart" className="w-1/2 h-auto rounded-lg" />
      </div>
    );
  }

  const deleteitemfromcart = (obj) => {
    deleteitem(obj);
  };

  const OnClickOrder = () => {
    alert("Your order will be delivered soon.");
  };

  return (
    <div className="bg-gradient-to-b from-purple-300 to-blue-300 min-h-screen flex flex-col items-center py-10">
      <div className="w-full max-w-4xl">
        {CartArray.map((obj) => (
          <div className="bg-white rounded-lg shadow-lg mb-6 p-6" key={obj.title}>
            <div className="flex items-center mb-4">
              <img
                src={obj.imageUrl}
                alt={obj.title}
                className="w-16 h-16 mr-6 rounded-lg"
              />
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-900 text-xl">{obj.title}</h3>
                <p className="text-gray-700">Price: ${obj.price.toFixed(2)}</p>
              </div>
              <button
                className="text-red-600 hover:text-red-800 focus:outline-none ml-4"
                onClick={() => deleteitemfromcart(obj)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8 flex justify-between items-center">
          <p className="text-lg font-semibold text-gray-800">
            Total: ${TotalAmount.toFixed(2)}
          </p>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md focus:outline-none"
            onClick={OnClickOrder}
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
