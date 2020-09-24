function formatNo(day) { if (parseInt(day) < 10) { return "0" + day; } return day; };
function getLastWeek(setDate) {
    var today = setDate ? new Date(setDate) : new Date();
    var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    return lastWeek;
  }
function getWeekDays(setDate) {
    var d = setDate ? new Date(setDate) : new Date();
    var weekString = [];
    var week = [];
    var _days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var _months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    for (let i = 1; i <= 7; i++) {
        let first = d.getDate() - d.getDay() + i;
        let dt = new Date(d.setDate(first));
        var _day = _days[dt.getDay()];
        var _month = _months[dt.getMonth()];
        var _monthNumber = dt.getMonth() + 1;
        var _date = dt.getDate();
        _monthNumber = formatNo(_monthNumber)
        _date = formatNo(_date);
        var _year = dt.getFullYear();
        weekString.push(`${_month} ${_date} ${_year}`);
        week.push(`${_year}-${_monthNumber}-${_date}`);
    }
    return {
        "week_string": weekString,
        "week": week
    }
}
console.log(getWeekDays(getLastWeek()));
console.log(getWeekDays());
