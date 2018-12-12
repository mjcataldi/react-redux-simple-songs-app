import React, { Component } from "react";
import { connect } from "react-redux";

import SongItem from "./SongItem";

class SongList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      songs: props.songs,
      renderedList: []
    };
  }

  renderList = () => {
    return this.props.songs.map(song => {
      return <SongItem title={song.title} duration={song.duration} />;
    });
  };

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// These two will be a lot.
const mapStateToProps = state => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
