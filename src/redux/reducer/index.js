import { SET_PROYECT, RESET_PROYECT } from "../constants";

const initialState = {
  proyect: {},
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PROYECT:
      return {
        ...state,
        proyect: payload,
      };
    case RESET_PROYECT:
      return {
        ...state,
        proyect: payload,
      };
    default:
      return state;
  }
};
