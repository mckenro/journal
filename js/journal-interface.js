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
