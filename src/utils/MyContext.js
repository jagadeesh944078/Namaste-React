import { createContext, createContext } from "react";

const MyContext = createContext({
  myContext: {
    text: "iam learning React",
  },
  setMyText: () => {},
});

export default MyContext;
