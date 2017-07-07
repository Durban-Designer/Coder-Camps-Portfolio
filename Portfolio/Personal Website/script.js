function counterJS() {
var text = document.getElementById("counter").value;
var spacenum = 0;
var sentences = [];
var wordArray = [];
for (var i = 0; i < text.length; i++) {
  if (text[i] == " ") {
    spacenum++;
  }
}
for (var i = 0; i < text.length; i++) {
  if(text[i] == " " || text[i] == "." || text[i] == "!" || text[i] == "?") {
    var word = text.slice(i);
    wordArray.push(word);
    i++;
  }
}

for (var i = 0; i < text.length; i++) {
  if(text[i] == "." || text[i] == "!" || text[i] == "?") {
    var sentence = text.slice(i);
    sentences.push(sentence);
  }
}

var averageWord = 0;
var averageWord = wordArray.length / sentences.length;
document.getElementById("spacenum").innerHTML = spacenum;
document.getElementById("wordnum").innerHTML = wordArray.length;
document.getElementById("sentencenum").innerHTML = sentences.length;
document.getElementById("wordsper").innerHTML = averageWord;
}
