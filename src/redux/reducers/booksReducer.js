import actionTypes from '../actions/actionTypes';

const initialState = {
  start: false,
  success: false,
  books: [],
  fail: false,
  error: '',
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.bookTypes.FETCH_BOOKS_START:
      return {
        ...state,
        start: true,
      };
    case actionTypes.bookTypes.FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        start: false,
        fail: false,
        success: true,
        books: action.payload,
      };
    case actionTypes.bookTypes.FETCH_BOOKS_FAIL:
      return {
        ...state,
        start: false,
        succes: false,
        fail: true,
        error: action.payload,
      };
    case actionTypes.bookTypes.ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };

    case actionTypes.bookTypes.DELETE_BOOK:
      const filtredBooks = state.books.filter(
        (item) => item?.id !== action.payload
      );
      console.log(filtredBooks);
      return {
        ...state,
        books: filtredBooks,
      };
    case actionTypes.bookTypes.SET_SEARCH:
      const searchFilter = state?.books?.filter((item) => {
        return item?.title.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        books: searchFilter,
      };
    default:
      return state;
  }
};

export default booksReducer;
