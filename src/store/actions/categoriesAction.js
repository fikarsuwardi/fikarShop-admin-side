export const GET_LIST_CATEGORY = "GET_LIST_CATEGORY";
export const ADD_CATEGORY = "ADD_CATEGORY";
export const DELETE_CATEGORY = "DELETE_CATEGORY";

const baseURL = "http://localhost:3001";
// const baseURL = "https://fikarshop-server.herokuapp.com"

export const getListCategory = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_CATEGORY,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    fetch(baseURL + "/admin/category", {
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
          type: GET_LIST_CATEGORY,
          payload: {
            loading: false,
            data: data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_CATEGORY,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addCategory = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_CATEGORY,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    fetch(baseURL + "/admin/category", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        console.log("tes2", response);
        if (!response.ok) {
          throw new Error("Internal Server Error");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: ADD_CATEGORY,
          payload: {
            loading: false,
            data: data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: ADD_CATEGORY,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteCategory = (id) => {
  console.log("tes", id);
  return (dispatch) => {
    dispatch({
      type: DELETE_CATEGORY,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    fetch(baseURL + "/admin/category/" + id, {
      method: "DELETE",
      headers: {
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        console.log("tes2", response);
        if (!response.ok) {
          throw new Error("Internal Server Error");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({
          type: DELETE_CATEGORY,
          payload: {
            loading: false,
            data: data.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: DELETE_CATEGORY,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
