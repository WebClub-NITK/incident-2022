tags = document.getElementsByClassName("events-tags");

for (el of tags) {
  el.setAttribute("data-atropos-offset", "-4%");
}

card_images = document.getElementsByClassName("events-card__image");

for (el of card_images) {
  el.setAttribute("data-atropos-offset", "5%");
}

card__footer = document.getElementsByClassName("eventscard__footer");

for (el of card__footer) {
  el.setAttribute("data-atropos-offset", "4%");
}
