import React from "react";
import "../css/experience.css";
import TIDEL_wordle from "./../img/TIDEL_wordle.png";
import thesis_visual from "./../img/thesis.png";
import ACN_visual from "./../img/acn.jpg";
import Global_visual from "./../img/global.jpg";
import Osaka_visual from "./../img/osaka.png";
import Capstone_visual from "./../img/equites.png";

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
                developing prescriptive analytics solutions for a complex industrial packing problem at the{" "}
                <a
                  href="https://tidel.mie.utoronto.ca/"
                  style={{ color: "black" }}
                >
                  <strong>
                    Toronto Intelligent Decision Engineering Laboratory (TIDEL)
                  </strong>
                </a>{" "}
                at the University of Toronto.

                <br />
                Publication:

                <ol>
                  <li>
                      <a href="https://link.springer.com/chapter/10.1007/978-3-031-08011-1_17" style={{ color: "black" }}>
                        Yiqing L. Luo and Christopher Beck, "Packing by Scheduling: Using Constraint Programming to Solve a Complex 2D Cutting Stock Problem", CPAIOR22: 249-265
                        </a>
                   </li>
                  <li>
                  <a href="https://tidel.mie.utoronto.ca/pubs/Theses/Luo_Yiqing_202208_MASc_thesis.pdf" style={{ color: "black" }}>
                    Yiqing L. Luo, "A Scheduling-based Constraint Programming Approach to Solving a Complex Two-Dimensional Two-Stage Cutting Stock Problem", MASc Thesis, 2022
                </a>
                </li>
                </ol>




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
                <br />
                For my undergraduate honors thesis, I worked with Prof. Frank
                Rudzicz from the Vector Institute to identify patient specific
                trajectories of developing dementia by applying latent
                transition analysis (R), and temporal variational recurrent
                autoencoder (Python). I was able to identify particular
                subgroups that exhibited exclusive behavioral and functional
                characteristics in the latent space, seen on the left. This
                thesis can be found{" "}
                <a href={`/documents/thesis.pdf`} style={{ color: "black" }}>
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
                <h4>Capstone Project</h4>
                <img
                  className="experience__list--img"
                  style={{ border: "1px solid black" }}
                  src={Capstone_visual}
                />
              </div>

              <div className="experience__list--column col-twothirds">
                <i>September 2019 - December 2019</i> <br />
                <br />I worked in a team of 5 to build our very own financial
                robo-advisor. I was responsible for the entire backend
                subsystem, including PostgreSQL schemas, object-relational
                mapping, data update routines, and interfacing with the
                front-end via API. In particular, I employed the 3NF
                normalization to the database to ensure optimal database design;
                and a swagger API contract to ensure maintainability. I was also
                responsible for the login flow and session, as well as hosting
                on AWS. Specifically, I coordinated the EC2 instance in an EBS
                with a RDS database, which is updated daily via a Lambda
                function. The detailed report can be found{" "}
                <a href="/documents/capstone.pdf" style={{ color: "black" }}>
                  <strong>here</strong>
                </a>{" "}
                and my main contributions can be seen in section 7 of the
                report. While the application is no longer live, the code for
                the application can be found{" "}
                <a
                  href="https://github.com/lluo5779/equites"
                  style={{ color: "black" }}
                >
                  <strong>here</strong>
                </a>
                .
              </div>
            </div>

            <div className="experience__list--row row">
              <div className="experience__list--column col-onethirds">
                <h4>Osaka University, Japan</h4>
                <img className="experience__list--img" src={Osaka_visual} />
              </div>

              <div className="experience__list--column col-twothirds">
                <i>May 2018 - August 2018</i> <br />
                <br />I was honored to be an{" "}
                <a
                  href="https://engsci.utoronto.ca/experience/research/esrop-uoft/"
                  style={{ color: "black" }}
                >
                  <strong>ESROP fellow</strong>
                </a>{" "}
                appointed by the University of Toronto to work on document-level
                representations of movie reviews from IMDB in the Research Group
                of Statistical Inference in Osaka University. In particular, I
                modified an existing state-of-the-art model for sentiment
                analysis to develop latent representations of each reviews. In
                addition to the hands-on experience implementing neural
                networks, I was fortunate to overcome language barriers, immerge
                into a foreign culture and befriend like-minded individuals.
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
