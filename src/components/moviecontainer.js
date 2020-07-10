import React from "react";
import Moviecard from "./moviecard";
import { connect } from "react-redux";
const movieContainer = (props) => {
  const { movies } = props;
  let content = "";
 // console.log("&", movies.Response && movies.Search);
  content =
    movies.Response && movies.Search
      ? movies.Search.map((movie, index) => (
          <Moviecard key={index} movie={movie} />
        ))
      : null;
  return <div className="row">{content}</div>;
};

const mapStatesToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStatesToProps)(movieContainer);
