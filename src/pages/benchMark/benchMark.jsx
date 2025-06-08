import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE } from "../../App";

const BenchMark = () => {
  const [loading, setLoading] = useState(true);
  const [career, setCareer] = useState();
  const [header, setHeader] = useState();
  const [simplification, setSimplification] = useState([]);
  const [leadership, setLeadership] = useState();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await axios(BASE + `/bench_mark`);
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
  return (
    <div>
      <h1>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        libero qui cumque maxime dolor blanditiis eligendi nobis sed minima
        debitis vitae saepe omnis incidunt accusantium, ipsa consequatur, amet
        perferendis voluptatem?
      </h1>
    </div>
  );
};

export default BenchMark;
