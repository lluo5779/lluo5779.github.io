import React, { lazy, Suspense } from "react";
import "../css/gallery.css";
import Background from "./../img/horyuji.jpg";

import { Planet, Browser } from "react-kawaii";

class GalleryPage extends React.Component {
  render() {
    const subtitles = {
      1: "Bryce Canyon National Park. Some rain clouds looking heavenly far away.",
      2: "Hanshin Tigers vs Yokohoma DeNA at Koshien Stadium, a.k.a Japan's Field of Dreams, near Kobe.",
      3: "Sunset at Shoshone point trail, Grand Canyon.",
      4: "Baseball tower at Koshien Stadium near Kobe.",
      5: "Hell's Kitchen Burger at Gordon Ramsey Burger in Las Vagas.",
      6: "NBA championship trophy at Raptor's championship parade.",
      7: "University College at University of Toronto.",
      8: "Rail tracks at Koshien Station on the Hanshin Main Line.",
      9: "Jeeps parked at Antelope Canyon, Utah.",
      10: "Fans pleading for Kawhi Leonard to Stay.",
      11: "Famous sake Honni-daru (buckets) in Meiji Jinggu, Tokyo",
      12: "Sunset at Knox College, University of Toronto",
      13: "Senso-ji at Aaskusa, Tokyo, Japan",
      14: "Some highway in Utah, USA",
      15: "Rainbow at University of Toronto",
      16: "Tenryuji Temple Sogenchi Garden at Kyoto, Japan ",
      17: "Horseshoe bend, Arizona, USA",
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
