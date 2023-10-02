import { userContext } from "./UserContext";
import {useState} from 'react';

export default function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}
