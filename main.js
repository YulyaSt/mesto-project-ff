(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-19",headers:{authorization:"ff55c8a5-9e93-41a4-b092-8c36fdb087a0","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)},r=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)},o=document.querySelector("#card-template").content;function c(e,t,n,r,c){var a=o.querySelector(".places__item").cloneNode(!0),u=a.querySelector(".card__image"),i=a.querySelector(".card__title"),l=a.querySelector(".card__delete-button"),s=a.querySelector(".card__like-button"),d=a.querySelector(".card__like-value"),p=document.querySelector(".places__list"),f=e._id;return a.dataset.cardId=e._id,i.textContent=e.name,u.src=e.link,u.alt=e.name,d.textContent=e.likes.length,e.likes.some((function(e){return e._id===t}))&&s.classList.add("card__like-button_is-active"),e.owner._id===t?(l.classList.add("card__delete-button_active"),l.addEventListener("click",(function(e){var t=e.target.closest(".card");r(t)}))):l.remove(),s.addEventListener("click",(function(e){return c(e,f,d)})),p.addEventListener("click",(function(){return n(u)})),a}function a(e,t,o){(e.target.classList.contains("card__like-button_is-active")?r:n)(t).then((function(t){o.textContent=t.likes.length,e.target.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)}))}function u(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",l),e.addEventListener("mousedown",s)}function i(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",l),e.removeEventListener("mousedown",s)}function l(e){"Escape"===e.key&&i(document.querySelector(".popup_is-opened"))}function s(e){e.target.classList.contains("popup_is-opened")&&i(e.target)}var d=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},p=function(e,t){var n=e.querySelector(t.submitButtonSelector),r=Array.from(e.querySelectorAll(t.inputSelector));r.forEach((function(n){d(e,n,t)})),f(r,n,t)},f=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var m=document.querySelector(".places__list"),y=document.querySelector(".profile__edit-button"),v=document.querySelector(".profile__add-button"),h=document.querySelector(".popup_type_edit"),S=document.querySelector(".popup_type_avatar"),b=document.querySelector(".popup_type_new-card"),g=document.querySelectorAll(".popup__close"),q=h.querySelector(".popup__form"),E=q.querySelector(".popup__input_type_name"),L=q.querySelector(".popup__input_type_description"),k=document.querySelector(".profile__title"),C=document.querySelector(".profile__description"),A=document.querySelector(".popup_type_image"),x=A.querySelector(".popup__image"),w=A.querySelector(".popup__caption"),U=document.forms["new-place"],D=U.querySelector(".popup__button"),T=U["place-name"],j=U.link,I=document.querySelector(".popup_delete-image"),O=I.querySelector(".popup__button"),B=document.querySelector(".profile__image"),P=S.querySelector(".popup__form"),M=P.querySelector(".popup__input_type_url"),N=null,J={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function H(e,t){t.textContent=e?"Сохранение...":"Сохранить"}function V(e){e.target.classList.contains("card__image")&&(u(A),x.src=e.target.src,x.alt=e.target.alt,w.textContent=e.target.alt)}function z(e){N=e,u(I)}y.addEventListener("click",(function(e){e.preventDefault(),u(h),E.value=k.textContent,L.value=C.textContent,p(h,J)})),q.addEventListener("submit",(function(n){var r,o,c;n.preventDefault(),H(!0,q),(r={name:E.value,about:L.value},o=r.name,c=r.about,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:o,about:c})}).then(t)).then((function(e){k.textContent=e.name,C.textContent=e.about,i(h)})).catch((function(e){console.log(e)})).finally((function(){H(!1,q)}))})),B.addEventListener("click",(function(e){e.preventDefault(),u(S),p(S,J)})),P.addEventListener("submit",(function(n){var r;n.preventDefault(),H(!0,P),(r=M.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){B.style.backgroundImage="url(".concat(e.avatar,")"),i(S)})).catch((function(e){console.log(e)})).finally((function(){H(!1,P)}))})),v.addEventListener("click",(function(e){e.preventDefault(),u(b),p(b,J)})),U.addEventListener("submit",(function(n){n.preventDefault();var r={name:T.value,link:j.value};H(!0,D),function(n){return fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:n.name,link:n.link})}).then(t)}(r).then((function(e){m.prepend(c(e,e.owner._id,V,z,a)),i(b),U.reset()})).catch((function(e){console.log(e)})).finally((function(){H(!1,D)}))})),O.addEventListener("click",(function(){var n,r;(r=(n=N).dataset.cardId,fetch("".concat(e.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:e.headers}).then(t)).then((function(){n.remove()})).catch((function(e){console.log(e)})),i(I)})),g.forEach((function(e){e.addEventListener("click",(function(){i(e.closest(".popup"))}))})),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],u=r[1];k.textContent=o.name,C.textContent=o.about,B.style.backgroundImage="url(".concat(o.avatar,")"),u.forEach((function(e){m.append(c(e,o._id,V,z,a))}))})).catch((function(e){console.log(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);f(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?d(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),f(n,r,t)}))}))}(t,e)}))}(J)})();
//# sourceMappingURL=main.js.map