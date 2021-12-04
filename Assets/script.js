// display the current day at the top of the page
// color code time blocks for past/present/future
// create list items for each saved task with classes of list-item and col-sm-4 col-md-3
// create function that saves all tasks in task lists to local storage

let savedTasks = {};

var displayCurrDay = function () {
  var currMoment = moment().format("dddd MMMM Do YYYY");
  $("#currentDay").text(currMoment);
};

displayCurrDay();

var timeVerify = function () {
  var currHour = parseInt(moment().format("HH"));
  headerArr = $(".card-header h4");

  for (let i = 0; i < headerArr.length; i++) {
    let currHeader = headerArr[i];
    let hTimeInt = parseInt(currHeader.getAttribute("name"));

    if (hTimeInt < currHour) {
      $(currHeader).parent().addClass("bg-secondary");
    } else if (hTimeInt === currHour) {
      $(currHeader).parent().addClass("bg-danger");
    } else if (hTimeInt > currHour) {
      $(currHeader).parent().addClass("bg-success");
    }
  }
};

timeVerify();

// this block creates new list items any time the save button is clicked on any task block, and appends task items to the list to show multiple tasks per time block. Note that only the latest task inputted into the textarea will be saved to local storage.
$(".card-header button").on("click", function () {
  var currentButton = $(this);
  var currentDiv = currentButton.closest(".custom-div");
  var editedText = currentButton.closest(".card").contents("textarea").val();

  var newListItem = $(`<div class=col-4>${editedText}</div>`);
  newListItem.appendTo(currentDiv.find("ul"));

  savedTasks[currentButton.closest(".card-header").contents("h4").text()] =
    editedText;
  localStorage.setItem(
    currentButton.closest(".card-header").contents("h4").text(),
    editedText
  );
});

// this block retrieves all task items that were last in the textarea elements and puts them into the taskarea elements if they exist, otherwise the placeholder persists
$("#6AM").val(localStorage.getItem("6AM"));
$("#7AM").val(localStorage.getItem("7AM"));
$("#8AM").val(localStorage.getItem("8AM"));
$("#9AM").val(localStorage.getItem("9AM"));
$("#10AM").val(localStorage.getItem("10AM"));
$("#11AM").val(localStorage.getItem("11AM"));
$("#12AM").val(localStorage.getItem("12AM"));
$("#1PM").val(localStorage.getItem("1PM"));
$("#2PM").val(localStorage.getItem("2PM"));
$("#3PM").val(localStorage.getItem("3PM"));
$("#4PM").val(localStorage.getItem("4PM"));
$("#5PM").val(localStorage.getItem("5PM"));
$("#6PM").val(localStorage.getItem("6PM"));
