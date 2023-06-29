import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UseContext from "../utils/UseContext";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("parent render");
    /* u can pass props 2 ways name="jagadeesh" or name={"jagadeesh"} */
    return (
      <div>
        <UseContext.Consumer>
          {({ user }) => <h3>{user.name}</h3>}
        </UseContext.Consumer>
        <h1>About Us</h1>
        <h2>This is About React Series</h2>
        <UserClass name={"First (Class)"} location={"Mumbai"} />
        <User name={"Second (function)"} location={"Mumbai"} />
      </div>
    );
  }
}
/* 
 Parent Constructor
 Parent render method

  - First constructor
  - First render

  - Second constructor
  - Second render

   <DOM Updated In Single Batch>

  - First ComponentDidMount
  - Second ComponentDidMount
*/

export default About;
