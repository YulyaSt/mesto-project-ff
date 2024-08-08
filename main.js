(()=>{"use strict";function e(e,t,n){var r=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),o=r.querySelector(".card__image"),c=r.querySelector(".card__title"),i=r.querySelector(".card__delete-button"),u=r.querySelector(".card__like-button");return c.textContent=e.name,o.src=e.link,o.alt=e.name,i.addEventListener("click",(function(){return t(r)})),o.addEventListener("click",(function(){return n(e)})),u.addEventListener("click",(function(){u.classList.contains("card__like-button")&&u.classList.toggle("card__like-button_is-active")})),r}function t(e){e.remove()}function n(e){e.classList.add("popup_is-animated"),e.classList.add("popup_is-opened"),document.addEventListener("keydown",o),document.addEventListener("mousedown",c)}function r(e){e.classList.add("popup_is-animated"),e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",o),document.removeEventListener("mousedown",c)}function o(e){"Escape"===e.key&&r(document.querySelector(".popup_is-opened"))}function c(e){e.target.classList.contains("popup_is-opened")&&r(e.target)}var i,u=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},s=document.querySelector(".places__list"),a=document.querySelector(".profile__edit-button"),p=document.querySelector(".profile__add-button"),l=document.querySelector(".popup_type_edit"),d=document.querySelector(".popup_type_new-card"),_=document.querySelectorAll(".popup__close"),m=l.querySelector(".popup__form"),v=m.querySelector(".popup__input_type_name"),y=m.querySelector(".popup__input_type_description"),f=d.querySelector(".popup__form"),S=f.querySelector(".popup__input_type_card-name"),q=f.querySelector(".popup__input_type_url"),k=document.querySelector(".profile__title"),L=document.querySelector(".profile__description"),E=document.querySelector(".popup_type_image"),b=E.querySelector(".popup__image"),C=E.querySelector(".popup__caption");function g(e){n(E),b.src=e.link,b.alt=e.name,C.textContent=e.name}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(n){s.prepend(e(n,t,g))})),a.addEventListener("click",(function(e){e.preventDefault(),n(l),v.value=k.textContent,y.value=L.textContent})),m.addEventListener("submit",(function(e){e.preventDefault(),k.textContent=v.value,L.textContent=y.value,r(l)})),p.addEventListener("click",(function(e){e.preventDefault(),n(d)})),f.addEventListener("submit",(function(n){n.preventDefault();var o=e({name:S.value,link:q.value},t,g);s.prepend(o),r(d)})),_.forEach((function(e){e.addEventListener("click",(function(){r(e.closest(".popup"))}))})),i={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(i.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);u(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),u(n,r,t)}))}))}(e,i)}))})();