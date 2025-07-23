$(document).ready(function() {

  $.ajax({
    type: "GET",
    url: "../specific_resources/alldorms.json",
    dataType: "json",
    success: function(responseData, status) {

      var i;
      var path = window.location.pathname;
      var page = path.split("/").pop();
      if (page == 'barh.html') {
        i = 0;
      } else if (page == 'bray.html') {
        i = 1;
      } else if (page == 'davison.html') {
        i = 2;
      } else if (page == 'barton.html') {
        i = 3;
      } else if (page == 'cary.html') {
        i = 4;
      } else if (page == 'crockett.html') {
        i = 5;
      } else if (page == 'ecomplex.html') {
        i = 6;
      } else if (page == 'hall.html') {
        i = 7;
      } else if (page == 'nason.html') {
        i = 8;
      } else if (page == 'north.html') {
        i = 9;
      } else if (page == 'warren.html') {
        i = 10;
      } else if (page == 'sharp.html') {
        i = 11;
      }

      var output_info = '';
      var output_img = '';
      var dorm = responseData.dorms[i];
      var images = dorm.dormIMG;
      output_img += '<img src="' + images.cover + '" class="dorm_pic_big">';
      // console.log(output_img);
      for (var i = 0; i < images.small.length; i++) {
        output_img += '<img src="' + images.small[i] + '" class="dorm_pic">';
      }

      output_info += '<h1 class="name">' + dorm.name + '</h1>';
      output_info += '<h2>Room Types and Price(2 semesters)</h2>';
      output_info += '<table id="price" style="width:200">';
      for (var i = 0; i < dorm.rooms.length; i++) {
        output_info += '<tr><td>' + dorm.rooms[i] + '</td><td style="width:60%">' + dorm.price[i] + '</td></tr>';
      }
      output_info += '</table>';

      output_info += '<h2>General Info</h2>';
      output_info += '<table id="general"><tr><td>Building Type </td><td>' + dorm.type + '</tr>';
      output_info += '<tr> <td>Students per suite/apartment</td> <td>' + dorm.students_per_suite; + '</td></tr>';
      output_info += '<tr> <td># of Occupants</td> <td>' + dorm.numOccu; + '</td></tr>';
      output_info += '<tr> <td># of Student Staff per building</td> <td>' + dorm.student_staff; + '</td></tr>';
      output_info += '<tr> <td># of Floors</td> <td>' + dorm.numFloor; + '</td></tr>';
      output_info += '<tr> <td>Theme Community Available</td> <td>' + dorm.theme_community; + '</td></tr>';
      output_info += '<tr> <td>Co-Ed Building(Rooms are single gender)</td> <td>' + dorm.co_ed; + '</td></tr>';
      output_info += '<tr> <td>Gender Breakdown</td> <td>' + dorm.gender_breakdown; + '</td></tr>';
      output_info += '<tr> <td>Gender Inclusive Housing Available</td> <td>' + dorm.inclusive; + '</td></tr>';
      output_info += '</table>';

      output_info += '<h2>Restrooms</h2>';
      output_info += '<table id="restrooms"><tr><td>Restrooms </td><td>' + dorm.restroom + '</td></tr>';
      output_info += '<tr> <td>Cleaning Available</td> <td>' + dorm.cleaning; + '</td></tr>';
      output_info += '<tr> <td>Cleaning Schedule</td> <td>' + dorm.schedule; + '</td></tr>';
      output_info += '<tr> <td>All-Gender Restroom Available</td> <td>' + dorm.gender_restroom; + '</td></tr>';
      output_info += '</table>';

      output_info += '<h2>Furniture</h2>';
      output_info += '<table class="furniture">';
      var furns = dorm.furniture;
      console.log(dorm);

      for (key in furns) {
        if (!(Array.isArray(dorm.furniture[key]))) {
          output_info += '<tr> <td>' + key + '</td> <td>' + dorm.furniture[key] + '</td></tr>';
        } else {
          if (dorm.furniture[key].length > 1) {
            output_info += '<tr> <td>' + key + '</td> <td>' + dorm.furniture[key][0] + ' ' + dorm.furniture[key][1] + '</td></tr>';
          }

        }

      }
      output_info += '</table>';

      output_info += '<h2>Amenities</h2>';
      output_info += '<table class="table">';
      var amen = dorm.amenities;
      for (key in amen) {
        if (!(Array.isArray(amen[key]))) {

          output_info += '<tr> <td>' + key + '</td> <td>' + amen[key] + '</td></tr>';
        } else {
          if (amen[key].length > 1) {
            output_info += '<tr> <td>' + key + '</td> <td>' + amen[key][0] + ' ' + amen[key][1] + '</td></tr>';
          }
        }

      }
      output_info += '</table>';

      output_info += '<h3>Nearby Facilities</h3>';
      output_info += '<table class="nearby">';
      output_info += '<tr> <td>Nearby Facilities</td> <td>' + dorm.nearby; + '</td></tr>';
      output_info += '</table></div>';
      output_info = output_info.replaceAll(' Yes ', '<img src="../specific_resources/img/yes.png" class="yes">');
      output_info = output_info.replaceAll(' No ', '<img src="../specific_resources/img/no.png" class="no">');
      $('#info').html(output_info);
      $('.photos').html(output_img);
    },
    error: function(msg) {
      // there was a problem
      alert("There was a problem: " + msg.status + " " + msg.statusText);
    }
  });
});