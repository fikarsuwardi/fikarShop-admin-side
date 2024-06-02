export const REGISTER_USER = "REGISTER_USER";

const baseURL = "http://localhost:3001";

export const RegisterUser = (data) => {
  console.log("masuk register user", data)
    return (dispatch) => {
      dispatch({
        type: REGISTER_USER,
        payload: {
          loading: true,
          data: false,
          errorMessage: false,
        },
      });
  
      fetch(baseURL + "/admin/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      })
        .then((response) => {
          console.log("tes 2", response);
          if (!response.ok) {
            throw new Error("Internal Server Error");
          }
          return response.json();
        })
        .then((data) => {
          console.log("tes 3", data);
          // localStorage.setItem("access_token", data.access_token);
          
          dispatch({
            type: REGISTER_USER,
            payload: {
              loading: false,
              data: data.data,
              errorMessage: false,
            },
          });
        })
        .catch((error) => {
          console.log("tes 4", error);
          dispatch({
            type: REGISTER_USER,
            payload: {
              loading: false,
              data: false,
              errorMessage: error.message,
            },
          });
        });
    };
  };