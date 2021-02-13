import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserName } from "../actions";

export default function Home() {
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleSaveClicked = () => {
    dispatch(changeUserName(value));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <h1>{name}</h1>
      <br />
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <button onClick={handleSaveClicked}>Save</button>
    </div>
  );
}
