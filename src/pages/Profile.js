import { useSelector, useDispatch } from "react-redux";
import { toggleNameVisible } from "../store/profile";

export function Profile() {
  const { firstName, age, sex } = useSelector((state) => state.profile.user);
  const nameVisible = useSelector((state) => state.profile.nameVisible);

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(toggleNameVisible())}>toggle name</button>
      {nameVisible && <h1>Name: {firstName}</h1>}
      <h2>Age: {age}</h2>
      <h2>Sex: {sex}</h2>
    </div>
  );
}
