!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var a=i("gVrJQ");function s(e){document.querySelector(".movies__list").innerHTML=(0,a.default)(e)}function o(e){document.querySelector(".movies__list").insertAdjacentHTML("beforeend",(0,a.default)(e))}var u=i("bpxeT"),c=i("2TvXO"),l="https://api.themoviedb.org/3/trending/",d="movie/day",f="a4b64e934bd6b381798223a1d6191ff5";function p(e){return h.apply(this,arguments)}function h(){return(h=e(u)(e(c).mark((function t(r){var n,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:f,page:r}),e.prev=1,e.next=4,fetch("".concat(l).concat(d,"?").concat(n));case 4:if((i=e.sent).ok){e.next=7;break}throw new Error(i.status);case 7:return e.abrupt("return",i.json());case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}var v=i("j1lrD"),m=i("2XwUb");function g(e){e.results.map((function(e){e.release_date&&(e.release_date=e.release_date.slice(0,4)),e.first_air_date&&(e.first_air_date=e.first_air_date.slice(0,4))}));var t=JSON.parse(localStorage.getItem("genres"));return e.results.map((function(r,n){var i=[];r.genre_ids.map((function(e){var r=t.find((function(t){return t.id===e}));i.push(null==r?void 0:r.name)}));var a=i.length;a>3&&i.splice(2,a-2,"Other"),e.results[n].genres_name_str=i.join(", ")})),e}function k(e){p(e).then((function(e){y(e.results),s(e.results),(0,m.toggleLightTheme)()})).finally((function(){return(0,v.spinnerOff)()})),(0,v.spinnerOn)()}function y(e){var t=JSON.parse(localStorage.getItem("genres"));e.map((function(r,n){var i=[];r.genre_ids.map((function(e){var r=t.find((function(t){return t.id===e}));i.push(null==r?void 0:r.name)}));var a=i.length;a>3&&i.splice(2,a-2,"Other"),e[n].genres_name_str=i.join(", "),r.release_date&&(r.release_date=r.release_date.slice(0,4)),r.first_air_date&&(r.first_air_date=r.first_air_date.slice(0,4))}))}u=i("bpxeT"),c=i("2TvXO");var b="https://api.themoviedb.org/3/",w="genre/movie/list",_="a4b64e934bd6b381798223a1d6191ff5",I="&language=en-US";function x(){return(x=e(u)(e(c).mark((function t(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(b).concat(w,"?api_key=").concat(_).concat(I));case 3:if((r=e.sent).ok){e.next=6;break}throw new Error(r.status);case 6:return e.abrupt("return",r.json());case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}var T=i("1VFfL");m=i("2XwUb");function S(){p(1).then((function(t){var r=t.total_results;!function(){var t=r;t||(t=2e4);var n=new(e(T))(document.getElementById("pagination"),{totalItems:t,itemsPerPage:20,visiblePages:5,centerAlign:!0});n.on("afterMove",(function(e){k(e.page),(0,m.toggleLightTheme)(),localStorage.setItem("current_page",n.getCurrentPage())})),n.movePageTo(localStorage.getItem("current_page"))}()}))}var E=i("l5bVx"),R=e(i("WMajR")).template({1:function(t,r,n,i,a){var s,o=null!=r?r:t.nullContext||{},u=t.hooks.helperMissing,c="function",l=t.escapeExpression,d=t.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'  <option class="genre-select-option" value="'+l((void 0===(s=null!=(s=d(n,"id")||(null!=r?d(r,"id"):r))?s:u)?"undefined":e(E)(s))===c?s.call(o,{name:"id",hash:{},data:a,loc:{start:{line:2,column:45},end:{line:2,column:51}}}):s)+'">'+l((void 0===(s=null!=(s=d(n,"name")||(null!=r?d(r,"name"):r))?s:u)?"undefined":e(E)(s))===c?s.call(o,{name:"name",hash:{},data:a,loc:{start:{line:2,column:53},end:{line:2,column:61}}}):s)+"</option>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,r,n,i){var a;return null!=(a=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(r,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,i,0),inverse:e.noop,data:i,loc:{start:{line:1,column:0},end:{line:3,column:9}}}))?a:""},useData:!0});T=i("1VFfL");var O,N=i("iU1Pc"),P=(v=i("j1lrD"),document.querySelector(".genre-select")),A=document.querySelector(".sentinel"),L=new IntersectionObserver((function(e){e[0].isIntersecting&&(C=JSON.parse(sessionStorage.getItem("searchGenresPage")),console.log(C),D(C,M))}),{rootMargin:"1000px",threshold:1}),C=1,M=Number(P.value);function D(t,r){p(t).then((function(n){if(y(n.results),function(e,t){e.results.forEach((function(e){if(e.genre_ids.includes(t)){var r=JSON.parse(sessionStorage.getItem("searchGenresData"));r.push(e),sessionStorage.setItem("searchGenresData",JSON.stringify(r))}}))}(n,r),!(JSON.parse(sessionStorage.getItem("searchGenresData")).length<=18)){var i=JSON.parse(sessionStorage.getItem("searchGenresData")),a=i.splice(0,18);return sessionStorage.setItem("searchGenresData",JSON.stringify(i)),t+=1,sessionStorage.setItem("searchGenresPage",JSON.stringify(t)),o(a),void L.observe(A)}if(t>=1e3)return o(JSON.parse(sessionStorage.getItem("searchGenresData"))),void e(N).Notify.info("The list of ".concat(P.options[P.selectedIndex].text," movies is over"));D(t+=1,r)})).catch(console.log).finally((function(){(0,v.spinnerOff)()})),(0,v.spinnerOn)()}function U(){L.unobserve(A)}P.addEventListener("change",(function(){if(C=1,!Number(P.value))return document.querySelector(".movies__list").innerHTML="",k(1),S(),void U();M=Number(P.value);document.querySelector(".movies__list").innerHTML="",new(e(T))(document.getElementById("pagination")).off(),sessionStorage.setItem("searchGenresData","[]"),D(C,M)})),localStorage.getItem("UserID")||localStorage.setItem("UserID","DefaultUser"),function(){return x.apply(this,arguments)}().then((function(e){localStorage.setItem("genres",JSON.stringify(e.genres))})),O=JSON.parse(localStorage.getItem("genres")),document.querySelector(".genre-select").insertAdjacentHTML("beforeend",R(O)),k(1),S();u=i("bpxeT");var F=i("8MBJY"),j=i("a2hTj"),V=(c=i("2TvXO"),i("dIxxU")),q=function(){"use strict";function t(){e(F)(this,t),this.searchQuery="",this._page=1}return e(j)(t,[{key:"fetchMovies",value:function(t){var r=this;return e(u)(e(c).mark((function n(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r._page=t,e.next=3,V.default.get("".concat("https://api.themoviedb.org/","3/search/movie?api_key=").concat("a4b64e934bd6b381798223a1d6191ff5","&query=").concat(r.searchQuery,"&page=").concat(r._page));case 3:if((i=e.sent).data.results.length){e.next=6;break}return e.abrupt("return",Promise.reject("Search result not successful. Enter the correct movie name ."));case 6:return e.abrupt("return",i.data);case 7:case"end":return e.stop()}}),n)})))()}},{key:"query",get:function(){return this.searchQuery},set:function(e){this.searchQuery=e}},{key:"page",get:function(){return this._page},set:function(e){this._page=e}}]),t}(),W=i("4Nugj"),H=(N=i("iU1Pc"),T=i("1VFfL"),m=i("2XwUb"),new q);function z(){window.addEventListener("keydown",G),W.refs.modalFooter.classList.toggle("is-hidden"),W.refs.body.classList.toggle("no-scroll"),W.refs.modalFooter.classList.contains("is-hidden")&&window.removeEventListener("keydown",G)}function G(e){"Escape"===e.key&&z()}W.refs.formRef.addEventListener("submit",(function(t){if(t.preventDefault(),H.query=W.refs.inputRef.value.trim(),!H.query)return e(N).Notify.failure("Enter data to search."),k(1),U(),void document.querySelector(".genre-select").classList.remove("visually-hidden");H.fetchMovies(1).then((function(t){s((t=g(t)).results);var r=t.total_results;new(e(T))(document.getElementById("pagination"),{totalItems:r,itemsPerPage:20,visiblePages:5,centerAlign:!0}).on("afterMove",(function(e){var t;(0,m.toggleLightTheme)(),t=e.page,H.fetchMovies(t).then((function(e){s((e=g(e)).results),(0,m.toggleLightTheme)()}))})),U(),document.querySelector(".genre-select").classList.add("visually-hidden")})).catch((function(t){document.querySelector(".movies__list").innerHTML="",(0,m.toggleLightTheme)(),e(N).Notify.failure(t),k(1),S(),U(),document.querySelector(".genre-select").classList.remove("visually-hidden")})).finally((function(){document.querySelector(".search__input").value=""}))})),i("1HSCG"),i("73ES2"),(W=i("4Nugj")).refs.footerBtn.addEventListener("click",(function(e){z()})),W.refs.closeModalFooterBtn.addEventListener("click",z),W.refs.backdropFooter.addEventListener("click",(function(e){e.currentTarget===e.target&&z()})),function(){var e={openModalAuthBtn:document.querySelector("[data-open-modal]"),modal:document.querySelector("[data-modal-auth]"),body:document.querySelector("body"),closeModalAuthBtn:document.querySelector("[data-modal-auth-close]")};function t(){window.addEventListener("keydown",r),e.modal.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll"),e.modal.classList.contains("is-hidden")&&window.removeEventListener("keydown",r)}function r(e){"Escape"===e.key&&t()}e.openModalAuthBtn.addEventListener("click",t),e.closeModalAuthBtn.addEventListener("click",t)}();var J=document.querySelectorAll(".switch"),K=document.querySelectorAll(".auth .modal-auth");document.querySelector(".auth"),document.querySelector(".register"),document.querySelector(".login");J.forEach((function(e){e.addEventListener("click",(function(){K.forEach((function(e){return e.classList.toggle("is-hidden")}))}))})),i("ijwS8"),i("2xDiJ"),i("MjY8E"),i("kZfxc"),i("6ExWU");var B=i("ds8z5"),X=(u=i("bpxeT"),F=i("8MBJY"),j=i("a2hTj"),i("hKHmD")),Q=i("jh8P3"),Y=i("fVNic"),Z=i("eYQtU"),$=i("1t1Wn"),ee=i("8nrFW"),te=i("2MbLg"),re=(c=i("2TvXO"),i("2xDiJ")),ne=i("MjY8E"),ie=i("kZfxc");function ae(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}Object.create;Object.create;var se=i("6ExWU");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(){return e(X)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var ue=oe,ce=new(0,re.ErrorFactory)("auth","Firebase",oe()),le=new(0,ie.Logger)("@firebase/auth");function de(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a;le.logLevel<=ie.LogLevel.ERROR&&(a=le).error.apply(a,["Auth (".concat(ne.SDK_VERSION,"): ").concat(t)].concat(e(ee)(n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];throw me.apply(void 0,[t].concat(e(ee)(n)))}function pe(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return me.apply(void 0,[t].concat(e(ee)(n)))}function he(t,r,n){var i=Object.assign(Object.assign({},ue()),e(X)({},r,n));return new(0,re.ErrorFactory)("auth","Firebase",i).create(r,{appName:t.name})}function ve(e,t,r){if(!(t instanceof r))throw r.name!==t.constructor.name&&fe(e,"argument-error"),he(e,"argument-error","Type of ".concat(t.constructor.name," does not match expected instance.")+"Did you pass a reference from a different Auth SDK?")}function me(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a;if("string"!=typeof t){var s,o=n[0],u=e(ee)(n.slice(1));return u[0]&&(u[0].appName=t.name),(s=t._errorFactory).create.apply(s,[o].concat(e(ee)(u)))}return(a=ce).create.apply(a,[t].concat(e(ee)(n)))}function ge(t,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];if(!t)throw me.apply(void 0,[r].concat(e(ee)(i)))}function ke(e){var t="INTERNAL ASSERTION FAILED: "+e;throw de(t),new Error(t)}function ye(e,t){e||ke(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be=new Map;function we(e){ye(e instanceof Function,"Expected a class definition");var t=be.get(e);return t?(ye(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,be.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e,t){var r=(0,ne._getProvider)(e,"auth");if(r.isInitialized()){var n=r.getImmediate(),i=r.getOptions();if((0,re.deepEqual)(i,null!=t?t:{}))return n;fe(n,"already-initialized")}return r.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ie(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function xe(){return"http:"===Te()||"https:"===Te()}function Te(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Se=function(){"use strict";function t(r,n){e(F)(this,t),this.shortDelay=r,this.longDelay=n,ye(n>r,"Short delay should be less than long delay!"),this.isMobile=(0,re.isMobileCordova)()||(0,re.isReactNative)()}return e(j)(t,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(xe()||(0,re.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e,t){ye(e.emulator,"Emulator should always be set here");var r=e.emulator.url;return t?"".concat(r).concat(t.startsWith("/")?t.slice(1):t):r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,Oe=function(){"use strict";function t(){e(F)(this,t)}return e(j)(t,null,[{key:"initialize",value:function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),Ne=(Re={},e(X)(Re,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(X)(Re,"MISSING_CUSTOM_TOKEN","internal-error"),e(X)(Re,"INVALID_IDENTIFIER","invalid-email"),e(X)(Re,"MISSING_CONTINUE_URI","internal-error"),e(X)(Re,"INVALID_PASSWORD","wrong-password"),e(X)(Re,"MISSING_PASSWORD","internal-error"),e(X)(Re,"EMAIL_EXISTS","email-already-in-use"),e(X)(Re,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(X)(Re,"INVALID_IDP_RESPONSE","invalid-credential"),e(X)(Re,"INVALID_PENDING_TOKEN","invalid-credential"),e(X)(Re,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(X)(Re,"MISSING_REQ_TYPE","internal-error"),e(X)(Re,"EMAIL_NOT_FOUND","user-not-found"),e(X)(Re,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(X)(Re,"EXPIRED_OOB_CODE","expired-action-code"),e(X)(Re,"INVALID_OOB_CODE","invalid-action-code"),e(X)(Re,"MISSING_OOB_CODE","internal-error"),e(X)(Re,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(X)(Re,"INVALID_ID_TOKEN","invalid-user-token"),e(X)(Re,"TOKEN_EXPIRED","user-token-expired"),e(X)(Re,"USER_NOT_FOUND","user-token-expired"),e(X)(Re,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(X)(Re,"INVALID_CODE","invalid-verification-code"),e(X)(Re,"INVALID_SESSION_INFO","invalid-verification-id"),e(X)(Re,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(X)(Re,"MISSING_SESSION_INFO","missing-verification-id"),e(X)(Re,"SESSION_EXPIRED","code-expired"),e(X)(Re,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(X)(Re,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(X)(Re,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(X)(Re,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(X)(Re,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(X)(Re,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(X)(Re,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(X)(Re,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(X)(Re,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(X)(Re,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(X)(Re,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),Re),Pe=new Se(3e4,6e4);function Ae(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Le(e,t,r,n){return Ce.apply(this,arguments)}function Ce(){return Ce=e(u)(e(c).mark((function t(r,n,i,a){var s,o=arguments;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=o.length>4&&void 0!==o[4]?o[4]:{},t.abrupt("return",Me(r,s,e(u)(e(c).mark((function t(){var s,o,u,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={},o={},a&&("GET"===n?o=a:s={body:JSON.stringify(a)}),u=(0,re.querystring)(Object.assign({key:r.config.apiKey},o)).slice(1),e.next=6,r._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode),e.abrupt("return",Oe.fetch()(je(r,r.config.apiHost,i,u),Object.assign({method:n,headers:l,referrerPolicy:"no-referrer"},s)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),Ce.apply(this,arguments)}function Me(e,t,r){return De.apply(this,arguments)}function De(){return(De=e(u)(e(c).mark((function t(r,n,i){var a,s,o,u,l,d,f,p,h;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r._canInitEmulator=!1,a=Object.assign(Object.assign({},Ne),n),t.prev=2,s=new Ve(r),t.next=6,Promise.race([i(),s.promise]);case 6:return o=t.sent,s.clearNetworkTimeout(),t.next=10,o.json();case 10:if(!("needConfirmation"in(u=t.sent))){t.next=13;break}throw qe(r,"account-exists-with-different-credential",u);case 13:if(!o.ok||"errorMessage"in u){t.next=17;break}return t.abrupt("return",u);case 17:if(l=o.ok?u.errorMessage:u.error.message,d=e($)(l.split(" : "),2),f=d[0],p=d[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){t.next=23;break}throw qe(r,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==f){t.next=27;break}throw qe(r,"email-already-in-use",u);case 27:if("USER_DISABLED"!==f){t.next=29;break}throw qe(r,"user-disabled",u);case 29:if(h=a[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!p){t.next=34;break}throw he(r,h,p);case 34:fe(r,h);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof re.FirebaseError)){t.next=41;break}throw t.t0;case 41:fe(r,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function Ue(e,t,r,n){return Fe.apply(this,arguments)}function Fe(){return Fe=e(u)(e(c).mark((function t(r,n,i,a){var s,o,u=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,Le(r,n,i,a,s);case 3:return"mfaPendingCredential"in(o=e.sent)&&fe(r,"multi-factor-auth-required",{_serverResponse:o}),e.abrupt("return",o);case 6:case"end":return e.stop()}}),t)}))),Fe.apply(this,arguments)}function je(e,t,r,n){var i="".concat(t).concat(r,"?").concat(n);return e.config.emulator?Ee(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var Ve=function(){"use strict";function t(r){var n=this;e(F)(this,t),this.auth=r,this.timer=null,this.promise=new Promise((function(e,t){var r=n;n.timer=setTimeout((function(){return t(pe(r.auth,"network-request-failed"))}),Pe.get())}))}return e(j)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function qe(e,t,r){var n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);var i=pe(e,t,n);return i.customData._tokenResponse=r,i}function We(e,t){return He.apply(this,arguments)}function He(){return(He=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(u)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Le(r,"POST","/v1/accounts:delete",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ze(e,t){return Ge.apply(this,arguments)}function Ge(){return(Ge=e(u)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Le(r,"POST","/v1/accounts:lookup",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return Ke=e(u)(e(c).mark((function t(r){var n,i,a,s,o,u,l=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]&&l[1],i=(0,re.getModularInstance)(r),e.next=4,i.getIdToken(n);case 4:return a=e.sent,ge((s=Xe(a))&&s.exp&&s.auth_time&&s.iat,i.auth,"internal-error"),o="object"==typeof s.firebase?s.firebase:void 0,u=null==o?void 0:o.sign_in_provider,e.abrupt("return",{claims:s,token:a,authTime:Je(Be(s.auth_time)),issuedAtTime:Je(Be(s.iat)),expirationTime:Je(Be(s.exp)),signInProvider:u||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),Ke.apply(this,arguments)}function Be(e){return 1e3*Number(e)}function Xe(t){var r,n=e($)(t.split("."),3),i=n[0],a=n[1],s=n[2];if(void 0===i||void 0===a||void 0===s)return de("JWT malformed, contained fewer than 3 sections"),null;try{var o=(0,re.base64Decode)(a);return o?JSON.parse(o):(de("Failed to decode base64 JWT payload"),null)}catch(e){return de("Caught error parsing JWT payload as JSON",null===(r=e)||void 0===r?void 0:r.toString()),null}}function Qe(e,t){return Ye.apply(this,arguments)}function Ye(){return Ye=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(u)(e(c).mark((function t(r,n){var i=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",n);case 3:return e.prev=3,e.next=6,n;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof re.FirebaseError&&Ze(e.t0))){e.next=15;break}if(r.auth.currentUser!==r){e.next=15;break}return e.next=15,r.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),Ye.apply(this,arguments)}function Ze(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e=function(){"use strict";function t(r){e(F)(this,t),this.user=r,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(j)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}this.errorBackoff=3e4;var n=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,n)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var r=this.getInterval(t),n=this;this.timerId=setTimeout(e(u)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.iteration();case 2:case"end":return e.stop()}}),t)}))),r)}}},{key:"iteration",value:function(){var t=this;return e(u)(e(c).mark((function r(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,t.user.getIdToken(!0);case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(n=e.t0)||void 0===n?void 0:n.code)&&t.schedule(!0),e.abrupt("return");case 10:t.schedule();case 11:case"end":return e.stop()}}),r,null,[[1,6]])})))()}}]),t}(),et=function(){"use strict";function t(r,n){e(F)(this,t),this.createdAt=r,this.lastLoginAt=n,this._initializeTime()}return e(j)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=Je(this.lastLoginAt),this.creationTime=Je(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(e){return rt.apply(this,arguments)}function rt(){return(rt=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(u)(e(c).mark((function t(r){var n,i,a,s,o,u,l,d,f,p,h;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.auth,e.next=4,r.getIdToken();case 4:return a=e.sent,e.next=7,Qe(r,ze(i,{idToken:a}));case 7:ge(null==(s=e.sent)?void 0:s.users.length,i,"internal-error"),o=s.users[0],r._notifyReloadListener(o),u=(null===(n=o.providerUserInfo)||void 0===n?void 0:n.length)?at(o.providerUserInfo):[],l=it(r.providerData,u),d=r.isAnonymous,f=!(r.email&&o.passwordHash||(null==l?void 0:l.length)),p=!!d&&f,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new et(o.createdAt,o.lastLoginAt),isAnonymous:p},Object.assign(r,h);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function nt(){return(nt=e(u)(e(c).mark((function t(r){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,re.getModularInstance)(r),e.next=3,tt(n);case 3:return e.next=5,n.auth._persistUserIfCurrent(n);case 5:n.auth._notifyListenersIfCurrent(n);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function it(t,r){var n=t.filter((function(e){return!r.some((function(t){return t.providerId===e.providerId}))}));return e(ee)(n).concat(e(ee)(r))}function at(e){return e.map((function(e){var t=e.providerId,r=ae(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}function st(e,t){return ot.apply(this,arguments)}function ot(){return(ot=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(u)(e(c).mark((function t(r,n){var i;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Me(r,{},e(u)(e(c).mark((function t(){var i,a,s,o,u,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=(0,re.querystring)({grant_type:"refresh_token",refresh_token:n}).slice(1),a=r.config,s=a.tokenApiHost,o=a.apiKey,u=je(r,s,"/v1/token","key=".concat(o)),e.next=5,r._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Oe.fetch()(u,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut=function(){"use strict";function t(){e(F)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(j)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){ge(e.idToken,"internal-error"),ge(void 0!==e.idToken,"internal-error"),ge(void 0!==e.refreshToken,"internal-error");var t,r,n="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,ge(r=Xe(t),"internal-error"),ge(void 0!==r.exp,"internal-error"),ge(void 0!==r.iat,"internal-error"),Number(r.exp)-Number(r.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}},{key:"getToken",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(u)(e(c).mark((function i(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ge(!n.accessToken||n.refreshToken,t,"user-token-expired"),r||!n.accessToken||n.isExpired){e.next=3;break}return e.abrupt("return",n.accessToken);case 3:if(!n.refreshToken){e.next=7;break}return e.next=6,n.refresh(t,n.refreshToken);case 6:return e.abrupt("return",n.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,r){var n=this;return e(u)(e(c).mark((function i(){var a,s,o,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,st(t,r);case 2:a=e.sent,s=a.accessToken,o=a.refreshToken,u=a.expiresIn,n.updateTokensAndExpiration(s,o,Number(u));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return ke("not implemented")}}],[{key:"fromJSON",value:function(e,r){var n=r.refreshToken,i=r.accessToken,a=r.expirationTime,s=new t;return n&&(ge("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(ge("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),a&&(ge("number"==typeof a,"internal-error",{appName:e}),s.expirationTime=a),s}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e,t){ge("string"==typeof e||void 0===e,"internal-error",{appName:t})}var lt=function(){"use strict";function t(r){e(F)(this,t);var n=r.uid,i=r.auth,a=r.stsTokenManager,s=ae(r,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $e(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?e(ee)(s.providerData):[],this.metadata=new et(s.createdAt||void 0,s.lastLoginAt||void 0)}return e(j)(t,[{key:"getIdToken",value:function(t){var r=this;return e(u)(e(c).mark((function n(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Qe(r,r.stsTokenManager.getToken(r.auth,t));case 2:if(ge(i=e.sent,r.auth,"internal-error"),r.accessToken===i){e.next=9;break}return r.accessToken=i,e.next=8,r.auth._persistUserIfCurrent(r);case 8:r.auth._notifyListenersIfCurrent(r);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),n)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Ke.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return nt.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(ge(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){ge(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(u)(e(c).mark((function i(){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==n.stsTokenManager.accessToken&&(n.stsTokenManager.updateFromServerResponse(t),a=!0),!r){e.next=5;break}return e.next=5,tt(n);case 5:return e.next=7,n.auth._persistUserIfCurrent(n);case 7:a&&n.auth._notifyListenersIfCurrent(n);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(u)(e(c).mark((function r(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return n=e.sent,e.next=5,Qe(t,We(t.auth,{idToken:n}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),r)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,r){var n,i,a,s,o,u,c,l,d=null!==(n=r.displayName)&&void 0!==n?n:void 0,f=null!==(i=r.email)&&void 0!==i?i:void 0,p=null!==(a=r.phoneNumber)&&void 0!==a?a:void 0,h=null!==(s=r.photoURL)&&void 0!==s?s:void 0,v=null!==(o=r.tenantId)&&void 0!==o?o:void 0,m=null!==(u=r._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=r.createdAt)&&void 0!==c?c:void 0,k=null!==(l=r.lastLoginAt)&&void 0!==l?l:void 0,y=r.uid,b=r.emailVerified,w=r.isAnonymous,_=r.providerData,I=r.stsTokenManager;ge(y&&I,e,"internal-error");var x=ut.fromJSON(this.name,I);ge("string"==typeof y,e,"internal-error"),ct(d,e.name),ct(f,e.name),ge("boolean"==typeof b,e,"internal-error"),ge("boolean"==typeof w,e,"internal-error"),ct(p,e.name),ct(h,e.name),ct(v,e.name),ct(m,e.name),ct(g,e.name),ct(k,e.name);var T=new t({uid:y,auth:e,email:f,emailVerified:b,displayName:d,isAnonymous:w,photoURL:h,phoneNumber:p,tenantId:v,stsTokenManager:x,createdAt:g,lastLoginAt:k});return _&&Array.isArray(_)&&(T.providerData=_.map((function(e){return Object.assign({},e)}))),m&&(T._redirectEventId=m),T}},{key:"_fromIdTokenResponse",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(u)(e(c).mark((function a(){var s,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=new ut).updateFromServerResponse(n),o=new t({uid:n.localId,auth:r,stsTokenManager:s,isAnonymous:i}),e.next=5,tt(o);case 5:return e.abrupt("return",o);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),dt=function(){"use strict";function t(){e(F)(this,t),this.type="NONE",this.storage={}}return e(j)(t,[{key:"_isAvailable",value:function(){return e(u)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,r){var n=this;return e(u)(e(c).mark((function i(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.storage[t]=r;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var r=this;return e(u)(e(c).mark((function n(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(u)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete r.storage[t];case 1:case"end":return e.stop()}}),n)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dt.type="NONE";var ft=dt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(e,t,r){return"firebase:".concat(e,":").concat(t,":").concat(r)}var ht=function(){"use strict";function t(r,n,i){e(F)(this,t),this.persistence=r,this.auth=n,this.userKey=i;var a=this.auth,s=a.config,o=a.name;this.fullUserKey=pt(this.userKey,s.apiKey,o),this.fullPersistenceKey=pt("persistence",s.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(j)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(u)(e(c).mark((function r(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return n=e.sent,e.abrupt("return",n?lt._fromJSON(t.auth,n):null);case 4:case"end":return e.stop()}}),r)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var r=this;return e(u)(e(c).mark((function n(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.getCurrentUser();case 4:return i=e.sent,e.next=7,r.removeCurrentUser();case 7:if(r.persistence=t,!i){e.next=10;break}return e.abrupt("return",r.setCurrentUser(i));case 10:case"end":return e.stop()}}),n)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(u)(e(c).mark((function a(){var s,o,l,d,f,p,h,v,m,g,k,y,b;return e(c).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.length){a.next=2;break}return a.abrupt("return",new t(we(ft),r,i));case 2:return a.next=4,Promise.all(n.map(function(){var t=e(u)(e(c).mark((function t(r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",r);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:s=a.sent.filter((function(e){return e})),o=s[0]||we(ft),l=pt(i,r.config.apiKey,r.name),d=null,f=!0,p=!1,h=void 0,a.prev=9,v=n[Symbol.iterator]();case 11:if(f=(m=v.next()).done){a.next=29;break}return g=m.value,a.prev=13,a.next=16,g._get(l);case 16:if(!(k=a.sent)){a.next=22;break}return y=lt._fromJSON(r,k),g!==o&&(d=y),o=g,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:f=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),p=!0,h=a.t1;case 35:a.prev=35,a.prev=36,f||null==v.return||v.return();case 38:if(a.prev=38,!p){a.next=41;break}throw h;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(b=s.filter((function(e){return e._shouldAllowMigration})),o._shouldAllowMigration&&b.length){a.next=46;break}return a.abrupt("return",new t(o,r,i));case 46:if(o=b[0],!d){a.next=50;break}return a.next=50,o._set(l,d.toJSON());case 50:return a.next=52,Promise.all(n.map(function(){var t=e(u)(e(c).mark((function t(r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r===o){e.next=8;break}return e.prev=1,e.next=4,r._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return a.abrupt("return",new t(o,r,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(yt(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(mt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(wt(t))return"Blackberry";if(_t(t))return"Webos";if(gt(t))return"Safari";if((t.includes("chrome/")||kt(t))&&!t.includes("edge/"))return"Chrome";if(bt(t))return"Android";var r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==r?void 0:r.length)?r[1]:"Other"}function mt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,re.getUA)();return/firefox\//i.test(e)}function gt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,re.getUA)(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function kt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,re.getUA)();return/crios\//i.test(e)}function yt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,re.getUA)();return/iemobile/i.test(e)}function bt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,re.getUA)();return/android/i.test(e)}function wt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,re.getUA)();return/blackberry/i.test(e)}function _t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,re.getUA)();return/webos/i.test(e)}function It(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,re.getUA)();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function xt(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,re.getUA)();return It(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function Tt(){return(0,re.isIE)()&&10===document.documentMode}function St(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,re.getUA)();return It(e)||bt(e)||_t(e)||wt(e)||/windows phone/i.test(e)||yt(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Et(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=vt((0,re.getUA)());break;case"Worker":t="".concat(vt((0,re.getUA)()),"-").concat(e);break;default:t=e}var n=r.length?r.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(ne.SDK_VERSION,"/").concat(n)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rt=function(){"use strict";function t(r){e(F)(this,t),this.auth=r,this.queue=[]}return e(j)(t,[{key:"pushCallback",value:function(e,t){var r=this,n=function(t){return new Promise((function(r,n){try{r(e(t))}catch(e){n(e)}}))};n.onAbort=t,this.queue.push(n);var i=this.queue.length-1;return function(){r.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var r=this;return e(u)(e(c).mark((function n(){var i,a,s,o,u,l,d,f,p,h,v,m,g,k;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.auth.currentUser!==t){e.next=3;break}return e.abrupt("return");case 3:a=[],e.prev=4,s=!0,o=!1,u=void 0,e.prev=6,l=r.queue[Symbol.iterator]();case 8:if(s=(d=l.next()).done){e.next=16;break}return f=d.value,e.next=12,f(t);case 12:f.onAbort&&a.push(f.onAbort);case 13:s=!0,e.next=8;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),o=!0,u=e.t0;case 22:e.prev=22,e.prev=23,s||null==l.return||l.return();case 25:if(e.prev=25,!o){e.next=28;break}throw u;case 28:return e.finish(25);case 29:return e.finish(22);case 30:e.next=53;break;case 32:for(e.prev=32,e.t1=e.catch(4),a.reverse(),p=!0,h=!1,v=void 0,e.prev=36,m=a[Symbol.iterator]();!(p=(g=m.next()).done);p=!0){k=g.value;try{k()}catch(e){}}e.next=44;break;case 40:e.prev=40,e.t2=e.catch(36),h=!0,v=e.t2;case 44:e.prev=44,e.prev=45,p||null==m.return||m.return();case 47:if(e.prev=47,!h){e.next=50;break}throw v;case 50:return e.finish(47);case 51:return e.finish(44);case 52:throw r.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=e.t1)||void 0===i?void 0:i.message});case 53:case"end":return e.stop()}}),n,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),t}(),Ot=function(){"use strict";function t(r,n,i){e(F)(this,t),this.app=r,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pt(this),this.idTokenSubscription=new Pt(this),this.beforeStateQueue=new Rt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ce,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=r.name,this.clientVersion=i.sdkClientVersion}return e(j)(t,[{key:"_initializeWithPersistence",value:function(t,r){r&&(this._popupRedirectResolver=we(r));var n=this;return this._initializationPromise=this.queue(e(u)(e(c).mark((function i(){var a,s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,ht.create(n,t);case 5:if(n.persistenceManager=e.sent,!n._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=n._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,n._popupRedirectResolver._initialize(n);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,n.initializeCurrentUser(r);case 18:if(n.lastNotifiedUid=(null===(s=n.currentUser)||void 0===s?void 0:s.uid)||null,!n._deleted){e.next=21;break}return e.abrupt("return");case 21:n._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(u)(e(c).mark((function r(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(n=e.sent,t.currentUser||n){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!n||t.currentUser.uid!==n.uid){e.next=12;break}return t._currentUser._assign(n),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(n,!0);case 14:case"end":return e.stop()}}),r)})))()}},{key:"initializeCurrentUser",value:function(t){var r=this;return e(u)(e(c).mark((function n(){var i,a,s,o,u,l,d;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,s=a,o=!1,!t||!r.config.authDomain){e.next=15;break}return e.next=9,r.getOrInitRedirectPersistenceManager();case 9:return u=null===(i=r.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==s?void 0:s._redirectEventId,e.next=13,r.tryRedirectSignIn(t);case 13:d=e.sent,u&&u!==l||!(null==d?void 0:d.user)||(s=d.user,o=!0);case 15:if(s){e.next=17;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 17:if(s._redirectEventId){e.next=33;break}if(!o){e.next=28;break}return e.prev=19,e.next=22,r.beforeStateQueue.runMiddleware(s);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),s=a,r._popupRedirectResolver._overrideRedirectResult(r,(function(){return Promise.reject(e.t0)}));case 28:if(!s){e.next=32;break}return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(s));case 32:return e.abrupt("return",r.directlySetCurrentUser(null));case 33:return ge(r._popupRedirectResolver,r,"argument-error"),e.next=36,r.getOrInitRedirectPersistenceManager();case 36:if(!r.redirectUser||r.redirectUser._redirectEventId!==s._redirectEventId){e.next=38;break}return e.abrupt("return",r.directlySetCurrentUser(s));case 38:return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(s));case 39:case"end":return e.stop()}}),n,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var r=this;return e(u)(e(c).mark((function n(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,r._popupRedirectResolver._completeRedirectFn(r,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,r._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),n,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var r=this;return e(u)(e(c).mark((function n(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,tt(t);case 4:e.next=10;break;case 6:if(e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(i=e.t0)||void 0===i?void 0:i.code)){e.next=10;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 10:return e.abrupt("return",r.directlySetCurrentUser(t));case 11:case"end":return e.stop()}}),n,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(u)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),r)})))()}},{key:"updateCurrentUser",value:function(t){var r=this;return e(u)(e(c).mark((function n(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?(0,re.getModularInstance)(t):null)&&ge(i.auth.config.apiKey===r.config.apiKey,r,"invalid-user-token"),e.abrupt("return",r._updateCurrentUser(i&&i._clone(r)));case 3:case"end":return e.stop()}}),n)})))()}},{key:"_updateCurrentUser",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(u)(e(c).mark((function i(){return e(c).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!n._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&ge(n.tenantId===t.tenantId,n,"tenant-id-mismatch"),r){i.next=6;break}return i.next=6,n.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",n.queue(e(u)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.directlySetCurrentUser(t);case 2:n.notifyAuthListeners();case 3:case"end":return e.stop()}}),r)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(u)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),r)})))()}},{key:"setPersistence",value:function(t){var r=this;return this.queue(e(u)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.assertedPersistence.setPersistence(we(t));case 2:case"end":return e.stop()}}),n)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new(0,re.ErrorFactory)("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,r){var n=this;return e(u)(e(c).mark((function i(){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getOrInitRedirectPersistenceManager(r);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var r=this;return e(u)(e(c).mark((function n(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.redirectPersistenceManager){e.next=9;break}return ge(i=t&&we(t)||r._popupRedirectResolver,r,"argument-error"),e.next=5,ht.create(r,[we(i._redirectPersistence)],"redirectUser");case 5:return r.redirectPersistenceManager=e.sent,e.next=8,r.redirectPersistenceManager.getCurrentUser();case 8:r.redirectUser=e.sent;case 9:return e.abrupt("return",r.redirectPersistenceManager);case 10:case"end":return e.stop()}}),n)})))()}},{key:"_redirectUserForId",value:function(t){var r=this;return e(u)(e(c).mark((function n(){var i,a;return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._isInitialized){n.next=4;break}return n.next=4,r.queue(e(u)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=r._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){n.next=6;break}return n.abrupt("return",r._currentUser);case 6:if((null===(a=r.redirectUser)||void 0===a?void 0:a._redirectEventId)!==t){n.next=8;break}return n.abrupt("return",r.redirectUser);case 8:return n.abrupt("return",null);case 9:case"end":return n.stop()}}),n)})))()}},{key:"_persistUserIfCurrent",value:function(t){var r=this;return e(u)(e(c).mark((function n(){return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t!==r.currentUser){n.next=2;break}return n.abrupt("return",r.queue(e(u)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),n)})))));case 2:case"end":return n.stop()}}),n)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,r,n){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return ge(s,this,"internal-error"),s.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var r=this;return e(u)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.currentUser&&r.currentUser!==t&&r._currentUser._stopProactiveRefresh(),t&&r.isProactiveRefreshEnabled&&t._startProactiveRefresh(),r.currentUser=t,!t){e.next=8;break}return e.next=6,r.assertedPersistence.setCurrentUser(t);case 6:e.next=10;break;case 8:return e.next=10,r.assertedPersistence.removeCurrentUser();case 10:case"end":return e.stop()}}),n)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return ge(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Et(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(u)(e(c).mark((function r(){var n,i,a;return e(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=e(X)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),r.next=5,null===(n=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===n?void 0:n.getHeartbeatsHeader();case 5:return(a=r.sent)&&(i["X-Firebase-Client"]=a),r.abrupt("return",i);case 8:case"end":return r.stop()}}),r)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(e){return(0,re.getModularInstance)(e)}var Pt=function(){"use strict";function t(r){var n=this;e(F)(this,t),this.auth=r,this.observer=null,this.addObserver=(0,re.createSubscribe)((function(e){return n.observer=e}))}return e(j)(t,[{key:"next",get:function(){return ge(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();function At(t,r,n){var i=Nt(t);ge(i._canInitEmulator,i,"emulator-config-failed"),ge(/^https?:\/\//.test(r),i,"invalid-emulator-scheme");var a=!!(null==n?void 0:n.disableWarnings),s=Lt(r),o=function(t){var r=Lt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(r.length));if(!n)return{host:"",port:null};var i=n[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){var s=a[1];return{host:s,port:Ct(i.substr(s.length+1))}}var o=e($)(i.split(":"),2);return{host:o[0],port:Ct(o[1])}}(r),u=o.host,c=o.port,l=null===c?"":":".concat(c);i.config.emulator={url:"".concat(s,"//").concat(u).concat(l,"/")},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:u,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){var e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Lt(e){var t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Ct(e){if(!e)return null;var t=Number(e);return isNaN(t)?null:t}var Mt=function(){"use strict";function t(r,n){e(F)(this,t),this.providerId=r,this.signInMethod=n}return e(j)(t,[{key:"toJSON",value:function(){return ke("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return ke("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return ke("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return ke("not implemented")}}]),t}();function Dt(e,t){return Ut.apply(this,arguments)}function Ut(){return(Ut=e(u)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Le(r,"POST","/v1/accounts:update",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ft(e,t){return jt.apply(this,arguments)}function jt(){return(jt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(u)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ue(r,"POST","/v1/accounts:signInWithPassword",Ae(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Vt(e,t){return qt.apply(this,arguments)}function qt(){return(qt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(u)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ue(r,"POST","/v1/accounts:signInWithEmailLink",Ae(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Wt(e,t){return Ht.apply(this,arguments)}function Ht(){return(Ht=e(u)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ue(r,"POST","/v1/accounts:signInWithEmailLink",Ae(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt=function(t){"use strict";e(Z)(n,t);var r=e(te)(n);function n(t,i,a){var s,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(F)(this,n),(s=r.call(this,"password",a))._email=t,s._password=i,s._tenantId=o,s}return e(j)(n,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var r=this;return e(u)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Ft(t,{returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",Vt(t,{email:r._email,oobCode:r._password}));case 5:fe(t,"internal-error");case 6:case"end":return e.stop()}}),n)})))()}},{key:"_linkToIdToken",value:function(t,r){var n=this;return e(u)(e(c).mark((function i(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Dt(t,{idToken:r,returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",Wt(t,{idToken:r,email:n._email,oobCode:n._password}));case 5:fe(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new n(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new n(e,t,"emailLink",r)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),n}(Mt);function Gt(e,t){return Jt.apply(this,arguments)}function Jt(){return(Jt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(u)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ue(r,"POST","/v1/accounts:signInWithIdp",Ae(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kt=function(t){"use strict";e(Z)(n,t);var r=e(te)(n);function n(){var t;return e(F)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(j)(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Gt(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var r=this.buildRequest();return r.idToken=t,Gt(e,r)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Gt(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=(0,re.querystring)(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):fe("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,r=t.providerId,i=t.signInMethod,a=ae(t,["providerId","signInMethod"]);if(!r||!i)return null;var s=new n(r,i);return s.idToken=a.idToken||void 0,s.accessToken=a.accessToken||void 0,s.secret=a.secret,s.nonce=a.nonce,s.pendingToken=a.pendingToken||null,s}}]),n}(Mt);function Bt(e,t){return Xt.apply(this,arguments)}function Xt(){return(Xt=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(u)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Le(r,"POST","/v1/accounts:sendVerificationCode",Ae(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Qt(){return(Qt=e(u)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ue(r,"POST","/v1/accounts:signInWithPhoneNumber",Ae(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Yt(){return(Yt=e(u)(e(c).mark((function t(r,n){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ue(r,"POST","/v1/accounts:signInWithPhoneNumber",Ae(r,n));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw qe(r,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Zt=e(X)({},"USER_NOT_FOUND","user-not-found");function $t(){return($t=e(u)(e(c).mark((function t(r,n){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},n),{operation:"REAUTH"}),e.abrupt("return",Ue(r,"POST","/v1/accounts:signInWithPhoneNumber",Ae(r,i),Zt));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var er=function(t){"use strict";e(Z)(n,t);var r=e(te)(n);function n(t){var i;return e(F)(this,n),(i=r.call(this,"phone","phone")).params=t,i}return e(j)(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Qt.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Yt.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return $t.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,r=e.phoneNumber,n=e.verificationId,i=e.verificationCode;return t&&r?{temporaryProof:t,phoneNumber:r}:{sessionInfo:n,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return r||t||i||a?new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:a}):null}}]),n}(Mt);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tr=function(){"use strict";function t(r){var n,i,a,s,o,u;e(F)(this,t);var c=(0,re.querystringDecode)((0,re.extractQuerystring)(r)),l=null!==(n=c.apiKey)&&void 0!==n?n:null,d=null!==(i=c.oobCode)&&void 0!==i?i:null,f=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=c.mode)&&void 0!==a?a:null);ge(l&&d&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=d,this.continueUrl=null!==(s=c.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=c.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return e(j)(t,null,[{key:"parseLink",value:function(e){var r=function(e){var t=(0,re.querystringDecode)((0,re.extractQuerystring)(e)).link,r=t?(0,re.querystringDecode)((0,re.extractQuerystring)(t)).deep_link_id:null,n=(0,re.querystringDecode)((0,re.extractQuerystring)(e)).deep_link_id;return(n?(0,re.querystringDecode)((0,re.extractQuerystring)(n)).link:null)||n||r||t||e}(e);try{return new t(r)}catch(e){return null}}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var rr=function(){"use strict";function t(){e(F)(this,t),this.providerId=t.PROVIDER_ID}return e(j)(t,null,[{key:"credential",value:function(e,t){return zt._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var r=tr.parseLink(t);return ge(r,"argument-error"),zt._fromEmailAndCode(e,r.code,r.tenantId)}}]),t}();rr.PROVIDER_ID="password",rr.EMAIL_PASSWORD_SIGN_IN_METHOD="password",rr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var nr=function(){"use strict";function t(r){e(F)(this,t),this.providerId=r,this.defaultLanguageCode=null,this.customParameters={}}return e(j)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),ir=function(t){"use strict";e(Z)(n,t);var r=e(te)(n);function n(){var t;return e(F)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(j)(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(ee)(this.scopes)}}]),n}(nr),ar=function(t){"use strict";e(Z)(n,t);var r=e(te)(n);function n(){return e(F)(this,n),r.call(this,"facebook.com")}return e(j)(n,null,[{key:"credential",value:function(e){return Kt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(ir);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ar.FACEBOOK_SIGN_IN_METHOD="facebook.com",ar.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var sr=function(t){"use strict";e(Z)(n,t);var r=e(te)(n);function n(){var t;return e(F)(this,n),(t=r.call(this,"google.com")).addScope("profile"),t}return e(j)(n,null,[{key:"credential",value:function(e,t){return Kt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,i=t.oauthAccessToken;if(!r&&!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(ir);sr.GOOGLE_SIGN_IN_METHOD="google.com",sr.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var or=function(t){"use strict";e(Z)(n,t);var r=e(te)(n);function n(){return e(F)(this,n),r.call(this,"github.com")}return e(j)(n,null,[{key:"credential",value:function(e){return Kt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(ir);or.GITHUB_SIGN_IN_METHOD="github.com",or.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ur=function(t){"use strict";e(Z)(n,t);var r=e(te)(n);function n(){return e(F)(this,n),r.call(this,"twitter.com")}return e(j)(n,null,[{key:"credential",value:function(e,t){return Kt._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,i=t.oauthTokenSecret;if(!r||!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}(ir);function cr(e,t){return lr.apply(this,arguments)}function lr(){return(lr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(u)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ue(r,"POST","/v1/accounts:signUp",Ae(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ur.TWITTER_SIGN_IN_METHOD="twitter.com",ur.PROVIDER_ID="twitter.com";var dr=function(){"use strict";function t(r){e(F)(this,t),this.user=r.user,this.providerId=r.providerId,this._tokenResponse=r._tokenResponse,this.operationType=r.operationType}return e(j)(t,null,[{key:"_fromIdTokenResponse",value:function(r,n,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(u)(e(c).mark((function s(){var o,u,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,lt._fromIdTokenResponse(r,i,a);case 2:return o=e.sent,u=fr(i),l=new t({user:o,providerId:u,_tokenResponse:i,operationType:n}),e.abrupt("return",l);case 6:case"end":return e.stop()}}),s)})))()}},{key:"_forOperation",value:function(r,n,i){return e(u)(e(c).mark((function a(){var s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._updateTokensIfNecessary(i,!0);case 2:return s=fr(i),e.abrupt("return",new t({user:r,providerId:s,_tokenResponse:i,operationType:n}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function fr(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var pr=function(t){"use strict";e(Z)(n,t);var r=e(te)(n);function n(t,i,a,s){var o,u;return e(F)(this,n),(o=r.call(this,i.code,i.message)).operationType=a,o.user=s,Object.setPrototypeOf(e(B)(o),n.prototype),o.customData={appName:t.name,tenantId:null!==(u=t.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:a},o}return e(j)(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,i){return new n(e,t,r,i)}}]),n}(re.FirebaseError);function hr(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((function(r){if("auth/multi-factor-auth-required"===r.code)throw pr._fromErrorAndOperation(e,r,t,n);throw r}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(e,t){return mr.apply(this,arguments)}function mr(){return mr=e(u)(e(c).mark((function t(r,n){var i,a,s=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=s.length>2&&void 0!==s[2]&&s[2],e.t0=Qe,e.t1=r,e.t2=n,e.t3=r.auth,e.next=7,r.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",dr._forOperation(r,"link",a));case 14:case"end":return e.stop()}}),t)}))),mr.apply(this,arguments)}function gr(e,t){return kr.apply(this,arguments)}function kr(){return kr=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(u)(e(c).mark((function t(r,n){var i,a,s,o,u,l,d,f=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=f.length>2&&void 0!==f[2]&&f[2],s=r.auth,o="reauthenticate",e.prev=4,e.next=7,Qe(r,hr(s,o,n,r),i);case 7:return ge((u=e.sent).idToken,s,"internal-error"),ge(l=Xe(u.idToken),s,"internal-error"),d=l.sub,ge(r.uid===d,s,"user-mismatch"),e.abrupt("return",dr._forOperation(r,o,u));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(a=e.t0)||void 0===a?void 0:a.code)&&fe(s,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),t,null,[[4,16]])}))),kr.apply(this,arguments)}function yr(e,t){return br.apply(this,arguments)}function br(){return br=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(u)(e(c).mark((function t(r,n){var i,a,s,o,u=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=u.length>2&&void 0!==u[2]&&u[2],a="signIn",e.next=4,hr(r,a,n);case 4:return s=e.sent,e.next=7,dr._fromIdTokenResponse(r,a,s);case 7:if(o=e.sent,i){e.next=11;break}return e.next=11,r._updateCurrentUser(o.user);case 11:return e.abrupt("return",o);case 12:case"end":return e.stop()}}),t)}))),br.apply(this,arguments)}function wr(e,t){return _r.apply(this,arguments)}function _r(){return(_r=e(u)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",yr(Nt(r),n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ir(e,t,r){return xr.apply(this,arguments)}function xr(){return(xr=e(u)(e(c).mark((function t(r,n,i){var a,s,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Nt(r),e.next=3,cr(a,{returnSecureToken:!0,email:n,password:i});case 3:return s=e.sent,e.next=6,dr._fromIdTokenResponse(a,"signIn",s);case 6:return o=e.sent,e.next=9,a._updateCurrentUser(o.user);case 9:return e.abrupt("return",o);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Tr(e,t,r){return wr((0,re.getModularInstance)(e),rr.credential(t,r))}function Sr(e,t,r,n){return(0,re.getModularInstance)(e).onIdTokenChanged(t,r,n)}function Er(e,t,r){return(0,re.getModularInstance)(e).beforeAuthStateChanged(t,r)}function Rr(e){return(0,re.getModularInstance)(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Or(e,t){return Le(e,"POST","/v2/accounts/mfaEnrollment:start",Ae(e,t))}new WeakMap;var Nr="__sak",Pr=function(){"use strict";function t(r,n){e(F)(this,t),this.storageRetriever=r,this.type=n}return e(j)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(Nr,"1"),this.storage.removeItem(Nr),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ar=function(t){"use strict";e(Z)(n,t);var r=e(te)(n);function n(){var t,i;return e(F)(this,n),(t=r.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,r){return t.onStorageEvent(e,r)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(gt(i=(0,re.getUA)())||It(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=St(),t._shouldAllowMigration=!0,t}return e(j)(n,[{key:"forAllChangedKeys",value:function(e){var t=!0,r=!1,n=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var s=i.value,o=this.storage.getItem(s),u=this.localCache[s];o!==u&&e(s,u,o)}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;if(e.key){var n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}var a=function(){var e=r.storage.getItem(n);(t||r.localCache[n]!==e)&&r.notifyListeners(n,e)},s=this.storage.getItem(n);Tt()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var o=this;this.forAllChangedKeys((function(e,t,r){o.notifyListeners(e,r)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var s,o=Array.from(r)[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){(0,s.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,r,n){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,r){var i=this,a=this;return e(u)(e(c).mark((function s(){return e(c).wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,e(Q)(e(Y)(n.prototype),"_set",i).call(a,t,r);case 2:a.localCache[t]=JSON.stringify(r);case 3:case"end":return s.stop()}}),s)})))()}},{key:"_get",value:function(t){var r=this,i=this;return e(u)(e(c).mark((function a(){var s;return e(c).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Q)(e(Y)(n.prototype),"_get",r).call(i,t);case 2:return s=a.sent,i.localCache[t]=JSON.stringify(s),a.abrupt("return",s);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var r=this,i=this;return e(u)(e(c).mark((function a(){return e(c).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Q)(e(Y)(n.prototype),"_remove",r).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),n}(Pr);Ar.type="LOCAL";var Lr=Ar,Cr=function(t){"use strict";e(Z)(n,t);var r=e(te)(n);function n(){return e(F)(this,n),r.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(j)(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(Pr);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Cr.type="SESSION";var Mr=Cr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dr(t){return Promise.all(t.map((r=e(u)(e(c).mark((function t(r){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r;case 3:return n=e.sent,e.abrupt("return",{fulfilled:!0,value:n});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return r.apply(this,arguments)})));var r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ur=function(){"use strict";function t(r){e(F)(this,t),this.eventTarget=r,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(j)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var r=this;return e(u)(e(c).mark((function n(){var i,a,s,o,l,d,f,p;return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=(i=t).data,s=a.eventId,o=a.eventType,l=a.data,null==(d=r.handlersMap[o])?void 0:d.size){n.next=5;break}return n.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:o}),f=Array.from(d).map(function(){var t=e(u)(e(c).mark((function t(r){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r(i.origin,l));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n.next=9,Dr(f);case 9:p=n.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:p});case 11:case"end":return n.stop()}}),n)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var r=this.receivers.find((function(t){return t.isListeningto(e)}));if(r)return r;var n=new t(e);return this.receivers.push(n),n}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fr(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r="",n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ur.receivers=[];var jr=function(){"use strict";function t(r){e(F)(this,t),this.target=r,this.handlers=new Set}return e(j)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(u)(e(c).mark((function a(){var s,o,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var c=Fr("",20);s.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),n);u={messageChannel:s,onMessage:function(t){var r=t;if(r.data.eventId===c)switch(r.data.status){case"ack":clearTimeout(l),o=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(o),e(r.data.response);break;default:clearTimeout(l),clearTimeout(o),a(new Error("invalid_response"))}}},i.handlers.add(u),s.port1.addEventListener("message",u.onMessage),i.target.postMessage({eventType:t,eventId:c,data:r},[s.port2])})).finally((function(){u&&i.removeMessageHandler(u)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qr(){return void 0!==Vr().WorkerGlobalScope&&"function"==typeof Vr().importScripts}function Wr(){return Hr.apply(this,arguments)}function Hr(){return(Hr=e(u)(e(c).mark((function t(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return r=e.sent,e.abrupt("return",r.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var zr="firebaseLocalStorageDb",Gr="firebaseLocalStorage",Jr="fbase_key",Kr=function(){"use strict";function t(r){e(F)(this,t),this.request=r}return e(j)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,r){var n=e;e.request.addEventListener("success",(function(){t(n.request.result)})),e.request.addEventListener("error",(function(){r(n.request.error)}))}))}}]),t}();function Br(e,t){return e.transaction([Gr],t?"readwrite":"readonly").objectStore(Gr)}function Xr(){var e=indexedDB.deleteDatabase(zr);return new Kr(e).toPromise()}function Qr(){var t=indexedDB.open(zr,1);return new Promise((function(r,n){t.addEventListener("error",(function(){n(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(Gr,{keyPath:Jr})}catch(e){n(e)}})),t.addEventListener("success",e(u)(e(c).mark((function n(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(Gr)){e.next=12;break}return i.close(),e.next=5,Xr();case 5:return e.t0=r,e.next=8,Qr();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:r(i);case 13:case"end":return e.stop()}}),n)}))))}))}function Yr(e,t,r){return Zr.apply(this,arguments)}function Zr(){return(Zr=e(u)(e(c).mark((function t(r,n,i){var a,s;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=Br(r,!0).put((a={},e(X)(a,Jr,n),e(X)(a,"value",i),a)),t.abrupt("return",new Kr(s).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $r(e,t){return en.apply(this,arguments)}function en(){return(en=e(u)(e(c).mark((function t(r,n){var i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Br(r,!1).get(n),e.next=3,new Kr(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function tn(e,t){var r=Br(e,!0).delete(t);return new Kr(r).toPromise()}var rn=function(){"use strict";function t(){e(F)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(j)(t,[{key:"_openDb",value:function(){var t=this;return e(u)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,Qr();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),r)})))()}},{key:"_withRetries",value:function(t){var r=this;return e(u)(e(c).mark((function n(){var i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,r._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:r.db&&(r.db.close(),r.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),n,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(u)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",qr()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),r)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(u)(e(c).mark((function r(){return e(c).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.receiver=Ur._getInstance(qr()?self:null),t.receiver._subscribe("keyChanged",function(){var r=e(u)(e(c).mark((function r(n,i){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(u)(e(c).mark((function t(r,n){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}());case 3:case"end":return r.stop()}}),r)})))()}},{key:"initializeSender",value:function(){var t=this;return e(u)(e(c).mark((function r(){var n,i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Wr();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new jr(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(n=a[0])||void 0===n?void 0:n.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),r)})))()}},{key:"notifyServiceWorker",value:function(t){var r=this;return e(u)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.sender&&r.activeServiceWorker&&(n=void 0,((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===r.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,r.sender._send("keyChanged",{key:t},r.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var n}),n,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(u)(e(c).mark((function t(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Qr();case 5:return r=e.sent,e.next=8,Yr(r,Nr,"1");case 8:return e.next=10,tn(r,Nr);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var r=this;return e(u)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,r.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),n,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,r){var n=this;return e(u)(e(c).mark((function i(){return e(c).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",n._withPendingWrite(e(u)(e(c).mark((function i(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Yr(e,t,r)}));case 2:return n.localCache[t]=r,e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var r=this;return e(u)(e(c).mark((function n(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return $r(e,t)}));case 2:return i=e.sent,r.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(u)(e(c).mark((function n(){return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",r._withPendingWrite(e(u)(e(c).mark((function n(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return tn(e,t)}));case 2:return delete r.localCache[t],e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),n)})))));case 1:case"end":return n.stop()}}),n)})))()}},{key:"_poll",value:function(){var t=this;return e(u)(e(c).mark((function r(){var n,i,a,s,o,u,l,d,f,p,h,v,m,g,k,y,b;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=Br(e,!1).getAll();return new Kr(t).toPromise()}));case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,s=!0,o=!1,u=void 0,e.prev=10,l=n[Symbol.iterator]();!(s=(d=l.next()).done);s=!0)f=d.value,p=f.fbase_key,h=f.value,a.add(p),JSON.stringify(t.localCache[p])!==JSON.stringify(h)&&(t.notifyListeners(p,h),i.push(p));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),o=!0,u=e.t0;case 18:e.prev=18,e.prev=19,s||null==l.return||l.return();case 21:if(e.prev=21,!o){e.next=24;break}throw u;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,m=!1,g=void 0,e.prev=27,k=Object.keys(t.localCache)[Symbol.iterator]();!(v=(y=k.next()).done);v=!0)b=y.value,t.localCache[b]&&!a.has(b)&&(t.notifyListeners(b,null),i.push(b));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),m=!0,g=e.t1;case 35:e.prev=35,e.prev=36,v||null==k.return||k.return();case 38:if(e.prev=38,!m){e.next=41;break}throw g;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),r,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var s,o=Array.from(r)[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){(0,s.value)(t)}}catch(e){i=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(u)(e(c).mark((function r(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),r)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();rn.type="LOCAL";var nn=rn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e,t){return Le(e,"POST","/v2/accounts/mfaSignIn:start",Ae(e,t))}function sn(e){return new Promise((function(t,r){var n,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=pe("internal-error");t.customData=e,r(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(a)}))}function on(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
on("rcb"),new Se(3e4,6e4);var un="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(e,t,r){return ln.apply(this,arguments)}function ln(){return(ln=e(u)(e(c).mark((function t(r,n,i){var a,s,o,u,l,d,f,p;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(s=e.sent,e.prev=4,ge("string"==typeof s,r,"argument-error"),ge(i.type===un,r,"argument-error"),!("session"in(o="string"==typeof n?{phoneNumber:n}:n))){e.next=28;break}if(u=o.session,!("phoneNumber"in o)){e.next=19;break}return ge("enroll"===u.type,r,"internal-error"),e.next=15,Or(r,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:s}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return ge("signin"===u.type,r,"internal-error"),ge(d=(null===(a=o.multiFactorHint)||void 0===a?void 0:a.uid)||o.multiFactorUid,r,"missing-multi-factor-info"),e.next=24,an(r,{mfaPendingCredential:u.credential,mfaEnrollmentId:d,phoneSignInInfo:{recaptchaToken:s}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Bt(r,{phoneNumber:o.phoneNumber,recaptchaToken:s});case 30:return p=e.sent.sessionInfo,e.abrupt("return",p);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var dn=function(){"use strict";function t(r){e(F)(this,t),this.providerId=t.PROVIDER_ID,this.auth=Nt(r)}return e(j)(t,[{key:"verifyPhoneNumber",value:function(e,t){return cn(this.auth,e,(0,re.getModularInstance)(t))}}],[{key:"credential",value:function(e,t){return er._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var r=e;return t.credentialFromTaggedObject(r)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.phoneNumber,n=t.temporaryProof;return r&&n?er._fromTokenResponse(r,n):null}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fn(e,t){return t?we(t):(ge(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn.PROVIDER_ID="phone",dn.PHONE_SIGN_IN_METHOD="phone";var pn=function(t){"use strict";e(Z)(n,t);var r=e(te)(n);function n(t){var i;return e(F)(this,n),(i=r.call(this,"custom","custom")).params=t,i}return e(j)(n,[{key:"_getIdTokenResponse",value:function(e){return Gt(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Gt(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Gt(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(Mt);function hn(e){return yr(e.auth,new pn(e),e.bypassAuthState)}function vn(e){var t=e.auth,r=e.user;return ge(r,t,"internal-error"),gr(r,new pn(e),e.bypassAuthState)}function mn(e){return gn.apply(this,arguments)}function gn(){return(gn=e(u)(e(c).mark((function t(r){var n,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.auth,ge(i=r.user,n,"internal-error"),e.abrupt("return",vr(i,new pn(r),r.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kn=function(){"use strict";function t(r,n,i,a){var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(F)(this,t),this.auth=r,this.resolver=i,this.user=a,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return e(j)(t,[{key:"execute",value:function(){var t,r=this;return new Promise((t=e(u)(e(c).mark((function t(n,i){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingPromise={resolve:n,reject:i},e.prev=1,e.next=4,r.resolver._initialize(r.auth);case 4:return r.eventManager=e.sent,e.next=7,r.onExecution();case 7:r.eventManager.registerConsumer(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),r.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,r){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var r=this;return e(u)(e(c).mark((function n(){var i,a,s,o,u,l,d;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,s=t.postBody,o=t.tenantId,u=t.error,l=t.type,!u){e.next=4;break}return r.reject(u),e.abrupt("return");case 4:return d={auth:r.auth,requestUri:i,sessionId:a,tenantId:o||void 0,postBody:s||void 0,user:r.user,bypassAuthState:r.bypassAuthState},e.prev=5,e.t0=r,e.next=9,r.getIdpTask(l)(d);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),r.reject(e.t2);case 16:case"end":return e.stop()}}),n,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hn;case"linkViaPopup":case"linkViaRedirect":return mn;case"reauthViaPopup":case"reauthViaRedirect":return vn;default:fe(this.auth,"internal-error")}}},{key:"resolve",value:function(e){ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),yn=new Se(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e,t,r){return wn.apply(this,arguments)}function wn(){return(wn=e(u)(e(c).mark((function t(r,n,i){var a,s,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Nt(r),ve(r,n,nr),s=fn(a,i),o=new _n(a,"signInViaPopup",n,s),e.abrupt("return",o.executeNotNull());case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var _n=function(t){"use strict";e(Z)(n,t);var r=e(te)(n);function n(t,i,a,s,o){var u;return e(F)(this,n),(u=r.call(this,t,i,s,o)).provider=a,u.authWindow=null,u.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=e(B)(u),u}return e(j)(n,[{key:"executeNotNull",value:function(){var t=this;return e(u)(e(c).mark((function r(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return ge(n=e.sent,t.auth,"internal-error"),e.abrupt("return",n);case 5:case"end":return e.stop()}}),r)})))()}},{key:"onExecution",value:function(){var t=this;return e(u)(e(c).mark((function r(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ye(1===t.filter.length,"Popup operations only handle one event"),n=Fr(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],n);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=n,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(pe(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),r)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(pe(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var r,n;if(null===(n=null===(r=e.authWindow)||void 0===r?void 0:r.window)||void 0===n?void 0:n.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(pe(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,yn.get())};t()}}]),n}(kn);_n.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var In=new Map,xn=function(t){"use strict";e(Z)(n,t);var r=e(te)(n);function n(t,i){var a,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(F)(this,n),(a=r.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,s)).eventId=null,a}return e(j)(n,[{key:"execute",value:function(){var t=this,r=this;return e(u)(e(c).mark((function i(){var a,s;return e(c).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=In.get(r.auth._key())){i.next=21;break}return i.prev=2,i.next=5,Tn(r.resolver,r.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(Q)(e(Y)(n.prototype),"execute",t).call(r);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:s=i.t0,a=function(){return Promise.resolve(s)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:In.set(r.auth._key(),a);case 21:return r.bypassAuthState||In.set(r.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var r=this,i=this,a=function(){return e(Q)(e(Y)(n.prototype),"onAuthEvent",r)};return e(u)(e(c).mark((function r(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",a().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(n=e.sent)){e.next=16;break}return i.user=n,e.abrupt("return",a().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),r)})))()}},{key:"onExecution",value:function(){return e(u)(e(c).mark((function t(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),n}(kn);function Tn(e,t){return Sn.apply(this,arguments)}function Sn(){return(Sn=e(u)(e(c).mark((function t(r,n){var i,a,s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=On(n),a=Rn(r),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,s="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",s);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function En(e,t){In.set(e._key(),t)}function Rn(e){return we(e._redirectPersistence)}function On(e){return pt("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(e,t){return Pn.apply(this,arguments)}function Pn(){return Pn=e(u)(e(c).mark((function t(r,n){var i,a,s,o,u,l=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=Nt(r),s=fn(a,n),o=new xn(a,s,i),e.next=6,o.execute();case 6:if(!(u=e.sent)||i){e.next=13;break}return delete u.user._redirectEventId,e.next=11,a._persistUserIfCurrent(u.user);case 11:return e.next=13,a._setRedirectUser(null,n);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),t)}))),Pn.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var An=function(){"use strict";function t(r){e(F)(this,t),this.auth=r,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(j)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach((function(n){t.isEventForConsumer(e,n)&&(r=!0,t.sendToConsumer(e,n),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cn(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}},{key:"sendToConsumer",value:function(e,t){var r;if(e.error&&!Cn(e)){var n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(pe(this.auth,n))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ln(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(Ln(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function Ln(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function Cn(e){var t=e.type,r=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==r?void 0:r.code)}function Mn(e){return Dn.apply(this,arguments)}function Dn(){return Dn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
e(u)(e(c).mark((function t(r){var n,i=arguments;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",Le(r,"GET","/v1/projects",n));case 2:case"end":return e.stop()}}),t)}))),Dn.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Un=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fn=/^https?/;function jn(){return(jn=e(u)(e(c).mark((function t(r){var n,i,a,s,o,u,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Mn(r);case 4:n=e.sent.authorizedDomains,i=!0,a=!1,s=void 0,e.prev=6,o=n[Symbol.iterator]();case 8:if(i=(u=o.next()).done){e.next=20;break}if(l=u.value,e.prev=10,!Vn(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,s=e.t1;case 26:e.prev=26,e.prev=27,i||null==o.return||o.return();case 29:if(e.prev=29,!a){e.next=32;break}throw s;case 32:return e.finish(29);case 33:return e.finish(26);case 34:fe(r,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Vn(e){var t=Ie(),r=new URL(t),n=r.protocol,i=r.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&a.hostname===i}if(!Fn.test(n))return!1;if(Un.test(e))return i===e;var s=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qn=new Se(3e4,6e4);function Wn(){var t=Vr().___jsl,r=!0,n=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,s=Object.keys(t.H)[Symbol.iterator]();!(r=(a=s.next()).done);r=!0){var o=a.value;if(t.H[o].r=t.H[o].r||[],t.H[o].L=t.H[o].L||[],t.H[o].r=e(ee)(t.H[o].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){n=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(n)throw i}}}var Hn=null;function zn(e){return Hn=Hn||function(e){return new Promise((function(t,r){var n,i,a;function s(){Wn(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Wn(),r(pe(e,"network-request-failed"))},timeout:qn.get()})}if(null===(i=null===(n=Vr().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Vr().gapi)||void 0===a?void 0:a.load)){var o=on("iframefcb");return Vr()[o]=function(){gapi.load?s():r(pe(e,"network-request-failed"))},sn("https://apis.google.com/js/api.js?onload=".concat(o)).catch((function(e){return r(e)}))}s()}})).catch((function(e){throw Hn=null,e}))}(e),Hn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn=new Se(5e3,15e3),Jn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Kn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Bn(e){var t=e.config;ge(t.authDomain,e,"auth-domain-config-required");var r=t.emulator?Ee(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),n={apiKey:t.apiKey,appName:e.name,v:ne.SDK_VERSION},i=Kn.get(e.config.apiHost);i&&(n.eid=i);var a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),"".concat(r,"?").concat((0,re.querystring)(n).slice(1))}function Xn(e){return Qn.apply(this,arguments)}function Qn(){return Qn=e(u)(e(c).mark((function t(r){var n,i;return e(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,zn(r);case 2:return n=t.sent,ge(i=Vr().gapi,r,"internal-error"),t.abrupt("return",n.open({where:document.body,url:Bn(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Jn,dontclear:!0},(function(t){return new Promise((n=e(u)(e(c).mark((function n(i,a){var s,o,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(){Vr().clearTimeout(o),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:s=pe(r,"network-request-failed"),o=Vr().setTimeout((function(){a(s)}),Gn.get()),t.ping(u).then(u,(function(){a(s)}));case 7:case"end":return e.stop()}}),n)}))),function(e,t){return n.apply(this,arguments)}));var n})));case 6:case"end":return t.stop()}}),t)}))),Qn.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Zn="_blank",$n="http://localhost",ei=function(){"use strict";function t(r){e(F)(this,t),this.window=r,this.associatedEvent=null}return e(j)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function ti(t,r,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,s=Math.max((window.screen.availHeight-a)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Yn),{width:i.toString(),height:a.toString(),top:s,left:o}),l=(0,re.getUA)().toLowerCase();n&&(u=kt(l)?Zn:n),mt(l)&&(r=r||$n,c.scrollbars="yes");var d=Object.entries(c).reduce((function(t,r){var n=e($)(r,2),i=n[0],a=n[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(xt(l)&&"_self"!==u)return ri(r||"",u),new ei(null);var f=window.open(r||"",u,d);ge(f,t,"popup-blocked");try{f.focus()}catch(e){}return new ei(f)}function ri(e,t){var r=document.createElement("a");r.href=e,r.target=t;var n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ni="__/auth/handler",ii="emulator/auth/handler";function ai(t,r,n,i,a,s){ge(t.config.authDomain,t,"auth-domain-config-required"),ge(t.config.apiKey,t,"invalid-api-key");var o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:ne.SDK_VERSION,eventId:a};if(r instanceof nr){r.setDefaultLanguage(t.languageCode),o.providerId=r.providerId||"",(0,re.isEmpty)(r.getCustomParameters())||(o.customParameters=JSON.stringify(r.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var d,f=Object.entries(s||{})[Symbol.iterator]();!(u=(d=f.next()).done);u=!0){var p=e($)(d.value,2),h=p[0],v=p[1];o[h]=v}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}}if(r instanceof ir){var m=r.getScopes().filter((function(e){return""!==e}));m.length>0&&(o.scopes=m.join(","))}t.tenantId&&(o.tid=t.tenantId);var g,k,y=o,b=!0,w=!1,_=void 0;try{for(var I,x=Object.keys(y)[Symbol.iterator]();!(b=(I=x.next()).done);b=!0){var T=I.value;void 0===y[T]&&delete y[T]}}catch(e){w=!0,_=e}finally{try{b||null==x.return||x.return()}finally{if(w)throw _}}return"".concat((g=t,k=g.config,k.emulator?Ee(k,ii):"https://".concat(k.authDomain,"/").concat(ni)),"?").concat((0,re.querystring)(y).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var si="webStorageSupport",oi=function(){"use strict";function t(){e(F)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mr,this._completeRedirectFn=Nn,this._overrideRedirectResult=En}return e(j)(t,[{key:"_openPopup",value:function(t,r,n,i){var a=this;return e(u)(e(c).mark((function s(){var o,u;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ye(null===(o=a.eventManagers[t._key()])||void 0===o?void 0:o.manager,"_initialize() not called before _openPopup()"),u=ai(t,r,n,Ie(),i),e.abrupt("return",ti(t,u,Fr()));case 4:case"end":return e.stop()}}),s)})))()}},{key:"_openRedirect",value:function(t,r,n,i){var a=this;return e(u)(e(c).mark((function s(){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a._originValidation(t);case 2:return s=ai(t,r,n,Ie(),i),Vr().location.href=s,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var s}),s)})))()}},{key:"_initialize",value:function(e){var t=this,r=e._key();if(this.eventManagers[r]){var n=this.eventManagers[r],i=n.manager,a=n.promise;return i?Promise.resolve(i):(ye(a,"If manager is not set, promise should be"),a)}var s=this.initAndGetManager(e);return this.eventManagers[r]={promise:s},s.catch((function(){delete t.eventManagers[r]})),s}},{key:"initAndGetManager",value:function(t){var r=this;return e(u)(e(c).mark((function n(){var i,a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Xn(t);case 2:return i=e.sent,a=new An(t),i.register("authEvent",(function(e){return ge(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),r.eventManagers[t._key()]={manager:a},r.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),n)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(si,{type:si},(function(r){var n,i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==i&&t(!!i),fe(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return jn.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return St()||gt()||It()}}]),t}(),ui=oi,ci=function(){"use strict";function t(r){e(F)(this,t),this.factorId=r}return e(j)(t,[{key:"_process",value:function(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ke("unexpected MultiFactorSessionType")}}}]),t}(),li=function(t){"use strict";e(Z)(n,t);var r=e(te)(n);function n(t){var i;return e(F)(this,n),(i=r.call(this,"phone")).credential=t,i}return e(j)(n,[{key:"_finalizeEnroll",value:function(e,t,r){return function(e,t){return Le(e,"POST","/v2/accounts/mfaEnrollment:finalize",Ae(e,t))}(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Le(e,"POST","/v2/accounts/mfaSignIn:finalize",Ae(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(ci);(function(){"use strict";function t(){e(F)(this,t)}return e(j)(t,null,[{key:"assertion",value:function(e){return li._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var di="@firebase/auth",fi="0.20.11",pi=function(){"use strict";function t(r){e(F)(this,t),this.auth=r,this.internalListeners=new Map}return e(j)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var r=this;return e(u)(e(c).mark((function n(){var i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.assertAuthConfigured(),e.next=3,r.auth._initializationPromise;case 3:if(r.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,r.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),n)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var r;e((null===(r=t)||void 0===r?void 0:r.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){ge(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var hi,vi=(0,re.getExperimentalSetting)("authIdTokenMaxAge")||300,mi=null,gi=function(t){return r=e(u)(e(c).mark((function r(n){var i,a,s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n,!e.t0){e.next=5;break}return e.next=4,n.getIdTokenResult();case 4:e.t0=e.sent;case 5:if(i=e.t0,!((a=i&&((new Date).getTime()-Date.parse(i.issuedAtTime))/1e3)&&a>vi)){e.next=9;break}return e.abrupt("return");case 9:if(s=null==i?void 0:i.token,mi!==s){e.next=12;break}return e.abrupt("return");case 12:return mi=s,e.next=15,fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:"Bearer ".concat(s)}:{}});case 15:case"end":return e.stop()}}),r)}))),function(e){return r.apply(this,arguments)};var r};function ki(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,ne.getApp)(),t=(0,ne._getProvider)(e,"auth");if(t.isInitialized())return t.getImmediate();var r=_e(e,{popupRedirectResolver:ui,persistence:[nn,Lr,Mr]}),n=(0,re.getExperimentalSetting)("authTokenSyncURL");if(n){var i=gi(n);Er(r,i,(function(){return i(r.currentUser)})),Sr(r,(function(e){return i(e)}))}var a=(0,re.getDefaultEmulatorHost)("auth");return a&&At(r,"http://".concat(a)),r}hi="Browser",(0,ne._registerComponent)(new(0,se.Component)("auth",(function(e,t){var r=t.options,n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=n.options,s=a.apiKey,o=a.authDomain;return function(e,t){ge(s&&!s.includes(":"),"invalid-api-key",{appName:e.name}),ge(!(null==o?void 0:o.includes(":")),"argument-error",{appName:e.name});var n={apiKey:s,authDomain:o,clientPlatform:hi,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Et(hi)},i=new Ot(e,t,n);return function(e,t){var r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(we);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(i,r),i}(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,r){e.getProvider("auth-internal").initialize()}))),(0,ne._registerComponent)(new(0,se.Component)("auth-internal",(function(e){var t=Nt(e.getProvider("auth").getImmediate());return new pi(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,ne.registerVersion)(di,fi,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(hi)),(0,ne.registerVersion)(di,fi,"esm2017");var yi=i("88RRX"),bi=i("da801");W=i("4Nugj"),N=i("iU1Pc");(0,bi.initFireBase)();var wi,_i,Ii,xi,Ti=(0,yi.getFirestore)(),Si=ki(),Ei=new sr;wi=Si,_i=function(e){e?(W.refs.modal.classList.add("is-hidden"),W.refs.body.classList.remove("no-scroll"),W.refs.openModalAuthBtn.classList.add("is-hidden"),W.refs.sigInGoogleBtn.classList.add("is-hidden"),W.refs.signOutBtn.classList.remove("is-hidden"),W.refs.userInfo.innerHTML="\n              <span>".concat(e.email,"</span>\n            "),W.refs.myLibLink.classList.remove("visually-hidden"),localStorage.setItem("UserID",e.uid)):(W.refs.openModalAuthBtn.classList.remove("is-hidden"),W.refs.sigInGoogleBtn.classList.remove("is-hidden"),W.refs.signOutBtn.classList.add("is-hidden"),W.refs.userInfo.innerHTML="",W.refs.myLibLink.classList.add("visually-hidden"),localStorage.setItem("UserID","DefaultUser"))},(0,re.getModularInstance)(wi).onAuthStateChanged(_i,Ii,xi),W.refs.loginForm.addEventListener("submit",(function(t){t.preventDefault();var r=t.target,n=t.target[0].value.trim(),i=t.target[1].value.trim();Tr(Si,n,i).then((function(t){var r=t.user;e(N).Notify.success("Signin with ".concat(r.email," successful"))})).catch((function(t){e(N).Notify.failure("Sign-in  error happened")})),r.reset()})),W.refs.registerForm.addEventListener("submit",(function(t){t.preventDefault();var r=t.target[0].value.trim(),n=t.target[1].value.trim(),i=t.target;Ir(Si,r,n).then((function(t){var r=t.user;e(N).Notify.success("User Created with email:".concat(r.email)),(0,yi.setDoc)((0,yi.doc)(Ti,r.uid,"00000001"),{Queue:[],Watched:[]}),localStorage.setItem("UserID",r.uid)})).catch((function(t){e(N).Notify.failure("User no created")})),i.reset()})),W.refs.sigInGoogleBtn.addEventListener("click",(function(){var t=null;bn(Si,Ei).then((function(r){var n=r.user;e(N).Notify.success("Sign-in with ".concat(n.email," successful")),t=r.user.uid,(0,yi.getDocs)((0,yi.collection)(Ti,t)).then((function(e){e.docs[0]?console.log("Nice to see you again"):(0,yi.setDoc)((0,yi.doc)(Ti,t,"00000001"),{Queue:[],Watched:[]})}))})).catch((function(t){e(N).Notify.failure("Sign-in with Google account error happened")}))})),W.refs.signOutBtn.addEventListener("click",(function(){Rr(Si).then((function(){})).catch((function(e){}))}));u=i("bpxeT"),c=i("2TvXO"),bi=i("da801"),yi=i("88RRX");i("4Nugj");(0,bi.initDataBase)(),ki()}();
//# sourceMappingURL=index.c5e3614e.js.map
