(()=>{var e={547:()=>{}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var p=t[o]={exports:{}};return e[o](p,p.exports,n),p.exports}(()=>{"use strict";function e(e,t,n){var o=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),r=o.querySelector(".card__image"),p=o.querySelector(".card__title"),u=o.querySelector(".card__delete-button"),c=o.querySelector(".card__like-button");return p.textContent=e.name,r.src=e.link,r.alt=e.name,u.addEventListener("click",(function(){return t(o)})),r.addEventListener("click",(function(){return n(e)})),c.addEventListener("click",(function(){c.classList.contains("card__like-button")&&c.classList.toggle("card__like-button_is-active")})),o}function t(e){e.remove()}function o(e){e.classList.add("popup_is-animated"),e.classList.add("popup_is-opened"),document.addEventListener("keydown",p),document.addEventListener("mousedown",u)}function r(e){e.classList.add("popup_is-animated"),e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",p),document.removeEventListener("mousedown",u)}function p(e){"Escape"===e.key&&r(document.querySelector(".popup_is-opened"))}function u(e){e.target.classList.contains("popup_is-opened")&&r(e.target)}var c=n(547),i=document.querySelector(".places__list"),s=document.querySelector(".profile__edit-button"),a=document.querySelector(".profile__add-button"),d=document.querySelector(".popup_type_edit"),l=document.querySelector(".popup_type_new-card"),_=document.querySelectorAll(".popup__close"),m=d.querySelector(".popup__form"),y=m.querySelector(".popup__input_type_name"),v=m.querySelector(".popup__input_type_description"),f=l.querySelector(".popup__form"),k=f.querySelector(".popup__input_type_card-name"),S=f.querySelector(".popup__input_type_url"),q=document.querySelector(".profile__title"),L=document.querySelector(".profile__description"),b=document.querySelector(".popup_type_image"),x=b.querySelector(".popup__image"),E=b.querySelector(".popup__caption");function g(e){o(b),x.src=e.link,x.alt=e.name,E.textContent=e.name}(0,c.enableValidation)({formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"}),[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(n){i.prepend(e(n,t,g))})),s.addEventListener("click",(function(e){e.preventDefault(),o(d),y.value=q.textContent,v.value=L.textContent})),m.addEventListener("submit",(function(e){e.preventDefault(),q.textContent=y.value,L.textContent=v.value,r(d)})),a.addEventListener("click",(function(e){e.preventDefault(),o(l)})),f.addEventListener("submit",(function(n){n.preventDefault();var o=e({name:k.value,link:S.value},t,g);i.prepend(o),r(l)})),_.forEach((function(e){e.addEventListener("click",(function(){r(e.closest(".popup"))}))}))})()})();