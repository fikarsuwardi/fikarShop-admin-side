import { REGISTER_USER } from "../actions/usersActions";

const initialState = {
    addUserResult: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {  
      case REGISTER_USER:
        return {
          ...state,
          addUserResult: action.payload.data,
        };
  
      default:
        return state;
    }
  };

  export default usersReducer;