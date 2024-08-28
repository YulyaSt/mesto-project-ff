(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-19",headers:{authorization:"ff55c8a5-9e93-41a4-b092-8c36fdb087a0","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=document.querySelector("#card-template").content;function r(e,t,r,c){var a=n.querySelector(".places__item").cloneNode(!0),u=a.querySelector(".card__image"),i=a.querySelector(".card__title"),l=a.querySelector(".card__delete-button"),s=a.querySelector(".card__like-button"),d=a.querySelector(".card__like-value"),p=e._id;return a.id=e._id,i.textContent=e.name,u.src=e.link,u.alt=e.name,e.likes.length&&(d.textContent=e.likes.length),e.likes.some((function(e){return e._id===t}))&&s.classList.add("card__like-button_is-active"),e.owner._id===t?(l.classList.add("card__delete-button_active"),l.addEventListener("click",(function(e){o(e.target.closest(".card"))}))):l.remove(),s.addEventListener("click",(function(e){return r(e,p)})),u.addEventListener("click",(function(){return c})),a}function o(e){e.remove()}function c(n,r){var o=n.closest(".card__description").querySelector(".card__like-value");n.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)}(r).then((function(e){o.textContent=e.likes.length,n.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)}(r).then((function(e){o.textContent=e.likes.length,n.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)}))}function a(e){e.classList.add("popup_is-animated"),e.classList.add("popup_is-opened"),document.addEventListener("keydown",i),document.addEventListener("mousedown",l)}function u(e){e.classList.add("popup_is-animated"),e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i),document.removeEventListener("mousedown",l)}function i(e){"Escape"===e.key&&u(document.querySelector(".popup_is-opened"))}function l(e){e.target.classList.contains("popup_is-opened")&&u(e.target)}var s=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},d=function(e,t){var n=e.querySelector(t.submitButtonSelector),r=Array.from(e.querySelectorAll(t.inputSelector));r.forEach((function(n){s(e,n,t)})),p(r,n,t)},p=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var _=document.querySelector(".places__list"),m=document.querySelector(".profile__edit-button"),y=document.querySelector(".profile__add-button"),v=document.querySelector(".popup_type_edit"),h=document.querySelector(".popup_type_avatar"),S=document.querySelector(".popup_type_new-card"),b=document.querySelectorAll(".popup__close"),g=v.querySelector(".popup__form"),q=g.querySelector(".popup__input_type_name"),E=g.querySelector(".popup__input_type_description"),L=S.querySelector(".popup__form"),k=L.querySelector(".popup__input_type_card-name"),C=L.querySelector(".popup__input_type_url"),x=document.querySelector(".profile__title"),A=document.querySelector(".profile__description"),w=document.querySelector(".popup_type_image"),U=w.querySelector(".popup__image"),D=w.querySelector(".popup__caption"),I=document.querySelector(".popup_delete-image"),T=I.querySelector(".popup__button"),j=document.querySelector(".profile__image"),B=h.querySelector(".popup__form"),O=B.querySelector(".popup__input_type_url"),P={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function M(e,t){t.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить"}function N(e){a(w),U.src=e.target.src,U.alt=e.target.alt,D.textContent=e.target.alt}_.addEventListener("click",N),m.addEventListener("click",(function(e){e.preventDefault(),a(v),q.value=x.textContent,E.value=A.textContent,d(v,P)})),g.addEventListener("submit",(function(n){var r,o,c;n.preventDefault(),M(!0,g),(r={name:q.value,about:E.value},o=r.name,c=r.about,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:o,about:c})}).then(t)).then((function(e){x.textContent=e.name,A.textContent=e.about,u(v)})).catch((function(e){console.log(e)})).finally((function(){M(!1,g)}))})),j.addEventListener("click",(function(e){e.preventDefault(),a(h),d(h,P)})),B.addEventListener("submit",(function(n){var r;n.preventDefault(),M(!0,B),(r=O.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){j.style.backgroundImage="url(".concat(e.avatar,")"),u(h)})).catch((function(e){console.log(e)})).finally((function(){M(!1,B)}))})),y.addEventListener("click",(function(e){e.preventDefault(),a(S),d(S,P)})),L.addEventListener("submit",(function(n){n.preventDefault();var c,a={name:k.value,link:C.value};M(!0,L),(c=a,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:c.name,link:c.link})}).then(t)).then((function(e){_.prepend(r(e,e.owner._id,N,o)),u(S)})).catch((function(e){console.log(e)})).finally((function(){M(!1,L)}))})),T.addEventListener("click",(function(n){n.preventDefault(),T.dataset.cardId,function(e){throw new TypeError('"cardId" is read-only')}(),fetch("".concat(e.baseUrl,"/cards/").concat(null),{method:"DELETE",headers:e.headers}).then(t).then((function(){document.getElementById(null)(card),T.dataset.cardId="",closePopup(I)})).catch((function(e){console.log(e)}))})),b.forEach((function(e){e.addEventListener("click",(function(){u(e.closest(".popup"))}))})),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,a=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=a[0],i=a[1];x.textContent=u.name,A.textContent=u.about,j.style.backgroundImage="url(".concat(u.avatar,")"),i._id,i.forEach((function(e){_.append(r(e,N,o,c))}))})).catch((function(e){console.log(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);p(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?s(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),p(n,r,t)}))}))}(t,e)}))}(P)})();
//# sourceMappingURL=main.js.map