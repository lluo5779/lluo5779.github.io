import React from "react";
import "../css/experience.css";
import TIDEL_wordle from "./../img/TIDEL_wordle.png";
import thesis_visual from "./../img/thesis.png";
import ACN_visual from "./../img/acn.jpg";
import Global_visual from "./../img/global.jpg";

class ExperiencePage extends React.Component {
  render() {
    return (
      <div id="experiences" className="page experience__cover">
        <div className="experience__cover--container">
          <h1 className="heading">My Experiences</h1>

          <div className="experience__list--container">
            <div className="experience__list--row row">
              <div className="experience__list--column col-onethirds">
                <h3>MASc, U of T</h3>
                <img className="experience__list--img" src={TIDEL_wordle} />
              </div>

              <div className="experience__list--column col-twothirds">
                <i>Starting September 2020</i> <br />
                <br />I am currently working with Prof. Christopher Beck on
                developing solvers for the cutting-stock problem at the{" "}
                <a
                  href="https://tidel.mie.utoronto.ca/"
                  style={{ color: "black" }}
                >
                  <strong>
                    Toronto Intelligent Decision Engineering Laboratory (TIDEL)
                  </strong>
                </a>{" "}
                at the University of Toronto.
              </div>
            </div>

            <div className="experience__list--row row">
              <div className="experience__list--column col-onethirds">
                <h4> Vector Institute</h4>
                <img className="experience__list--img" src={thesis_visual} />
              </div>

              <div className="experience__list--column col-twothirds">
                <i>September 2019 - April 2020</i> <br />
                <br />
                For my undergraduate honors thesis, I worked with Prof. Frank Rudzicz
                from the Vector Institute to identify patient specific
                trajectories of developing dementia by applying latent
                transition analysis (R), and temporal variational recurrent
                autoencoder (Python). I was able to identify particular
                subgroups that exhibited exclusive behavioral and functional
                characteristics in the latent space, seen on the left. This
                thesis can be found{" "}
                <a
                  href={`/documents/final-report.pdf`}
                  style={{ color: "black" }}
                >
                  <strong>here</strong>
                </a>
                .
              </div>
            </div>

            <div className="experience__list--row row">
              <div className="experience__list--column col-onethirds">
                <h4>Accenture Technology</h4>
                <img className="experience__list--img" src={ACN_visual} />
              </div>

              <div className="experience__list--column col-twothirds">
                <i>September 2018 - September 2019</i> <br />
                <br />I was a full-stack intern at Accenture's{" "}
                <a
                  href="https://www.accenture.com/ca-en/company-news-release-liquid-studio-toronto"
                  style={{ color: "black" }}
                >
                  <strong>Liquid Studio</strong>
                </a>
                , working on a high-value project for a major government client.
                Specifically, I developed full-stack widgets based on TDD
                principles using ReactJS and NodeJS via Git version control. One
                of my crowning achievement was the implementation of the OAuth
                2.0 security flow, where I lead both the design and coding of
                parts of for the login flow, which was very difficult, given the
                existing architecture and cloud integration. 
              </div>
            </div>

            <div className="experience__list--row row">
              <div className="experience__list--column col-onethirds">
                <h4>Humanitarian Worker</h4>
                <img className="experience__list--img" src={Global_visual} />
              </div>

              <div className="experience__list--column col-twothirds">
                <i>September 2014 - April 2015</i> <br />
                <br />I worked in the Philipines after Typhoon Haiyan in 2013 to
                reconstruct houses for those in shantytowns. Those individuals
                typically are stuck in the poverty cycle, and after their homes
                were devastated, had no means to recovery before the monsoon
                season. I fortunate to befriend a few locals and learn about how
                they make their living first hand. I also visited Canadian
                schools as an ambassador of the program to elevate humanitarian
                awareness for the developing countries.{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ExperiencePage;
