import { CircularProgress, Button } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGists } from "../store/gists";

export function Gists() {
  const { gists, gistsLoading, gistsError } = useSelector(
    (state) => state.gists,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGists());
  }, [dispatch]);

  if (gistsLoading) {
    return <CircularProgress />;
  }

  if (gistsError) {
    return (
      <>
        <h1>Error</h1>
        <Button onClick={getGists} style={{ background: "darkgray" }}>
          Retry
        </Button>
      </>
    );
  }

  return (
    <div>
      <h1>Gists:</h1>
      <ul>
        {gists.map((gist) => (
          <li key={gist.id}>{gist.description || "No description"}</li>
        ))}
      </ul>
    </div>
  );
}
