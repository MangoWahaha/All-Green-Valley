const sortMenu = document.getElementById("sortMenu");
const sortOptions = sortMenu.querySelectorAll("label");

sortOptions.forEach((option) => {
  option.addEventListener("click", () => {
    sortOptions.forEach((o) => o.classList.remove("active"));

    option.classList.add("active");

    sortToggle.querySelector("span").textContent = option.textContent;
  });
});
