import React from "react";
import ReactDOM from "react-dom";
import SearchMovi from "./SearchMovies";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Collection of Movie Search</h1>
        <SearchMovi />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
