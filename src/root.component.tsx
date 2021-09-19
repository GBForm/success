import React from "react";

import { SuccessLandingPage } from "./components/SuccessLandingPage";

export default function Root(props) {
  return (
    <>
      <h5>MiniApp2</h5>
      <SuccessLandingPage />
      <section>{props.name} is mounted!</section>
    </>
  );
}
