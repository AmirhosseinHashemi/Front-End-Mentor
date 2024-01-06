export const state = {
  cart: [],
};

export const addData = function (data) {
  state.cart.push(data);
};

export const deleteData = function (index) {
  state.cart.splice(index, 1);
};
