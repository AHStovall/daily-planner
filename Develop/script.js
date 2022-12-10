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

//Variables for the entryText per timeblock
var text9 = $("#desc-9");
var text10 = $("#desc-10");
var text11 = $("#desc-11");
var text12 = $("#desc-12");
var text1 = $("#desc-1");
var text2 = $("#desc-2");
var text3 = $("#desc-3");
var text4 = $("#desc-4");
var text5 = $("#desc-5");
var text6 = $("#desc-6");


var textValue9 = $('textarea#desc-9');
var textValue10 = $('textarea#desc-10');
var textValue11 = $('textarea#desc-11');
var textValue12 = $('textarea#desc-12');
var textValue1 = $('textarea#desc-1');
var textValue2 = $('textarea#desc-2');
var textValue3 = $('textarea#desc-3');
var textValue4 = $('textarea#desc-4');
var textValue5 = $('textarea#desc-5');
var textValue6 = $('textarea#desc-6');

//This can be converted into a for loop for effency in future
console.log(textValue9[0].value);
console.log(text9.value);


//Variables for Saving information, Timer, and Arrays
var entryText = $(".description").value;
var inputArea = $("textarea");

var todayDateHeader = dayjs();
var timeEl = $("#date-time");

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
  localStorage.setItem('task9', textValue9[0].value);
});

saveButtonTen.click('click', function(){
  localStorage.setItem('Task10', textValue10[0].value);
});

saveButtonEleven.click('click', function(){
  localStorage.setItem('Task11', textValue11[0].value);
});

saveButtonTwelve.click('click', function(){
  localStorage.setItem('Task12', textValue12[0].value);
});

saveButtonOne.click('click', function(){
  localStorage.setItem('Task1', textValue1[0].value);
});

saveButtonTwo.click('click', function(){
  localStorage.setItem('Task2', textValue2[0].value);
});

saveButtonThree.click('click', function(){
  localStorage.setItem('Task3', textValue3[0].value);
});

saveButtonFour.click('click', function(){
  localStorage.setItem('Task4', textValue4[0].value);
});

saveButtonFive.click('click', function(){
  localStorage.setItem('Task5', textValue5[0].value);
});

saveButtonSix.click('click', function(){
  localStorage.setItem('Task6', textValue6[0].value);
});


//Function to pull local storage
function displayTasks() {
  textValue9[0].textContent = localStorage.getItem('task9');
  textValue10[0].textContent = localStorage.getItem('task10');
  textValue11[0].textContent = localStorage.getItem('task11');
  textValue12[0].textContent = localStorage.getItem('task12');
  textValue1[0].textContent = localStorage.getItem('task1');
  textValue2[0].textContent = localStorage.getItem('task2');
  textValue3[0].textContent = localStorage.getItem('task3');
  textValue4[0].textContent = localStorage.getItem('task4');
  textValue5[0].textContent = localStorage.getItem('task5');
  textValue6[0].textContent = localStorage.getItem('task6');
};

//First function to start upon loading the page
function init() {
  // Calls the Previous tasks from the local storage
  displayTasks();

  // Calling Function to display time at top of screen
  displayTime();
  setInterval(displayTime, 1000);
}
init();