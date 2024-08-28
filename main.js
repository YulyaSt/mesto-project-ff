(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-19",headers:{authorization:"ff55c8a5-9e93-41a4-b092-8c36fdb087a0","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=document.querySelector("#card-template").content;function r(e,t,r,o,c){var a=n.querySelector(".places__item").cloneNode(!0),u=a.querySelector(".card__image"),i=a.querySelector(".card__title"),l=a.querySelector(".card__delete-button"),s=a.querySelector(".card__like-button"),d=a.querySelector(".card__like-value"),p=e._id;return i.textContent=e.name,u.src=e.link,u.alt=e.name,e.likes.length&&(d.textContent=e.likes.length),e.likes.some((function(e){return e._id===t}))&&s.classList.add("card__like-button_is-active"),e.owner._id===t?l.addEventListener("click",(function(){r(e)})):l.remove(),s.addEventListener("click",(function(e){return o(e,p)})),u.addEventListener("click",(function(){return c})),a}function o(n,r){var o=n.closest(".card__description").querySelector(".card__like-value");n.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n._id),{method:"DELETE",headers:e.headers}).then(t)}(r).then((function(e){o.textContent=e.likes.length,n.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n._id),{method:"PUT",headers:e.headers}).then(t)}(r).then((function(e){o.textContent=e.likes.length,n.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)}))}function c(e){e.classList.add("popup_is-animated"),e.classList.add("popup_is-opened"),document.addEventListener("keydown",u),document.addEventListener("mousedown",i)}function a(e){e.classList.add("popup_is-animated"),e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u),document.removeEventListener("mousedown",i)}function u(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}function i(e){e.target.classList.contains("popup_is-opened")&&a(e.target)}var l=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},s=function(e,t){var n=e.querySelector(t.submitButtonSelector),r=Array.from(e.querySelectorAll(t.inputSelector));r.forEach((function(n){l(e,n,t)})),d(r,n,t)},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var f=document.querySelector(".places__list"),_=document.querySelector(".profile__edit-button"),m=document.querySelector(".profile__add-button"),y=document.querySelector(".popup_type_edit"),v=document.querySelector(".popup_type_avatar"),h=document.querySelector(".popup_type_new-card"),S=document.querySelectorAll(".popup__close"),b=y.querySelector(".popup__form"),g=b.querySelector(".popup__input_type_name"),q=b.querySelector(".popup__input_type_description"),E=h.querySelector(".popup__form"),L=E.querySelector(".popup__input_type_card-name"),k=E.querySelector(".popup__input_type_url"),C=document.querySelector(".profile__title"),x=document.querySelector(".profile__description"),A=document.querySelector(".popup_type_image"),w=A.querySelector(".popup__image"),U=A.querySelector(".popup__caption"),D=document.querySelector(".popup_delete-image"),I=D.querySelector(".popup__button"),T=document.querySelector(".profile__image"),j=v.querySelector(".popup__form"),B=j.querySelector(".popup__input_type_url"),O={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function P(e,t){t.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить"}function M(e){c(A),w.src=e.target.src,w.alt=e.target.alt,U.textContent=e.target.alt}function N(e){c(D),I.dataset.cardId=e._id}f.addEventListener("click",M),_.addEventListener("click",(function(e){e.preventDefault(),c(y),g.value=C.textContent,q.value=x.textContent,s(y,O)})),b.addEventListener("submit",(function(n){var r,o,c;n.preventDefault(),P(!0,b),(r={name:g.value,about:q.value},o=r.name,c=r.about,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:o,about:c})}).then(t)).then((function(e){C.textContent=e.name,x.textContent=e.about,a(y)})).catch((function(e){console.log(e)})).finally((function(){P(!1,b)}))})),T.addEventListener("click",(function(e){e.preventDefault(),c(v),s(v,O)})),j.addEventListener("submit",(function(n){var r;n.preventDefault(),P(!0,j),(r=B.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){T.style.backgroundImage="url(".concat(e.avatar,")"),a(v)})).catch((function(e){console.log(e)})).finally((function(){P(!1,j)}))})),m.addEventListener("click",(function(e){e.preventDefault(),c(h),s(h,O)})),E.addEventListener("submit",(function(n){n.preventDefault();var c,u={name:L.value,link:k.value};P(!0,E),(c=u,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:c,link:undefined})}).then(t)).then((function(e){f.prepend(r(e,e.owner._id,M,N,o)),a(h)})).catch((function(e){console.log(e)})).finally((function(){P(!1,E)}))})),I.addEventListener("click",(function(n){n.preventDefault();var r,o=I.dataset.cardId;(r=o,fetch("".concat(e.baseUrl,"/cards/").concat(r._id),{method:"DELETE",headers:e.headers}).then(t)).then((function(){document.getElementById(o).remove(),I.dataset.cardId="",a(D)})).catch((function(e){console.log(e)}))})),S.forEach((function(e){e.addEventListener("click",(function(){a(e.closest(".popup"))}))})),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,c=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=c[0],u=c[1];C.textContent=a.name,x.textContent=a.about,T.style.backgroundImage="url(".concat(a.avatar,")"),u.forEach((function(e){f.append(r(e,a._id,M,N,o))}))})).catch((function(e){console.log(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);d(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?l(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),d(n,r,t)}))}))}(t,e)}))}(O)})();
//# sourceMappingURL=main.js.map