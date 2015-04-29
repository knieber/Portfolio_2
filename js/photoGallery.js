//Problem: Need photo gallery to display three columns of photos dynamically
//Solution: use JavaScript to dynamically put images into each column and then resize them to fit into the columns

var $column1 = $('.column1');
var $column2 = $('.column2');
var $column3 = $('.column3');
var $photoStorage = $('.photoStorage');
var $img = ('<img>');





function appendToColumn(currentImg, currentColumn) {
  currentColumn.append(currentImg);
}


//Cycle through photos to pick every first image of three
for (var i = 0; i < $photoStorage.children("img").length; i += 3){
  var $currentImg = $photoStorage.children("img")[i];
  //Grab src of every first image
  var $src = $currentImg.getAttribute("src");
  var $newImg = ('<img src="' + $src +'">');

  //Append every first image into column1
  appendToColumn($newImg, $column1);
}


//Cycle through photos to pick every second image of three
for (var i = 1; i < $photoStorage.children("img").length; i += 3){
  var $currentImg = $photoStorage.children("img")[i];
  //Grab src of every second image
  var $src = $currentImg.getAttribute("src");
  var $newImg = ('<img src="' + $src +'">');

  //Append every second image into column2
  appendToColumn($newImg, $column2);
}

//Cycle through photos to pick every third image of three
for (var i = 2; i < $photoStorage.children("img").length; i += 3){
  var $currentImg = $photoStorage.children("img")[i];
  //Grab src of every third image
  var $src = $currentImg.getAttribute("src");
  var $newImg = ('<img src="' + $src +'">');

  //Append every second image into column3
  appendToColumn($newImg, $column3);
}
