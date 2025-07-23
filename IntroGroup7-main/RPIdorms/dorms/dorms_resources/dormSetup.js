$(document).ready(function() {
  
  $.ajax({
    type: "GET",
    url: "./dorms_resources/dormList.json",
    dataType: "json",
    success: function(responseData, status){
      var output = '';
      $.each(responseData.dorms, function(i, item) {
        //has icons in front of each lab
        output += '<div class="dorm" id=' + item.id + '>';
        output += '<h2 class="name"><a href='+item.link+'>'+ item.name +'</a></h2>'
        output += '<img src=' + item.dormIMG + ' class="dorm_pic">';
        output += '<p># of Occupants: ' + item.numOccu + '</p>';
        output += '<p>Restrooms: ' + item.restroom + '</p>';
        output += '<p>Air Condition: ' + item.ac + '</p>';
        output += '<p>Printer in Building: ' + item.printer + '</p>';
        output += '<p>Kitchen: ' + item.kitchen + '</p>';
        output += '<p>Nearby Facilities: ' + item.nearby + '</p>';
        output += '<p class="dorm_link"><a href=' + item.link +'>Learn More</a></p></div>';
      });
      $('#center').html(output);
  	}, error: function(msg) {
    				// there was a problem
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
  });
})