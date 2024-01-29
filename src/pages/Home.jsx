import React from "react";
import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";
import Accounts from "../components/accounts/Accounts";
import Test from "../components/test/Test";

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <Accounts />
      <Test />
    </>
  );
};

export default Home;
