$(document).ready(function() {



var totalRed = 0;
var totalYellow = 0;
var totalGreen = 0;
var totalBlue = 0;

//red count
$('#red').click(function() {
  totalRed += 1;


  $('#red-count').text(totalRed);
  $('.container').append('<div class="color-cube" id="red"></div>');

});
//yellow count
$('#yellow').click(function() {
  totalYellow += 1;

  $('#yellow-count').text(totalYellow);
  $('.container').append('<div class="color-cube" id="yellow"></div>');



});
//green count
$('#green').click(function() {
  totalGreen += 1;

  $('#green-count').text(totalGreen);
  $('.container').append('<div class="color-cube" id="green"></div>');



});
//blue count
$('#blue').click(function() {
  totalBlue += 1;

  $('#blue-count').text(totalBlue);
  $('.container').append('<div class="color-cube" id="blue"></div>');



});


});//end doc ready
