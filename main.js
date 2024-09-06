(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{F:()=>i,z:()=>u});var n={baseUrl:"https://nomoreparties.co/v1/wff-cohort-19",headers:{authorization:"ff55c8a5-9e93-41a4-b092-8c36fdb087a0","Content-Type":"application/json"}};function r(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var o=function(e){return fetch("".concat(n.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:n.headers}).then(r)},c=function(e){return fetch("".concat(n.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:n.headers}).then(r)},a=document.querySelector("#card-template").content;function u(e,t,n,r,o){var c=a.querySelector(".places__item").cloneNode(!0),u=c.querySelector(".card__image"),i=c.querySelector(".card__title"),l=c.querySelector(".card__delete-button"),s=c.querySelector(".card__like-button"),d=c.querySelector(".card__like-value"),p=e._id;return c.dataset.cardId=e._id,i.textContent=e.name,u.src=e.link,u.alt=e.name,d.textContent=e.likes.length,e.likes.some((function(e){return e._id===t}))&&s.classList.add("card__like-button_is-active"),e.owner._id===t?(l.classList.add("card__delete-button_active"),l.addEventListener("click",(function(e){var t=e.target.closest(".card");r(t)}))):l.remove(),s.addEventListener("click",(function(e){return o(e,p,d)})),u.addEventListener("click",(function(){n(u.src,u.alt,i.textContent)})),c}function i(e,t,n){(e.target.classList.contains("card__like-button_is-active")?c:o)(t).then((function(t){n.textContent=t.likes.length,e.target.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)}))}function l(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",d),e.addEventListener("mousedown",p)}function s(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",d),e.removeEventListener("mousedown",p)}function d(e){"Escape"===e.key&&s(document.querySelector(".popup_is-opened"))}function p(e){e.target.classList.contains("popup_is-opened")&&s(e.target)}var f=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},_=function(e,t){var n=e.querySelector(t.submitButtonSelector),r=Array.from(e.querySelectorAll(t.inputSelector));r.forEach((function(n){f(e,n,t)})),m(r,n,t)},m=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var v=document.querySelector(".places__list"),h=document.querySelector(".profile__edit-button"),b=document.querySelector(".profile__add-button"),S=document.querySelector(".popup_type_edit"),g=document.querySelector(".popup_type_avatar"),q=document.querySelector(".popup_type_new-card"),E=document.querySelectorAll(".popup__close"),L=S.querySelector(".popup__form"),C=L.querySelector(".popup__input_type_name"),k=L.querySelector(".popup__input_type_description"),x=document.querySelector(".profile__title"),A=document.querySelector(".profile__description"),w=document.querySelector(".popup_type_image"),O=w.querySelector(".popup__image"),j=w.querySelector(".popup__caption"),P=document.forms["new-place"],U=P["place-name"],T=P.link,D=document.querySelector(".popup_type_delete-image"),B=document.forms["delete-card"],I=D.querySelector(".popup__button"),M=document.querySelector(".profile__image"),N=g.querySelector(".popup__form"),J=N.querySelector(".popup__input_type_url"),z=null,H=null,V={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function F(e,t){t.textContent=e?"Сохранение...":"Сохранить"}function $(e,t,n){O.src=e,O.alt=t,j.textContent=n,l(w)}function G(e,t){H={id:e,cardElement:t},l(D)}h.addEventListener("click",(function(e){e.preventDefault(),l(S),C.value=x.textContent,k.value=A.textContent,_(S,V)})),L.addEventListener("submit",(function(e){var t,o,c;e.preventDefault(),F(!0,z=L.querySelector(".popup__button")),(t={name:C.value,about:k.value},o=t.name,c=t.about,fetch("".concat(n.baseUrl,"/users/me"),{method:"PATCH",headers:n.headers,body:JSON.stringify({name:o,about:c})}).then(r)).then((function(e){x.textContent=e.name,A.textContent=e.about,s(S)})).catch((function(e){console.log(e)})).finally((function(){F(!1,z)}))})),M.addEventListener("click",(function(e){e.preventDefault(),l(g),_(g,V)})),N.addEventListener("submit",(function(e){var t;e.preventDefault(),F(!0,z=N.querySelector(".popup__button")),(t=J.value,fetch("".concat(n.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:n.headers,body:JSON.stringify({avatar:t})}).then(r)).then((function(e){M.style.backgroundImage="url(".concat(e.avatar,")"),s(g)})).catch((function(e){console.log(e)})).finally((function(){F(!1,z)}))})),b.addEventListener("click",(function(e){e.preventDefault(),l(q),_(q,V)})),P.addEventListener("submit",(function(e){e.preventDefault(),z=P.querySelector(".popup__button");var t={name:U.value,link:T.value};F(!0,z),function(e){return fetch("".concat(n.baseUrl,"/cards"),{method:"POST",headers:n.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(r)}(t).then((function(e){v.prepend(u(e,e.owner._id,$,G,i)),s(q),P.reset()})).catch((function(e){console.log(e)})).finally((function(){F(!1,z)}))})),B.addEventListener("submit",(function(e){var o;e.preventDefault(),(o=H.id,fetch("".concat(n.baseUrl,"/cards/").concat(o),{method:"DELETE",headers:n.headers}).then(r)).then((function(){H.cardElement.remove(),(0,t.deleteCard)(H),closePopup(D,I)})).catch((function(e){console.log(e)}))})),E.forEach((function(e){e.addEventListener("click",(function(){s(e.closest(".popup"))}))})),Promise.all([fetch("".concat(n.baseUrl,"/users/me"),{headers:n.headers}).then(r),fetch("".concat(n.baseUrl,"/cards"),{headers:n.headers}).then(r)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];x.textContent=o.name,A.textContent=o.about,M.style.backgroundImage="url(".concat(o.avatar,")"),c.forEach((function(e){v.append(u(e,o._id,$,G,i))}))})).catch((function(e){console.log(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);m(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?f(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),m(n,r,t)}))}))}(t,e)}))}(V)})();
//# sourceMappingURL=main.js.map