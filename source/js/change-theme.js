const submit = document.querySelector(".form__button--submit");
const page = document.body;

submit.addEventListener("click", (e) => {
    e.preventDefault();
    handleSumbit();
});

function setLightTheme() {
    page.classList.remove("light");
    page.classList.add("dark");
}

function changeDarkTheme() {
    page.classList.remove("dark");
    page.classList.add("light");
}

function handleSumbit() {
    const currentTheme = document.querySelector('input[type="radio"]:checked');

    if(currentTheme.value === "dark") {
        setLightTheme();
    } else {
        changeDarkTheme();
    }
};

export { handleSumbit };
