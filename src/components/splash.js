import React from "react";
import "../css/splash.css";
import Background from "./../img/horyuji.jpg";

class SplashPage extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    var splash_text_style = { fontSize: "0.8em" };
    return (
      <div id="home" className="splash__profile-image--container h-100 d-flex align-items-center justify-content-center">
        <div className="splash__profile-image--overlay"></div>
        <img className="splash__profile-image--image" src={Background} />
        <div className="splash__text--container align-items-center justify-content-center" ref={this.myRef}>
          <h1 className="splash__text">
            <span style={splash_text_style}>
              Hey, <br /> I am
            </span>{" "}
            Louis Luo!
          </h1>
          <div className="splash__nav--container">
            <ul className="splash__nav--ul">
              <li className="splash__nav--item">
                <a href="#experiences">Experience</a>
              </li>
              <li className="splash__nav--item">
                <a href="#photos">Photography</a>
              </li>
              <li className="splash__nav--item">
                <a href="#contacts">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SplashPage;
