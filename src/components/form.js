import React from "react";
import { searchMovie, fetchMovies, setloading } from "../store/actions/searchAction";
import { connect } from "react-redux";

const Form = (props) => {
  onchange = (event) => {
    props.searchMovie(event.target.value);
  };
  onsubmit = (event) => {
    event.preventDefault();
    props.fetchMovies(props.text);
    props.setloading();
  };
  return (
    <div className="jumbotron jumbotron-fluid mt-5 text-center">
      <div className="container">
        <h1 className="display-4 mb-3">
          <i className="fa fa-search" />
          Search Movies , TV Series..
        </h1>
        <form id="searchForm">
          <input
            type="text"
            className="form-control"
            name="searchText"
            placeholder="Search Movies , TV Series.."
            onChange={onchange}
          />
          <button
            type="submit"
            onSubmit={onsubmit}
            className="btn btn-primary btn-bg mt-3"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStatesToProps = (state) => ({
  text: state.movies.text,
});

export default connect(mapStatesToProps, {
  searchMovie,
  fetchMovies,
  setloading,
})(Form);
