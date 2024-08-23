(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-19",headers:{authorization:"ff55c8a5-9e93-41a4-b092-8c36fdb087a0","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=document.querySelector("#card-template").content;function r(e,t,r,o,c){var a=n.querySelector(".places__item").cloneNode(!0),i=a.querySelector(".card__image"),u=a.querySelector(".card__title"),l=a.querySelector(".card__delete-button"),s=a.querySelector(".card__like-button"),d=a.querySelector(".card__like-value"),p=e.likes,f=e._id;return u.textContent=e.name,i.src=e.link,i.alt=e.name,d.textContent=p.length,e.owner._id===t?l.addEventListener("click",(function(){r(a,f)})):l.remove(),i.addEventListener("click",(function(){return o(e.name,e.link)})),e.likes.some((function(e){return e._id===t}))?s.classList.add("card__like-button_is-active"):s.classList.remove("card__like-button_is-active"),s.addEventListener("click",(function(){return c(d,f,p)})),a}function o(n,r){(function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n._id),{method:"DELETE",headers:e.headers}).then(t)})(r).then((function(){n.target.closest(".places__item").remove()})).catch((function(e){console.log(e)}))}function c(n,r){var o=n.closest(".card__description").querySelector(".card__like-value");n.classList.contains("card__like-button_is-active")?function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n._id),{method:"DELETE",headers:e.headers}).then(t)}(r).then((function(e){o.textContent=e.likes.length,n.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)})):function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n._id),{method:"PUT",headers:e.headers}).then(t)}(r).then((function(e){o.textContent=e.likes.length,n.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)}))}function a(e){e.classList.add("popup_is-animated"),e.classList.add("popup_is-opened"),document.addEventListener("keydown",u),document.addEventListener("mousedown",l)}function i(e){e.classList.add("popup_is-animated"),e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",u),document.removeEventListener("mousedown",l)}function u(e){"Escape"===e.key&&i(document.querySelector(".popup_is-opened"))}function l(e){e.target.classList.contains("popup_is-opened")&&i(e.target)}var s=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},d=function(e,t){var n=e.querySelector(t.submitButtonSelector),r=Array.from(e.querySelectorAll(t.inputSelector));r.forEach((function(n){s(e,n,t)})),p(r,n,t)},p=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var _=document.querySelector(".places__list"),m=document.querySelector(".profile__edit-button"),y=document.querySelector(".profile__add-button"),v=document.querySelector(".popup_type_edit"),h=document.querySelector(".popup_type_avatar"),S=document.querySelector(".popup_type_new-card"),b=document.querySelectorAll(".popup__close"),g=v.querySelector(".popup__form"),q=g.querySelector(".popup__input_type_name"),L=g.querySelector(".popup__input_type_description"),k=S.querySelector(".popup__form"),E=k.querySelector(".popup__input_type_card-name"),C=k.querySelector(".popup__input_type_url"),x=document.querySelector(".profile__title"),A=document.querySelector(".profile__description"),w=document.querySelector(".popup_type_image"),U=w.querySelector(".popup__image"),D=w.querySelector(".popup__caption"),T=document.querySelector(".profile__image"),j=h.querySelector(".popup__form"),O=j.querySelector(".popup__input_type_url"),B={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function P(e,t){t.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить"}function I(e){a(w),U.src=e.target.src,U.alt=e.target.closest(".card").textContent,D.textContent=e.target.closest(".card").textContent}_.addEventListener("click",I),m.addEventListener("click",(function(e){e.preventDefault(),a(v),q.value=x.textContent,L.value=A.textContent,d(v,B)})),g.addEventListener("submit",(function(n){var r,o,c;n.preventDefault(),P(!0,g),(r={name:q.value,about:L.value},o=r.name,c=r.about,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:o,about:c})}).then(t)).then((function(e){x.textContent=e.name,A.textContent=e.about,i(v)})).catch((function(e){console.log(e)})).finally((function(){P(!1,g)}))})),T.addEventListener("click",(function(e){e.preventDefault(),a(h),d(h,B)})),j.addEventListener("submit",(function(n){var r;n.preventDefault(),P(!0,j),(r=O.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){T.style.backgroundImage="url(".concat(e.avatar,")"),i(h)})).catch((function(e){console.log(e)})).finally((function(){P(!1,j)}))})),y.addEventListener("click",(function(e){e.preventDefault(),a(S),d(S,B)})),k.addEventListener("submit",(function(n){n.preventDefault();var a,u,l,s={name:E.value,link:C.value};P(!0,k),(a=s,u=a.name,l=a.link,fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:u,link:l})}).then(t)).then((function(e){_.prepend(r(e,e.owner._id,I,o,c)),i(S)})).catch((function(e){console.log(e)})).finally((function(){P(!1,k)}))})),b.forEach((function(e){e.addEventListener("click",(function(){i(e.closest(".popup"))}))})),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,a,i,u=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,i=[],u=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return f(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=u[0],s=u[1];x.textContent=l.name,A.textContent=l.about,T.style.backgroundImage="url(".concat(l.avatar,")"),a=l,i=s,Array.isArray(i)&&i.forEach((function(e){var t=r(e,a,I,o,c);_.append(t)}))})).catch((function(e){console.log(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);p(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?s(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),p(n,r,t)}))}))}(t,e)}))}(B)})();
//# sourceMappingURL=main.js.map