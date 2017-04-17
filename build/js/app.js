(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Counter = require('./../js/journal.js').journalModule;

$(document).ready(function(){
  $("#entry").submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newCount = new Counter(body);
    var bodycount = newCount.journalCounter();
    var teaser = newCount.getTeaser();
    $('#allEntries').append("<h3>" + title + "</h3>" + "<p>" + body + "</p>" + "<h4>" + teaser + "</h4>" + "<h4>Vowels: " + bodycount[0] + "</h4>" + "<h4>Consonants: " + bodycount[1] + "</h4>");
  });
});

},{"./../js/journal.js":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
