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
    var currHour = moment().hour();
    console.log(currHour)
    headerArr = $('.card-header h4');

    for (let i = 0; i < headerArr.length; i++) {
        let currHeader = headerArr[i];
        let headerTime = currHeader.textContent;
        let hTimeInt = headerTime.substring(0, headerTime.length - 2)
        console.log(hTimeInt)
        if (headerTime === currHour) {
            $(currHeader).parent().addClass('bg-danger')
        }
    }
    // var thisHeader = $("name[header"+i+"]")
}

timeVerify();

var colorCodeTaskBlock = function () {

}