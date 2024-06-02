export const GET_LIST_PRODUCT = "GET_LIST_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const DETAIL_PRODUCT = "DETAIL_PRODUCT"
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";

const baseURL = "http://localhost:3001";

export const getListProduct = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_PRODUCT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    fetch(baseURL + "/admin/product", {
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
          type: GET_LIST_PRODUCT,
          payload: {
            loading: false,
            data: data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_PRODUCT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addProduct = (data) => {
  console.log("tes", data);
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    fetch(baseURL + "/admin/product", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
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
          type: ADD_PRODUCT,
          payload: {
            loading: false,
            data: data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_PRODUCT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailProduct = (data) => {
  console.log("tes detail", data);
  return(dispatch) => {
    dispatch({
      type: DETAIL_PRODUCT,
      payload: {
        data: data
      }
    })
  }
}

export const updateProduct = (data) => {
  console.log("tess", data);
  return (dispatch) => {
    dispatch({
      type: UPDATE_PRODUCT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    fetch(baseURL + "/admin/product/" + data.id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        console.log("response ok gak", response);
        if (!response.ok) {
          throw new Error("Internal Server Error");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: UPDATE_PRODUCT,
          payload: {
            loading: false,
            data: data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: UPDATE_PRODUCT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteProduct = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    fetch(baseURL + "/admin/product/" + id, {
      method: "DELETE",
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
          type: DELETE_PRODUCT,
          payload: {
            loading: false,
            data: data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_PRODUCT,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
