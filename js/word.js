class Word {
  constructor(string) {
    this.word = []
    this.mapColors = ["black","black","black","black","black"]
    if (string === undefined) return
    if (!this.checkSize(string)) {throw Error("String " + string + " not the correct size")}
    string.split('').map(letter => {
      this.word.push(new Letter(letter))
    })
  }

  checkSize(string) {
    return string.length === 5
  }

  addLetter(letter) {
    this.word.push(letter)
  }

  popLetter() {
    this.word.pop()
  }

  restart() {
    this.word = []
    this.mapColors = ["black","black","black","black","black"]
  }

  length() {
    return this.word.length
  }

  // Only callable by solution word
  evaluateWord() {
    if (solution.to_s() === this.to_s()) {
      this.mapColors.map(() => {return "green"})
      console.log("amonooooooo")
    } 
    // map of colors for the current word
    for (let i = 0; i < solution.length(); i++) {
      let currentLetter = this.word[i].to_s()
      if (currentLetter === solution.word[i].to_s()) {
        this.mapColors[i] = "green"
      } else { 
        let index = solution.to_s().indexOf(currentLetter)
        console.log(index) 
        if (index !== -1 && this.mapColors[index] !== "green")
          this.mapColors[i] = "yellow"
      }
    }
    return [...this.mapColors]
  }

  to_s() {
    let output = ""
    this.word.forEach(letter => {
      output += letter.to_s()
    })
    return output
  }
}