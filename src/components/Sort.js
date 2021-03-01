import React from "react";
import sort from "../assets/sort.jpg";
import legend from "../assets/legend.jpg";
import back from "../assets/back.svg";

const Sort = () => {
  return (
    <div>
      <div className="py-3">
        <a href="/">
          <img src={back} height={50} left={10}></img>
        </a>
      </div>

      <img align="center" src={sort} />
      <br />
      <img align="center" src={legend}></img>
      <p>
        A Sorting Algorithm is used to rearrange a given array or list elements
        according to a comparison operator on the elements. The comparison
        operator is used to decide the new order of element in the respective
        data structure.
        <a href="https://www.geeksforgeeks.org/sorting-algorithms/">
        <h6>Read more about Sorting Algorithms</h6>
      </a>
      </p>
    </div>
  );
};

export default Sort;
