import "./Login.css";
import React from "react";

export function Login() {
  let value = "";
  function onSubmit(e) {
    e.preventDefault();
    console.log(value);
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="container">
        <div className="user-login">User Login</div>
        <input className="user-name" />
        <input className="user-password" />
        <div className="need-text">Need an account?</div>
        <button className="submit-button" type="submit">
          sign in
        </button>
      </div>
    </form>
  );
}
