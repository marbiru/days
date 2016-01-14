var mil_day = 86400000;

$( "#submit" ).click(function () {

  var birthday_string = $( "#datepicker" ).val();

  var birthday = Date.parse( birthday_string );

	var today_date = Date();
  
	var today_days = Date.parse(today_date);

	var days_old = Math.floor((today_days - birthday)/mil_day);

for (var counter = 10000; ; counter += 10000 ) {
  if (days_old < counter) {
    big_milestone = counter;
    break;
    };
};

// old, pre-canvas version 

days_old_output.innerHTML = days_old;

big_milestone_output.innerHTML = big_milestone;

big_milestone_date = new Date(birthday + mil_day*big_milestone);

bm_date_final = big_milestone_date.toUTCString().substring(0, 16);

big_milestone_date_output = big_milestone_date.toUTCString().substring(0, 16);
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

  for (var counter = 0; counter <= 14; counter++) {
    if (days_old < small_milestone_array[counter]) {
      small_milestone = small_milestone_array[counter];
      break;
    };
  };

  small_milestone_output.innerHTML = small_milestone;

  small_milestone_date = new Date(birthday + mil_day*small_milestone);

  sm_date_final = small_milestone_date.toUTCString().substring(0, 16);

  small_milestone_date_output.innerHTML = small_milestone_date.toUTCString().substring(0, 16);

  var share_link = "<a href='http://marbiru.github.io/days/share.html" + "?b=" + birthday + "'>here</a>";

  share_link_output.innerHTML = share_link;

// new canvas version starts here

var example = document.getElementById('example');
var context = example.getContext('2d');

context.clearRect(0,0, example.width, example.height);

context.font = "40px sans-serif";
context.fillStyle= "#000";
context.textAlign = 'center';
context.fillText("Today I am " + days_old + " days old", 700, 40);

context.font = "40px sans-serif";
context.fillStyle= "#000";
context.textAlign = 'center';
context.fillText("UPCOMING MILESTONES", 700, 100);

context.font = "40px sans-serif";
context.fillStyle= "#000";
context.textAlign = 'center';
context.fillText("I will be " + small_milestone + " days old on " + sm_date_final , 700, 160);

context.font = "40px sans-serif";
context.fillStyle= "#000";
context.textAlign = 'center';
context.fillText("I will be " + big_milestone + " days old on " + bm_date_final , 700, 220);

context.font = "40px sans-serif";
context.fillStyle= "#000";
context.textAlign = 'center';
context.fillText("How about you? Find out at www.marbiru.com/days", 700, 280);

});