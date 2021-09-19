import React from "react";

import { SuccessLandingPage } from "./components/SuccessLandingPage";

export default function Root(props) {
  return (
    <>
      <SuccessLandingPage />
      <section>{props.name} is mounted!</section>
    </>
  );
}
