let card = document.getElementById("card");
let thankState = document.getElementById("thank_state");
let form = document.getElementById("form");
let submitBtn = document.getElementById("submit_btn");
let lists = document.querySelectorAll("input");
let rating = document.getElementById("rating_show");
// console.log(lists);

lists.forEach((item, index) => {
    item.addEventListener("click", () => changeState(index))
})

function changeState(index) {
    lists.forEach((item) => item.classList.remove("activeInput"));

    lists[index].classList.add("activeInput");
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    lists.forEach(star => {
        if (star.className.includes("activeInput")) {
            rating.innerHTML = star.id;
        }
        thankState.style.display = "block";
        card.style.display = "none";
        setTimeout(() => {
            thankState.style.display = "none";
            card.style.display = "block";
            lists.forEach((item) => item.classList.remove("activeInput"));
        }, 3000);
    })

})

