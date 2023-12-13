// PIYUSH MANANDHAR / 8919221

import { moreProducts } from "./moreProducts.js";

const renderProducts = () => {
  moreProducts.forEach((object) => {
    const cardDiv = document.createElement("div");
    const cardImg = document.createElement("img");
    const cardDivPara1 = document.createElement("p");
    const cardDivPara2 = document.createElement("p");
    cardDiv.classList.add("cardDetails");
    cardImg.src = object.imgSrc;
    cardDivPara1.textContent = object.name;
    cardDivPara2.textContent = object.price;
    $("#moreProducts").append(cardDiv);
    cardDiv.append(cardImg);
    cardDiv.append(cardDivPara1);
    cardDiv.append(cardDivPara2);
  });
};

$(document).ready(() => {
  renderProducts();
  $("#lessItem").click(() => {
    let itemQuantity = parseInt($("#itemQuantity").val());
    if (itemQuantity >= 2) {
      itemQuantity = itemQuantity - 1;
      $("#itemQuantity").val(itemQuantity);
    }
  });
  $("#moreItem").click(() => {
    let itemQuantity = parseInt($("#itemQuantity").val());

    if (itemQuantity < 5) {
      itemQuantity = itemQuantity + 1;
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
    onSliderLoad: () => {
      $("#image-gallery").removeClass("cS-hidden");
    },
  });

  //dialog
  $("#dialog").dialog({
    autoOpen: false,
    height: 200,
    width: 500,
    show: {
      effect: "drop",
      duration: 1000,
    },
    hide: {
      effect: "drop",
      duration: 1000,
    },
  });

  $("#addToCart").on("click", () => {
    $("#dialog").dialog("open");
  });
});
