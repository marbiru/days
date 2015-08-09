// from http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
// need to learn how to do this myself

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var mil_day = 86400000;

var birthday_b36 = parseInt(getParameterByName( "b" ));

var birthday = parseInt(birthday_b36, 36);

var today_date = Date();

var today_days = Date.parse(today_date);

var days_old = Math.floor((today_days - birthday)/mil_day);

days_old_output.innerHTML = days_old;

  if (days_old < 10000) {
    var big_milestone = 10000;
  } else if (days_old < 20000) {
    var big_milestone = 20000;
  } else if (days_old < 30000) {
    var big_milestone = 30000;
  } else if (days_old < 40000) {
    var big_milestone = 40000;
  } else {
    var big_milestone = 100000;
  };

  big_milestone_output.innerHTML = big_milestone;

	big_milestone_date = new Date(birthday + mil_day*big_milestone);

// should this next line be jQuery?
	big_milestone_date_output.innerHTML = big_milestone_date.toUTCString().substring(0, 16);

  var small_milestone_array = [
  7000,
  7777,
  8000,
  8888,
  9000,
  11111,
  12000,
  12345,
  15000,
  19000,
  22222,
  25000,
  29000,
  35000,
  45000,
  ]

  //all this should be done in a for i in small_milestone_array loop, I just don't know how yet :)

  if (days_old < small_milestone_array[0]) {
    var small_milestone = small_milestone_array[0];
  } else if (days_old < small_milestone_array[1]) {
    var small_milestone = small_milestone_array[1];
  } else if (days_old < small_milestone_array[2]) {
    var small_milestone = small_milestone_array[2];
  } else if (days_old < small_milestone_array[3]) {
    var small_milestone = small_milestone_array[3];
  } else if (days_old < small_milestone_array[4]) {
    var small_milestone = small_milestone_array[4];
  } else if (days_old < small_milestone_array[5]) {
    var small_milestone = small_milestone_array[5];
  } else if (days_old < small_milestone_array[6]) {
    var small_milestone = small_milestone_array[6];
  } else if (days_old < small_milestone_array[7]) {
    var small_milestone = small_milestone_array[7];
  } else if (days_old < small_milestone_array[8]) {
    var small_milestone = small_milestone_array[8];
  } else if (days_old < small_milestone_array[9]) {
    var small_milestone = small_milestone_array[9];
  } else if (days_old < small_milestone_array[10]) {
    var small_milestone = small_milestone_array[10];
  } else if (days_old < small_milestone_array[11]) {
    var small_milestone = small_milestone_array[11];
  } else if (days_old < small_milestone_array[12]) {
    var small_milestone = small_milestone_array[12];
  } else if (days_old < small_milestone_array[13]) {
    var small_milestone = small_milestone_array[13];
  } else if (days_old < small_milestone_array[14]) {
    var small_milestone = small_milestone_array[14];
  } else {
    var small_milestone = 50000;
  };

  small_milestone_output.innerHTML = small_milestone;

  small_milestone_date = new Date(birthday + mil_day*small_milestone);

  small_milestone_date_output.innerHTML = small_milestone_date.toUTCString().substring(0, 16);