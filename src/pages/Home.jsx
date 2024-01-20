import React from "react";
import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";
import Accounts from "../components/accounts/Accounts";

const Home = () => {
  return (
    <>
      <Hero />
      <Accounts />
      <Products />
    </>
  );
};

export default Home;
