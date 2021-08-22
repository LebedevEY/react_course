import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Gists() {
  useEffect(() => {
    fetch("https://alexwohlbruck.github.io/cat-facts/")
      .then(console.log)
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Gists</h1>
      <Link to="/chat">Chat</Link>
    </>
  );
}
