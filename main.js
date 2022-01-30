const word_list = ["juice", "quant", "music", "adieu", "voice", "ratch"];

let letter = ".u..e"; // examples = i.e matches juice
//letter = prompt("Please enter a letter", "u");
console.clear();
console.log("your search for words with " + letter + " = ");
let words_found = 0;

word_list.forEach(function (word) {
  if (word.match(letter)) {
    console.log(word);
    words_found++;
  }
});
if (words_found == 0) {
  console.log("No Words Found");
}
