(()=>{"use strict";var e={717:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),s=n(645),a=n.n(s),i=n(667),c=n.n(i),l=new URL(n(148),n.b),u=a()(o()),d=c()(l);u.push([e.id,"body{\n    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;\n    background-image: url("+d+");\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    background-size: cover;\n    background-repeat: no-repeat;\n    align-items: center;\n    justify-content: center;\n}\n.container{\n    max-width: 1110px;\n    height: 500px;\n    display: flex;\n    flex-direction: row;\n    background-size: cover;\n    background-repeat: no-repeat;\n    align-items: center;\n    justify-content: center;\n}\n.box{\n    margin-left: 40px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100px;\n    height: 100px;\n    border: 3px solid rgb(17, 33, 250);\n    border-radius: 10px;\n    background-color: rgba(113, 179, 255, 0.836);\n    transition: all 0.1s;\n}\n.changing{\n    transform:scale(1.1);\n    border: 1px solid rgb(83, 250, 17);\n    box-shadow: 0 0 10px rgb(83, 250, 17);\n}\n.letter{\n    padding: 7px 0 0 0;\n    color:  rgb(0, 68, 255);\n    \n}\n.text{\n    padding: 0 0 7px 0;\n    color: rgb(6, 97, 201);\n    text-align: center;\n}\n",""]);const p=u},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==s&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=s),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var s={},a=[],i=0;i<e.length;i++){var c=e[i],l=r.base?c[0]+r.base:c[0],u=s[l]||0,d="".concat(l," ").concat(u);s[l]=u+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var s=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<s.length;a++){var i=n(s[a]);t[i].references--}for(var c=r(e,o),l=0;l<s.length;l++){var u=n(s[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}s=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},148:(e,t,n)=>{e.exports=n.p+"bbcb176ae8db25388166.jpg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={id:r,exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{!function(e,t){for(let e=0;e<11;e++);}();const e=["Олександр","Ігор","Олена","Іра","Олексій","Світлана"];let t=[],r=[];for(let n=0;n<e.length;n++){let o=e[n];o.endsWith("а")?t.push(o):r.push(o)}const o=(e,n)=>{const o=[];for(let e=0;e<(r.length,t.length);e++)o.push([r[e]+" і "+t[e]]);return o},s=(e,t)=>{let n=[];for(let r=0;r<(e.length,t.length);r++)n.push([e[r]+" , "+t[r]]);return n},a=s(o(),["Диференційне рівняння","Теорія автоматів","Алгоритми і структури даних"]),i=(s(e,[4,5,5,3,4,5]),(e=>{let t=[];for(let e=0;e<a.length;e++){const n=Math.floor(5*Math.random())+1;t.push([a[e]+" , "+n])}})(),(e,t,n)=>{const r=[];for(let o=0;o<e;o++)r.push(Math.floor(Math.random()*n)+t);return r});i(10,1,100),[-3,6,-4,1,6,-2].filter((e=>e>0)).length;let c=new class{constructor(e,t,n){this.course=e,this.university=t,this.fullName=n,this._marks=[5,4,4,5],this.dismissed=!1}getInfo(){return`Студент ${this.course}го курсу ${this.university} м. Одеса, ${this.fullName}`}get marks(){return this.dismissed?null:this._marks}set marks(e){if(this.dismissed)return null;this._marks.push(e)}getAverageMark(){return this.dismissed?null:this._marks.reduce(((e,t)=>e+t),0)/this._marks.length}dismiss(){this.dismissed=!0}recover(){this.dismissed=!1}}(1,"Вищої Школи Психотерапії","Остап Родоманський Бендер");const l=document.createElement("section");l.classList.add("allCube"),document.body.appendChild(l),l.style.cssText="display: grid; grid-template-columns: repeat(5, 50px); grid-template-row: repeat(5, 50px);";var u,d=n(379),p=n.n(d),f=n(795),h=n.n(f),m=n(569),g=n.n(m),v=n(565),b=n.n(v),y=n(216),x=n.n(y),w=n(589),M=n.n(w),C=n(717),k={};k.styleTagTransform=M(),k.setAttributes=b(),k.insert=g().bind(null,"head"),k.domAPI=h(),k.insertStyleElement=x(),p()(C.Z,k),C.Z&&C.Z.locals&&C.Z.locals,console.log((u="alisa").charAt(0).toUpperCase()+u.slice(1).toLowerCase()),console.log(o()),console.log(i(10,1,100)),console.log(function(e){const t=[];return Object.keys(e.subjects).forEach((function(e,n){const r=(e[0].toUpperCase()+e.slice(1).toLowerCase()).replace("_"," ");t.push(r)})),t}({name:"Tanya",course:3,subjects:{math:[4,4,3,4],algorithms:[3,3,3,4,4,4],data_science:[5,5,3,4]}})),console.log(function(e){return this.tax*this.middleSalary}.call({tax:.195,middleSalary:1789,vacancies:11476})),console.log(`Середня оцінка: ${c.getAverageMark()}.`),function(e){for(let e=0;e<25;e++){const e=document.createElement("div");e.style.cssText="width: 50px; height: 50px;",e.style.backgroundColor="rgb("+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+")",l.appendChild(e)}}(),async function(e){let t=0,n=[];for(;t<4;){const e=Date.now().toString().slice(-5);n.push(String.fromCharCode(e)),await new Promise((e=>setTimeout(e,200))),t++}return n.join(" ")}().then((e=>console.log(e)))})()})();