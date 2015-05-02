//Problem: Form does not appear when CONTACT ME or CONTACT is clicked
//Solution: Make Form appear when CONTACT ME or CONTACT is clicked

var $overlay = $('<div id="overlay"></div>');
var $form = $('.contact-form');
var $formX = $('.xButton');

$overlay.append($formX);
$overlay.append($form);


$("body").append($overlay);

function contactButton(event) {
  event.preventDefault();

  //Show the overlay.
  $overlay.fadeIn(400, function() {
    $overlay.show();
  });
  //Show Form
  $form.fadeIn(400, function() {
    $form.show();
  });
  //Show X button
  $formX.show();

}

//Capture the click event on a link to an image
$(".contact-button button").click(contactButton);

$(".contact").click(contactButton);


//When overlay is clicked
$formX.click(function(){
  //Hide the overlay
  $overlay.fadeOut(400, function() {
    $overlay.hide();
  });
  $form.fadeOut(400, function() {
    $form.hide();
  });
});
