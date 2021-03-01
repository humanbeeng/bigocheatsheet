import React from "react";
import search from "../assets/search.jpg";
import legend from "../assets/legend.jpg";
import back from "../assets/back.svg";

const Search = () => {
  return (
    <div>
      <div className="py-3">
        <a href="/">
          <img src={back} height={50} left={10}></img>
        </a>
      </div>
      <img src={search}></img>
      <br />
      <img align="center" src={legend}></img>

      <p>
        Searching Algorithms are designed to check for an element or retrieve an
        element from any data structure where it is stored. Based on the type of
        search operation, these algorithms are generally classified into two
        categories: <br />
        <h5>Sequential Search</h5>In this, the list or array is traversed
        sequentially and every element is checked. For example: Linear Search.
        <br />
        <h5>Interval Search</h5> These algorithms are specifically designed for
        searching in sorted data-structures. These type of searching algorithms
        are much more efficient than Linear Search as they repeatedly target the
        center of the search structure and divide the search space in half.
      </p>

      <a
        href="https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/"
        color="black"
      >
        <h6>Read about DFS Search</h6>
      </a>
      <a
        href="https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/"
        color="black"
      >
        <h6>Read about BFS Search</h6>
      </a>
      <a href="https://www.geeksforgeeks.org/binary-search/" color="black">
        <h6>Read about Binary Search</h6>
      </a>
      <a href="https://www.geeksforgeeks.org/linear-search/" color="black">
        <h6>Read about Linear Search</h6>
      </a>
      <a
        href="https://www.geeksforgeeks.org/dijkstras-algorithm-for-adjacency-list-representation-greedy-algo-8/"
        color="black"
      >
        <h6>Read about Dijkstra's using Min Heap</h6>
      </a>
      <a
        href="https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-using-priority_queue-stl/"
        color="black"
      >
        <h6>Read about Dijkstra's using Unsorted Array</h6>
      </a>
    </div>
  );
};

export default Search;
