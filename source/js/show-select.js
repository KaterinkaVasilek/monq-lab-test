const form = document.querySelector(".form");

form.addEventListener("click", () => {
    document.querySelectorAll(".select__click").forEach(function(item) {
        item.addEventListener("click", showSelectContent);
        item.addEventListener("click", rotateArrow);
    });
    document.querySelectorAll(".select__list").forEach(function(item) {
        item.addEventListener("click", (e) => {
            if(e.target.classList.contains("select__item")) {
                const currentValue = e.currentTarget.closest(".select").querySelector(".select__click").querySelector(".select__current");
                currentValue.value = e.target.textContent;
                item.classList.add("select__list--hidden");
                const currentArrow = e.currentTarget.closest(".select").querySelector(".select__click").querySelector(".form__label--arrow");
                currentArrow.classList.remove("active");
            };
            
        });
    });
});

function showSelectContent(evt) {
    const selectContent = evt.currentTarget.closest(".select").querySelector(".select__list");
    selectContent.classList.toggle("select__list--hidden");
}

function rotateArrow(evt) {
    const arrow = evt.currentTarget.closest(".select__click").querySelector(".form__label--arrow");
    arrow.classList.toggle("active");
}

export { form };