
const countWordOccurrences =(sentence:string, word:string):number=>{
    const Word = word.toLocaleLowerCase()
    const Sentence = sentence.toLocaleLowerCase()
    const split = Sentence.split(' ')

return  split.filter(w=>w===Word).length
}

const countWordOccurrence = countWordOccurrences('I love typescript typescript typescript','typescript',)
console.log(countWordOccurrence);
