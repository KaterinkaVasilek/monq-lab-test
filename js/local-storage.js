const formKey="formFields",reset=document.querySelector(".form__button--reset");import{checked}from"./change-theme.js";import{form}from"./show-select.js";window.addEventListener("DOMContentLoaded",(()=>{loadFormControls(),checked()}));const saveInStorage=(e,o)=>{localStorage.setItem(e,JSON.stringify(o))},getInStorage=e=>{const o=localStorage.getItem(e);return o?JSON.parse(o):{}},loadFormControls=()=>{const e=getInStorage(formKey),o=form.elements;for(const t in e)o[t].type,o[t].value=e[t]};function clearStorage(){localStorage.clear()}form.addEventListener("change",(()=>{const e={},o=new FormData(form);for(const[t,r]of o)e[t]=r;saveInStorage(formKey,e)})),reset.addEventListener("click",(()=>{clearStorage()}));