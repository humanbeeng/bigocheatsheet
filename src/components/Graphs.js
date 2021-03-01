import React from "react";
import graph from "../assets/graphs.jpg";
import legend from "../assets/legend.jpg";
import back from "../assets/back.svg";

const Graphs = () => {
  return (
    <div>
      <div className="py-3">
        <a href="/">
          <img src={back} height={50} left={10}></img>
        </a>
      </div>

      <img align="center" src={graph} />
      <br />
      <img align="center" src={legend}></img>
      <p>
        A Graph is a non-linear data structure consisting of nodes and edges.
        The nodes are sometimes also referred to as vertices and the edges are
        lines or arcs that connect any two nodes in the graph. More formally a
        Graph can be defined as,
        <br />
        A Graph consists of a finite set of vertices(or nodes) and set of Edges
        which connect a pair of nodes.
        <br />
        Graphs are used to solve many real-life problems. Graphs are used to
        represent networks. The networks may include paths in a city or
        telephone network or circuit network. Graphs are also used in social
        networks like linkedIn, Facebook. For example, in Facebook, each person
        is represented with a vertex(or node). Each node is a structure and
        contains information like person id, name, gender, locale etc.
      </p>
      <a
        href="https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/"
        color="black"
      >
        <h6>Read about Graph Data Structure</h6>
      </a>
    </div>
  );
};

export default Graphs;
