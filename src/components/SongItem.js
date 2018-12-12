import React from "react";

const SongItem = props => {
  return (
    <div className="item" key={props.title}>
      <div className="right floated content">
        <button
          className="ui button primary"
          onClick={() => {
            this.props.selectSong(props);
          }}
        >
          Select
        </button>
      </div>
      <div className="content">{props.title}</div>
      <div className="content">{props.duration}</div>
    </div>
  );
};

export default SongItem;
