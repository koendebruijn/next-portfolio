import Hero from "components/sections/hero";
import { backend } from "lib/backend";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import { Project } from "types/project";

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
