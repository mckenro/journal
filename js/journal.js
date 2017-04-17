function Counter(body) {
  this.body = body;
}

Counter.prototype.journalCounter = function() {
var vowelOutput = [];
var consonantOutput = [];
var vowels = ['a', 'e', 'i', 'o', 'u'];
var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

var input = this.body;
var splitted = input.split('');

splitted.forEach(function(i){
  if (vowels.includes(i) === true) {
    vowelOutput.push(i);
  } else if (consonants.includes(i) === true) {
    consonantOutput.push(i);
  }
});

var allVowels = vowelOutput.length;
var allConsonants = consonantOutput.length;
var resultsArray = [allVowels, allConsonants];

return(resultsArray);
};

Counter.prototype.getTeaser = function() {
  var wordsOutput = [];
  var input = this.body;
  var splitWords = input.split(' ');


    for (i=0; i<8; i++){
      wordsOutput.push(splitWords[i]);
    }

  return wordsOutput.join(' ');
};


exports.journalModule = Counter;
