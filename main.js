(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-19",headers:{authorization:"ff55c8a5-9e93-41a4-b092-8c36fdb087a0","Content-Type":"application/json"}};function t(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}var n=document.querySelector("#card-template").content;function r(e,t,r,u){var a=n.querySelector(".places__item").cloneNode(!0),c=a.querySelector(".card__image"),i=a.querySelector(".card__title"),l=a.querySelector(".card__delete-button"),s=a.querySelector(".card__like-button"),d=a.querySelector(".card__like-value");return a.id=e._id,i.textContent=e.name,c.src=e.link,c.alt=e.name,e.likes.length&&(d.textContent=e.likes.length),e.likes.some((function(e){return e._id===t}))&&s.classList.add("card__like-button_is-active"),e.owner._id===t?(l.classList.add("card__delete-button_active"),l.addEventListener("click",(function(e){o(e.target.closest(".card"))}))):l.remove(),s.addEventListener("click",(function(t){return r(t,e._id)})),c.addEventListener("click",(function(){return u})),a}function o(e){e.remove()}function u(e){e.classList.add("popup_is-animated"),e.classList.add("popup_is-opened"),document.addEventListener("keydown",c),document.addEventListener("mousedown",i)}function a(e){e.classList.add("popup_is-animated"),e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",c),document.removeEventListener("mousedown",i)}function c(e){"Escape"===e.key&&a(document.querySelector(".popup_is-opened"))}function i(e){e.target.classList.contains("popup_is-opened")&&a(e.target)}var l=function(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""},s=function(e,t){var n=e.querySelector(t.submitButtonSelector),r=Array.from(e.querySelectorAll(t.inputSelector));r.forEach((function(n){l(e,n,t)})),d(r,n,t)},d=function(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))};function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var f=document.querySelector(".places__list"),_=document.querySelector(".profile__edit-button"),m=document.querySelector(".profile__add-button"),y=document.querySelector(".popup_type_edit"),v=document.querySelector(".popup_type_avatar"),h=document.querySelector(".popup_type_new-card"),S=document.querySelectorAll(".popup__close"),b=y.querySelector(".popup__form"),q=b.querySelector(".popup__input_type_name"),g=b.querySelector(".popup__input_type_description"),L=h.querySelector(".popup__form"),E=L.querySelector(".popup__input_type_card-name"),C=L.querySelector(".popup__input_type_url"),k=document.querySelector(".profile__title"),A=document.querySelector(".profile__description"),x=document.querySelector(".popup_type_image"),w=x.querySelector(".popup__image"),D=x.querySelector(".popup__caption"),U=document.querySelector(".popup_delete-image"),j=U.querySelector(".popup__button"),O=document.querySelector(".profile__image"),B=v.querySelector(".popup__form"),T=B.querySelector(".popup__input_type_url"),I={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function P(e,t){t.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить"}function M(e){u(x),w.src=e.target.src,w.alt=e.target.alt,D.textContent=e.target.alt}f.addEventListener("click",M),_.addEventListener("click",(function(e){e.preventDefault(),u(y),q.value=k.textContent,g.value=A.textContent,s(y,I)})),b.addEventListener("submit",(function(n){var r,o,u;n.preventDefault(),P(!0,b),(r={name:q.value,about:g.value},o=r.name,u=r.about,fetch(e.baseUrl+"users/me",{method:"PATCH",body:JSON.stringify({name:o,about:u}),headers:e.headers}).then((function(e){return t(e)}))).then((function(e){k.textContent=e.name,A.textContent=e.about,a(y)})).catch((function(e){console.log(e)})).finally((function(){P(!1,b)}))})),O.addEventListener("click",(function(e){e.preventDefault(),u(v),s(v,I)})),B.addEventListener("submit",(function(n){var r;n.preventDefault(),P(!0,B),(r=T.value,fetch(e.baseUrl+"users/me/avatar",{method:"PATCH",body:JSON.stringify({avatar:r}),headers:e.headers}).then((function(e){t(e)}))).then((function(e){O.style.backgroundImage="url(".concat(e.avatar,")"),a(v)})).catch((function(e){console.log(e)})).finally((function(){P(!1,B)}))})),m.addEventListener("click",(function(e){e.preventDefault(),u(h),s(h,I)})),L.addEventListener("submit",(function(n){n.preventDefault();var u,c={name:E.value,link:C.value};P(!0,L),(u=c,fetch(e.baseUrl+"cards",{method:"POST",body:JSON.stringify({name:u.name,link:u.link}),headers:e.headers}).then((function(e){return t(e)}))).then((function(e){f.prepend(r(e,e.owner._id,M,o)),a(h)})).catch((function(e){console.log(e)})).finally((function(){P(!1,L)}))})),j.addEventListener("click",(function(){return n=null,r=U,void(u=card.id,fetch(e.baseUrl+"cards/"+u,{method:"DELETE",headers:e.headers}).then((function(e){return t(e)}))).then((function(){o(n),a(r)})).catch((function(e){console.log(e)}));var n,r,u})),S.forEach((function(e){e.addEventListener("click",(function(){a(e.closest(".popup"))}))})),Promise.all([fetch(e.baseUrl+"users/me",{headers:e.headers}).then((function(e){return t(e)})),fetch(e.baseUrl+"cards",{headers:e.headers}).then((function(e){return t(e)}))]).then((function(e){var t,n,u=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u,a,c=[],i=!0,l=!1;try{if(u=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=u.call(n)).done)&&(c.push(r.value),c.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,n)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=u[0],c=u[1];k.textContent=a.name,A.textContent=a.about,O.style.backgroundImage="url(".concat(a.avatar,")"),c.forEach((function(e){f.append(r(e,a._id,M,o))}))})).catch((function(e){console.log(e)})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);d(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?l(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.textContent=n,o.classList.add(r.errorClass)}(e,t,t.validationMessage,n)}(e,o,t),d(n,r,t)}))}))}(t,e)}))}(I)})();
//# sourceMappingURL=main.js.map