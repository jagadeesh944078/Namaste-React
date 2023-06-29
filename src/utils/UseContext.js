import { createContext } from "react";

const UseContext = createContext({
  user: {
    name: "jagadeesh Vemula",
    email: "vemulajagadeesh26@gmail.com",
  },
  setUser: () => {},
});

export default UseContext;
