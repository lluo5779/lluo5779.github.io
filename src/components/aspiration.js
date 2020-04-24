import React from "react";
import "../css/aspiration.css";

class AspirationPage extends React.Component {
  render() {
    var splash_text_style = {fontSize: '0.8em'}
    return (
        <div id = "aspiration" className="mission__statement--wrapper">
        <h1 className="heading">My Aspiration</h1>
        <div id = "mission__statement--container">
        </div>
    </div>
    );
  }
}

export default AspirationPage;
