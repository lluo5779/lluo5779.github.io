import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./css/common.css";

import { Planet, Browser } from "react-kawaii";

const SplashPage = import("./components/splash");
const GalleryPage = import("./components/gallery");
const ExperiencePage = import("./components/experience");
const ContactPage = import("./components/contact");
const AspirationPage = import("./components/aspiration");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appearTopButton: false
    };
    this.showTopButton = this.showTopButton.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.showTopButton);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.showTopButton);
  }

  showTopButton(e) {
    // e.preventDefault();
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > 900) {
      this.setState(state => ({
        appearTopButton: true
      }));
    } else {
      this.setState(state => ({
        appearTopButton: false
      }));
    }
  }

  getSupportedPropertyName(properties) {
    for (var i = 0; i < properties.length; i++) {
      if (typeof document.body.style[properties[i]] != "undefined") {
        return properties[i];
      }
    }
    return null;
  }

  render() {
    return (
      <div className="App">
        <Suspense
          fallback={
            <div className="suspense__icon--wrapper">
              <Planet
                size={200}
                mood="excited"
                color="#FDA7DC"
                text="Hello World!"
              />
            </div>
          }
        >
          <ul className="pages">
            <li className="page">
              <SplashPage />
            </li>
            <li className="page">
              <ExperiencePage />
            </li>
            <li className="page">
              <GalleryPage />
            </li>
            {/* <li className="page">
            <AspirationPage />
          </li> */}
            <li className="page">
              <ContactPage />
            </li>
          </ul>
          {this.state.appearTopButton ? (
            <div className="scroll_to_top--container">
              <a href="#home">
                <button className="scroll_to_top" title="Go to top">
                  &uArr;
                </button>
              </a>
            </div>
          ) : (
            ""
          )}
        </Suspense>
      </div>
    );
  }
}

export default App;
