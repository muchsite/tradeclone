import React, { useEffect, useState } from "react";
import about from "../../images/about.svg";
import "./about.scss";
import { BASE } from "../../App";
import Loading from "../../components/loading/Loading";
import axios from "axios";
import { Link } from "react-router-dom";

const About = () => {
  const [activeAbout, setActiveAbout] = useState(0);
  const [loading, setLoading] = useState(true);
  const [career, setCareer] = useState();
  const [header, setHeader] = useState();
  const [simplification, setSimplification] = useState([]);
  const [leadership, setLeadership] = useState();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await axios(BASE + `/aboutus`);
        setLoading(false);
        const data = res.data.data;
        console.log(data);
        setHeader(data.header);
        setCareer(data.Career);
        setLeadership(data.Leadership);
        setSimplification(data.Simplification);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="about_container">
          <div className="about_hero">
            <div className="about_text">
              <h3>{header.hero_header}</h3>
              <p>{header.hero_content}</p>
            </div>
            <img src={header.hero_image} alt="" />
          </div>
          <div className="about_nav">
            <div className="about_nav_top">
              <div
                className={`about_nav_item ${
                  activeAbout === 0 && "active_about"
                }`}
                onClick={() => setActiveAbout(0)}
              >
                What drives us
              </div>
              <div
                className={`about_nav_item ${
                  activeAbout === 1 && "active_about"
                }`}
                onClick={() => setActiveAbout(1)}
              >
                Vision
              </div>
              <div
                className={`about_nav_item ${
                  activeAbout === 2 && "active_about"
                }`}
                onClick={() => setActiveAbout(2)}
              >
                Simplification
              </div>
              <div
                className={`about_nav_item ${
                  activeAbout === 3 && "active_about"
                }`}
                onClick={() => setActiveAbout(3)}
              >
                Career
              </div>
              <div
                className={`about_nav_item ${
                  activeAbout === 4 && "active_about"
                }`}
                onClick={() => setActiveAbout(4)}
              >
                Leadship
              </div>
            </div>
            <div className="about_nav_content_items">
              {activeAbout == 0 && (
                <div className="about_nav_content">
                  <img src={header.what_drive_us_image} alt="" />
                  <div className="about_nav_content_text">
                    <h4>{header.what_drive_us_header}</h4>
                    <p>{header.what_drive_us_content}</p>
                  </div>
                </div>
              )}
              {activeAbout == 1 && (
                <div className="about_nav_content vision_div">
                  <img src={header.vision_image} alt="" />
                  <div className="about_nav_content_text">
                    <p>{header.vision_content}</p>
                  </div>
                </div>
              )}
              {activeAbout == 2 && (
                <div className="about_nav_content_simple">
                  <div className="simple_text">
                    <h4>{header.simplification_header}</h4>
                    <p>{header.simplification_content}</p>
                  </div>
                  <div className="simple_content_divs">
                    {simplification?.map((item, index) => {
                      return (
                        <div className="simple_content_div" key={index}>
                          <img src={item.image} alt="simple" />
                          <div className="simple_content_div_text">
                            <h4>{item.header}</h4>
                            <p>{item.content}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
              {activeAbout == 3 && (
                <div className="about_nav_content carrer_div">
                  <div className="career_left">
                    {career.map((item, index) => {
                      return (
                        <div className={`career_div  c_d_${index}`}>
                          <img src={item.image} key={index} alt="" />
                          <div className="career_div_text">
                            {item.header ? (
                              <h5>{item.header}</h5>
                            ) : (
                              <h5>Dynamic Work Environment </h5>
                            )}
                            {item.content ? (
                              <p>{item.content}</p>
                            ) : (
                              <p>
                                Collaborative, supportive, and growth-focused.
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="about_nav_content_text">
                    <h4>{header.career_header}</h4>
                    <p>{header.career_content}</p>
                    <Link to="/career" target="_">
                      See More
                    </Link>
                  </div>
                </div>
              )}
              {activeAbout == 4 && (
                <div className="leadership_div">
                  <div className="leadership_text">
                    <h4>{header.leader_header}</h4>
                    <p>{header.leader_content}</p>
                  </div>
                  <div className="leadership_items">
                    {leadership.map((item, index) => {
                      return (
                        <div className="leadership_item" key={index}>
                          <img src={item.image} alt="" />
                          <div className="leadership_item_text">
                            <h5>{item.name}</h5>
                            <p>{item.position}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
