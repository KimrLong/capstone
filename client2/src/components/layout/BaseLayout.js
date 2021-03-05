import React from "react";
import Header from "./Header";


const BaseLayout = (props) => {
  return (
    <>
      <Header />

      {props.children}

      <br />
      <br />
     
    </>
  );
};

export default BaseLayout;