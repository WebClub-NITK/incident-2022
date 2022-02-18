tags = document.getElementsByClassName("events-tags");

for (el of tags) {
  el.setAttribute("data-atropos-offset", "-4%");
}

card_images = document.getElementsByClassName("events-card__image");

for (el of card_images) {
  el.setAttribute("data-atropos-offset", "5%");
}

card_footer = document.getElementsByClassName("events-card__footer");

for (el of card_footer) {
  el.setAttribute("data-atropos-offset", "4%");
}

card_info = document.getElementsByClassName("events-card__info");

for (el of card_info) {
  el.setAttribute("data-atropos-offset", "-4%");
}
