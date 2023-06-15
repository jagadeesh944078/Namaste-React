import React from "react";
import ReactDOM from "react-dom/client";

/* React.createElement => React element - js object => HTMLElement(Render) */
// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namasthe React Course"
// );

/* Jsx (transpiles jsx before it reaches to Js) - Parcel - babel */
/* Jsx - babel transpiles it to React.createElement => React Element - Js Object => HTMLElement(Render) */

/* React Element */

const heading = (
  <h1 id="heading" tabIndex="5">
    Namasthe React Using Jsx
  </h1>
);

/* React Functional Component 2 ways*/

// const HeadingComponent = () => {
//   return <h1>Namasthe React Using Functional Component</h1>;
// };

// const HeadingComponent = () => <h1>Namasthe React Functional Component</h1>;

/* Writting Function Based Components Using Function Keyword */

// const Title = function () {
//   return (
//     <h1 id="heading" tabIndex="5">
//       Namasthe React using Jsx
//     </h1>
//   );
// };

/* Functional Component Creation */

const Title = () => (
  <h1 id="heading" tabIndex="5">
    Namasthe React Using Jsx
  </h1>
);

/* Component Composition (writing component inside component) */

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 id="heading">Namasthe React Functional Component</h1>
  </div>
);

/* multiple ways you can call Functional Component */
/* no need to worry about malicious attack Jsx will take care of that */

const data = 1000;

const HeadingComponent2 = () => (
  <div id="container">
    {data}
    {100 + 300}
    {Title()}
    <Title></Title>
    <Title />
    <h1 id="heading">Namasthe React Functional Component</h1>
  </div>
);

/* Jsx expression should have one single root */

const HeadingComponent3 = () => (
  <div>
    <div id="container"></div>
    <div id="container2"></div>
  </div>
);

/* React Fragment */

const HeadingComponent4 = () => (
  <React.Fragment>
    <div id="container"></div>
    <div id="container2"></div>
  </React.Fragment>
);

/* React Fragment using shorthand notation */

const HeadingComponent5 = () => (
  <>
    <div id="container"></div>
    <div id="container2"></div>
  </>
);

/* Creating Root using ReactDOM.createRoot */
const root = ReactDOM.createRoot(document.getElementById("root"));

/* rendering React Element */
// root.render(heading);

/* rendering React Functional Component */
root.render(<HeadingComponent2 />);
