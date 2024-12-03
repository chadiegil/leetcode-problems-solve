const wordWithPrefix = "hellohello hellohellohello"
const searchWord = "ell"

function isPrefixOfWord(sentence: string, searchWord: string): number {
  const words = sentence.split(" ")
  const index = words.findIndex((word) => word.startsWith(searchWord))

  return index === -1 ? -1 : index + 1
}

const result = isPrefixOfWord(wordWithPrefix, searchWord)
console.log("result", result)
