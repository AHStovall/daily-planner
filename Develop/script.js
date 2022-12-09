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

var entryText = $("#description").value;
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

function displayTime() {
  var currentTime = dayjs().format('MMM DD, YYYY hh:mm:ss a');
  timeEl.text(currentTime);
}


displayTime();
setInterval(displayTime, 1000);


function saveTasks() {
  
};

function displayTasks() {};

