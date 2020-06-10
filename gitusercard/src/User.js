import React from "react";



export default class User extends React.Component {

  render(props) {

    return (
      <div>
        <div>
        <img width="150px" src={this.props.userData.avatar_url} alt='avatar picture' />
          <p>Name: {this.props.userData.login}</p>
          <p>URL: {this.props.userData.html_url}</p>
          <p>Bio: {this.props.userData.bio}</p>
          <p>Followers: {this.props.userData.followers}</p>
          <p>Following: {this.props.userData.following}</p>
        </div>
      </div>
    );
  }
}