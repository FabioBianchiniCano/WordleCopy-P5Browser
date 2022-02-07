"using strict";

const dictionary = new Dictionary();
let solution;
let nRow = 1;
let spaceRows = 100;
let tries = []
let currentTry = new Word;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(SITE_VALUES.background_color);
  solution = random(dictionary.dictionary)
}

function draw() {
  background(SITE_VALUES.background_color);
  tries.forEach((elem, index) => {
    printWord(elem, index+1, elem.mapColors)
  })
  printRectForLetters(nRow);
  printLetters(currentTry, nRow)
  
  // printRectForLetters(nRow+1);
}

function keyPressed() {
  switch (keyCode) {
    case ENTER:
      if (currentTry.word.length !== 5) return
      evaluatedMap = currentTry.evaluateWord()
      printWord(currentTry, nRow, evaluatedMap)
      tries.push(Object.assign({}, currentTry))
      nRow++;
      currentTry.restart()
      break;
    case BACKSPACE:
      currentTry.word = currentTry.word.slice(0, -1)
      break;
    default:
      if (!isKeyCodeAlpha(keyCode)) return;
      if (currentTry.word.length >= 5) return;
      currentTry.addLetter(new Letter(String.fromCharCode(keyCode)))
      break;
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(SITE_VALUES.background_color)
}

function calcColWidth (currentLetter) {
  return (width * (SITE_VALUES.startLetterPos + (currentLetter * SITE_VALUES.letterSpacing)))
}

function calcRowHeight(currentRow) {
    return spaceRows * currentRow
}

function isKeyCodeAlpha(code) {
  return (code >= 97 && code <= 122) || (code >= 65 && code <= 90)
}
