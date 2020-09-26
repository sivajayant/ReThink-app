import React, { Component } from "react";
import { getMovies } from "../movieService";
import Paginate from "./pagination";
import { paginate } from "./paginate";
import SearchBox from "./searchBox";

class Table extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1,
    searchQuery: "",
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };
  render() {
    const { movies, pageSize, currentPage, searchQuery } = this.state;
    let searchResult = movies;
    if (searchQuery)
      searchResult = movies.filter((m) =>
        m.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    const paginatedMovies = paginate(searchResult, pageSize, currentPage);

    return (
      <div className="row">
        <div className="col-2"></div>
        <div className="col">
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Movie Name</th>
              </tr>
            </thead>
            <tbody>
              {paginatedMovies.map((movie) => (
                <tr key={movie.id}>
                  <td>{movie.id}</td>
                  <td>{movie.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Paginate
            items={searchResult.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
        <div className="col-2" />
      </div>
    );
  }
}

export default Table;
