!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(){app.innerHTML='<h3 style="text-align: center">Лабораторная работа №4</h3><br><h4 style="text-align: center">Работу выполнил: Тавадян Алексей</h4>'}n.r(t);let o=document.querySelector(".home"),i=document.querySelector(".pokemon");document.querySelector("#app");r(),o.onclick=r,i.onclick=async function(){let e=await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");!function(e){let t="";t+=`<img style="width: 300px" src="${e.sprites.front_default}">`,t+=`<h3>${e.name}<h3/>`,t+="\n        <h5>Abilities</h5>\n        <ul>\n        ",e.abilities.map(e=>{t+=`<li>${e.ability.name}</li>`}),t+="</ul>",app.innerHTML=t}(await e.json())}}]);