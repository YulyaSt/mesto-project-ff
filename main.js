(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-19",headers:{authorization:"ff55c8a5-9e93-41a4-b092-8c36fdb087a0","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function n(e,t,n,r,o){var c=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),a=c.querySelector(".card__image"),i=c.querySelector(".card__title"),u=c.querySelector(".card__delete-button"),l=c.querySelector(".card__like-button"),s=c.querySelector(".card__like-value"),d=e.likes,p=e._id;return i.textContent=e.name,a.src=e.link,a.alt=e.name,s.textContent=d.length,e.owner._id===t?u.addEventListener("click",(function(){n(c,p)})):u.remove(),a.addEventListener("click",(function(){return r(e.name,e.link)})),e.likes.some((function(e){return e._id===t}))?l.classList.add("card__like-button_is-active"):l.classList.remove("card__like-button_is-active"),l.addEventListener("click",(function(){return o(s,p,d)})),c}function r(n,r){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n._id),{method:"DELETE",headers:e.headers}).then(t)})(r).then((function(){n.target.closest(".places__item").remove()})).catch((function(e){console.log(e)}))}function o(n,r){var o=n.closest(".card__description").querySelector(".card__like-value");n.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n._id,"/likes"),{method:"DELETE",headers:e.headers}).then(t)}(r).then((function(e){o.textContent=e.likes.length,n.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)})):function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n._id,"/likes"),{method:"PUT",headers:e.headers}).then(t)}(r).then((function(e){o.textContent=e.likes.length,n.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)}))}function c(e){e.classList.add("popup_is-animated"),e.classList.add("popup_is-opened"),document.addEventListener("keydown",i),document.addEventListener("mousedown",u)}function a(e){e.classList.add("popup_is-animated"),e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",i),document.removeEventListener("mousedown",u)}function i(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}function u(e){e.target.classList.contains("popup_is-opened")&&a(e.target)}var l=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},s=function(e,t){var n=e.querySelector(t.submitButtonSelector),r=Array.from(e.querySelectorAll(t.inputSelector));r.forEach((function(n){l(e,n,t)})),d(r,n,t)},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var f=document.querySelector(".places__list"),_=document.querySelector(".profile__edit-button"),m=document.querySelector(".profile__add-button"),y=document.querySelector(".popup_type_edit"),v=document.querySelector(".popup_type_avatar"),h=document.querySelector(".popup_type_new-card"),S=document.querySelectorAll(".popup__close"),b=y.querySelector(".popup__form"),q=b.querySelector(".popup__input_type_name"),g=b.querySelector(".popup__input_type_description"),L=h.querySelector(".popup__form"),k=L.querySelector(".popup__input_type_card-name"),E=L.querySelector(".popup__input_type_url"),C=document.querySelector(".profile__title"),x=document.querySelector(".profile__description"),A=document.querySelector(".popup_type_image"),w=A.querySelector(".popup__image"),U=A.querySelector(".popup__caption"),D=document.querySelector(".profile__image"),T=v.querySelector(".popup__form"),j=T.querySelector(".popup__input_type_url"),O={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function B(e,t){t.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить"}function P(e){c(A),w.src=e.link,w.alt=e.name,U.textContent=e.name}f.addEventListener("click",P),_.addEventListener("click",(function(e){e.preventDefault(),c(y),q.value=C.textContent,g.value=x.textContent,s(y,O)})),b.addEventListener("submit",(function(n){var r,o,c;n.preventDefault(),B(!0,b),(r={name:q.value,about:g.value},o=r.name,c=r.about,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:o,about:c})}).then(t)).then((function(e){C.textContent=e.name,x.textContent=e.about,a(y)})).catch((function(e){console.log(e)})).finally((function(){B(!1,b)}))})),D.addEventListener("click",(function(e){e.preventDefault(),c(v),s(v,O)})),T.addEventListener("submit",(function(n){var r;n.preventDefault(),B(!0,T),(r=j.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){D.style.backgroundImage="url(".concat(e.avatar,")"),a(v)})).catch((function(e){console.log(e)})).finally((function(){B(!1,T)}))})),m.addEventListener("click",(function(e){e.preventDefault(),c(h),s(h,O)})),L.addEventListener("submit",(function(c){c.preventDefault();var i={name:k.value,link:E.value};B(!0,L),function(n){return fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:n.name,link:n.link})}).then(t)}(i).then((function(e){f.prepend(n(e,e.owner._id,P,r,o)),a(h)})).catch((function(e){console.log(e)})).finally((function(){B(!1,L)}))})),S.forEach((function(e){e.addEventListener("click",(function(){a(e.closest(".popup"))}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);d(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?l(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),d(n,r,t)}))}))}(t,e)}))}(O),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,c,a=(c=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,c)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(t,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=a[0],u=a[1];C.textContent=i.name,x.textContent=i.about,D.style.backgroundImage="url(".concat(i.avatar,")"),u.forEach((function(e,t){f.prepend(n(e,t,P,r,o))}))})).catch((function(e){console.log(e)}))})();