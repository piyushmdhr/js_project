$(document).ready(() => {
  $("#tabs").tabs();

  $("#content-slider").lightSlider({
    loop: true,
    keyPress: true,
  });
  $("#image-gallery").lightSlider({
    gallery: true,
    item: 1,
    thumbItem: 6,
    slideMargin: 0,
    speed: 1000,
    auto: true,
    loop: true,
    onSliderLoad: function () {
      $("#image-gallery").removeClass("cS-hidden");
    },
  });
});
