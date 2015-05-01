//Problem: Fixed nav always displays extended, blocking content
//Solution: Provide a way to toggle nav to display links

var homeli = ('<a id="tempHome" href="index.html"><li>HOME</li></a>');
var contactli = ('<a id="tempContact" href="#" class="contact"><li>CONTACT</li></a>');


$(".mobileDiv").click(function(){
  var clicks = $(this).data('clicks');

  if(clicks) {
    //Even click

    //Bring Menu back to original state
    $(".nav").animate({
      height: "60px"
    }, 400);

    //hide .mainnav-right ul
    $(".mainnav-right ul").hide();

    //Remove homeli and contactli
    $("#tempHome").remove();
    $("#tempContact").remove();

  } else {
    //Odd Click

    //Extend Menu when lines are pressed
    $(".nav").animate({
      height: "360px"
    }, 400);

    //Append homeli at beginning and contacli at the end and show
    $(".mainnav-right ul").prepend(homeli).append(contactli).show();
  }

  $(this).data("clicks", !clicks);

});
