!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n);var a=n("1WSnx"),c="feedback-form-state",l=function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},u={},f=l(c),i={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),email:document.querySelector(".feedback-form input")};!function(){if(l(c)){var e=l(c);Object.keys(e).map((function(t){document.querySelector("[name='".concat(t,"']")).value=e[t]}))}}(),i.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(f),e.currentTarget.reset(),localStorage.removeItem(c)})),i.form.addEventListener("input",e(a).throttle((function(e){return u[e.target.name]=e.target.value,function(e,t){try{var r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}}(c,u)}),500))}();
//# sourceMappingURL=03-feedback.f7f15f27.js.map