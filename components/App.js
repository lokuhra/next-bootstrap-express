import React from "react";
import Head from "./Head/index";
import NProgress from "nprogress";
import Router from "next/router";
import Aside from "./Aside/index";
import Navbar from "./Navbar/index";

Router.onRouteChangeStart = url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({ children, title = "This is the default title" }) => (
  <div className="main-container columns">
    <Head title={title} />
    {/*<Menu />*/}
    <Aside />
    <div className="column content-container">
      <Navbar />
      <div className={"is-flex content is"}>
        {children}
      </div>
    </div>
  </div>
);
