const reducer = (state = [1, 2, 3], action) => {
  if (action.type === 'add') {
    state = [...state, action.payload];
  }
  return state;
};

export default reducer;
