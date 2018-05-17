import React,{Fragment} from "react";
import Head from "../Head/";

export default ({ children, title = "This is the default title" }) => (
  <Fragment>
    <Head title={title} />
    {children}
  </Fragment>
);
