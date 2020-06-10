import React from "react";
import Followers from "./Followers.js";
import User from "./User.js";
import axios from "axios";
import "./App.css";



class App extends React.Component {

  state = {
    userData: [],
    followersData: [],
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/tbauer79999")
      .then((response) => {
        this.setState({
          userData: response.data,
        });
        console.log(response.data);
      })
      .catch((error) => console.log(error));

    axios
      .get("https://api.github.com/users/tbauer79999/followers")
      .then((response) => {
        this.setState({
          followers: response.data,
          followersData: response.data,
        });
        console.log(response.data);
      });
  }

  render() {

    return (
      <div className="App">
        <h1>GitHub User Details</h1>
        <div>
          <div className='user'> <User userData={this.state.userData} /> </div>
          <div className='data'>  {" "}
            <Followers followersData={this.state.followersData} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;