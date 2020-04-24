import React from "react";
import "../css/splash.css";
import Background from "./../img/IMG_5588_framed-small.png"

class SplashPage extends React.Component {

  render() {
    return (
      <div className="page"  >
        <div className = "splash__profile-image--container splash__profile-image--shadow">
          <img className = "splash__profile-image--image splash__profile-image--border splash__profile-image--rotate"
            src={Background}/>
        </div>
        <div className="splash__text--container">
          <h1 className="splash__text">
            Hi there, <br/> I am Louis!
          </h1>
        </div>
      </div>
    );
  }
}

export default SplashPage;
