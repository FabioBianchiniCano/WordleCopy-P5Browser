
const fs = require('fs');

try {
  // fs.unlinkSync('data/data_base_processed.txt')
  const data = fs.readFileSync('data/data_base2.txt', 'utf8')
  fs.writeFileSync('data/data_base_processed.json', processAllData(data), 'utf8')
} catch (err) {
  console.error(err)
}


function processAllData(allFile) {
  allFile = allFile.replace(/\r| /gm, "")
  let allWords = allFile.split('\n')
  allWords = allWords.filter(hasLengthEqual5)
  allWords = allWords.map(word => {return word.toLowerCase()})
  allWords = allWords.map(word => {
    return word.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  })
  return JSON.stringify({...allWords}) 
}


function hasLengthEqual5(word) {
  return word.length === 5
}