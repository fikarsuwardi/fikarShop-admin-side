export const GET_IMAGES = "GET_IMAGES";

const baseURL = "http://localhost:3001";

export const getImages = (productId) => {
  return (dispatch) => {
    dispatch({
      type: GET_IMAGES,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    fetch(baseURL + "/admin/images/" + productId, {
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    }) 
      .then((response) => {
        if (!response.ok) {
          throw new Error("Internal Server Error");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: GET_IMAGES,
          payload: {
            loading: false,
            data: data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_IMAGES,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
