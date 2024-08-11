/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return n};var r,n={},o=Object.prototype,a=o.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(r){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),c=new P(n||[]);return i(a,"_invoke",{value:C(t,r,c)}),a}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}n.wrap=p;var h="suspendedStart",y="suspendedYield",v="executing",m="completed",_={};function b(){}function g(){}function w(){}var S={};f(S,u,(function(){return this}));var L=Object.getPrototypeOf,x=L&&L(L(T([])));x&&x!==o&&a.call(x,u)&&(S=x);var E=w.prototype=b.prototype=Object.create(S);function k(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function q(e,r){function n(o,i,c,u){var s=d(e[o],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;i(this,"_invoke",{value:function(t,e){function a(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(a,a):a()}})}function C(t,e,n){var o=h;return function(a,i){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=O(c,n);if(u){if(u===_)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=d(t,e,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===_)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function O(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),_;var a=d(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,_;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,_):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,_)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function t(){for(;++o<e.length;)if(a.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=r,t.done=!0,t};return i.next=i}}throw new TypeError(t(e)+" is not iterable")}return g.prototype=w,i(E,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:g,configurable:!0}),g.displayName=f(w,l,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},n.awrap=function(t){return{__await:t}},k(q.prototype),f(q.prototype,s,(function(){return this})),n.AsyncIterator=q,n.async=function(t,e,r,o,a){void 0===a&&(a=Promise);var i=new q(p(t,e,r,o),a);return n.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(E),f(E,l,"Generator"),f(E,u,(function(){return this})),f(E,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},n.values=T,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(A),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,_):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),_}},n}function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}}var o={baseUrl:"https://nomoreparties.co/v1/wff-cohort-19",headers:{authorization:"ff55c8a5-9e93-41a4-b092-8c36fdb087a0","Content-Type":"application/json"}};function a(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}var i=function(){var t=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o.baseUrl,"/users/me"),{headers:o.headers});case 2:return r=t.sent,t.abrupt("return",a(r));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o.baseUrl,"/cards"),{headers:o.headers});case 2:return r=t.sent,t.abrupt("return",a(r));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=n(e().mark((function t(r){var n,i,c;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.name,i=r.about,t.next=3,fetch("".concat(o.baseUrl,"/users/me"),{method:"PATCH",headers:o.headers,body:JSON.stringify({name:n,about:i})});case 3:return c=t.sent,t.abrupt("return",a(c));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=n(e().mark((function t(r){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o.baseUrl,"/cards"),{method:"POST",headers:o.headers,body:JSON.stringify({name:r.name,link:r.link})});case 2:return n=t.sent,t.abrupt("return",a(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=n(e().mark((function t(r){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o.baseUrl,"/cards/likes/").concat(r._id),{method:"PUT",headers:o.headers});case 2:return n=t.sent,t.abrupt("return",a(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=n(e().mark((function t(r){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o.baseUrl,"/cards/").concat(r._id),{method:"DELETE",headers:o.headers});case 2:return n=t.sent,t.abrupt("return",a(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=n(e().mark((function t(r){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(o.baseUrl,"/cards/likes/").concat(r._id),{method:"DELETE",headers:o.headers});case 2:return n=t.sent,t.abrupt("return",a(n));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(){var t=n(e().mark((function t(r){var n,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.avatar,t.next=3,fetch("".concat(o.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:o.headers,body:JSON.stringify({avatar:n})});case 3:return i=t.sent,t.abrupt("return",a(i));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function h(t,e,r,n,o){var a=document.querySelector("#card-template").content.querySelector(".places__item").cloneNode(!0),i=a.querySelector(".card__image"),c=a.querySelector(".card__title"),u=a.querySelector(".card__delete-button"),s=a.querySelector(".card__like-button"),l=a.querySelector(".card__like-value"),f=t._id;c.textContent=t.name,i.src=t.link,i.alt=t.name,l.textContent=t.likes.length,e!==t.owner._id&&u.remove(),u.addEventListener("click",(function(){return r(a,f)})),i.addEventListener("click",(function(){return n(t)}));for(var p=0;p<t.likes.length;p++)t.likes[p]._id===e&&s.classList.add("card__like-button_is-active");return s.addEventListener("click",(function(){return o(s,f,l)})),a}function y(t,e){f(e).then((function(){t.target.closest(".places__item").remove()})).catch((function(t){console.error("Не удается удалить элемент",t.message)}))}function v(t,e,r){t.classList.contains("card__like-button_is-active")?p(e).then((function(e){t.classList.remove("card__like-button_is-active"),likeCounter.textContent=e.likes.length})).catch((function(t){console.log("Ошибка удаления лайка",t.message)})):l(e).then((function(n){console.log(e),t.classList.add("card__like-button_is-active"),r.textContent=n.likes.length})).catch((function(t){console.log("Не удалось поставить like",t.message)}))}function m(t){t.classList.add("popup_is-animated"),t.classList.add("popup_is-opened"),document.addEventListener("keydown",b),document.addEventListener("mousedown",g)}function _(t){t.classList.add("popup_is-animated"),t.classList.remove("popup_is-opened"),document.removeEventListener("keydown",b),document.removeEventListener("mousedown",g)}function b(t){"Escape"===t.key&&_(document.querySelector(".popup_is-opened"))}function g(t){t.target.classList.contains("popup_is-opened")&&_(t.target)}var w=function(t,e,r){var n=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent=""},S=function(t,e){var r=t.querySelector(e.submitButtonSelector),n=Array.from(t.querySelectorAll(e.inputSelector));n.forEach((function(r){w(t,r,e)})),L(n,r,e)},L=function(t,e,r){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.disabled=!1,e.classList.remove(r.inactiveButtonClass)):(e.disabled=!0,e.classList.add(r.inactiveButtonClass))};function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}var E=document.querySelector(".places__list"),k=document.querySelector(".profile__edit-button"),q=document.querySelector(".profile__add-button"),C=document.querySelector(".popup_type_edit"),O=document.querySelector(".popup_type_avatar"),j=document.querySelector(".popup_type_new-card"),A=document.querySelectorAll(".popup__close"),P=C.querySelector(".popup__form"),T=P.querySelector(".popup__input_type_name"),N=P.querySelector(".popup__input_type_description"),U=j.querySelector(".popup__form"),D=U.querySelector(".popup__input_type_card-name"),G=U.querySelector(".popup__input_type_url"),I=document.querySelector(".profile__title"),B=document.querySelector(".profile__description"),F=document.querySelector(".popup_type_image"),M=F.querySelector(".popup__image"),J=F.querySelector(".popup__caption"),H=document.querySelector(".profile__image"),V=O.querySelector(".popup__form"),Y=V.querySelector(".popup__input_type_url"),z={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function $(t){document.querySelector(".popup_is-opened").querySelector(".popup__button").textContent=t?"Сохранение...":"Сохранить"}function K(t){M.src=t.link,M.alt=t.name,J.textContent=t.name,m(F)}k.addEventListener("click",(function(t){t.preventDefault(),m(C),T.value=I.textContent,N.value=B.textContent,S(C,z)})),P.addEventListener("submit",(function(t){t.preventDefault(),$(!0),u({name:T.value,about:N.value}).then((function(t){I.textContent=t.name,B.textContent=t.about,_(C)})).catch((function(t){console.error(t)})).finally((function(){$(!1)}))})),H.addEventListener("click",(function(t){t.preventDefault(),m(O),S(O,z)})),V.addEventListener("submit",(function(t){t.preventDefault(),$(!0),d(Y.value).then((function(t){H.style.backgroundImage="url(".concat(t.avatar,")"),_(O)})).catch((function(t){console.error(t)})).finally((function(){$(!1)}))})),q.addEventListener("click",(function(t){t.preventDefault(),m(j),S(j,z)})),U.addEventListener("submit",(function(t){t.preventDefault();var e={name:D.value,link:G.value};$(!0),s(e).then((function(t){E.prepend(h(t,t.owner._id,K,y,v)),_(j)})).catch((function(t){console.error(t)})).finally((function(){$(!1)}))})),A.forEach((function(t){t.addEventListener("click",(function(){_(t.closest(".popup"))}))})),function(t){Array.from(document.querySelectorAll(t.formSelector)).forEach((function(e){e.addEventListener("submit",(function(t){t.preventDefault()})),function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);L(r,n,e),r.forEach((function(o){o.addEventListener("input",(function(){!function(t,e,r){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?w(t,e,r):function(t,e,r,n){var o=t.querySelector(".".concat(e.id,"-error"));e.classList.add(n.inputErrorClass),o.textContent=r,o.classList.add(n.errorClass)}(t,e,e.validationMessage,r)}(t,o,e),L(r,n,e)}))}))}(e,t)}))}(z),Promise.all([i(),c()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,s=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return x(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],a=n[1];I.textContent=o.name,B.textContent=o.about,H.style.backgroundImage="url(".concat(o.avatar,")"),a.forEach((function(t){E.prepend(h(t,o._id,K,y,v))}))})).catch((function(t){console.error(t)}))})();