import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import authService from "../appwrite/auth";

export default function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    //appwrite se logout then dispatch se store logout
    authService
      .logout()
      .then((resp) => {
        dispatch(logout());
      })
      .catch((e) => alert("Logout Failure"));
  };
  return (
    <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
      Logout
    </button>
  );
}
