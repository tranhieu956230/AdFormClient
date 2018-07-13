import React from "react";
import "../styles/PageRedirect.css";

class PageRedirect extends React.Component {
  render() {
    return (
      <div className="page-redirect">
        <div className="page-redirect__item page-redirect__item--prev" />

        <div className="page-redirect__item page-redirect__item--active">1</div>
        <div className="page-redirect__item">2</div>
        <div className="page-redirect__item">3</div>
        <div className="page-redirect__item">4</div>
        <div className="page-redirect__item">5</div>
        <div className="page-redirect__item">...</div>
        <div className="page-redirect__item">181</div>

        <div className="page-redirect__item page-redirect__item--next" />
      </div>
    );
  }
}

export default PageRedirect;
