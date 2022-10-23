const formKey = "formFields";
const reset = document.querySelector(".form__button--reset");

import { handleSumbit } from "./change-theme.js";
import { form } from "./show-select.js";

window.addEventListener("DOMContentLoaded", () => {
    loadFormControls();
    handleSumbit();
});

const saveInStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

const getInStorage = (key) => {
    const res = localStorage.getItem(key);
    return res ? JSON.parse(res) : {};
};

const loadFormControls = () => {
    const localData = getInStorage(formKey);
    const elements = form.elements;

    for (const field in localData) {
      // console.log(elements[field]);
      switch (elements[field].type) {
        case "text":
          elements[field].value = localData[field];
          break;
        default:
          elements[field].value = localData[field];
        };
    }
};

form.addEventListener("change", () => {
    const formFields = {};
    const data = new FormData(form);
    for (const [key, value] of data) {
        formFields[key] = value;
    }
    saveInStorage(formKey, formFields);
});

reset.addEventListener("click", () => {
    clearStorage();
});

function clearStorage() {
    localStorage.clear();
}
