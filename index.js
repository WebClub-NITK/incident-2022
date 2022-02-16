tags = document.getElementsByClassName("tags");

for (el of tags) {
  el.setAttribute("data-atropos-offset", "-2%");
}

card_images = document.getElementsByClassName("card__image");

for (el of card_images) {
  el.setAttribute("data-atropos-offset", "5%");
}

buttons = document.getElementsByClassName("custom-btn");

for (el of buttons) {
    el.setAttribute("data-atropos-offset", "15%");
  }