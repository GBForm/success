import React from "react";
// import { FakeApiData } from "../FakeAPI/FakeApi";
import "./SuccessLandingPage.css";
// import logo from "./blt-logo-web.svg";
// import { useHistory } from "react-router";

export const SuccessLandingPage = () => {
  const name = localStorage.getItem("name");

  //   const history= useHistory();
  //   const handleClick = () => {
  //     history.push("/")
  //   }

  return (
    <>
      <div className="card">
        <div>
          {/* <img className="logo-success" src={logo} alt="logo" /> */}
        </div>
        <h1>Success!</h1>

        {/* This line is purely for build out. Take out and replace with proper code to access this data once single spa is running */}
        <div>Congrats {name}, you submitted the form successfully!</div>
        {/* ----------------------------------------------------GET-BUILT----------------------------------------------------------- */}
        <div>
          <button className="btn btn-success">Return to Start</button>
        </div>
      </div>
    </>
  );
};
