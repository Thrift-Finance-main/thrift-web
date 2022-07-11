
export const GET_SAMPLE = "GET_SAMPLE";
export const SAMPLE_ERROR = "SAMPLE_ERROR";
export const SET_CONFIG = "SET_CONFIG";
export const SET_CURRENT_ACCOUNT= "SET_CURRENT_ACCOUNT";
export const SET_CURRENT_ROUTE= "SET_CURRENT_ROUTE";
export const SET_LOGGED_STATUS= "SET_LOGGED_STATUS";

export const initialConfig = {
  darkMode: true,
  lan: 'en',
  lastAction: '',
  currentRoute: 'login',
  locked: false
};

const initialState = {
  sample: ['hello'],
  config: initialConfig,
  currentAccount: {

  },
  logged: false,
};

const sampleReducer = (state = initialState, action:any) => {
  switch (action.type) {
    case GET_SAMPLE:
      return {
        ...state,
        sample: action.payload,
        loading: false,
      };

    case SAMPLE_ERROR:
      return {
        loading: false,
        error: action.payload,
      };

    case SET_CONFIG:
      return {
        ...state,
        config: action.payload,
      };

    case SET_CURRENT_ACCOUNT:
      return {
        ...state,
        currentAccount: action.payload,
      };

    case SET_CURRENT_ROUTE:
      state.config.currentRoute = action.payload;
      return state

    default:
      return state;
  }
};

export default sampleReducer;
