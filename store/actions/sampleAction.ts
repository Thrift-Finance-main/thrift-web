import {
  GET_SAMPLE,
  SAMPLE_ERROR,
  SET_CONFIG,
  SET_CURRENT_ACCOUNT,
  SET_CURRENT_ROUTE, SET_DARK_MODE, SET_LANGUAGE,
} from '../reducers/sampleReducer'
import { storeData, storeObj } from '../../db/LocalStorage'

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
export const setDarkMode = (darkMode:boolean) => async (dispatch:any) => {
  try {
    dispatch({
      type: SET_DARK_MODE,
      payload: darkMode,
    });
    // Set value in local storage
    await storeData(SET_DARK_MODE, darkMode );
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: "error message",
    });
  }
};

export const setLanguageMode = (lang: string) => async (dispatch: any) => {
  try {
    dispatch({
      type: SET_LANGUAGE,
      payload: lang
    });
  } catch (error) {
    dispatch({
      type: SAMPLE_ERROR,
      payload: 'error message'
    })
  }
}
