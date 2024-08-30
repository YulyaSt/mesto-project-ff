(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-19",headers:{authorization:"ff55c8a5-9e93-41a4-b092-8c36fdb087a0","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=document.querySelector("#card-template").content;function r(e,t,r,o,c){var a=n.querySelector(".places__item").cloneNode(!0),i=a.querySelector(".card__image"),u=a.querySelector(".card__title"),l=a.querySelector(".card__delete-button"),s=a.querySelector(".card__like-button"),d=a.querySelector(".card__like-value"),p=e._id;return a.dataset.cardId=e._id,u.textContent=e.name,i.src=e.link,i.alt=e.name,d.textContent=e.likes.length,e.likes.some((function(e){return e._id===t}))&&s.classList.add("card__like-button_is-active"),e.owner._id===t?(l.classList.add("card__delete-button_active"),l.addEventListener("click",(function(e){var t=e.target.closest(".card");o(t)}))):l.remove(),s.addEventListener("click",(function(){return c(p,s,d)})),i.addEventListener("click",(function(){return r})),a}function o(n,r,o){r.classList.contains("card__delete-button_active")?function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)}(n).then((function(e){r.classList.toggle("card__like-button_is-active"),o.textContent=e.likes.length})).catch((function(e){console.log(e)})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)}(n).then((function(e){r.classList.toggle("card__like-button_is-active"),o.textContent=e.likes.length})).catch((function(e){console.log(e)}))}function c(e){e.classList.add("popup_is-animated"),e.classList.add("popup_is-opened"),document.addEventListener("keydown",i),document.addEventListener("mousedown",u)}function a(e){e.classList.add("popup_is-animated"),e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i),document.removeEventListener("mousedown",u)}function i(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}function u(e){e.target.classList.contains("popup_is-opened")&&a(e.target)}var l=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},s=function(e,t){var n=e.querySelector(t.submitButtonSelector),r=Array.from(e.querySelectorAll(t.inputSelector));r.forEach((function(n){l(e,n,t)})),d(r,n,t)},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var f=document.querySelector(".places__list"),_=document.querySelector(".profile__edit-button"),m=document.querySelector(".profile__add-button"),v=document.querySelector(".popup_type_edit"),y=document.querySelector(".popup_type_avatar"),h=document.querySelector(".popup_type_new-card"),b=document.querySelectorAll(".popup__close"),S=v.querySelector(".popup__form"),g=S.querySelector(".popup__input_type_name"),L=S.querySelector(".popup__input_type_description"),q=document.querySelector(".profile__title"),E=document.querySelector(".profile__description"),k=document.querySelector(".popup_type_image"),C=k.querySelector(".popup__image"),x=k.querySelector(".popup__caption"),A=document.forms["new-place"],w=A.querySelector(".popup__button"),U=A["place-name"],D=A.link,T=document.querySelector(".popup_delete-image"),j=T.querySelector(".popup__button"),I=document.querySelector(".profile__image"),O=y.querySelector(".popup__form"),B=O.querySelector(".popup__input_type_url"),P=null,M={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function N(e,t){t.textContent=e?"Сохранение...":"Сохранить"}function J(e){e.target.classList.contains("card__image")&&(c(k),C.src=e.target.src,C.alt=e.target.alt,x.textContent=e.target.alt)}function H(e){P=e,c(T)}f.addEventListener("click",J),_.addEventListener("click",(function(e){e.preventDefault(),c(v),g.value=q.textContent,L.value=E.textContent,s(v,M)})),S.addEventListener("submit",(function(n){var r,o,c;n.preventDefault(),N(!0,S),(r={name:g.value,about:L.value},o=r.name,c=r.about,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:o,about:c})}).then(t)).then((function(e){q.textContent=e.name,E.textContent=e.about,a(v)})).catch((function(e){console.log(e)})).finally((function(){N(!1,S)}))})),I.addEventListener("click",(function(e){e.preventDefault(),c(y),s(y,M)})),O.addEventListener("submit",(function(n){var r;n.preventDefault(),N(!0,O),(r=B.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){I.style.backgroundImage="url(".concat(e.avatar,")"),a(y)})).catch((function(e){console.log(e)})).finally((function(){N(!1,O)}))})),m.addEventListener("click",(function(e){e.preventDefault(),c(h),s(h,M)})),A.addEventListener("submit",(function(n){n.preventDefault();var c={name:U.value,link:D.value};N(!0,w),function(n){return fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:n.name,link:n.link})}).then(t)}(c).then((function(e){f.prepend(r(e,e.owner._id,J,H,o)),a(h),A.reset()})).catch((function(e){console.log(e)})).finally((function(){N(!1,w)}))})),j.addEventListener("click",(function(){var n,r;(r=(n=P).dataset.cardId,fetch("".concat(e.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:e.headers}).then(t)).then((function(){n.remove()})).catch((function(e){console.log(e)})),a(T)})),b.forEach((function(e){e.addEventListener("click",(function(){a(e.closest(".popup"))}))})),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,c=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=c[0],i=c[1];q.textContent=a.name,E.textContent=a.about,I.style.backgroundImage="url(".concat(a.avatar,")"),i.forEach((function(e){f.append(r(e,a._id,J,H,o))}))})).catch((function(e){console.log(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);d(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?l(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),d(n,r,t)}))}))}(t,e)}))}(M)})();
//# sourceMappingURL=main.js.map