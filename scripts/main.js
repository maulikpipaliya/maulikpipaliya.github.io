
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});


var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  horizontalOrder: true
});

$grid.imagesLoaded().progress(function () {
  $grid.masonry();
});  
