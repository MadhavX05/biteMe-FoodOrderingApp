import { createContext } from "react";

const  userContext = createContext({
  user:{
    name:"Madhav Chaturvedi",
    email:"madhavchaturvedi@gmail.com",
  
  },  
});

userContext.displayName ="UserContext";

export default userContext;