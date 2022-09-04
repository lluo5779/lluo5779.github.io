import React, { lazy, Suspense } from "react";
import "../css/gallery.css";
import Background from "./../img/horyuji.jpg";

import { Planet, Browser } from "react-kawaii";

class GalleryPage extends React.Component {
  render() {
    const subtitles = {
      1: "Sunset at Shoshone point trail, Grand Canyon.",
      2: "Hanshin Tigers vs Yokohoma DeNA at Koshien Stadium, a.k.a Japan's Field of Dreams, near Kobe.",
      3: "Early morning at the Santa Monica Pier, Los Angeles.",
      4: "Ferries wheel at the Santa Monica Pier, Los Angeles.",
      5: "Leaves on wooden planks at the Hilton Falls, Halton.",
      6: "Griffith Observatory Trail, Los Angeles.",
      7: "University College at the University of Toronto.",
      8: "Rail tracks at Koshien Station on the Hanshin Main Line.",
      9: "Jeeps parked at Antelope Canyon, Utah.",
      10: "Roots of Moretan Bay Fig, USC.",
      11: "Love locks at the Runyon Canyon Park, Los Angeles.",
      12: "A pinecone at Durham Forest, Uxbridge.",
      13: "Senso-ji at Aaskusa, Tokyo, Japan.",
      14: "Hot day at Seaton Trail, Pickering.",
      15: "Santa Monica Beach, Los Angeles.",
      16: "Wooden log with ice crystals, Rouge National Park.",
      17: "Coniferous leaves at the Seaton Trail, Pickering.",
      18: "Home-made Shanghai Shaomai."
    };
    var max = 18;
    var images = [];
    var lightboxes = [];
    for (var n = 1; n <= max; n++) {
      images.push(
        <div>
          <img src={require(`./../img/gallery/${n}.jpg`)} />
          <a href={`#lightbox-${n}`}></a>
        </div>
      );
    }

    for (var n = 1; n <= max; n++) {
      lightboxes.push(
        <div className="lightbox" id={`lightbox-${n}`}>
          <div className="content">
            <img src={require(`./../img/gallery/${n}.jpg`)} />
            <div className="title">{subtitles[n]}</div>
            <a className="close" href="#gallery"></a>
          </div>
        </div>
      );
    }

    return (
      <div id="photos" className="gallery--wrapper">
        <h1 className="heading">My Photography</h1>
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
          <div id="gallery">{images}</div>
          {lightboxes}
        </Suspense>
      </div>
    );
  }
}

export default GalleryPage;
