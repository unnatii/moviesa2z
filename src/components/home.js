import React from "react";
import Form from "./form";
import Moviecontainer from "./moviecontainer";
//import Spinner from 'react-bootstrap/Spinner'
import { connect } from "react-redux";

const Home = (props) => {
  return (
    <div className="container">
      <Form />

      {props.loading ? (
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <Moviecontainer />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});

export default connect(mapStateToProps)(Home);
