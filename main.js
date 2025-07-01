// Deklaration des großen Quadrats und eines Arrays mit allen Indexen/"Id-Nummern", die später gefüllt werden sollen
let bigSquare = document.getElementById("big__square");
let filledIndexes = [
  53, 54, 57, 58, 62, 63, 68, 70, 72, 74, 80, 83, 84, 87, 94, 96, 100, 105, 106,
  109, 114, 115,
];

// Für jeden Index soll ein kleines Quadrat mit der Klasse "small__square" und einer id erstellt und innerhalb des großen Quadrats abgelgt werden
for (let i = 0; i < 13 * 13; i++) {
  let smallSquare = document.createElement("div");
  smallSquare.classList.add("small__square");
  smallSquare.setAttribute("id", `square${i}`);
  bigSquare.appendChild(smallSquare);
}

// Intialisierung: aktueller Index und zufällig gemischte Liste der zu füllenden Felder
let currentIndex = 0;
let shuffledIndexes = [...filledIndexes].sort(() => Math.random() - 0.5);
let timeoutId;

// Zeigt das nächste Quadrat an (class= "filled")
function showNextSquare() {
  // Wenn alle Quadrate angezeigt wurden:
  if (currentIndex >= shuffledIndexes.length) {
    // Nach 3 Sekunden alle filled Squares wieder leeren:
    setTimeout(() => {
      filledIndexes.forEach((index) => {
        let square = document.getElementById("square" + index);
        square.classList.remove("filled");
      });

      currentIndex = 0;
      shuffledIndexes = [...filledIndexes].sort(() => Math.random() - 0.5);

      // Nächsten Durchlauf starten
      scheduleNextSquare();
    }, 3000);
    return;
  }

  // Nächstes Quadrat füllen
  let square = document.getElementById(
    "square" + shuffledIndexes[currentIndex]
  );
  square.classList.add("filled");

  currentIndex++;

  //Verzögerung
  scheduleNextSquare();
}

//Zufälliges Zeit zum Ercheinen des nächsten Quadrats
function scheduleNextSquare() {
  const randomDelay = Math.random() * 150 + 100;
  timeoutId = setTimeout(showNextSquare, randomDelay);
}

//Start
scheduleNextSquare();
