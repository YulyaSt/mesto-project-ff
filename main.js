(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-19",headers:{authorization:"ff55c8a5-9e93-41a4-b092-8c36fdb087a0","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n._id),{method:"PUT",headers:e.headers}).then(t)},r=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n._id),{method:"DELETE",headers:e.headers}).then(t)};function o(e,t,n,r,o){var c=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),a=c.querySelector(".card__image"),u=c.querySelector(".card__title"),i=c.querySelector(".card__delete-button"),l=c.querySelector(".card__like-button"),s=c.querySelector(".card__like-value"),d=e.likes.length,p=e._id;u.textContent=e.name,a.src=e.link,a.alt=e.name,s.textContent=d,e.owner._id===t?i.addEventListener("click",(function(){n(c,p)})):i.remove(),a.addEventListener("click",(function(){return r(e,p)}));for(var f=0;f<e.likes.length;f++)e.likes[f]._id===t&&l.classList.add("card__like-button_is-active");return c.addEventListener("click",(function(e){return o(e,s,p,d)})),c}function c(n,r){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n._id),{method:"DELETE",headers:e.headers}).then(t)})(r).then((function(){n.target.closest(".places__item").remove()})).catch((function(e){console.log(e)}))}function a(e,t,o){(t.classList.contains("card__like-button_is-active")?r:n)(e).then((function(e){o.textContent=e.likes.length,t.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)}))}function u(e){e.classList.add("popup_is-animated"),e.classList.add("popup_is-opened"),document.addEventListener("keydown",l),document.addEventListener("mousedown",s)}function i(e){e.classList.add("popup_is-animated"),e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",l),document.removeEventListener("mousedown",s)}function l(e){"Escape"===e.key&&i(document.querySelector(".popup_is-opened"))}function s(e){e.target.classList.contains("popup_is-opened")&&i(e.target)}var d=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},p=function(e,t){var n=e.querySelector(t.submitButtonSelector),r=Array.from(e.querySelectorAll(t.inputSelector));r.forEach((function(n){d(e,n,t)})),f(r,n,t)},f=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var m=document.querySelector(".places__list"),y=document.querySelector(".profile__edit-button"),v=document.querySelector(".profile__add-button"),h=document.querySelector(".popup_type_edit"),S=document.querySelector(".popup_type_avatar"),b=document.querySelector(".popup_type_new-card"),q=document.querySelectorAll(".popup__close"),g=h.querySelector(".popup__form"),E=g.querySelector(".popup__input_type_name"),L=g.querySelector(".popup__input_type_description"),k=b.querySelector(".popup__form"),C=k.querySelector(".popup__input_type_card-name"),A=k.querySelector(".popup__input_type_url"),x=document.querySelector(".profile__title"),w=document.querySelector(".profile__description"),U=document.querySelector(".popup_type_image"),D=U.querySelector(".popup__image"),T=U.querySelector(".popup__caption"),j=document.querySelector(".profile__image"),O=S.querySelector(".popup__form"),B=O.querySelector(".popup__input_type_url"),P={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function I(e,t){t.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить"}function M(e){u(U),D.src=e.link,D.alt=e.name,T.textContent=e.name}y.addEventListener("click",(function(e){e.preventDefault(),u(h),E.value=x.textContent,L.value=w.textContent,p(h,P)})),g.addEventListener("submit",(function(n){var r,o,c;n.preventDefault(),I(!0,g),(r={name:E.value,about:L.value},o=r.name,c=r.about,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:o,about:c})}).then(t)).then((function(e){x.textContent=e.name,w.textContent=e.about,i(h)})).catch((function(e){console.log(e)})).finally((function(){I(!1,g)}))})),j.addEventListener("click",(function(e){e.preventDefault(),u(S),p(S,P)})),O.addEventListener("submit",(function(n){var r;n.preventDefault(),I(!0,O),(r=B.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){j.style.backgroundImage="url(".concat(e.avatar,")"),i(S)})).catch((function(e){console.log(e)})).finally((function(){I(!1,O)}))})),v.addEventListener("click",(function(e){e.preventDefault(),u(b),p(b,P)})),k.addEventListener("submit",(function(n){n.preventDefault();var r={name:C.value,link:A.value};I(!0,k),function(n){return fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:n.name,link:n.link})}).then(t)}(r).then((function(e){m.prepend(o(e,e.owner._id,M,c,a)),i(b)})).catch((function(e){console.log(e)})).finally((function(){I(!1,k)}))})),q.forEach((function(e){e.addEventListener("click",(function(){i(e.closest(".popup"))}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);f(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?d(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),f(n,r,t)}))}))}(t,e)}))}(P),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=r[0],i=r[1];x.textContent=u.name,w.textContent=u.about,j.style.backgroundImage="url(".concat(u.avatar,")"),i.forEach((function(e){m.prepend(o(e,u._id,M,c,a))}))})).catch((function(e){console.log(e)}))})();