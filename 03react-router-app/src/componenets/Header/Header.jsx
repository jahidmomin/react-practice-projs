import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h2>Header</h2>
      <ul>
        <li>
          <NavLink
            to={""}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "yellow" : "",
              };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"about"}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "yellow" : "",
              };
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"contact"}
            className={({ isActive, isPending }) =>
              isPending ? "btn-non" : isActive ? "btn-active" : ""
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
