import React, { useEffect, useState } from "react";
import "./faq.scss";
import axios from "axios";
import { BASE } from "../../App";
import Loading from "../loading/Loading";
const Faq = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [catIndex, setCatIndex] = useState(null);
  const [innerCat, setInnerCat] = useState(-1);
  const [qIndex, setQindex] = useState(-1);
  const handleCategory = (index) => {
    if (index === catIndex) {
      setCatIndex(-1);
      setInnerCat(-1);
      setQindex(-1);
    } else {
      setCatIndex(index);
      setInnerCat(-1);
      setQindex(-1);
    }
  };
  const handleInnerCat = (index) => {
    if (index === innerCat) {
      setInnerCat(-1);
      setQindex(-1);
    } else {
      setInnerCat(index);
      setQindex(-1);
    }
  };
  const handleQ = (index) => {
    if (index === qIndex) {
      setQindex(-1);
    } else {
      setQindex(index);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(BASE + "/faq");
        const data = res.data;
        const arrF = [];
        for (let i = 0; i < data.length; i++) {
          const category = arrF.find(
            (item) => item.category === data[i].sub_category.category.category
          );
          if (!category) {
            arrF.push({
              category: data[i].sub_category.category.category,
              sub: [
                {
                  inner: data[i].sub_category.sub_category,
                  q2: [{ quset: data[i].question, ans: data[i].answer }],
                },
              ],
            });
          } else {
            const sub = category.sub.find(
              (inner) => inner.inner === data[i].sub_category.sub_category
            );
            if (!sub) {
              const subObject = {
                inner: data[i].sub_category.sub_category,
                q2: [{ quset: data[i].question, ans: data[i].answer }],
              };
              category.sub.push(subObject);
            } else {
              sub.q2.push({ quset: data[i].question, ans: data[i].answer });
            }
          }
        }
        setData(arrF);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const cats = data.map((item) => {
    return item.category;
  });
  return (
    <>
      {!loading ? (
        <>
          <div className="faq_container">
            <div className="faq_text">
              <h2>F.A.Q</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia, perspiciatis temporibus. Provident modi voluptatibus
                est placeat enim temporibus iusto inventore facilis nesciunt,
                aut, illo odit impedit, dolore accusamus dignissimos maiores?
              </p>
            </div>
            <div className="faq_map">
              <div className="faq_top">
                {cats.map((item, index) => (
                  <h2
                    className={`faq_top_item ${
                      index === catIndex && "faq_top_item_active"
                    }`}
                    key={index}
                    onClick={() => handleCategory(index)}
                  >
                    {item}
                  </h2>
                ))}
              </div>
              <div className="faq_bottom">
                {data.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`faq_item ${
                        catIndex !== index && "opacity_0"
                      }`}
                    >
                      <div className="faq_category wraper_1">
                        <h2 className="expand_1 faq_top_inner">
                          {item.category}
                        </h2>
                        <div className="faq_inner">
                          {item.sub.map((sub, i) => {
                            return (
                              <div key={i}>
                                <h3
                                  className={`sub_category ${
                                    innerCat === i && "faq_aqtive_color"
                                  }`}
                                  onClick={() => handleInnerCat(i)}
                                >
                                  {sub.inner}
                                </h3>
                                {innerCat === i &&
                                  sub.q2.map((q, qIn) => {
                                    return (
                                      <div
                                        className="faq_q_container"
                                        key={qIn}
                                      >
                                        <h4
                                          className={`${
                                            qIndex == qIn && "faq_aqtive_color"
                                          }`}
                                          onClick={() => handleQ(qIn)}
                                        >
                                          {q.quset}
                                        </h4>
                                        {qIn == qIndex && <p>{q.ans}</p>}
                                      </div>
                                    );
                                  })}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="faq_mobile">
            {data.map((item, index) => {
              return (
                <div className="faq_item_mobile" key={index}>
                  <h3
                    className={`faq_top_item_mobile ${
                      index == catIndex && "faq_top_item_active_mobile"
                    }`}
                    onClick={() => handleCategory(index)}
                  >
                    {item.category}
                  </h3>
                  <div className="faq_mobile_sub">
                    {catIndex === index ? (
                      <>
                        {item.sub.map((subItem, i) => {
                          return (
                            <div key={i}>
                              <h4
                                className={`sub_category ${
                                  innerCat === i && "faq_aqtive_color"
                                }`}
                                onClick={() => handleInnerCat(i)}
                              >
                                {subItem.inner}
                              </h4>
                              {innerCat === i ? (
                                <>
                                  <div className="faq_mobile_quest">
                                    {subItem.q2.map((q, qI) => {
                                      return (
                                        <div key={qI}>
                                          <h4
                                            className={`${
                                              qIndex == qI && "faq_aqtive_color"
                                            }`}
                                            onClick={() => handleQ(qI)}
                                          >
                                            {q.quset}
                                          </h4>
                                          {qI == qIndex && <p>{q.ans}</p>}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </>
                              ) : (
                                <></>
                              )}
                            </div>
                          );
                        })}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <Loading title={"F.A.Q"} />
      )}
    </>
  );
};

export default Faq;
