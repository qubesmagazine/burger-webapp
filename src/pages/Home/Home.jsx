/* eslint-disable no-unused-vars */
import React from "react";
import Layout from "../../components/Layout/Layout";
import "../../styles/Home.style.css";
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
} from "../Home/index";

const Home = () => {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner*/}

        <Section1 />

        {/* Home Section Hero About*/}

        <Section2 />

        {/* Home Section Hero Menu */}

        <Section3 />

        {/* Home Section Promotion */}

        <Section4 />

        {/* Home Section Shop */}

        <Section5 />

        {/* Home Section BLOG */}

        <Section6 />

        {/* Home Section Contact */}

        <Section7 />
      </Layout>
    </>
  );
};

export default Home;
