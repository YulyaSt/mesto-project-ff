(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-19",headers:{authorization:"ff55c8a5-9e93-41a4-b092-8c36fdb087a0","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)},r=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)},o=document.querySelector("#card-template").content;function a(e,t,a){var i=o.querySelector(".places__item").cloneNode(!0),u=i.querySelector(".card__image"),l=i.querySelector(".card__title"),s=i.querySelector(".card__delete-button"),d=i.querySelector(".card__like-button"),p=i.querySelector(".card__like-value");return i.dataset.cardId=e._id,l.textContent=e.name,u.src=e.link,u.alt=e.name,e.likes.length&&(p.textContent=e.likes.length),e.likes.some((function(e){return e._id===t}))&&d.classList.toggle("card__like-button_is-active"),e.owner._id===t?(s.classList.add("card__delete-button_active"),s.addEventListener("click",(function(e){var t=e.target.closest(".card");c(t)}))):s.remove(),d.addEventListener("click",(function(t){return function(e,t){var o=e.target.dataset.cardId;o.classList.contains("card__like-button_is-active")?r(t.dataset.cardId).then((function(e){likesValue.textContent=e.likes.length,o.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)})):n(t.dataset.cardId).then((function(e){likesValue.textContent=e.likes.length,o.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)}))}(t,e._id)})),u.addEventListener("click",(function(){return a})),i}var c=function(n){var r;(r=n.dataset.cardId,fetch("".concat(e.baseUrl,"/cards/").concat(r),{method:"DELETE",headers:e.headers}).then(t)).then((function(){n.remove()})).catch((function(e){console.log(e)}))};function i(e){e.classList.add("popup_is-animated"),e.classList.add("popup_is-opened"),document.addEventListener("keydown",l),document.addEventListener("mousedown",s)}function u(e){e.classList.add("popup_is-animated"),e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",l),document.removeEventListener("mousedown",s)}function l(e){"Escape"===e.key&&u(document.querySelector(".popup_is-opened"))}function s(e){e.target.classList.contains("popup_is-opened")&&u(e.target)}var d=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},p=function(e,t){var n=e.querySelector(t.submitButtonSelector),r=Array.from(e.querySelectorAll(t.inputSelector));r.forEach((function(n){d(e,n,t)})),f(r,n,t)},f=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var m=document.querySelector(".places__list"),v=document.querySelector(".profile__edit-button"),y=document.querySelector(".profile__add-button"),h=document.querySelector(".popup_type_edit"),b=document.querySelector(".popup_type_avatar"),S=document.querySelector(".popup_type_new-card"),g=document.querySelectorAll(".popup__close"),L=h.querySelector(".popup__form"),q=L.querySelector(".popup__input_type_name"),k=L.querySelector(".popup__input_type_description"),E=document.querySelector(".profile__title"),C=document.querySelector(".profile__description"),x=document.querySelector(".popup_type_image"),A=x.querySelector(".popup__image"),w=x.querySelector(".popup__caption"),U=document.forms["new-place"],I=U.querySelector(".popup__button"),D=U["place-name"],T=U.link,j=document.querySelector(".popup_delete-image"),O=j.querySelector(".popup__button"),B=document.querySelector(".profile__image"),P=b.querySelector(".popup__form"),M=P.querySelector(".popup__input_type_url"),N={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function V(e,t){t.textContent=e?"Сохранение...":"Сохранить"}function J(e){e.target.classList.contains("card__image")&&(i(x),A.src=e.target.src,A.alt=e.target.alt,w.textContent=e.target.alt)}m.addEventListener("click",J),v.addEventListener("click",(function(e){e.preventDefault(),i(h),q.value=E.textContent,k.value=C.textContent,p(h,N)})),L.addEventListener("submit",(function(n){var r,o,a;n.preventDefault(),V(!0,L),(r={name:q.value,about:k.value},o=r.name,a=r.about,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:o,about:a})}).then(t)).then((function(e){E.textContent=e.name,C.textContent=e.about,u(h)})).catch((function(e){console.log(e)})).finally((function(){V(!1,L)}))})),B.addEventListener("click",(function(e){e.preventDefault(),i(b),p(b,N)})),P.addEventListener("submit",(function(n){var r;n.preventDefault(),V(!0,P),(r=M.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){B.style.backgroundImage="url(".concat(e.avatar,")"),u(b)})).catch((function(e){console.log(e)})).finally((function(){V(!1,P)}))})),y.addEventListener("click",(function(e){e.preventDefault(),i(S),p(S,N)})),U.addEventListener("submit",(function(n){n.preventDefault();var r={name:D.value,link:T.value};V(!0,I),function(n){return fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:n.name,link:n.link})}).then(t)}(r).then((function(e){m.prepend(a(e,e.owner._id,J)),u(S),U.reset()})).catch((function(e){console.log(e)})).finally((function(){V(!1,I)}))})),O.addEventListener("click",(function(){c(null),u(j)})),g.forEach((function(e){e.addEventListener("click",(function(){u(e.closest(".popup"))}))})),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,c,i=[],u=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){l=!0,o=e}finally{try{if(!u&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];E.textContent=o.name,C.textContent=o.about,B.style.backgroundImage="url(".concat(o.avatar,")"),c.forEach((function(e){m.append(a(e,o._id,J))}))})).catch((function(e){console.log(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);f(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?d(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),f(n,r,t)}))}))}(t,e)}))}(N)})();
//# sourceMappingURL=main.js.map