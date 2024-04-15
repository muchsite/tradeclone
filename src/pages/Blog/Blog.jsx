import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE } from "../../App";
import axios from "axios";
import "./blog.scss";
import Loading from "../../components/loading/Loading";
const Blog = () => {
  const { blogId } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(BASE + `/blog/${blogId}`);
        setData(res.data.blogs);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="blog_container">
          <h2>{data.title}</h2>
          <img src={data.image} alt="" />
          <div
            dangerouslySetInnerHTML={{ __html: data.details }}
            className="blog_html"
          ></div>
        </div>
      )}
    </>
  );
};

export default Blog;
