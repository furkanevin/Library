import actionTypes from '../actions/actionTypes';

const initialState = {
  start: false,
  success: false,
  book: [],
  fail: false,
  error: '',
};

const singleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.bookTypes.FETCH_BOOK_START:
      return {
        ...state,
        start: true,
      };
    case actionTypes.bookTypes.FETCH_BOOK_SUCCESS:
      return {
        ...state,
        start: false,
        fail: false,
        success: true,
        book: action.payload,
      };
    case actionTypes.bookTypes.FETCH_BOOK_FAIL:
      return {
        ...state,
        start: false,
        succes: false,
        fail: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default singleReducer;
