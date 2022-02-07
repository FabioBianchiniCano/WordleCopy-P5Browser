
function printRectForLetters(currentRow, mapColors = ["black", "black","black","black","black"]) {
  rectMode(CENTER)
  for (let i = 0; i < 5; i++) {
    fill(mapColors[i] === "black" ? 'rgba(111,111,0, 0.15)' : mapColors[i])
    rect(calcColWidth(i), calcRowHeight(currentRow), SITE_VALUES.sizeText, SITE_VALUES.sizeText, 10)
    fill(0)
  }

}

function printLetters(word, currentRow) {
  textSize(SITE_VALUES.sizeText)
  textAlign(CENTER)

  for (let i = 0; i < word.word.length; i++) {
    text(word.word[i].to_s(), calcColWidth(i), (calcRowHeight(currentRow) + SITE_VALUES.sizeRect / 3))
  }
}


function printWord(word, currentRow, mapColors) {
  printRectForLetters(currentRow, mapColors)
  printLetters(word, currentRow)
}
