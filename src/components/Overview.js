import React from "react";
import overview from "../assets/overview.png";
import legend from "../assets/legend.jpg";
import back from "../assets/back.svg";

const Overview = () => {
  return (
    <div>
      <div className="py-3">
        <a href="/">
          <img src={back} height={50} left={10}></img>
        </a>
      </div>

      <h2>Big-O Overview</h2>
      <img align="center" src={overview} />
      <br />
      <img align="center" src={legend}></img>
      <p>
        Big-O Analysis of Algorithms We can express algorithmic complexity using
        the big-O notation. For a problem of size N:
        <br />A constant-time function/method is “order 1” : O(1)
        <br />A linear-time function/method is “order N” : O(N)
        <br />A quadratic-time function/method is “order N squared” : O(N 2 )

      </p>
      <a href="https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis/">
        <h6>Read more about Big-O Analysis</h6>
      </a>
    </div>
  );
};

export default Overview;
