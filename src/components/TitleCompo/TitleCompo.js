import React from "react";
import { Helmet } from "react-helmet-async";
const TitleCompo = ({ headerTitle, children }) => {
  return (
    <>
      <Helmet>
        <title>{headerTitle}</title>
      </Helmet>
      {children}
    </>
  );
};

export default TitleCompo;
