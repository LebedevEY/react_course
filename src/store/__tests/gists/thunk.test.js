import { gistsSuccess, gistsReducer, gistsStart } from "../../gists";

describe("gists reducer", () => {
  it("gist start", () => {
    const state = gistsReducer({ gistsLoading: false }, gistsStart());

    expect(state.gistsLoading).toBe(true);
  });

  it("gist success", () => {
    const state = gistsReducer(
      { gists: [], gistsLoading: true },
      gistsSuccess(["result"]),
    );

    expect(state.gists).toEqual(["result"]);
    expect(state.gistsLoading).toBe(false);
  });
});
