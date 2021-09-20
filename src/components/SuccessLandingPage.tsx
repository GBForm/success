import React, { useState,useEffect } from "react";
import "./SuccessLandingPage.css";
// import logo from "./blt-logo-web.svg";



export const SuccessLandingPage = () => {
  const [name, setName] = useState<string>("")
  
  useEffect(() => {
    
    setName(localStorage.getItem("name"))

  }, [])

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
