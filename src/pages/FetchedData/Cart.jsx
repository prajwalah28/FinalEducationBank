import React, { useContext } from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/LoginContext";

import useDeleteFromCart from "../../Backend";

const Cart = () => {
  const { userDetails,setallcoursetotal } = useContext(UserContext);
  

  const totalPrice = userDetails.cart.reduce(
    (acc, item) => acc + item.courses.cost,
    0
  );

  const deletFromCart = useDeleteFromCart();

  return (
    <div className="px-10 py-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mt-3 mb-4 text-center py-4">
        Your Cart{" "}
        {userDetails.cart.length !== 0 ? (
          <>
            <span className="text-lg text-red-600">
              (click on action to delete all items)
            </span>
          </>
        ) : null}
      </h2>
      {userDetails.cart.length === 0 ? (
        <>
          <div className="bg-gray-200 h-80 flex flex-col items-center justify-center rounded-md shadow-xl">
            <HiOutlineEmojiSad className="text-9xl" />
            <h1 className="text-3xl font-bold">Nothing in Cart</h1>
          </div>
        </>
      ) : (
        <>
          <div className="bg-white rounded-lg overflow-hidden shadow">
            <table className="w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="py-2">Image</th>
                  <th className="py-2">Description</th>
                  <th className="py-2">Price</th>
                  <th className="py-2 cursor-pointer">
                    <button> Action</button>
                  </th>
                </tr>
              </thead>
              <tbody>
                {userDetails.cart.map((item, index) => (
                  <tr key={item.id}>
                    <td className="py-2 px-10 flex items-center justify-center">
                      <img
                        src={item.courses.image}
                        className="w-12 h-12 object-cover rounded-lg px1"
                      />
                    </td>
                    <td className="py-2  text-center font-semibold">
                      {item.courses.courseTitle}
                    </td>

                    <td className="py-2  text-center font-semibold">
                      {item.courses.cost}
                    </td>

                    <td className="py-2">
                      <div
                        onClick={() => {
                          deletFromCart(item.id);
                        }}
                        className=" flex items-center justify-center cursor-pointer"
                      >
                        <RiDeleteBin6Fill className="text-3xl text-red-600 " />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-between items-center mt-4 px-10">
            <h1 className="text-xl font-semibold">Total: ₹ {totalPrice}</h1>
            <Link to={"/Payment"}>
              <button onClick={() => {
                    setallcoursetotal(totalPrice);
                  }} className="bg-orange-500 py-2 px-6 text-white font-semibold rounded">
                Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
