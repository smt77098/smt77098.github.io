/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

     // Get today's date
     const d = new Date();
  let day = d.getDay(); // This will give us a number from 0 to 6

  // Find the div by ID and manipulate the display style
  document.getElementById(`day${day}`).style.display = 'block';
//

