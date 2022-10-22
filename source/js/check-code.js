const inputCode = document.querySelectorAll(".form__input--code");

checkCode();

function checkCode() {
    inputCode.forEach(item => {
        item.addEventListener("keyup", function() {
            this.value = this.value.replace(/[^\d]/g, "");
        });
    });
}