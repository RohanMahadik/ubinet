 $(document).ready(function () {
   

  $('#retirement').DataTable();

  $(".scrolltop").click(function() {
    $("html").animate({ scrollTop: 0 }, "");
    });


    
 });


        $(document).ready(function () {
            $('.didknow').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: true,
            });
        });
    


function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("branch");
  table1 = document.getElementById("branch1");

  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    rows1 = table1.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    for (i = 1; i < (rows1.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows1[i].getElementsByTagName("TD")[0];
      y = rows1[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows1[i].parentNode.insertBefore(rows1[i + 1], rows1[i]);
      switching = true;
    }
  }
}
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.getElementById('notification-msghidden').className = 'slideDown';
  }, 2000);
}, false);

function myFunction() {
  var element = document.getElementById("myDIV");
  element.classList.toggle("sidebarblock");
}
