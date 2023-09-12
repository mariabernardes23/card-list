const likeButtons = document.querySelectorAll(".buttonLike");

likeButtons.forEach((button) => {
  let qtdeLike = 0;
  const likesElement = button.querySelector(".numberLike");

  button.addEventListener("click", () => {
    qtdeLike++;
    likesElement.textContent = qtdeLike;
    button.classList.add("like");
  });
});

const filterLis = document.querySelectorAll(".filterLi li");
const filterableCards = document.querySelectorAll(".cardList .card");

const filterCards = (e) => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");

  filterableCards.forEach((card) => {
    card.classList.add("hide");

    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "ShowAll"
    ) {
      card.classList.remove("hide");
    }
  });
};

filterLis.forEach((li) => li.addEventListener("click", filterCards));

const buttonMenu = document.querySelector("#buttonMenu");

buttonMenu.addEventListener("click", () => {
  let menuMobile = document.querySelector(".mobileMenu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src = "img/menu_white_36dp.svg";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src = "img/close_white_36dp.svg";
  }
});