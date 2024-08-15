(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-19",headers:{authorization:"ff55c8a5-9e93-41a4-b092-8c36fdb087a0","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=document.querySelector("#card-template").content;function r(e,t,r,o,c){var a,u,i=n.querySelector(".card").cloneNode(!0),l=i.querySelector(".card__image"),s=i.querySelector(".card__title"),d=i.querySelector(".card__delete-button"),p=i.querySelector(".card__like-button"),f=i.querySelector(".card__like-value"),_=e.likes,m=e._id;return s.textContent=e.name,l.src=e.link,l.alt=e.name,f.textContent=_.length,t===e.owner._id?d.addEventListener("click",(function(){return r(i,m)})):d.remove(),a=t,u=_.map((function(e){return e._id})),u.includes(a)&&p.classList.add("card__like-button_is-active"),p.addEventListener("click",(function(){return c(f,m)})),l.addEventListener("click",(function(){return o(e)})),i}function o(n,r){var o;(o=r,fetch("".concat(e.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:e.headers}).then(t)).then((function(){n.target.closest(".places__item").remove()})).catch((function(e){console.log(e)}))}function c(n,r){var o,c=$(n.closest(".card__description")).querySelector(".card__like-value");n.classList.contains("card__like-button_is-active")?(o=r,fetch("".concat(e.baseUrl,"/cards/likes/").concat(o),{method:"DELETE",headers:e.headers}).then(t)).then((function(e){c.textContent=e.likes.length,n.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)}(r).then((function(e){c.textContent=e.likes.length,n.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)}))}function a(e){e.classList.add("popup_is-animated"),e.classList.add("popup_is-opened"),document.addEventListener("keydown",i),document.addEventListener("mousedown",l)}function u(e){e.classList.add("popup_is-animated"),e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i),document.removeEventListener("mousedown",l)}function i(e){"Escape"===e.key&&u(document.querySelector(".popup_is-opened"))}function l(e){e.target.classList.contains("popup_is-opened")&&u(e.target)}var s=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},d=function(e,t){var n=e.querySelector(t.submitButtonSelector),r=Array.from(e.querySelectorAll(t.inputSelector));r.forEach((function(n){s(e,n,t)})),p(r,n,t)},p=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var _=document.querySelector(".places__list"),m=document.querySelector(".profile__edit-button"),y=document.querySelector(".profile__add-button"),v=document.querySelector(".popup_type_edit"),h=document.querySelector(".popup_type_avatar"),S=document.querySelector(".popup_type_new-card"),b=document.querySelectorAll(".popup__close"),q=v.querySelector(".popup__form"),g=q.querySelector(".popup__input_type_name"),L=q.querySelector(".popup__input_type_description"),E=S.querySelector(".popup__form"),k=E.querySelector(".popup__input_type_card-name"),C=E.querySelector(".popup__input_type_url"),x=document.querySelector(".profile__title"),A=document.querySelector(".profile__description"),w=document.querySelector(".popup_type_image"),U=w.querySelector(".popup__image"),D=w.querySelector(".popup__caption"),T=document.querySelector(".profile__image"),j=h.querySelector(".popup__form"),O=j.querySelector(".popup__input_type_url"),B={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function P(e,t){t.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить"}function I(e){U.src=e.link,U.alt=e.name,D.textContent=e.name,a(w)}_.addEventListener("click",I),m.addEventListener("click",(function(e){e.preventDefault(),a(v),g.value=x.textContent,L.value=A.textContent,d(v,B)})),q.addEventListener("submit",(function(n){var r,o,c;n.preventDefault(),P(!0,q),(r={name:g.value,about:L.value},o=r.name,c=r.about,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:o,about:c})}).then(t)).then((function(e){x.textContent=e.name,A.textContent=e.about,u(v)})).catch((function(e){console.log(e)})).finally((function(){P(!1,q)}))})),T.addEventListener("click",(function(e){e.preventDefault(),a(h),d(h,B)})),j.addEventListener("submit",(function(n){var r;n.preventDefault(),P(!0,j),(r=O.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){T.style.backgroundImage="url(".concat(e.avatar,")"),u(h)})).catch((function(e){console.log(e)})).finally((function(){P(!1,j)}))})),y.addEventListener("click",(function(e){e.preventDefault(),a(S),d(S,B)})),E.addEventListener("submit",(function(n){n.preventDefault();var a={name:k.value,link:C.value};P(!0,E),function(n){return fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:n.name,link:n.link})}).then(t)}(a).then((function(e){_.prepend(r(e,e.owner._id,I,o,c)),u(S)})).catch((function(e){console.log(e)})).finally((function(){P(!1,E)}))})),b.forEach((function(e){e.addEventListener("click",(function(){u(e.closest(".popup"))}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);p(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?s(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),p(n,r,t)}))}))}(t,e)}))}(B),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,a=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=a[0],i=a[1];x.textContent=u.name,A.textContent=u.about,T.style.backgroundImage="url(".concat(u.avatar,")"),i.forEach((function(e,t){_.prepend(r(e,I,o,c,t))}))})).catch((function(e){console.log(e)}))})();