import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import UpdatedSoon from "./UpdatedSoon";

const About = () => {
  return (
    <div className="h-screen">
      {/* <h1>This is about page!</h1>
      <h1>Thank You to explore the site.</h1>
      <Profile name={"Madhav Chaturvedi"} xyz={"abc"} /> */}
      <UpdatedSoon/>
    </div>
  );
};

export default About;
