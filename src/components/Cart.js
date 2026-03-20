import { useSelector, useDispatch } from "react-redux";
import { clearItems } from "../utils/CartSlice";

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearItems());
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + (item.price || item.defaultPrice) / 100;
  }, 0);

  return (
    <div className="max-w-3xl mx-auto mt-8 p-5">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">🛒 Cart</h1>

        <button
          onClick={handleClearCart}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
        >
          Clear Cart
        </button>
      </div>

      {/* Empty Cart */}
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 mt-10">
          <h2 className="text-lg">Your cart is empty</h2>
        </div>
      ) : (

        <div className="space-y-4">

          {/* Items */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition"
            >
              <div>
                <h3 className="font-medium text-gray-800">
                  {item.name}
                </h3>
              </div>

              <p className="font-semibold text-gray-700">
                ₹ {(item.price || item.defaultPrice) / 100}
              </p>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <h2 className="text-lg font-semibold">Total</h2>
            <h2 className="text-lg font-bold text-green-600">
              ₹ {totalPrice}
            </h2>
          </div>

        </div>
      )}

    </div>
  );
};

export default Cart;