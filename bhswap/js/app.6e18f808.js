(function(e){function t(t){for(var r,o,u=t[0],s=t[1],c=t[2],d=0,l=[];d<u.length;d++)o=u[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&l.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return s.p+"js/"+({MAddRound:"MAddRound"}[e]||e)+"."+{MAddRound:"f142a44c"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={MAddRound:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({MAddRound:"MAddRound"}[e]||e)+"."+{MAddRound:"7db6a787"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===r||d===a))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){c=l[u],d=c.getAttribute("data-href");if(d===r||d===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=u(e);var l=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0018":function(e,t,n){},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},2:function(e,t){},"222d":function(e,t,n){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"currentTime",(function(){return q}));var r=n("1da1"),o=(n("e7e5"),n("d399")),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("96cf"),n("a9e3"),n("b680"),n("fb6a"),n("d3b7"),n("25f0"),n("99af"),n("2b0e")),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],s=n("99e5"),c=n.n(s),d={name:"App",data:function(){return{loading:!1,toggleView:!0}},created:function(){var e=this,t=sessionStorage.getItem("password");"bhswap"!==t&&this.$router.push("/index"),window.onload=function(){window.ethereum&&e.init()}},methods:{init:function(){var e=this;window.ethereum.request({method:"eth_requestAccounts"}).then((function(t){var n=new c.a(window.ethereum);a["default"].prototype.$address=t[0],a["default"].prototype.$web3=n,console.log(e.$address),e.changeView()}))},changeView:function(){var e=this;this.toggleView=!1,this.$nextTick((function(){e.toggleView=!0}))}}},l=d,f=(n("034f"),n("2877")),p=Object(f["a"])(l,i,u,!1,null,null,null),h=p.exports,g=(n("3ca3"),n("ddb0"),n("8c4f")),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login"},[n("h2",[e._v("后台管理系统")]),n("el-input",{staticClass:"loginInput",attrs:{type:"password",placeholder:"请输入密码","show-password":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("el-button",{on:{click:e.login}},[e._v("登录")])],1)},v=[],w={data:function(){return{password:""}},methods:{login:function(){if("bhswap"!==this.password)return this.$message.error("密码错误！");sessionStorage.setItem("password",this.password),this.$router.push("/")}}},b=w,y=(n("d44d"),n("db30"),Object(f["a"])(b,m,v,!1,null,null,null)),x=y.exports;a["default"].use(g["a"]);var A=[{path:"/index",name:"index",component:x},{path:"/",name:"MAddRound",component:function(){return n.e("MAddRound").then(n.bind(null,"4393"))}}],S=new g["a"]({mode:"hash",base:"",routes:A}),N=S,O=(n("0147"),n("499a"),n("a925")),_={Downloadtheandroid:"安卓下载",EmbracelockchainUseHash:"拥抱区块链，就用哈希派",Youruniversaldigitalwallet:"您的通用数字钱包",banquan:"版权所有   2020Hashpay保留所有"},k=_,j={Downloadtheandroid:"Download android",EmbracelockchainUseHash:"Embrace Blockchain, Use Hash",Youruniversaldigitalwallet:"Your universal digital wallet",banquan:"Copyright 2020Hashpay. All Rights reserved"},E=j;a["default"].use(O["a"]);var M=new O["a"]({locale:localStorage.getItem("locale")||"en",messages:{zh:k,en:E}}),P=M,R=n("5c96"),T=n.n(R),B=(n("0fae"),n("901e")),C=n.n(B);a["default"].use(T.a),a["default"].use(o["a"]),a["default"].config.productionTip=!1,String.prototype.toBN=F,String.prototype.toWei=I,String.prototype.fromWei=L,String.prototype.toFixed=U,String.prototype.decode=H,Number.prototype.toBN=F,Number.prototype.toWei=I,Number.prototype.fromWei=L,Number.prototype.toFixed=U;var $=new c.a;function H(e){var t="0x"===this.slice(0,2)?"".concat(this):"0x".concat(this);return e.length>1?$.eth.abi.decodeParameters(e,t):$.eth.abi.decodeParameter(e[0],t)}function q(e){return D.apply(this,arguments)}function D(){return D=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",Math.floor((new Date).getTime()/1e3));case 1:case"end":return e.stop()}}),e)}))),D.apply(this,arguments)}function F(){var e="".concat(this);return c.a.utils.isAddress(e)?new C.a(c.a.utils.toBN(e).toString()):new C.a(e)}function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:18;return this.toBN().times(V(e)).toFixed()}function L(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:18,t="".concat(this);return c.a.utils.isHex(t)&&0===Number(this)||"0x"===t?"0":this.toBN().div(V(e)).toFixed()}function V(e){return"10".toBN().pow(e)}function U(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,t="string"===typeof this?this:"".concat(this),n=t.indexOf(".");return n>0?t.slice(n+1).length<=e?t:"".concat(Number(e>0?"".concat(t.slice(0,n),".").concat(t.slice(n+1,n+1+e)):t.slice(0,n))):t}new a["default"]({router:N,i18n:P,render:function(e){return e(h)}}).$mount("#app")},6:function(e,t){},7:function(e,t){},8:function(e,t){},"85ec":function(e,t,n){},9:function(e,t){},d44d:function(e,t,n){"use strict";n("222d")},db30:function(e,t,n){"use strict";n("0018")}});