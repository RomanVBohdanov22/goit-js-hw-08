function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=n);var a=n("kEUo3");const c=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};let f={};const l=c("feedback-form-state"),s={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),email:document.querySelector(".feedback-form input")};s.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(l),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),s.form.addEventListener("input",e(a).throttle((function(e){return((e,t)=>{try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}})("feedback-form-state",f)}),500)),s.form.addEventListener("input",(e=>{f[e.target.name]=e.target.value})),function(){if(c("feedback-form-state")){const e=c("feedback-form-state");Object.keys(e).map((t=>{document.querySelector(`[name='${t}']`).value=e[t]}))}}();
//# sourceMappingURL=03-feedback.1977f66a.js.map