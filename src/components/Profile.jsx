import { Avatar } from "@nextui-org/react";
import $ from 'jquery';

export default function Profile() {
  return (
    <>
      <section>
        <header className="inline-flex gap-4 items-center">
          <Avatar src="profile.jpg" className="w-36 h-36" />
          <h1 className="font-extrabold text-2xl sm:text-5xl text-left">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-700 to-pink-700">Juan Carlos</span> Alcalde
          </h1>
        </header>
        <br/>
        <br/>
        <h2 className="text-left font-medium">
          <span className="feature-text text-xl sm:text-3xl mt-4"></span><span className="input-cursor h-5 sm:h-7"></span>
        </h2>
      </section>
    </>
  );
}


const carouselText = [
  { text: "Ingeniero Informático" },
  { text: "Desarrollador Frontend" },
];

$(document).ready(async function () {
  carousel(carouselText, ".feature-text")
});

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
  var i = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++
    if (i >= carouselList.length) { i = 0; }
  }
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}