import { useContext } from "react";
import { userContext } from "../context/UserContext";

export default function Profile() {
  const { user } = useContext(userContext);

  return (
    <div>
      <h2>Profile</h2>
      <h3>{user?.username}</h3>
    </div>
  );
}
