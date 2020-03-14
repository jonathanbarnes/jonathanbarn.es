import "babel-polyfill";
import "../styles/main.scss";

const spans = document.querySelectorAll("span");
const updates = document.querySelectorAll(".u");
const ins = document.querySelectorAll(".i");
const progresses = document.querySelectorAll(".p");

function getRandomIndex(length) {
  return Math.floor(Math.random() * (length - 1));
}

function getRandomElement(collection) {
  return collection[getRandomIndex(collection.length)];
}

function start() {
  setInterval(() => {
    for (const span of spans) {
      span.classList.remove("on");
    }

    const randoms = [
      getRandomElement(updates),
      getRandomElement(ins),
      getRandomElement(progresses)
    ];

    for (const r of randoms) {
      r.classList.add("on");
    }
  }, 1000);
}

start();
