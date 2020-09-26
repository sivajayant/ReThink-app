import React, { Component } from "react";
import _ from "lodash";

class Paginate extends Component {
  render() {
    const { pageSize, items, currentPage } = this.props;
    const pageCount = Math.ceil(items / pageSize);
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    return (
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                onClick={() => this.props.onPageChange(page)}
                className="page-link"
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Paginate;
