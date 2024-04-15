import React, { useEffect, useState } from "react";
import Hero from "../components/hero/Hero";
import Products from "../components/products/Products";
import Accounts from "../components/accounts/Accounts";
import Test from "../components/test/Test";
import Contact from "../components/contact/Contact";
import Blogs from "../components/blogs/Blogs";
import Faq from "../components/Faq/Faq";
import { BASE } from "../App";
import axios from "axios";
import Loading from "../components/loading/Loading";

const Home = () => {
  const url = BASE;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        setData(res.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Hero />

      {loading ? (
        <Loading title={"TAILORED TRADE FINANCE SOLUTIONS"} />
      ) : (
        <>
          <Products data={data.service} />
        </>
      )}
      {loading ? (
        <Loading title={"Testimonials"} />
      ) : (
        <>
          <Test data={data.testimonials} />
        </>
      )}
      <Accounts />
      <Contact />
      {loading ? (
        <Loading title={"BLOGS"} />
      ) : (
        <>
          <Blogs data={data.blogs} />
        </>
      )}
      <Faq />
    </>
  );
};

export default Home;
