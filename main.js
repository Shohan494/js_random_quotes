

$(document).ready(function() {
  var quotes = ["Death is something inevitable. When a man has done what he considers to be his duty to his people and his country, he can rest in peace. I believe I have made that effort and that is, therefore, why I will sleep for the eternity - by Nelson Mandela", "A person who never made a mistake never tried anything new - by Albert Einstein" , "With or without religion, you would have good people doing good things and evil people doing evil things. But for good people to do evil things, that takes religion - by Steven Weinberg ", "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style - by Maya Angelou ", "In a world filled with hate, we must still dare to hope. In a world filled with anger, we must still dare to comfort. In a world filled with despair, we must still dare to dream. And in a world filled with distrust, we must still dare to believe - by Michael Jackson ", "When the going gets weird, the weird turn pro - by Hunter S. Thompson ", "An optimist stays up until midnight to see the new year in. A pessimist stays up to make sure the old year leaves - by Bill Vaughan ", "Follow others, but do something on your own that you can be proud of - Shohan", "God doesn't require us to succeed, he only requires that you try - by Mother Teresa ", "In the end, all will remain is your deeds - by Unknown"];

// use any one specific method of the given two
/* with random numbers
  $("#quoteButton").click(function()
  {
      var rand = Math.floor((Math.random() * 10) + 1);
      $("#quoteText").text(quotes[rand]);
  });
});
*/
  /* by count and increasing it with logic */
    var count = 0;
    $("#quoteButton").click(function()
  {
      count++;
      $("#quoteText").text(quotes[count]);
      if (count == 10)
        { 
          count = 0;
          $("#quoteText").text(quotes[count]);
        }
  });
});
  


