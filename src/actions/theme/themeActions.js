import { LOAD_THEME_INFO } from "./actions-type";

export const loadThemeInfo = (theme) => {
  console.log("loadThemeInfo dispatcher");
  return function (dispatch) {
    dispatch({
      type: LOAD_THEME_INFO,
      payload: theme,
    });
  };
};
