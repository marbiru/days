// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// actual app js

var mil_day = 86400000;

$$( "#submit" ).click(function () {

  var birthday_string = $$( "#days_old_datepicker" ).val();

  var birthday = Date.parse( birthday_string );

    var today_date = Date();
  
    var today_days = Date.parse(today_date);

    var days_old = Math.floor((today_days - birthday)/mil_day);

    days_old_output.innerHTML = days_old;

  $$('#amazing').text("Amazing!");

for (var counter = 10000; ; counter += 10000) {
  if (days_old < counter) {
    big_milestone = counter;
    break;
    };
};

big_milestone_output.innerHTML = big_milestone;

big_milestone_date = new Date(birthday + mil_day*big_milestone);

big_milestone_date_output.innerHTML = big_milestone_date.toUTCString().substring(0, 16).toUpperCase();

  var small_milestone_array = [
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  1000,
  2000,
  3000,
  4000,
  5000,
  6000,
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

var small_milestone_array_length = len(small_milestone_array);

  for (var counter = 0; counter <= small_milestone_array_length; counter++) {
    if (days_old < small_milestone_array[counter]) {
      small_milestone = small_milestone_array[counter];
      break;
    };
  };


small_milestone_output.innerHTML = small_milestone;

small_milestone_date = new Date(birthday + mil_day*small_milestone);

small_milestone_date_trunacted = small_milestone_date.toUTCString().substring(0, 16).toUpperCase();

small_milestone_date_output.innerHTML = small_milestone_date_trunacted;

$$( "#show-first").hide()

$$( "#show_later").show()
 
});

$$( "#again" ).click(function () {
  $$( "#show-first").show()
  $$( "#show_later").hide()
});