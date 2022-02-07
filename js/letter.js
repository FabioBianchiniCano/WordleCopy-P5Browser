class Letter {
  constructor(letter) {
    this.letter = letter.toUpperCase()
  }

  to_s() {
    return this.letter
  }

  show(x, y) {
    // if flag evaluated == true se dibuja con fill (el rectangulo)
    text(this.letter, x, y)
  }
}