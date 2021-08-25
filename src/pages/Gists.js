import { CircularProgress, Button } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getGists } from "../store/gists";

// const API_URL_PUBLIC = "https://api.github.com/gists/public";

// const useGists = () => {
//   const [gists, setGists] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);
//
//   const requestGists = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(API_URL_PUBLIC);
//       const result = await response.json();
//       setGists(result);
//     } catch (err) {
//       setError(true);
//       console.log(err);
//     } finally {
//       setLoading(false);
//     }
//   };
//
//   useEffect(() => {
//     requestGists();
//   }, []);
//
//   return { gists, loading, error, requestGists };
// };

export function Gists() {
  // const { gists, loading, error, requestGists, renderGist } = useGists();

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

  // console.log(gistsError);

  if (gistsError) {
    return (
      <>
        <h1>Error</h1>
        <Button style={{ background: "darkgray" }}>Retry</Button>
      </>
    );
  }

  return (
    <div>
      <h1>Gists</h1>
      <ul>
        {gists.map((gist) => (
          <li key={gist.id}>{gist.description || "No description"}</li>
        ))}
      </ul>
      <Link to="/chat">Go to chat</Link>
    </div>
  );
}
