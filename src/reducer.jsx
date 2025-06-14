// reducer.jsx

export const initialState = {
  basket: [],
  user: JSON.parse(localStorage.getItem("user")),
  address: {},
};

export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log("action >>>>", action); // Log the action for debugging

  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // Create a new basket array without the removed item
        const newBasket = [
          ...state.basket.slice(0, index),
          ...state.basket.slice(index + 1),
        ];
        return {
          ...state,
          basket: newBasket,
        };
      } else {
        console.warn(`Can't remove product with id ${action.id}`);
        return state; // Return current state if item is not found
      }

    case "SET_ADDRESS":
      return {
        ...state,
        address: action.item,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

export default reducer;
