import { useRef, useState } from "react";
import "../../styles/signin.css";
const DeleteUser = () => {
  const [email, setEmail] = useState("");
  const errorRef = useRef();
  const deleteCall = async () => {
    const response = await fetch("/api/delete", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: email,
      }),
    });
    const res = await response.json();
    errorRef.current.innerHTML = JSON.stringify(res.message);
  };
  return (
    <div className="mainHeader">
      <h1>Remove User</h1>
      <div className="adminforms">
        <input
          placeholder="Enter Username"
          className="adminField"
          onChange={({ target }) => setEmail(target.value)}
          value={email}
        />
        <button onClick={deleteCall} className="adminField">
          Delete
        </button>
        <h2 style={{ color: "rgba(81,110,108)" }} ref={errorRef}></h2>
      </div>
    </div>
  );
};
export default DeleteUser;
