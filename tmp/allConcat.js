var Counter = require('./../js/journal.js').journalModule;

$(document).ready(function(){
  $("#entry").submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newCount = new Counter(body);
    var bodycount = newCount.journalCounter();
    $('#allEntries').append("<h3>" + title + "</h3>" + "<p>" + body + "</p>");
    console.log(bodycount);
  });
});
