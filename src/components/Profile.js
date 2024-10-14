import React from "react";
import userContext from "../utils/userContext";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // console.log("constructor");
  }

  componentDidMount() {
    //best place to make a api call
    // this.timer = setInterval(() => {
    // console.log("OP");
    // }, 1000);
    // console.log("componentDidMOunt");
  }
  componentDidUpdate() {
    //it's always call every changes
    // console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    //for unmounted and clean up
    // console.log("componentWillUnmounted");
    clearInterval(this.timer);
  }

  render() {
    // console.log("render");
    return (
      <>
        <userContext.Consumer>
          {({user}) => <h1 className="font-bold text-2xl">{user.name} - {user.email}</h1> }
        </userContext.Consumer>

        <h1> profile components </h1>
        <h3>name : {this.props.name}</h3>
        <h3>id : {this.props.xyz}</h3>
        <h3>count : {this.state.count} </h3>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          Set Count
        </button>
      </>
    );
  }
}

export default Profile;
