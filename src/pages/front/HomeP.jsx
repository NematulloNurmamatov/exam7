import React from "react";
import {
  About,
  Backtop,
  Contact,
  Facts,
  Header,
  Hero,
  Resume,
  Services,
  Testemonials,
} from "../../components/layout/front";
import Links from "./Links";

const HomeP = () => {
  return (
    <>
      <Links />
      <Backtop />
      <Header />
      <Hero />
      <About />
      <Facts />
      <Resume />
      <Services />
      <Contact />
    </>
  );
};

export default HomeP;
