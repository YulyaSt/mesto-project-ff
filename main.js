(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-19",headers:{authorization:"ff55c8a5-9e93-41a4-b092-8c36fdb087a0","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"PUT",headers:e.headers}).then(t)},r=function(n){return fetch("".concat(e.baseUrl,"/cards/").concat(n),{method:"DELETE",headers:e.headers}).then(t)},o=function(n){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(n),{method:"DELETE",headers:e.headers}).then(t)},c=document.querySelector("#card-template").content;function a(e,t,n,r,o){var a=c.querySelector(".places__item").cloneNode(!0),u=a.querySelector(".card__image"),i=a.querySelector(".card__title"),l=a.querySelector(".card__delete-button"),s=a.querySelector(".card__like-button"),d=a.querySelector(".card__like-value"),p=e._id;return a.dataset.cardId=e._id,i.textContent=e.name,u.src=e.link,u.alt=e.name,d.textContent=e.likes.length,e.likes.some((function(e){return e._id===t}))&&s.classList.add("card__like-button_is-active"),e.owner._id===t?(l.classList.add("card__delete-button_active"),l.addEventListener("click",(function(e){var t=e.target.closest(".card");r(t)}))):l.remove(),s.addEventListener("click",(function(e){return o(e,p,d)})),u.addEventListener("click",(function(){n(u.src,u.alt,i.textContent)})),a}function u(e,t,r){(e.target.classList.contains("card__like-button_is-active")?o:n)(t).then((function(t){r.textContent=t.likes.length,e.target.classList.toggle("card__like-button_is-active")})).catch((function(e){console.log(e)}))}function i(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",s),e.addEventListener("mousedown",d)}function l(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",s),e.removeEventListener("mousedown",d)}function s(e){"Escape"===e.key&&l(document.querySelector(".popup_is-opened"))}function d(e){e.target.classList.contains("popup_is-opened")&&l(e.target)}var p=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},f=function(e,t){var n=e.querySelector(t.submitButtonSelector),r=Array.from(e.querySelectorAll(t.inputSelector));r.forEach((function(n){p(e,n,t)})),_(r,n,t)},_=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var y=document.querySelector(".places__list"),v=document.querySelector(".profile__edit-button"),h=document.querySelector(".profile__add-button"),b=document.querySelector(".popup_type_edit"),S=document.querySelector(".popup_type_avatar"),q=document.querySelector(".popup_type_new-card"),g=document.querySelectorAll(".popup__close"),E=b.querySelector(".popup__form"),L=E.querySelector(".popup__input_type_name"),C=E.querySelector(".popup__input_type_description"),k=document.querySelector(".profile__title"),x=document.querySelector(".profile__description"),A=document.querySelector(".popup_type_image"),w=A.querySelector(".popup__image"),U=A.querySelector(".popup__caption"),D=document.forms["new-place"],I=D["place-name"],T=D.link,j=document.querySelector(".profile__image"),B=S.querySelector(".popup__form"),O=B.querySelector(".popup__input_type_url"),P=document.querySelector(".popup_type_delete-image"),M=document.forms["delete-card"],N=null,J=null;function H(e){J=e,i(P)}M.addEventListener("submit",(function(e){!function(e){e.preventDefault();var t=document.getElementById(J);r(J).then((function(){var e;l(P),r((e=t).dataset.cardId).then((function(){e.remove()})).catch((function(e){console.log(e)}))})).catch((function(e){console.error(e)}))}(e)}));var V={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function z(e,t){t.textContent=e?"Сохранение...":"Сохранить"}function $(e,t,n){w.src=e,w.alt=t,U.textContent=n,i(A)}v.addEventListener("click",(function(e){e.preventDefault(),i(b),L.value=k.textContent,C.value=x.textContent,f(b,V)})),E.addEventListener("submit",(function(n){var r,o,c;n.preventDefault(),z(!0,N=E.querySelector(".popup__button")),(r={name:L.value,about:C.value},o=r.name,c=r.about,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:o,about:c})}).then(t)).then((function(e){k.textContent=e.name,x.textContent=e.about,l(b)})).catch((function(e){console.log(e)})).finally((function(){z(!1,N)}))})),j.addEventListener("click",(function(e){e.preventDefault(),i(S),f(S,V)})),B.addEventListener("submit",(function(n){var r;n.preventDefault(),z(!0,N=B.querySelector(".popup__button")),(r=O.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){j.style.backgroundImage="url(".concat(e.avatar,")"),l(S)})).catch((function(e){console.log(e)})).finally((function(){z(!1,N)}))})),h.addEventListener("click",(function(e){e.preventDefault(),i(q),f(q,V)})),D.addEventListener("submit",(function(n){n.preventDefault(),N=D.querySelector(".popup__button");var r={name:I.value,link:T.value};z(!0,N),function(n){return fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:n.name,link:n.link})}).then(t)}(r).then((function(e){y.prepend(a(e,e.owner._id,$,H,u)),l(q),D.reset()})).catch((function(e){console.log(e)})).finally((function(){z(!1,N)}))})),g.forEach((function(e){e.addEventListener("click",(function(){l(e.closest(".popup"))}))})),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,a,u=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(t,n)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];k.textContent=o.name,x.textContent=o.about,j.style.backgroundImage="url(".concat(o.avatar,")"),c.forEach((function(e){y.append(a(e,o._id,$,H,u))}))})).catch((function(e){console.log(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);_(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?p(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),_(n,r,t)}))}))}(t,e)}))}(V)})();
//# sourceMappingURL=main.js.map