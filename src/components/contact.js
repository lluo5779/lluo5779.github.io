import React from "react";
import "../css/contact.css";

import {SpeechBubble} from "react-kawaii";

class ContactPage extends React.Component {
  render() {
    var heading1Style = { marginBottom: "0px" };
    return (
      <div id="contacts" className="contact--wrapper">
        <h2 className="heading" style={heading1Style}>
          Don't be a stranger,{" "}
        </h2>
        <h1 className="heading">Come Say Hi!</h1>
        <div className="contact__info--container">
          <strong>Email</strong>: louis.luo[at]]mail.utoronto.ca
        </div>
        <a href="https://www.facebook.com/louis.luo.5" class="fa fa-facebook"></a>
        <a href="https://www.linkedin.com/in/louisluouoft/" class="fa fa-linkedin"></a>
        
      </div>
    );
  }
}

export default ContactPage;
