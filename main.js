(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-19",headers:{authorization:"ff55c8a5-9e93-41a4-b092-8c36fdb087a0","Content-Type":"application/json"}},t=function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))};function n(e,t,n,r,o){var c=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),i=c.querySelector(".card__image"),a=c.querySelector(".card__title"),s=c.querySelector(".card__delete-button"),u=c.querySelector(".card__like-button"),p=c.querySelector(".card__like-value");a.textContent=e.name,i.src=e.link,i.alt=e.name,p.textContent=e.likes.length,e.owner._id===t?s.addEventListener("click",(function(){return n(e,c)})):s.remove(),i.addEventListener("click",(function(){return r(e)}));for(var l=0;l<e.likes.length;l++)e.likes[l]._id===t&&u.classList.add("card__like-button_is-active");return u.addEventListener("click",(function(){return o(e,u,t,p)})),c}function r(n){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n._id),{method:"DELETE",headers:e.headers}).then(t)})(n).then((function(e){e.remove()})).catch((function(e){console.error("Не удается удалить элемент",e)}))}function o(e){e.classList.add("popup_is-animated"),e.classList.add("popup_is-opened"),document.addEventListener("keydown",i),document.addEventListener("mousedown",a)}function c(e){e.classList.add("popup_is-animated"),e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i),document.removeEventListener("mousedown",a)}function i(e){"Escape"===e.key&&c(document.querySelector(".popup_is-opened"))}function a(e){e.target.classList.contains("popup_is-opened")&&c(e.target)}var s,u=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))},p=document.querySelector(".places__list"),l=document.querySelector(".profile__edit-button"),d=document.querySelector(".profile__add-button"),_=document.querySelector(".popup_type_edit"),m=document.querySelector(".popup_type_new-card"),f=document.querySelectorAll(".popup__close"),v=_.querySelector(".popup__form"),y=v.querySelector(".popup__input_type_name"),S=v.querySelector(".popup__input_type_description"),k=m.querySelector(".popup__form"),q=k.querySelector(".popup__input_type_card-name"),h=k.querySelector(".popup__input_type_url"),L=document.querySelector(".profile__title"),E=document.querySelector(".profile__description"),b=document.querySelector(".popup_type_image"),C=b.querySelector(".popup__image"),g=b.querySelector(".popup__caption");function x(e){o(b),C.src=e.link,C.alt=e.name,g.textContent=e.name}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){p.prepend(n(e,r,x))})),l.addEventListener("click",(function(e){e.preventDefault(),o(_),y.value=L.textContent,S.value=E.textContent})),v.addEventListener("submit",(function(e){e.preventDefault(),L.textContent=y.value,E.textContent=S.value,c(_)})),d.addEventListener("click",(function(e){e.preventDefault(),o(m)})),k.addEventListener("submit",(function(e){e.preventDefault();var t=n({name:q.value,link:h.value},r,x);p.prepend(t),c(m)})),f.forEach((function(e){e.addEventListener("click",(function(){c(e.closest(".popup"))}))})),s={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},Array.from(document.querySelectorAll(s.formSelector)).forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);u(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),u(n,r,t)}))}))}(e,s)}))})();