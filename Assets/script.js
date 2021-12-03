// display the current day at the top of the page
// color code time blocks for past/present/future
// create list items for each saved task with classes of list-item and col-sm-4 col-md-3
// create function that saves all tasks in task lists to local storage

var displayCurrDay = function () {
    var currMoment = moment().format('dddd MMMM Do YYYY')
    $("#currentDay").text(currMoment)
}

displayCurrDay()

var timeVerify = function () {
    var currHour = parseInt(moment().format('HH'));
    headerArr = $('.card-header h4');

    for (let i = 0; i < headerArr.length; i++) {
        let currHeader = headerArr[i];
        let hTimeInt = parseInt(currHeader.getAttribute('name'));
        
        if (hTimeInt < currHour) {
            $(currHeader).parent().addClass('bg-secondary')
        } else if (hTimeInt === currHour) {
            $(currHeader).parent().addClass('bg-danger')
        } else if (hTimeInt > currHour) {
            $(currHeader).parent().addClass('bg-success')
        }
    }
}

timeVerify();

$('.card-header button').on('click', function() {
    var currentButton = $(this)
    var currentDiv = currentButton.closest('.custom-div')
    var editedText = currentDiv.contents('textarea').val()

    var newListItem = $(`<li class=list-group-item col-4>${editedText}</li>`)
    newListItem.appendTo(currentDiv.find('ul'))
});