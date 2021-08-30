import { useSelector, useDispatch } from "react-redux";
import { toggleNameVisible } from "../store/profile";

export function Profile({ session }) {
  const nameVisible = useSelector((state) => state.profile.nameVisible);

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(toggleNameVisible())}>toggle name</button>
      {nameVisible && <h1>Email: {session.email}</h1>}
    </div>
  );
}
