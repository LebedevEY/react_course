import { CircularProgress } from "@material-ui/core";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL_PUBLIC } from "../api/request";

export function Gists() {
  const [gists, setGists] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const renderGist = useCallback(
    (gist) => <li key={gist.id}>{gist.description || "No description"}</li>,
    [],
  );

  const requestGists = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL_PUBLIC);

      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
      const result = await response.json();
      setGists(result);
    } catch (err) {
      setError(true);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    requestGists();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return (
      <>
        <h1>Error</h1>
        <button onClick={requestGists}>Retry</button>
      </>
    );
  }

  return (
    <div>
      <h1>Gists</h1>
      <ul>{gists.map(renderGist)}</ul>
      <Link to="/chat">Go to chat</Link>
    </div>
  );
}
