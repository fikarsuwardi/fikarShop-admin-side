import {
  GET_LIST_PRODUCT,
  ADD_PRODUCT,
  DETAIL_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "../actions/productActions";

const initialState = {
  getListProductResult: false,
  getListProductLoading: false,
  getListProductError: false,

  addProductResult: false,
  addProductLoading: false,
  addProductError: false,

  updateProductResult: false,
  updateProductLoading: false,
  updateProductError: false,

  detailProductResult: false,

  deleteProductResult: false,
  deleteProductLoading: false,
  deleteProductError: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_PRODUCT:
      return {
        ...state,
        getListProductResult: action.payload.data,
        getListProductLoading: action.payload.loading,
        getListProductError: action.payload.errorMessage,
      };

    case ADD_PRODUCT:
      return {
        ...state,
        addProductResult: action.payload.data,
        addProductLoading: action.payload.loading,
        addProductError: action.payload.errorMessage,
      };

      case DETAIL_PRODUCT:
      return {
        ...state,
        detailProductResult: action.payload.data,
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
        updateProductResult: action.payload.data,
        updateProductLoading: action.payload.loading,
        updateProductError: action.payload.errorMessage,
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        deleteProductResult: action.payload.data,
        deleteProductLoading: action.payload.loading,
        deleteProductError: action.payload.errorMessage,
      };

    default:
      return state;
  }
};

export default productReducer;
