import "../styles/LandDashBoard.css";
import React from "react";
import PageRedirect from "./PageRedirect";

class LandDashBoard extends React.Component {
  formatLink = obj => {
    let link = obj.link_embed;
    let arr = [];
    for (let i = 0; i < link.length; i++) {
      if (link[i] === '"') arr.push(i);
    }

    let src = link.slice(arr[0] + 1, arr[1]);
    let width = link.slice(arr[2] + 1, arr[3]);
    let height = link.slice(arr[4] + 1, arr[5]);

    return { src, width, height };
  };
  render() {
    let arr = this.props.data.map(obj => {
      let { src, width, height } = this.formatLink(obj);
      console.log(src);
      if (src)
        return (
          <div className="card" key={obj.id}>
            <iframe src={src} width={width} height={height} title={obj.title} />
            <h3 className="card__title">
              {" "}
              <a href="https://www.advertiseform.us">{obj.title}</a>
            </h3>
            <div className="card__date">{obj.post_date}</div>
          </div>
        );

      return (
        <div className="card" key={obj.id}>
          <div className="card__thumb">
            <a href="https://www.advertiseform.us" className="card__link">
              <img src={obj.thumb} className="card__image" />
            </a>
          </div>
          <h3 className="card__title">
            {" "}
            <a href="https://www.advertiseform.us">{obj.title}</a>
          </h3>
          <div className="card__date">{obj.post_date}</div>
        </div>
      );
    });
    return (
      <div className="land-dash">
        <div className="land-dash__container">{arr}</div>
        <PageRedirect
          pagin={this.props.pagin}
          active={this.props.active}
          onPageChange={this.props.onPageChange}
          prev={this.props.prev}
          next={this.props.next}
        />
      </div>
    );
  }
}

export default LandDashBoard;
