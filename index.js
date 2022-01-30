const word_list = ["adieu", "juice", "quant", "music", "voice", "ratch"];

//letter = prompt("Please enter a letter", "u");

function findWords(searchString) {
  console.clear();
  console.log("your search for words with " + searchString + " = ");
  let words_found = [];

  word_list.forEach(function (word) {
    if (word.match(searchString)) {
      words_found.push(word);
    }
  });
  return words_found;
}

let searchString = "...ce";
let words_found = findWords(searchString);
let result_div = document.getElementById("result");

if (words_found.length > 0) {
  words_found.forEach(function (word) {
    let wordDiv = document.createElement("div");
    wordDiv.className = "word";
    wordDiv.textContent = word;

    // add the div to the result div
    result_div.appendChild(wordDiv);

  });
} else {
}

//testing
