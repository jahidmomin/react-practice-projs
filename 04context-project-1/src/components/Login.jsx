import { useState, useContext } from "react";
import { userContext } from "../context/UserContext";

export default function Login() {
  let [username, setusername] = useState("");
  let [pass, setpass] = useState("");

  const { user, setUser } = useContext(userContext);

  if (user==null) {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setUser({ username, pass });
          }}
        >
          <label>UserName</label>
          <input
            placeholder="Enter UserName"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />

          <label>Password</label>
          <input
            placeholder="Enter Password"
            value={pass}
            onChange={(e) => setpass(e.target.value)}
          />
          <button type="submit">Subtmit</button>
        </form>
      </div>
    );
  } else {
    return <h3>Please Logged In</h3>;
  }
}
