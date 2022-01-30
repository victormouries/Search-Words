

function findWords(searchString) {
  console.clear();
  console.log("Searching for words matching " + searchString);
  let words_found = [];

  word_list.forEach(function (word) {
    if (word.match(searchString)) {
      words_found.push(word);
    }
  });
  return words_found;
}
