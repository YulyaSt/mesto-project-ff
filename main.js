(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-19",headers:{authorization:"ff55c8a5-9e93-41a4-b092-8c36fdb087a0","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function n(e,t,n,r,o){var a,c,u=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),i=u.querySelector(".card__image"),l=u.querySelector(".card__title"),s=u.querySelector(".card__delete-button"),p=u.querySelector(".card__like-button"),d=(u.querySelector(".card__like-value"),e.likes),f=e._id;return l.textContent=e.name,i.src=e.link,i.alt=e.name,t===e.owner._id?s.addEventListener("click",(function(){return n(u,f)})):s.remove(),a=t,c=d.map((function(e){return e._id})),c.includes(a)&&p.classList.add("card__like-button_is-active"),i.addEventListener("click",(function(){return r(e)})),p.addEventListener("click",(function(){p.classList.contains("card__like-button")&&p.classList.toggle("card__like-button_is-active")})),u}function r(n,r){var o;(o=r,fetch("".concat(e.baseUrl,"/cards/").concat(o._id),{method:"DELETE",headers:e.headers}).then(t)).then((function(){n.target.closest(".places__item").remove()})).catch((function(e){console.log(e)}))}function o(e){e.classList.add("popup_is-animated"),e.classList.add("popup_is-opened"),document.addEventListener("keydown",c),document.addEventListener("mousedown",u)}function a(e){e.classList.add("popup_is-animated"),e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c),document.removeEventListener("mousedown",u)}function c(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}function u(e){e.target.classList.contains("popup_is-opened")&&a(e.target)}var i=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},l=function(e,t){var n=e.querySelector(t.submitButtonSelector),r=Array.from(e.querySelectorAll(t.inputSelector));r.forEach((function(n){i(e,n,t)})),s(r,n,t)},s=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var d=document.querySelector(".places__list"),f=document.querySelector(".profile__edit-button"),_=document.querySelector(".profile__add-button"),m=document.querySelector(".popup_type_edit"),y=document.querySelector(".popup_type_avatar"),v=document.querySelector(".popup_type_new-card"),h=document.querySelectorAll(".popup__close"),S=m.querySelector(".popup__form"),b=S.querySelector(".popup__input_type_name"),q=S.querySelector(".popup__input_type_description"),L=v.querySelector(".popup__form"),E=L.querySelector(".popup__input_type_card-name"),g=L.querySelector(".popup__input_type_url"),C=document.querySelector(".profile__title"),k=document.querySelector(".profile__description"),A=document.querySelector(".popup_type_image"),x=A.querySelector(".popup__image"),w=A.querySelector(".popup__caption"),D=document.querySelector(".profile__image"),U=y.querySelector(".popup__form"),j=U.querySelector(".popup__input_type_url"),O={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function B(e,t){t.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить"}function T(e){x.src=e.link,x.alt=e.name,w.textContent=e.name,o(A)}d.addEventListener("click",T),f.addEventListener("click",(function(e){e.preventDefault(),o(m),b.value=C.textContent,q.value=k.textContent,l(m,O)})),S.addEventListener("submit",(function(n){var r,o,c;n.preventDefault(),B(!0,S),(r={name:b.value,about:q.value},o=r.name,c=r.about,fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify({name:o,about:c})}).then(t)).then((function(e){C.textContent=e.name,k.textContent=e.about,a(m)})).catch((function(e){console.log(e)})).finally((function(){B(!1,S)}))})),D.addEventListener("click",(function(e){e.preventDefault(),o(y),l(y,O)})),U.addEventListener("submit",(function(n){var r;n.preventDefault(),B(!0,U),(r=j.value,fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify({avatar:r})}).then(t)).then((function(e){D.style.backgroundImage="url(".concat(e.avatar,")"),a(y)})).catch((function(e){console.log(e)})).finally((function(){B(!1,U)}))})),_.addEventListener("click",(function(e){e.preventDefault(),o(v),l(v,O)})),L.addEventListener("submit",(function(o){o.preventDefault();var c={name:E.value,link:g.value};B(!0,L),function(n){return fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify({name:n.name,link:n.link})}).then(t)}(c).then((function(e){d.prepend(n(e,e.owner._id,T,r)),a(v)})).catch((function(e){console.log(e)})).finally((function(){B(!1,L)}))})),h.forEach((function(e){e.addEventListener("click",(function(){a(e.closest(".popup"))}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);s(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?i(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),s(n,r,t)}))}))}(t,e)}))}(O),Promise.all([fetch("".concat(e.baseUrl,"/users/me"),{headers:e.headers}).then(t),fetch("".concat(e.baseUrl,"/cards"),{headers:e.headers}).then(t)]).then((function(e){var t,o,a=(o=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,c,u=[],i=!0,l=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(l)throw o}}return u}}(t,o)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(t,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=a[0],u=a[1];C.textContent=c.name,k.textContent=c.about,D.style.backgroundImage="url(".concat(c.avatar,")"),u.forEach((function(e,t){d.prepend(n(e,T,r,t))}))})).catch((function(e){console.log(e)}))})();