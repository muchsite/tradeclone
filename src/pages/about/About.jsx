import React, { useEffect, useRef, useState } from "react";
import "./about.scss";
import { BASE } from "../../App";
import Loading from "../../components/loading/Loading";
import axios from "axios";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const About = () => {
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

  const { ref: firstWRef, inView: firstW } = useInView({
    threshold: 0.6,
  });
  const { ref: secondWRef, inView: secondW } = useInView({
    threshold: 1,
  });
  const { ref: thirdWref, inView: thirdW } = useInView({
    threshold: 0.5,
  });
  const { ref: forthWRef, inView: forthW } = useInView({
    threshold: 0.5,
  });
  const { ref: fifthWRef, inView: fifthW } = useInView({
    threshold: 0.2,
  });

  const [active, setActive] = useState("first");

  useEffect(() => {
    if (firstW && !secondW) {
      setActive("first");
    }
    if (secondW && !firstW) {
      setActive("second");
    }
    if (secondW && !firstW) {
      setActive("second");
    }

    if (thirdW && !secondW) {
      setActive("third");
    }
    if (forthW && !thirdW) {
      setActive("forth");
    }
    if (fifthW && !forthW) {
      setActive("fifth");
    }
  }, [firstW, secondW, thirdW, forthW, fifthW]);

  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const forthRef = useRef();
  const fifthRef = useRef();

  const scrollTo = (ar) => {
    if (ar === "first") {
      if (firstRef.current) {
        const top =
          firstRef.current.getBoundingClientRect().top +
          window.scrollY -
          document.documentElement.clientTop -
          200;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    }
    if (ar === "second") {
      if (secondRef.current) {
        const top =
          secondRef.current.getBoundingClientRect().top +
          window.scrollY -
          document.documentElement.clientTop -
          200;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    }
    if (ar === "third") {
      if (thirdRef.current) {
        const top =
          thirdRef.current.getBoundingClientRect().top +
          window.scrollY -
          document.documentElement.clientTop -
          200;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    }
    if (ar === "forth") {
      if (forthRef.current) {
        const top =
          forthRef.current.getBoundingClientRect().top +
          window.scrollY -
          document.documentElement.clientTop -
          200;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    }
    if (ar === "fifth") {
      if (fifthRef.current) {
        const top =
          fifthRef.current.getBoundingClientRect().top +
          window.scrollY -
          document.documentElement.clientTop -
          200;
        window.scrollTo({ top: top, behavior: "smooth" });
      }
    }
  };

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
                  active === "first" && "active_about"
                }`}
                onClick={() => scrollTo("first")}
              >
                <div className="drive_text_desktop">What drives us</div>
                <div className="drive_text_mobile">Drives</div>
              </div>
              <div
                className={`about_nav_item ${
                  active === "second" && "active_about"
                }`}
                onClick={() => scrollTo("second")}
              >
                Vision
              </div>
              <div
                className={`about_nav_item ${
                  active === "third" && "active_about"
                }`}
                onClick={() => scrollTo("third")}
              >
                Simplification
              </div>
              <div
                className={`about_nav_item ${
                  active === "forth" && "active_about"
                }`}
                onClick={() => scrollTo("forth")}
              >
                Career
              </div>
              <div
                className={`about_nav_item ${
                  active === "fifth" && "active_about"
                }`}
                onClick={() => scrollTo("fifth")}
              >
                Leadship
              </div>
            </div>
            <div className="about_nav_content_items">
              <div className="about_nav_content drive_div" ref={firstRef}>
                <div className="about_nav_content_image" ref={firstWRef}>
                  <img src={header.what_drive_us_image} alt="" />
                </div>
                <div className="about_nav_content_text">
                  <h4>{header.what_drive_us_header}</h4>
                  <p>{header.what_drive_us_content}</p>
                </div>
              </div>
              <div className="about_nav_content vision_div " ref={secondRef}>
                <div className="about_nav_content_image" ref={secondWRef}>
                  <img src={header.vision_image} alt="" />
                </div>
                <div className="about_nav_content_text">
                  <p>{header.vision_content}</p>
                </div>
              </div>
              <div className="about_nav_content_simple">
                <div className="simple_text" ref={thirdRef}>
                  <h4 ref={thirdWref}>{header.simplification_header}</h4>
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
              <div className="about_nav_content carrer_div" ref={forthWRef}>
                <div className="career_left" ref={forthRef}>
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
              <div className="leadership_div" ref={fifthWRef}>
                <div className="leadership_text" ref={fifthRef}>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
