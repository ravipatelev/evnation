import React from "react";
import Layout from "./Layout";

const withLayout = (Component) => {
  return (props) => (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

export default withLayout;
