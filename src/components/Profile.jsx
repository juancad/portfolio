import $ from 'jquery';

export default function Profile() {
  return (
    <>
      <section id="perfil">
        <header className="inline-flex gap-4 items-center">
          <img src="profile.jpg" className="w-36 h-36 aspect-square rounded-full" />
          <div>
            <span className="font-extrabold text-base sm:text-lg text-left absolute" style={{ marginTop: '-28px' }}>Hola👋, soy</span>
            <h1 className="font-extrabold text-3xl sm:text-5xl text-left">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-pink-600">Juan Carlos</span> Alcalde
            </h1>
          </div>
        </header>
        <br />
        <br />
        <h2 className="text-left font-medium">
          <span className="write-text text-xl sm:text-3xl mt-4 align-middle"></span><span className="input-cursor h-6 sm:h-9 align-middle"></span>
        </h2>
        <br />
        <p>
          📍 Extremadura, España
        </p>
        <br />
        <p>
          Recién titulado en el grado en <span className="text-pink-600 font-bold">Ingeniería Informática</span> en Tecnologías de la Información, con +1 año de experiencia como <span className="text-pink-600 font-bold">técnico de sistemas</span>. Apasionado de las informática y las tecnologías, en especial del <span className="text-pink-600 font-bold">desarrollo Frontend</span>. Con capacidad y ganas de aprender.</p>
      </section>
    </>
  );
}

const carouselText = [
  { text: "Ingeniero Informático" },
  { text: "Desarrollador Frontend" },
];

$(document).ready(async function () {
  carousel(carouselText, ".write-text")
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