import {
  GET_SAMPLE,
  SAMPLE_ERROR,
  SET_CONFIG,
  SET_CURRENT_ACCOUNT,
  SET_CURRENT_ROUTE, SET_DARK_MODE,
} from '../reducers/sampleReducer'

export const setConfig = (config:any) => async (dispatch:any) => {
  try {
    dispatch({
      type: SET_CONFIG,
      payload: config,
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: "error message",
    });
  }
};
export const setCurrentAccount= (currentAccount:any) => async (dispatch:any) => {
  try {
    dispatch({
      type: SET_CURRENT_ACCOUNT,
      payload: currentAccount,
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: "error message",
    });
  }
};
export const setCurrRoute = (currentRoute:string) => async (dispatch:any) => {
  try {
    dispatch({
      type: SET_CURRENT_ROUTE,
      payload: currentRoute,
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: "error message",
    });
  }
};
export const setDarkMode = (darkMode:string) => async (dispatch:any) => {
  try {
    dispatch({
      type: SET_DARK_MODE,
      payload: darkMode,
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: "error message",
    });
  }
};
