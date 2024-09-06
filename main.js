(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-19",headers:{authorization:"ff55c8a5-9e93-41a4-b092-8c36fdb087a0","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)},r=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)},o=document.querySelector("#card-template").content;function c(e,t,n,r,c){var a=o.querySelector(".places__item").cloneNode(!0),u=a.querySelector(".card__image"),i=a.querySelector(".card__title"),l=a.querySelector(".card__delete-button"),s=a.querySelector(".card__like-button"),d=a.querySelector(".card__like-value"),p=e._id;return a.dataset.cardId=e._id,i.textContent=e.name,u.src=e.link,u.alt=e.name,d.textContent=e.likes.length,e.likes.some((function(e){return e._id===t}))&&s.classList.add("card__like-button_is-active"),e.owner._id===t?(l.classList.add("card__delete-button_active"),l.addEventListener("click",(function(e){var t=e.target.closest(".card");r(t)}))):l.remove(),s.addEventListener("click",(function(e){return c(e,p,d)})),u.addEventListener("click",(function(){n(u.src,u.alt,i.textContent)})),a}function a(e,t,o){(e.target.classList.contains("card__like-button_is-active")?r:n)(t).then((function(t){o.textContent=t.likes.length,e.target.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)}))}function u(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",l),e.addEventListener("mousedown",s)}function i(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",l),e.removeEventListener("mousedown",s)}function l(e){"Escape"===e.key&&i(document.querySelector(".popup_is-opened"))}function s(e){e.target.classList.contains("popup_is-opened")&&i(e.target)}var d=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},p=function(e,t){var n=e.querySelector(t.submitButtonSelector),r=Array.from(e.querySelectorAll(t.inputSelector));r.forEach((function(n){d(e,n,t)})),f(r,n,t)},f=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var m=document.querySelector(".places__list"),y=document.querySelector(".profile__edit-button"),v=document.querySelector(".profile__add-button"),h=document.querySelector(".popup_type_edit"),b=document.querySelector(".popup_type_avatar"),S=document.querySelector(".popup_type_new-card"),q=document.querySelectorAll(".popup__close"),g=h.querySelector(".popup__form"),E=g.querySelector(".popup__input_type_name"),L=g.querySelector(".popup__input_type_description"),C=document.querySelector(".profile__title"),k=document.querySelector(".profile__description"),x=document.querySelector(".popup_type_image"),A=x.querySelector(".popup__image"),w=x.querySelector(".popup__caption"),U=document.forms["new-place"],D=U["place-name"],T=U.link,j=document.querySelector(".profile__image"),O=b.querySelector(".popup__form"),B=O.querySelector(".popup__input_type_url"),I=document.querySelector(".popup_type_delete-image"),P=document.forms["delete-card"],M=(I.querySelector(".popup__button"),null),N=null;function J(e){N=e,u(I)}P.addEventListener("submit",(function(n){var r;n.preventDefault(),(r=N.id,fetch("".concat(e.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:e.headers}).then(t)).then((function(){N.card.remove().remove(),i(I)})).catch((function(e){console.error(e)}))}));var H={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function V(e,t){t.textContent=e?"Сохранение...":"Сохранить"}function z(e,t,n){A.src=e,A.alt=t,w.textContent=n,u(x)}y.addEventListener("click",(function(e){e.preventDefault(),u(h),E.value=C.textContent,L.value=k.textContent,p(h,H)})),g.addEventListener("submit",(function(n){var r,o,c;n.preventDefault(),V(!0,M=g.querySelector(".popup__button")),(r={name:E.value,about:L.value},o=r.name,c=r.about,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:o,about:c})}).then(t)).then((function(e){C.textContent=e.name,k.textContent=e.about,i(h)})).catch((function(e){console.log(e)})).finally((function(){V(!1,M)}))})),j.addEventListener("click",(function(e){e.preventDefault(),u(b),p(b,H)})),O.addEventListener("submit",(function(n){var r;n.preventDefault(),V(!0,M=O.querySelector(".popup__button")),(r=B.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){j.style.backgroundImage="url(".concat(e.avatar,")"),i(b)})).catch((function(e){console.log(e)})).finally((function(){V(!1,M)}))})),v.addEventListener("click",(function(e){e.preventDefault(),u(S),p(S,H)})),U.addEventListener("submit",(function(n){n.preventDefault(),M=U.querySelector(".popup__button");var r={name:D.value,link:T.value};V(!0,M),function(n){return fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:n.name,link:n.link})}).then(t)}(r).then((function(e){m.prepend(c(e,e.owner._id,z,J,a)),i(S),U.reset()})).catch((function(e){console.log(e)})).finally((function(){V(!1,M)}))})),q.forEach((function(e){e.addEventListener("click",(function(){i(e.closest(".popup"))}))})),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],u=r[1];C.textContent=o.name,k.textContent=o.about,j.style.backgroundImage="url(".concat(o.avatar,")"),u.forEach((function(e){m.append(c(e,o._id,z,J,a))}))})).catch((function(e){console.log(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);f(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?d(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),f(n,r,t)}))}))}(t,e)}))}(H)})();
//# sourceMappingURL=main.js.map