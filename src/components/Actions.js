export const removeFeature = item => {
    // dispatch an action here to remove an item
    return{type: "REMOVE_ITEM", payload: item.id, price: item.price};
  };

  export const addItem = item => {
      return {type: "ADD_ITEM", payload: item.id, price: item.price}
  }