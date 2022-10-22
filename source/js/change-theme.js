const submit = document.querySelector(".form__button--submit");
const page = document.body;

submit.addEventListener("click", (e) => {
    e.preventDefault();
    checked();
});

function changeLightTheme() {
    page.classList.remove("light");
    page.classList.add("dark");
}

function changeDarkTheme() {
    page.classList.remove("dark");
    page.classList.add("light");
}

function checked() {
    const isChecked = document.querySelector('input[type="radio"]:checked');

    // console.log(isChecked);
    if(isChecked.value === "dark") {
        changeLightTheme();
    } else {
        changeDarkTheme();
    }
};

export { checked };
