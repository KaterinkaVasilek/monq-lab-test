const submit=document.querySelector(".form__button--submit"),page=document.body;function changeLightTheme(){page.classList.remove("light"),page.classList.add("dark")}function changeDarkTheme(){page.classList.remove("dark"),page.classList.add("light")}function checked(){"dark"===document.querySelector('input[type="radio"]:checked').value?changeLightTheme():changeDarkTheme()}submit.addEventListener("click",(e=>{e.preventDefault(),checked()}));export{checked};