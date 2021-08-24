import { gistsStart, gistsError, gistsSuccess } from "./actions";

export const getGists = (page = 1) => {
  return async (dispatch, api) => {
    dispatch(gistsStart());

    const { data } = await api.getGistsApi(page);
  };
};
