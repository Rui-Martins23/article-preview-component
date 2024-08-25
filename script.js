const shareArrow = document.querySelector(".share-arrow");
const shareArrowTwo = document.querySelector(".share-arrow-two");
const shareIcons = document.querySelector(".share-icons");

shareArrow.addEventListener("click", function() {
    shareIcons.classList.toggle("active");
})

shareArrowTwo.addEventListener("click", function() {
    shareIcons.classList.toggle("active");
})