import React from "react";
import solar1 from "./assets/solar1.jpg";
import solar2 from "./assets/solar2.jpg";
import foundation from "./assets/foundation.png";

export default class Photo extends React.Component {
  state = {
    height: window.innerHeight,
    page: 0
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this._offsetTop = document.getElementById("container").offsetTop;
  }

  componentWillMount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  getScrollPercent() {}

  handleScroll = () => {
    const page = window.pageYOffset;
    const offsetTop = this._offsetTop;

    const scrollPercent = (page - offsetTop) / this.state.height;
    // console.log(page);

    this.setState({
      page
    });
  };

  render() {
    const { height, page } = this.state;
    const offsets = [300, 900, 1450];
    const srcs = [solar1, solar2, foundation];
    const durations = [400, 400, 500];
    const fadeFactor = 40;

    const photos = offsets.map((offset, idx) => {
      const blur = Math.max((offset + 100 - page) / 10, 0);
      const fade =
        page - offset < durations[idx]
          ? (page - offset) / fadeFactor
          : 1 - (page - offset - durations[idx]) / fadeFactor;
      return (
        <div
          className="photo_container"
          style={{
            opacity: page < offset ? 0 : fade,
            filter: `blur(${blur}px)`,
            top: height / 2 - (page - offset) / 3 - 100
          }}
        >
          <img
            src={srcs[idx]}
            className="photo"
            style={{
              filter: `contrast(200%) grayscale(80%) brightness(${
                idx == 2 ? 91 : 80
              }%)`
            }}
          />
        </div>
      );
    });

    return <div id="container">{photos}</div>;
  }
}
