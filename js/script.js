const tabButtons = document.querySelectorAll(
  ".description__nav .description__button"
);
const tabItems = document.querySelectorAll(
  ".description__items .description__item"
);

tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    tabItems.forEach((item) => {
      item.classList.remove("active");
    });

    tabItems[index].classList.add("active");

    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  });
});
