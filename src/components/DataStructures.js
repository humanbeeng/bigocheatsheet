import React from "react";
import ds from "../assets/ds.jpg";
import legend from "../assets/legend.jpg";
import back from "../assets/back.svg";

const DataStructures = () => {
  return (
    <div>
      <div className="py-3">
        <a href="/">
          <img src={back} height={50} left={10}></img>
        </a>
      </div>

      <img align="center" src={ds} />
      <br />
      <img align="center" src={legend}></img>
      <br />

      <a
        href="https://www.geeksforgeeks.org/array-data-structure/"
        color="black"
      >
        <h6>Read about Static Array</h6>
      </a>
      <a
        href="https://www.geeksforgeeks.org/how-do-dynamic-arrays-work/"
        color="black"
      >
        <h6>Read about Dynamic Array</h6>
      </a>
      <a href="https://www.geeksforgeeks.org/singly-linked-list/" color="black">
        <h6>Read about Singly Linked List</h6>
      </a>
      <a href="https://www.geeksforgeeks.org/doubly-linked-list/" color="black">
        <h6>Read about Doubly Linked List</h6>
      </a>
      <a href="https://www.geeksforgeeks.org/skip-list/" color="black">
        <h6>Read about Skip List</h6>
      </a>
      <a
        href="https://www.geeksforgeeks.org/hashing-data-structure/"
        color="black"
      >
        <h6>Read about Hash Table</h6>
      </a>
      <a
        href="https://www.geeksforgeeks.org/binary-search-tree-data-structure/"
        color="black"
      >
        <h6>Read about Binary Search Tree</h6>
      </a>
      <a href="https://www.geeksforgeeks.org/cartesian-tree/" color="black">
        <h6>Read about Cartesian Tree</h6>
      </a>
      <a
        href="https://www.geeksforgeeks.org/introduction-of-b-tree-2/"
        color="black"
      >
        <h6>Read about B Tree</h6>
      </a>
      <a
        href="https://www.geeksforgeeks.org/red-black-tree-set-1-introduction-2/"
        color="black"
      >
        <h6>Read about Red Black Tree</h6>
      </a>
      <a
        href="https://www.geeksforgeeks.org/splay-tree-set-1-insert/"
        color="black"
      >
        <h6>Read about Splay Tree</h6>
      </a>
      <a href="https://www.geeksforgeeks.org/avl-tree-set-1-insertion/" color="black">
        <h6>Read about AVL Tree</h6>
      </a>
    </div>
  );
};

export default DataStructures;
