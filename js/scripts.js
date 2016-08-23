//Business Logic
function Ticket(movie,age,time){
  this.movie = movie;
  this.time = time;
  this.age = age;
}
Ticket.prototype.calcCost = function(movieTicketPrice){
  if (this.age > 55)
    movieTicketPrice--;
  if (this.time === "day")
    movieTicketPrice--;
  else if (this.time === "night" )
   movieTicketPrice += 2;
  if (this.movie === "star-wars")
    movieTicketPrice += 2;
  else if (this.movie === "die-hard")
    movieTicketPrice--;
  else if (this.movie === "batman")
    movieTicketPrice++;
  return movieTicketPrice;
}
//User Logic
$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var movieTicketPrice = 10;
    $("#ticket").fadeIn();
    $("#ticketDetails").remove();
    var inputtedMovie = $("input:radio[name=movie]:checked").val();
    var inputtedTime = $("input:radio[name=time]:checked").val();
    var inputtedAge = parseInt($("#age").val());
    var myTicket = new Ticket(inputtedMovie, inputtedAge, inputtedTime);
    $("#ticket").append("<div id='ticketDetails'><h3>" + myTicket.movie + "</h3>" +  "<h5>Showing: " + myTicket.time + "</h5>" + " <h5>Your ticket will cost: $" + myTicket.calcCost(movieTicketPrice) + ".00</h5><h6><em>Enjoy your film!</em></h6></div>"

  );
  });
});
