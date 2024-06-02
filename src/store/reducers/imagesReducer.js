import { GET_IMAGES } from "../actions/imagesActions";

const initialState = {
    getImagesResult: false,
    getImagesLoading: false,
    getImagesError: false
}

const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_IMAGES:
        return {
          ...state,
          getImagesResult: action.payload.data,
          getImagesLoading: action.payload.loading,
          getImagesError: action.payload.errorMessage,
        };
  
      default:
        return state;
    }
  };
  
  export default imagesReducer;