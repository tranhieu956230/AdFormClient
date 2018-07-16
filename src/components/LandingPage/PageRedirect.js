import React from "react";
import "../styles/PageRedirect.css";

class PageRedirect extends React.Component {
  makeData = () => {
    let active = this.props.active;
    const page = this.props.pagin;
    let data = [];
    if (active - 1 > 3 && page - active > 3) {
      data = [
        1,
        "...",
        active - 1,
        active,
        parseInt(active, 10) + 1,
        "...",
        page
      ];
    } else if (active - 1 <= 3 && page - active > 3) {
      data = [1, 2, 3, 4, 5, "...", page];
    } else if (active - 1 > 3 && page - active <= 3) {
      data = [1, "...", page - 4, page - 3, page - 2, page - 1, page];
    } else if (active - 1 <= 3 && page - active <= 3) {
      for (let i = 1; i <= page; i++) {
        data.push(i);
      }
    }
    let pages = data.map(value => {
      if (parseInt(value, 10) === parseInt(active, 10))
        return (
          <div key={value}
            onClick={e => this.handlePageChange(e.target.innerHTML)}
            className="page-redirect__item page-redirect__item--active"
          >
            {value}
          </div>
        );
      return (
        <div key={value}
          onClick={e => this.handlePageChange(e.target.innerHTML)}
          className="page-redirect__item"
        >
          {value}
        </div>
      );
    });

    return pages;
  };

  handlePageChange = page => {
    if (page !== "...") this.props.onPageChange(page);
  };

  foo = () => {
    let obj = {};
    if (this.props.prev)
      obj.prev = (
        <div
          onClick={() => this.handlePageChange(this.props.active - 1)}
          className="page-redirect__item page-redirect__item--prev"
        />
      );
    if (this.props.next)
      obj.next = (
        <div
          onClick={() => this.handlePageChange(this.props.active + 1)}
          className="page-redirect__item page-redirect__item--next"
        />
      );
    return obj;
  };
  render() {
    const arr = this.makeData();
    const { prev, next } = this.foo();
    return (
      <div className="page-redirect">
        {prev}
        {arr}
        {next}
      </div>
    );
  }
}

export default PageRedirect;
