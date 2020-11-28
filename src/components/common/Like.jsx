import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";
import "./Like.css";

class Like extends Component {
  // state = {
  //   icon: emptyHeart
  // }

  renderIcon = () => {
    if (this.state.icon === emptyHeart) {
      this.setState({ icon: faHeart });
    } else {
      this.setState({ icon: emptyHeart });
    }
    console.log(this.state.icon);
  };

  render() {
    return (
      <>
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          icon={this.props.like === true ? faHeart : emptyHeart}
          onClick={this.props.onMovieLike}
        />
      </>
    );
  }

  // render() {
  //   return <FontAwesomeIcon onClick={this.renderIcon} icon={this.state.icon} style={{ cursor: 'pointer'}} />;
  // }
}

export default Like;
