const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const updatedItemsAdd = [...state.items, action.payload];
      localStorage.setItem("cartItems", JSON.stringify(updatedItemsAdd));
      return {
        ...state,
        items: updatedItemsAdd,
      };
    case "REMOVE_ITEM":
      const updatedItemsRemove = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("cartItems", JSON.stringify(updatedItemsRemove));
      return {
        ...state,
        items: updatedItemsRemove,
      };
    default:
      return state;
  }
};

export default cartReducer;
