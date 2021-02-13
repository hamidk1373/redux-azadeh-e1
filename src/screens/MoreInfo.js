import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeUserMoreInfo } from "../actions";

export default function MoreInfo() {
  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    // do anything
    // request => setState
  }, [phoneNumber]);

  const handleSaveDataClicked = () => {
    const data = {
      email,
      phoneNumber,
    };

    dispatch(changeUserMoreInfo(data));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
      }}
    >
      <div>
        <label>phone number</label>
        <input onChange={(e) => setemail(e.target.value)} />
      </div>
      <div>
        <label>email</label>
        <input onChange={(e) => setphoneNumber(e.target.value)} />
      </div>
      <button onClick={handleSaveDataClicked}>Save Data</button>
    </div>
  );
}
