const word_list = ["adieu", "juice", "quant", "music", "voice", "ratch"];

//letter = prompt("Please enter a letter", "u");

function findWords (searchString) {
  alert("in the javascript we searched for " + searchString)
  console.clear();
  console.log("your search for words with " + searchString + " = ");
  let words_found = 0;
  
  word_list.forEach(function (word) {
    if (word.match(searchString)) {
      console.log(word);
      words_found++;
    }
  });
  if (words_found == 0) {
    console.log("No Words Found");
  }

}
