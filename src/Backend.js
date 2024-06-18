import { useContext } from "react";
import { UserContext } from "./Context/LoginContext";
import baseUrl from "./config";
import { toast } from "react-toastify";

// function to delete item from cart
const useDeleteFromCart = () => {
  const { userDetails, setUserDetails } = useContext(UserContext);

  const deletFromCart = async (courseId) => {
    if (confirm("Want to delete course from cart?")) {
      try {
        const response = await fetch(
          `${baseUrl}/cart/${courseId}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Response => ", response.status);
        if (response.ok) {
          const updatedCart = userDetails.cart.filter(
            (item) => item.id !== courseId
          );
          setUserDetails({ ...userDetails, cart: updatedCart });
        } else {
          console.error("Failed to delete item from API");
        }
      } catch (error) {
        console.error("Error deleting item from API:", error);
      }
    } else {
      console.log("Deletion canceled by user");
    }
  };

  return deletFromCart;
};
export default useDeleteFromCart;

// function to add item to cart
export const useAddToCart = () => {
  const addToCart = async (loginDetails, courseId) => {
    try {
      const response = await fetch(`${baseUrl}/cart`, {
        method: "POST",
        body: JSON.stringify({
          loginDetails: {
            id: loginDetails,
          },
          courses: {
            id: courseId,
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        toast.success("Course Added to cart");
      }

      console.log("Response => ", response.status);
      if (!response.ok) {
        throw new Error("Failed to add item to cart");
      }
      console.log("Success:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return addToCart;
};
