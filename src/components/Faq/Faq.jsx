import React, { useState } from "react";
import "./faq.scss";
const Faq = () => {
  const arr = [
    {
      category: " Category 1",
      sub: [
        {
          inner: "Sub Category 1",
          q2: [
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
          ],
        },
        {
          inner: "Sub Category 2",
          q2: [
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
          ],
        },
      ],
    },
    {
      category: " Category 2",
      sub: [
        {
          inner: "Sub Category 1",
          q2: [
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
          ],
        },
        {
          inner: "Sub Category 2",
          q2: [
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
          ],
        },
      ],
    },
    {
      category: " Category 3",
      sub: [
        {
          inner: "Sub Category 1",
          q2: [
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
          ],
        },
        {
          inner: "Sub Category 2",
          q2: [
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
          ],
        },
      ],
    },
  ];
  const cats = arr.map((item) => {
    return item.category;
  });

  const [catIndex, setCatIndex] = useState(null);
  const [innerCat, setInnerCat] = useState("asdf");
  const [qIndex, setQindex] = useState("asdf");
  const handleCategory = (index) => {
    setCatIndex(index);
    setInnerCat("asdf");
    setQindex("asdf");
  };
  const handleInnerCat = (index) => {
    setInnerCat(index);
    setQindex("asdf");
  };
  return (
    <div className="faq_container">
      <div className="faq_text">
        <h2>F.A.Q</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
          perspiciatis temporibus. Provident modi voluptatibus est placeat enim
          temporibus iusto inventore facilis nesciunt, aut, illo odit impedit,
          dolore accusamus dignissimos maiores?
        </p>
      </div>
      <div className="faq_map">
        <div className="faq_top">
          {cats.map((item, index) => (
            <h2
              className={`faq_top_item ${
                index == catIndex && "faq_top_item_active"
              }`}
              key={index}
              onClick={() => handleCategory(index)}
            >
              {item}
            </h2>
          ))}
        </div>
        <div className="faq_bottom">
          {arr.map((item, index) => {
            return (
              <div
                className={`faq_item ${catIndex !== index && "opacity_0"}`}
                key={index}
              >
                <div className="faq_category wraper_1">
                  <h2 className="expand_1 faq_top_inner">{item.category}</h2>
                  <div className="faq_inner">
                    {item.sub.map((sub, i) => {
                      return (
                        <div>
                          <h3
                            className="sub_category"
                            onClick={() => handleInnerCat(i)}
                          >
                            {sub.inner}
                          </h3>
                          {innerCat == i &&
                            sub.q2.map((q, qIn) => {
                              return (
                                <div className="faq_q_container">
                                  <h4 onClick={() => setQindex(qIn)}>
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
  );
};

export default Faq;
