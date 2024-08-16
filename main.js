(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{z:()=>c,G:()=>u});var n={baseUrl:"https://nomoreparties.co/v1/wff-cohort-19",headers:{authorization:"ff55c8a5-9e93-41a4-b092-8c36fdb087a0","Content-Type":"application/json"}};function r(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var o=function(e){return fetch("".concat(n.baseUrl,"/cards/").concat(e._id),{method:"DELETE",headers:n.headers}).then(r)},a=document.querySelector("#card-template").content;function c(e,t,n,r,o){var c=a.querySelector(".places__item").cloneNode(!0),u=c.querySelector(".card__image"),i=c.querySelector(".card__title"),l=c.querySelector(".card__delete-button"),s=e._id;return i.textContent=e.name,u.src=e.link,u.alt=e.name,t===e.owner._id?l.addEventListener("click",(function(){return n(c,s)})):l.remove(),u.addEventListener("click",(function(){return r(e)})),c}function u(e,t){o(t).then((function(){e.target.closest(".places__item").remove()})).catch((function(e){console.log(e)}))}function i(e){e.classList.add("popup_is-animated"),e.classList.add("popup_is-opened"),document.addEventListener("keydown",s),document.addEventListener("mousedown",p)}function l(e){e.classList.add("popup_is-animated"),e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",s),document.removeEventListener("mousedown",p)}function s(e){"Escape"===e.key&&l(document.querySelector(".popup_is-opened"))}function p(e){e.target.classList.contains("popup_is-opened")&&l(e.target)}var d=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},f=function(e,t){var n=e.querySelector(t.submitButtonSelector),r=Array.from(e.querySelectorAll(t.inputSelector));r.forEach((function(n){d(e,n,t)})),m(r,n,t)},m=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var _=document.querySelector(".places__list"),v=document.querySelector(".profile__edit-button"),h=document.querySelector(".profile__add-button"),S=document.querySelector(".popup_type_edit"),b=document.querySelector(".popup_type_avatar"),q=document.querySelector(".popup_type_new-card"),g=document.querySelectorAll(".popup__close"),E=S.querySelector(".popup__form"),C=E.querySelector(".popup__input_type_name"),L=E.querySelector(".popup__input_type_description"),k=q.querySelector(".popup__form"),A=k.querySelector(".popup__input_type_card-name"),w=k.querySelector(".popup__input_type_url"),x=document.querySelector(".profile__title"),O=document.querySelector(".profile__description"),j=document.querySelector(".popup_type_image"),P=j.querySelector(".popup__image"),D=j.querySelector(".popup__caption"),T=document.querySelector(".profile__image"),U=b.querySelector(".popup__form"),B=U.querySelector(".popup__input_type_url"),M={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function I(e,t){t.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить"}function N(e){P.src=e.link,P.alt=e.name,D.textContent=e.name,i(j)}_.addEventListener("click",N),v.addEventListener("click",(function(e){e.preventDefault(),i(S),C.value=x.textContent,L.value=O.textContent,f(S,M)})),E.addEventListener("submit",(function(e){var t,o,a;e.preventDefault(),I(!0,E),(t={name:C.value,about:L.value},o=t.name,a=t.about,fetch("".concat(n.baseUrl,"/users/me"),{method:"PATCH",headers:n.headers,body:JSON.stringify({name:o,about:a})}).then(r)).then((function(e){x.textContent=e.name,O.textContent=e.about,l(S)})).catch((function(e){console.log(e)})).finally((function(){I(!1,E)}))})),T.addEventListener("click",(function(e){e.preventDefault(),i(b),f(b,M)})),U.addEventListener("submit",(function(e){var t;e.preventDefault(),I(!0,U),(t=B.value,fetch("".concat(n.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:n.headers,body:JSON.stringify({avatar:t})}).then(r)).then((function(e){T.style.backgroundImage="url(".concat(e.avatar,")"),l(b)})).catch((function(e){console.log(e)})).finally((function(){I(!1,U)}))})),h.addEventListener("click",(function(e){e.preventDefault(),i(q),f(q,M)})),k.addEventListener("submit",(function(e){e.preventDefault();var t={name:A.value,link:w.value};I(!0,k),function(e){return fetch("".concat(n.baseUrl,"/cards"),{method:"POST",headers:n.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(r)}(t).then((function(e){_.prepend(c(e,e.owner._id,N,u)),l(q)})).catch((function(e){console.log(e)})).finally((function(){I(!1,k)}))})),g.forEach((function(e){e.addEventListener("click",(function(){l(e.closest(".popup"))}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);m(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?d(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),m(n,r,t)}))}))}(t,e)}))}(M),Promise.all([fetch("".concat(n.baseUrl,"/users/me"),{headers:n.headers}).then(r),fetch("".concat(n.baseUrl,"/cards"),{headers:n.headers}).then(r)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,c,u=[],i=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],a=r[1];x.textContent=o.name,O.textContent=o.about,T.style.backgroundImage="url(".concat(o.avatar,")"),a.forEach((function(e,t){_.prepend(cardElement.createCard(e,N,cardElement.deleteCard,cardElement.addLikeCard,t))}))})).catch((function(e){console.log(e)}))})();