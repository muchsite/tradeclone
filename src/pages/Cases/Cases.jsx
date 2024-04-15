import React, { useEffect, useState } from "react";
import { BASE } from "../../App";
import axios from "axios";
import "./cases.scss";
import Loading from "../../components/loading/Loading";
import { AiFillPlusSquare, AiFillMinusSquare } from "react-icons/ai";
import { Link } from "react-router-dom";
const Cases = () => {
  const url = BASE;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url + "/cases/");
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
    <div className="a_cases_container">
      <h2>Case Stdies</h2>
      {loading ? (
        <Loading title={"Loading"} />
      ) : (
        <div className="a_cases_content">
          {data.map((item, index) => {
            return (
              <div
                className="a_cases_item"
                key={index}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(-1)}
              >
                <img src={item.image} alt="" />
                <h3>{item.title}</h3>

                <div
                  className={`a_case_hover ${
                    hover === index && "case_bottom_zero"
                  }`}
                >
                  <h3>{item.title}</h3>
                  <p>{item.details}</p>
                  <button>
                    <Link to={`../case/${item.slug}`}>See All</Link>
                  </button>
                </div>
                <div
                  className={`a_case_click ${
                    click === index && "case_bottom_zero"
                  }`}
                >
                  <h3>{item.title}</h3>
                  <p>{item.details}</p>
                  <button>
                    <Link to={`../case/${item.slug}`}>See All</Link>
                  </button>
                </div>
                <div className="a_case_click_container">
                  <AiFillPlusSquare
                    onClick={() => handleClick(index)}
                    className={`a_case_icon ${
                      click == index ? "a_case_icon_0" : ""
                    }`}
                  />
                  <AiFillMinusSquare
                    className={`a_case_icon ${
                      click !== index ? "a_case_icon_0" : ""
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

export default Cases;
