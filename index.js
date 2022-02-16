tags = document.getElementsByClassName("tags");

for (el of tags) {
  el.setAttribute("data-atropos-offset", "-4%");
}

card_images = document.getElementsByClassName("card__image");

for (el of card_images) {
  el.setAttribute("data-atropos-offset", "5%");
}

card__footer = document.getElementsByClassName("card__footer");

for (el of card__footer) {
  el.setAttribute("data-atropos-offset", "4%");
}
