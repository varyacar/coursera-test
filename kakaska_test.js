



const cards = document.querySelectorAll(".card");
let order = ["A2", "B1", "B2"];

function update() {
  cards.forEach(card => {
    card.classList.remove("left", "center", "right");
  });
  cards.forEach(card => {
    if (card.textContent === order[0]) card.classList.add("left");
    if (card.textContent === order[1]) card.classList.add("center");
    if (card.textContent === order[2]) card.classList.add("right");
  });
}

// Клик по соседней карточке
cards.forEach(card => {
  card.addEventListener("click", () => {
    if (card.classList.contains("left")) {
      order.unshift(order.pop());
      update();
    } else if (card.classList.contains("right")) {
      order.push(order.shift());
      update();
    }
  });
});

// Свайп на телефонах
let startX = 0;
document.querySelector(".carousel").addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});
document.querySelector(".carousel").addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  let diff = startX - endX;
  if (diff > 50) { // свайп влево
    order.push(order.shift());
    update();
  } else if (diff < -50) { // свайп вправо
    order.unshift(order.pop());
    update();
  }
});

update();