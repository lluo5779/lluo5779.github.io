import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {
  Planet,
  Browser,
  Backpack,
  File,
  Ghost,
  IceCream,
  Mug,
  SpeechBubble,
  Chocolate,
} from "react-kawaii";

const App = lazy(() => {
  return Promise.all([
    import("./App"),
    new Promise((resolve) => setTimeout(resolve, 2000)),
  ]).then(([App]) => App);
});

const randObjects = [
  Planet,
  Browser,
  //Backpack,
  //File,
  Ghost,
  IceCream,
  Chocolate,
  // Mug,
  SpeechBubble,
];

const randMoods = [
  "shocked",
  "happy",
  "blissful",
  "lovestruck",
  "excited",
];

const getRandItem = (randItems) =>
  randItems[Math.floor(Math.random() * randItems.length)];

const RandomObject = getRandItem(randObjects);
const randomMood = getRandItem(randMoods);

const randomColor = "#" + Math.floor(Math.random() * 16777200).toString(16);

ReactDOM.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className="suspense__icon--wrapper">
          <div className="suspense__icon">
            <RandomObject
              size={300}
              mood={randomMood}
              color={randomColor}
              text="Hello World!"
            />
          </div>
          <h2 style={{ position: 'relative', marginTop: '23%' }}>Loading ...</h2>
        </div>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
