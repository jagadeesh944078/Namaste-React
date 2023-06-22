import { useEffect } from "react";

const User = ({ name, location }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Namasthe React Op");
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log("useEffect removed");
    };
  }, []);

  /* it will called each time when component is rendered */
  //   useEffect(() => {
  //     console.log('useEffect will be called')
  //   })

  /*when count variable changes each time useeffect will be called */
  //   useEffect(() => {
  //     console.log("useEffect count called");
  //   }, [count]);

  //   useEffect(() => {
  //     console.log("useEffect count2 called");
  //   }, [count2]);

  return (
    <div className="user-card">
      <h1>Name: {name}</h1>
      <h3>Location: {location}</h3>
      <h5>Contact: Jagadeesh@25</h5>
    </div>
  );
};

export default User;
