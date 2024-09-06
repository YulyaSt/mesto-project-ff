(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-19",headers:{authorization:"ff55c8a5-9e93-41a4-b092-8c36fdb087a0","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)},r=function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then(t)},o=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)},c=document.querySelector("#card-template").content;function a(e,t,n,r,o){var a=c.querySelector(".places__item").cloneNode(!0),u=a.querySelector(".card__image"),i=a.querySelector(".card__title"),l=a.querySelector(".card__delete-button"),s=a.querySelector(".card__like-button"),d=a.querySelector(".card__like-value"),p=e._id;return a.dataset.cardId=e._id,i.textContent=e.name,u.src=e.link,u.alt=e.name,d.textContent=e.likes.length,e.likes.some((function(e){return e._id===t}))&&s.classList.add("card__like-button_is-active"),e.owner._id===t?(l.classList.add("card__delete-button_active"),l.addEventListener("click",(function(e){var t=e.target.closest(".card");r(t)}))):l.remove(),s.addEventListener("click",(function(e){return o(e,p,d)})),u.addEventListener("click",(function(){n(u.src,u.alt,i.textContent)})),a}function u(e){r(e.dataset.cardId).then((function(){e.remove()})).catch((function(e){console.log(e)}))}function i(e,t,r){(e.target.classList.contains("card__like-button_is-active")?o:n)(t).then((function(t){r.textContent=t.likes.length,e.target.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)}))}function l(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",d),e.addEventListener("mousedown",p)}function s(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",d),e.removeEventListener("mousedown",p)}function d(e){"Escape"===e.key&&s(document.querySelector(".popup_is-opened"))}function p(e){e.target.classList.contains("popup_is-opened")&&s(e.target)}var f=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},_=function(e,t){var n=e.querySelector(t.submitButtonSelector),r=Array.from(e.querySelectorAll(t.inputSelector));r.forEach((function(n){f(e,n,t)})),m(r,n,t)},m=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var v=document.querySelector(".places__list"),h=document.querySelector(".profile__edit-button"),b=document.querySelector(".profile__add-button"),S=document.querySelector(".popup_type_edit"),q=document.querySelector(".popup_type_avatar"),g=document.querySelector(".popup_type_new-card"),E=document.querySelectorAll(".popup__close"),L=S.querySelector(".popup__form"),C=L.querySelector(".popup__input_type_name"),k=L.querySelector(".popup__input_type_description"),x=document.querySelector(".profile__title"),A=document.querySelector(".profile__description"),w=document.querySelector(".popup_type_image"),U=w.querySelector(".popup__image"),D=w.querySelector(".popup__caption"),I=document.forms["new-place"],T=I["place-name"],j=I.link,B=document.querySelector(".profile__image"),O=q.querySelector(".popup__form"),P=O.querySelector(".popup__input_type_url"),M=document.querySelector(".popup_type_delete-image"),N=document.forms["delete-card"],J=null,H=null;function V(e){H=e,l(M)}N.addEventListener("submit",(function(e){!function(e){e.preventDefault();var t=document.getElementById(H);r(H).then((function(){s(M),u(t)})).catch((function(e){console.error(e)}))}(e)}));var z={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function $(e,t){t.textContent=e?"Сохранение...":"Сохранить"}function F(e,t,n){U.src=e,U.alt=t,D.textContent=n,l(w)}h.addEventListener("click",(function(e){e.preventDefault(),l(S),C.value=x.textContent,k.value=A.textContent,_(S,z)})),L.addEventListener("submit",(function(n){var r,o,c;n.preventDefault(),$(!0,J=L.querySelector(".popup__button")),(r={name:C.value,about:k.value},o=r.name,c=r.about,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:o,about:c})}).then(t)).then((function(e){x.textContent=e.name,A.textContent=e.about,s(S)})).catch((function(e){console.log(e)})).finally((function(){$(!1,J)}))})),B.addEventListener("click",(function(e){e.preventDefault(),l(q),_(q,z)})),O.addEventListener("submit",(function(n){var r;n.preventDefault(),$(!0,J=O.querySelector(".popup__button")),(r=P.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){B.style.backgroundImage="url(".concat(e.avatar,")"),s(q)})).catch((function(e){console.log(e)})).finally((function(){$(!1,J)}))})),b.addEventListener("click",(function(e){e.preventDefault(),l(g),_(g,z)})),I.addEventListener("submit",(function(n){n.preventDefault(),J=I.querySelector(".popup__button");var r={name:T.value,link:j.value};$(!0,J),function(n){return fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:n.name,link:n.link})}).then(t)}(r).then((function(e){v.prepend(a(e,e.owner._id,F,V,i)),s(g),I.reset()})).catch((function(e){console.log(e)})).finally((function(){$(!1,J)}))})),E.forEach((function(e){e.addEventListener("click",(function(){s(e.closest(".popup"))}))})),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];x.textContent=o.name,A.textContent=o.about,B.style.backgroundImage="url(".concat(o.avatar,")"),c.forEach((function(e){v.append(a(e,o._id,F,u,i))}))})).catch((function(e){console.log(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);m(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?f(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),m(n,r,t)}))}))}(t,e)}))}(z)})();
//# sourceMappingURL=main.js.map