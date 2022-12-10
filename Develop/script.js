//Variables for each of the time blocks on the html
var saveButtonNine = $('.btn-9');
var saveButtonTen = $('.btn-10');
var saveButtonEleven = $('.btn-11');
var saveButtonTwelve = $('.btn-12');
var saveButtonOne = $('.btn-1');
var saveButtonTwo = $('.btn-2');
var saveButtonThree = $('.btn-3');
var saveButtonFour = $('.btn-4');
var saveButtonFive = $('.btn-5');
var saveButtonSix = $('.btn-6');
var row = $('.row')

//Variables for Saving information, Timer, and Arrays
var entryText = $(".description").value;
var inputArea = $("textarea");

var todayDateHeader = dayjs();
var timeEl = $("#date-time");

var description = [];

var currentHour = parseInt(dayjs().format('HH'));

var row = $(".row");
var partArr = [];
var presentArr = [];
var futureArr = [];

console.log(typeof currentHour);

//Logic for color call out
row.each(function(){
  var rowTime = parseInt($(this).attr("data-hour"));
console.log(rowTime);
  if (rowTime < currentHour) {
    $(this).addClass("row past")
  } else if (rowTime === currentHour) {
    $(this).addClass("row present")
  } else {
    $(this).addClass("row future")
  }
});

//Function to display time at the top of screen
function displayTime() {
  var currentTime = dayjs().format('MMM DD, YYYY hh:mm:ss a');
  timeEl.text(currentTime);
}

saveButtonNine.click(function(){
  localStorage.setItem('Task-9', JSON.stringify(entryText));
});

saveButtonTen.click('click', function(){
  localStorage.setItem('Task-10', entryText);
});

saveButtonEleven.click('click', function(){
  localStorage.setItem('Task-11', entryText);
});

saveButtonTwelve.click('click', function(){
  localStorage.setItem('Task-12', entryText);
});

saveButtonOne.click('click', function(){
  localStorage.setItem('Task-1', entryText);
});

saveButtonTwo.click('click', function(){
  localStorage.setItem('Task-2', entryText);
});

saveButtonThree.click('click', function(){
  localStorage.setItem('Task-3', entryText);
});

saveButtonFour.click('click', function(){
  localStorage.setItem('Task-4', entryText);
});

saveButtonFive.click('click', function(){
  localStorage.setItem('Task-5', entryText);
});

saveButtonSix.click('click', function(){
  localStorage.setItem('Task-6', entryText);
});


// function displayTasks() {
//   if (
// };

function init() {
  // Calls the Previous tasks from the local storage
  displayTasks();

  // Calling Function to display time at top of screen
  displayTime();
  setInterval(displayTime, 1000);
}