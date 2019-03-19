var link = document.querySelector(".search-button");

var popup = document.querySelector(".form-content");

var focus = popup.querySelector("[name=arrival-date]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("modal-show")) {
    popup.classList.remove("modal-show");
    popup.classList.add("modal-hide");
  }else {
    popup.classList.add("modal-show");
    popup.classList.remove("modal-hide");
  }
});
