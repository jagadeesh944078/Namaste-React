import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "constrctor");
    this.state = {
      userInfo: {
        name: "dummy",
        location: "dummy",
      },
      count: 0,
      count2: 1,
    };
  }

  async componentDidMount() {
    console.log(this.props.name + "componentDidMount");
    // Api Call
    // const data = await fetch("https://api.github.com/users/Jagadeesh944078");
    // const json = await data.json();
    // console.log(json);
    // this.setState({
    //   userInfo: json,
    // });
    // this.timer = setInterval(() => {
    //   console.log("Namasthe React");
    // }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.count !== prevState.count ||
      this.state.count2 !== prevState.count2
    ) {
    }
    console.log("component DidUpdate will be Called");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("component unAmount will be called");
  }

  render() {
    console.log(this.props.name + "render method");
    const { name, location, avatar_url } = this.state.userInfo;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            /* Never update state variable directly (ex: this.state.count + 1 )*/
            /* when u update count state variable will be updated  remaining state variables react won't touch*/
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          increment
        </button>
        <img alt="profile image " src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact : Jagadeesh@27</h4>
      </div>
    );
  }
}

export default UserClass;

/**
 * Mounting Cycle
 *  - parent constructor
 *  - parent render
 *
 *    - child constructor (intialiaze state variable with dummy data)
 *    - child render
 *    - update DOM with Dummy Data
 *    - componentDidAmount
 *    - api call
 *    - setState (update local state variable)
 *
 *
 * Updating Cycle
 *
 *   - child render method called with updated data
 *   - update DOM with latest api data
 *   - componentDidUpdate
 *
 * UnMounting Cycle
 *
 *   - componentDidUnamount
 *
 *
 * */
