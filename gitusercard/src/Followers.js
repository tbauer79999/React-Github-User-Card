import React from "react";



export default class Followers extends React.Component {

  render() {

    return (
      <div className="followers">
        {this.props.followersData.map((data) => (
          <div >
          <div><img top src={data.avatar_url} width="25%" alt="Card image cap" /></div>
            <p>User: {data.login}</p>
            <p>{data.bio}</p>
          </div>
        ))}
      </div>
    );
  }
}