let items = document.querySelectorAll(".item");
let btn_pre = document.querySelector(".btn.pre");
let btn_next = document.querySelector(".btn.next");
let i = 0;
btn_next.addEventListener("click", () => {
    if (items[i + 1] != null) {
        items[i + 1].classList.add("active");

        i++;
        if (i >= 3) {
            btn_next.classList.add("disable");
        } else {
            btn_pre.classList.remove("disable");
        }
    }
});

btn_pre.addEventListener("click", () => {
    if (items[i - 1] != null) {
        items[i].classList.remove("active");
        i--;
        if (i <= 0) {
            btn_pre.classList.add("disable");
        } else {
            btn_next.classList.remove("disable");
        }
    }
});
