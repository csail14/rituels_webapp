import { LOAD_USER_INFO, LOGOUT_USER_INFO } from "./actions-type";

export const loadUserInfo = (isLogged, user, subuser, current_subuser) => {
  return function (dispatch) {
    console.log("loadUserInfo", isLogged, user, subuser, current_subuser);
    dispatch({
      type: LOAD_USER_INFO,
      payload: {
        isLogged: isLogged,
        infos: user,
        subuser: subuser,
        current_subuser: current_subuser,
      },
    });
  };
};

export const logoutUser = () => {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_USER_INFO,
      payload: null,
    });
  };
};
