$(document).ready(() => {
  $("#lessItem").click(() => {
    let itemQuantity = parseInt($("#itemQuantity").val());
    if (itemQuantity >= 2) {
      console.log(" HEre");
      itemQuantity = itemQuantity - 1;

      console.log(itemQuantity);

      $("#itemQuantity").val(itemQuantity);
    }
  });
  $("#moreItem").click(() => {
    let itemQuantity = parseInt($("#itemQuantity").val());

    if (itemQuantity < 5) {
      console.log("alsi HEre");
      itemQuantity = itemQuantity + 1;

      console.log(itemQuantity);

      $("#itemQuantity").val(itemQuantity);
    }
  });

  // jquery ui tabs
  $("#tabs").tabs();

  // image slider
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

  //dialog
  $("#dialog").dialog({
    autoOpen: false,
    show: {
      effect: "blind",
      duration: 1000,
    },
    hide: {
      effect: "explode",
      duration: 1000,
    },
  });

  $("#cart").on("click", function () {
    $("#dialog").dialog("open");
  });
});
