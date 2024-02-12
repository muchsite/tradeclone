import React from "react";
import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";
import Accounts from "../components/accounts/Accounts";
import Test from "../components/test/Test";
import Contact from "../components/contact/Contact";
import Blogs from "../components/blogs/Blogs";

const Home = () => {
  return (
    <>
      <Hero />
      <Products />
      <Accounts />
      <Test />
      <Contact />
      <Blogs />
    </>
  );
};

export default Home;
