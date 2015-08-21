var mil_day = 86400000;

$( "#submit" ).click(function () {

  var birthday_string = $( "#datepicker" ).val();

  var birthday = Date.parse( birthday_string );

	var today_date = Date();
  
	var today_days = Date.parse(today_date);

	var days_old = Math.floor((today_days - birthday)/mil_day);

	days_old_output.innerHTML = days_old;

for (var counter = 0; ; counter++) {
  current_milestone = Number(counter + "0000");
  if (days_old < current_milestone) {
    big_milestone = current_milestone;
    break;
    };
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

  for (var counter = 0; counter <= 14; counter++) {
    if (days_old < small_milestone_array[counter]) {
      small_milestone = small_milestone_array[counter];
      break;
    };
  };

  small_milestone_output.innerHTML = small_milestone;

  small_milestone_date = new Date(birthday + mil_day*small_milestone);

  small_milestone_date_output.innerHTML = small_milestone_date.toUTCString().substring(0, 16);

  var share_link = "<a href='http://marbiru.github.io/days/share.html" + "?b=" + birthday + "'>here</a>";

  share_link_output.innerHTML = share_link;

});