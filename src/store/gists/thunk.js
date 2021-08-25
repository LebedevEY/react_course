import { gistsStart, gistsError, gistsSuccess } from "./actions";

const API_URL_PUBLIC = "https://api.github.com/gists/public";

export const getGists = () => async (dispatch) => {
  try {
    dispatch(gistsStart());
    const response = await fetch(API_URL_PUBLIC);
    const result = await response.json();
    dispatch(gistsSuccess(result));
  } catch (error) {
    dispatch(gistsError(error));
  }
};
