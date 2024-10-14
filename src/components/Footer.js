import { useContext } from "react";
import userContext from "../utils/userContext";

const Footer = () => {

  const {user} = useContext(userContext);

  return (
    <div className="footer h-28 bg-black mt-[15rem] text-center p-5 relative bottom-0 left-0 w-full">
      <h1 className="text-white font-mono text-lg ">This Website devloped by </h1>
      <h1 className="text-white font-mono text-xl font-medium">{user.name} - {user.email} </h1>;
    </div>
  );
};

export default Footer;
