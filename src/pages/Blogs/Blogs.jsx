import React, { useEffect, useState } from "react";
import { BASE } from "../../App";
import axios from "axios";
import "./blogs.scss";
import Loading from "../../components/loading/Loading";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
const Blogs = () => {
  const url = BASE;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url + "/blogs/");
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [hover, setHover] = useState(-1);
  const [click, setClik] = useState(-1);
  const handleClick = (index) => {
    if (index == click) {
      setClik(-1);
    } else {
      setClik(index);
    }
  };
  return (
    <div className="a_blogs_container">
      <h2>BLOGS</h2>
      {loading ? (
        <Loading title={"Loading"} />
      ) : (
        <div className="a_blogs_content">
          {data.map((blog, index) => {
            console.log(blog);
            return (
              <div
                className="a_blogs_item"
                key={index}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(-1)}
              >
                <img src={blog.image} alt="" />
                <h3>{blog.title}</h3>

                <div
                  className={`a_blog_hover ${
                    hover === index && "blog_bottom_zero"
                  }`}
                >
                  <h3>{blog.title}</h3>
                  <p>{blog.details}</p>
                  <button>
                    <Link to={`../blog/${blog.slug}`}>See All</Link>
                  </button>
                </div>
                <div
                  className={`a_blog_click ${
                    click === index && "blog_bottom_zero"
                  }`}
                >
                  <h3>{blog.title}</h3>
                  <p>{blog.details}</p>
                  <button>
                    <Link to={`../blog/${blog.slug}`}>See All</Link>
                  </button>
                </div>
                <div className="a_blog_click_container">
                  <AiFillPlusSquare
                    onClick={() => handleClick(index)}
                    className={`a_blog_icon ${
                      click == index ? "a_blog_icon_0" : ""
                    }`}
                  />
                  <AiFillMinusSquare
                    className={`a_blog_icon ${
                      click !== index ? "a_blog_icon_0" : ""
                    }`}
                    onClick={() => handleClick(index)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Blogs;
