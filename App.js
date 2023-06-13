import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "hello react1"),
    React.createElement("h1", { id: "heading2" }, "hello react2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "hello react"),
    React.createElement("h1", { id: "heading2" }, "hello react2"),
  ]),
]);

const heading = React.createElement("h1", { id: "heading" }, "hello world");
// it will print the object not html element
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
