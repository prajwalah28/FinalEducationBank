import { Rating } from "primereact/rating";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAddToCart } from "../../Backend";
import { UserContext } from "../../Context/LoginContext";

const Card = ({ all_items }) => {
  const { userDetails } = useContext(UserContext);

  const addToCart = useAddToCart();

  return (
    <>
      <div className=" border hover:shadow-xl rounded-md transform translate duration-300 delay-200 bg-gray-100 ">
        <Link to={"/courseDetails"}>
          <div className="h-40 w-60 overflow-hidden">
            <img
              src={all_items.image}
              alt=""
              className="h-40 w-60 transform translate  hover:scale-105 duration-200 delay-150  overflow-hidden"
            />
          </div>
        </Link>
        <div className="px-4 mt-4">
          <h1 className="w-40 font-semibold">{all_items.courseTitle}</h1>
          <div className="card flex justify-content-center text-yellow-400 py-2">
            <Rating value={4} readOnly cancel={false} />
          </div>
          <h1 className="font-bold text-xl">₹ {all_items.cost}</h1>
          <button
            onClick={() => addToCart(userDetails.id, all_items.id)}
            className="bg-orange-500 px-3 py-2 text-white font-semibold rounded-sm mt-5 mb-3"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
