import {
    GET_LIST_CATEGORY,
    ADD_CATEGORY,
    DELETE_CATEGORY,
  } from "../actions/categoriesAction";
  
  const initialState = {
    getListCategoryResult: false,
    getListCategoryLoading: false,
    getListCategoryError: false,
  
    addCategoryResult: false,
    addCategoryLoading: false,
    addCategoryError: false,
  
    deleteCategoryResult: false,
    deleteCategoryLoading: false,
    deleteCategoryError: false,
  };
  
  const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_LIST_CATEGORY:
        return {
          ...state,
          getListCategoryResult: action.payload.data,
          getListCategoryLoading: action.payload.loading,
          getListCategoryError: action.payload.errorMessage,
        };
  
      case ADD_CATEGORY:
        return {
          ...state,
          addCategoryResult: action.payload.data,
          addCategoryLoading: action.payload.loading,
          addCategoryError: action.payload.errorMessage,
        };
  
      case DELETE_CATEGORY:
        return {
          ...state,
          deleteCategoryResult: action.payload.data,
          deleteCategoryLoading: action.payload.loading,
          deleteCategoryError: action.payload.errorMessage,
        };
  
      default:
        return state;
    }
  };
  
  export default categoriesReducer;
  