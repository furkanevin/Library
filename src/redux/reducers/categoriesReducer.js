import actionTypes from './../actions/actionTypes';

const initialState = {
  start: false,
  success: false,
  categories: [],
  fail: false,
  error: '',
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.bookTypes.CATEGORIES_START:
      return { ...state, start: true };
    case actionTypes.bookTypes.CATEGORIES_SUCCESS:
      return {
        ...state,
        start: false,
        fail: false,
        success: true,
        categories: action.payload,
      };
    case actionTypes.bookTypes.CATEGORIES_FAIL:
      return {
        ...state,
        start: false,
        fail: true,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default categoriesReducer;
