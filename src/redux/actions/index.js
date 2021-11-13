import { SET_PROYECT, RESET_PROYECT } from "../constants";

export const setProyect = (proyect) => ({
    type: SET_PROYECT,
    payload: proyect,
});

export const resetProyect = () => ({
    type: RESET_PROYECT,
    payload: {},
});