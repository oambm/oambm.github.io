(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f83b1cee","chunk-a3d9e27a"],{"057f":function(t,e,n){var i=n("fc6a"),o=n("241c").f,r={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==r.call(t)?a(t):o(i(t))}},"159b":function(t,e,n){var i=n("da84"),o=n("fdbc"),r=n("17c2"),s=n("9112");for(var a in o){var c=i[a],d=c&&c.prototype;if(d&&d.forEach!==r)try{s(d,"forEach",r)}catch(u){d.forEach=r}}},"17c2":function(t,e,n){"use strict";var i=n("b727").forEach,o=n("a640"),r=n("ae40"),s=o("forEach"),a=r("forEach");t.exports=s&&a?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},2532:function(t,e,n){"use strict";var i=n("23e7"),o=n("5a34"),r=n("1d80"),s=n("ab13");i({target:"String",proto:!0,forced:!s("includes")},{includes:function(t){return!!~String(r(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},"2f0b":function(t,e,n){t.exports=n.p+"img/exchange.5f17f97f.svg"},4160:function(t,e,n){"use strict";var i=n("23e7"),o=n("17c2");i({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"44e7":function(t,e,n){var i=n("861d"),o=n("c6b6"),r=n("b622"),s=r("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==o(t))}},"48f4":function(t,e,n){"use strict";function i(t){return"NavigationDuplicated"===t.name||t.message&&-1!==t.message.indexOf("redundant navigation")}function o(t,e){var n=e.to,o=e.url,r=e.replace;if(n&&t){var s=t[r?"replace":"push"](n);s&&s.catch&&s.catch((function(t){if(t&&!i(t))throw t}))}else o&&(r?location.replace(o):location.href=o)}function r(t){o(t.parent&&t.parent.$router,t.props)}n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return s}));var s={url:String,replace:Boolean,to:[String,Object]}},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var i=n("ade3");function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"5a34":function(t,e,n){var i=n("44e7");t.exports=function(t){if(i(t))throw TypeError("The method doesn't accept regular expressions");return t}},"66b9":function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("e3b3"),n("bc1b")},"746f":function(t,e,n){var i=n("428f"),o=n("5135"),r=n("e538"),s=n("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});o(e,t)||s(e,t,{value:r.f(t)})}},a051:function(t,e,n){"use strict";n("c757")},a4d3:function(t,e,n){"use strict";var i=n("23e7"),o=n("da84"),r=n("d066"),s=n("c430"),a=n("83ab"),c=n("4930"),d=n("fdbf"),u=n("d039"),l=n("5135"),f=n("e8b5"),h=n("861d"),m=n("825a"),p=n("7b0b"),b=n("fc6a"),v=n("c04e"),g=n("5c6c"),C=n("7c73"),y=n("df75"),k=n("241c"),w=n("057f"),x=n("7418"),O=n("06cf"),S=n("9bf2"),_=n("d1e7"),L=n("9112"),N=n("6eeb"),q=n("5692"),$=n("f772"),j=n("d012"),P=n("90e3"),B=n("b622"),T=n("e538"),W=n("746f"),F=n("d44e"),A=n("69f3"),E=n("b727").forEach,D=$("hidden"),R="Symbol",I="prototype",M=B("toPrimitive"),J=A.set,H=A.getterFor(R),U=Object[I],z=o.Symbol,X=r("JSON","stringify"),Z=O.f,Q=S.f,G=w.f,K=_.f,V=q("symbols"),Y=q("op-symbols"),tt=q("string-to-symbol-registry"),et=q("symbol-to-string-registry"),nt=q("wks"),it=o.QObject,ot=!it||!it[I]||!it[I].findChild,rt=a&&u((function(){return 7!=C(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=Z(U,e);i&&delete U[e],Q(t,e,n),i&&t!==U&&Q(U,e,i)}:Q,st=function(t,e){var n=V[t]=C(z[I]);return J(n,{type:R,tag:t,description:e}),a||(n.description=e),n},at=d?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof z},ct=function(t,e,n){t===U&&ct(Y,e,n),m(t);var i=v(e,!0);return m(n),l(V,i)?(n.enumerable?(l(t,D)&&t[D][i]&&(t[D][i]=!1),n=C(n,{enumerable:g(0,!1)})):(l(t,D)||Q(t,D,g(1,{})),t[D][i]=!0),rt(t,i,n)):Q(t,i,n)},dt=function(t,e){m(t);var n=b(e),i=y(n).concat(mt(n));return E(i,(function(e){a&&!lt.call(n,e)||ct(t,e,n[e])})),t},ut=function(t,e){return void 0===e?C(t):dt(C(t),e)},lt=function(t){var e=v(t,!0),n=K.call(this,e);return!(this===U&&l(V,e)&&!l(Y,e))&&(!(n||!l(this,e)||!l(V,e)||l(this,D)&&this[D][e])||n)},ft=function(t,e){var n=b(t),i=v(e,!0);if(n!==U||!l(V,i)||l(Y,i)){var o=Z(n,i);return!o||!l(V,i)||l(n,D)&&n[D][i]||(o.enumerable=!0),o}},ht=function(t){var e=G(b(t)),n=[];return E(e,(function(t){l(V,t)||l(j,t)||n.push(t)})),n},mt=function(t){var e=t===U,n=G(e?Y:b(t)),i=[];return E(n,(function(t){!l(V,t)||e&&!l(U,t)||i.push(V[t])})),i};if(c||(z=function(){if(this instanceof z)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=P(t),n=function(t){this===U&&n.call(Y,t),l(this,D)&&l(this[D],e)&&(this[D][e]=!1),rt(this,e,g(1,t))};return a&&ot&&rt(U,e,{configurable:!0,set:n}),st(e,t)},N(z[I],"toString",(function(){return H(this).tag})),N(z,"withoutSetter",(function(t){return st(P(t),t)})),_.f=lt,S.f=ct,O.f=ft,k.f=w.f=ht,x.f=mt,T.f=function(t){return st(B(t),t)},a&&(Q(z[I],"description",{configurable:!0,get:function(){return H(this).description}}),s||N(U,"propertyIsEnumerable",lt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:z}),E(y(nt),(function(t){W(t)})),i({target:R,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=z(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!a},{create:ut,defineProperty:ct,defineProperties:dt,getOwnPropertyDescriptor:ft}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ht,getOwnPropertySymbols:mt}),i({target:"Object",stat:!0,forced:u((function(){x.f(1)}))},{getOwnPropertySymbols:function(t){return x.f(p(t))}}),X){var pt=!c||u((function(){var t=z();return"[null]"!=X([t])||"{}"!=X({a:t})||"{}"!=X(Object(t))}));i({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,n){var i,o=[t],r=1;while(arguments.length>r)o.push(arguments[r++]);if(i=e,(h(e)||void 0!==t)&&!at(t))return f(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!at(e))return e}),o[1]=e,X.apply(null,o)}})}z[I][M]||L(z[I],M,z[I].valueOf),F(z,R),j[D]=!0},ab13:function(t,e,n){var i=n("b622"),o=i("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[o]=!1,"/./"[t](e)}catch(i){}}return!1}},b1d2:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i="van-hairline",o=i+"--surround"},b650:function(t,e,n){"use strict";var i=n("1988"),o=n("2638"),r=n.n(o),s=n("d282"),a=n("ba31"),c=n("b1d2"),d=n("48f4"),u=n("ad06"),l=n("543e"),f=Object(s["a"])("button"),h=f[0],m=f[1];function p(t,e,n,i){var o,s=e.tag,f=e.icon,h=e.type,p=e.color,b=e.plain,v=e.disabled,g=e.loading,C=e.hairline,y=e.loadingText,k=e.iconPosition,w={};function x(t){e.loading&&t.preventDefault(),g||v||(Object(a["a"])(i,"click",t),Object(d["a"])(i))}function O(t){Object(a["a"])(i,"touchstart",t)}p&&(w.color=b?p:"white",b||(w.background=p),-1!==p.indexOf("gradient")?w.border=0:w.borderColor=p);var S=[m([h,e.size,{plain:b,loading:g,disabled:v,hairline:C,block:e.block,round:e.round,square:e.square}]),(o={},o[c["b"]]=C,o)];function _(){return g?n.loading?n.loading():t(l["a"],{class:m("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"currentColor"}}):n.icon?t("div",{class:m("icon")},[n.icon()]):f?t(u["a"],{attrs:{name:f,classPrefix:e.iconPrefix},class:m("icon")}):void 0}function L(){var i,o=[];return"left"===k&&o.push(_()),i=g?y:n.default?n.default():e.text,i&&o.push(t("span",{class:m("text")},[i])),"right"===k&&o.push(_()),o}return t(s,r()([{style:w,class:S,attrs:{type:e.nativeType,disabled:v},on:{click:x,touchstart:O}},Object(a["b"])(i)]),[t("div",{class:m("content")},[L()])])}p.props=Object(i["a"])({},d["b"],{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"},iconPosition:{type:String,default:"left"}}),e["a"]=h(p)},bc1b:function(t,e,n){},c3a6:function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743")},c5f5:function(t,e,n){t.exports=n.p+"img/not-trade.d9865208.svg"},c757:function(t,e,n){},dbb4:function(t,e,n){var i=n("23e7"),o=n("83ab"),r=n("56ef"),s=n("fc6a"),a=n("06cf"),c=n("8418");i({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,n,i=s(t),o=a.f,d=r(i),u={},l=0;while(d.length>l)n=o(i,e=d[l++]),void 0!==n&&c(u,e,n);return u}})},e439:function(t,e,n){var i=n("23e7"),o=n("d039"),r=n("fc6a"),s=n("06cf").f,a=n("83ab"),c=o((function(){s(1)})),d=!a||c;i({target:"Object",stat:!0,forced:d,sham:!a},{getOwnPropertyDescriptor:function(t,e){return s(r(t),e)}})},e538:function(t,e,n){var i=n("b622");e.f=i},ed61:function(t,e,n){"use strict";n.r(e);var i,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Liquidity"},[i("div",{staticClass:"container"},[i("div",{staticClass:"header"},[i("div",{staticClass:"note"},[i("h2",[t._v(t._s(t.$t("liquidity.text1")))]),i("span",[t._v(t._s(t.$t("liquidity.text2")))])]),i("div",{staticClass:"setting"},[i("img",{attrs:{src:n("cc6c")},on:{click:t.openSetting}}),t.canTrade?i("svg",{staticClass:"sc-eaf7e66-0 bXujD",attrs:{id:"arrow_loading",viewBox:"0 0 24 24",color:"textSubtle",width:"27px",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.reload}},[i("path",{attrs:{stroke:"none",fill:"#4B0A67",d:"M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"}}),i("defs",[i("path",{attrs:{id:"arrow",stroke:"none",fill:"none",d:"M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"}}),i("clipPath",{attrs:{id:"arrow-clip"}},[i("use",{attrs:{"xlink:href":"#arrow"}})])]),i("g",{attrs:{"clip-path":"url(#arrow-clip)"}},[i("circle",{attrs:{cx:"12",cy:"12",r:"5",transform:"rotate(365,12,12)",fill:"none",stroke:"#D7CAEC","stroke-width":"16","stroke-dasharray":"30","stroke-dashoffset":"0"}},[i("animate",{attrs:{attributeName:"stroke-dashoffset",values:"0;-30",begin:"arrow_loading.click; 0.7s",repeatCount:"indefinite",dur:"6.3s"}})])]),i("use",{attrs:{"xlink:href":"#arrow"}}),i("animateTransform",{attrs:{id:"transform_0",attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 0 0",to:"-10 0 0",dur:"0.07s",begin:"arrow_loading.click;",repeatCount:"1"}}),i("animateTransform",{attrs:{id:"transform_1",attributeName:"transform",attributeType:"XML",type:"rotate",from:"-45 0 0",to:"390 0 0",dur:"0.6s",begin:"transform_0.end",repeatCount:"1"}}),i("animateTransform",{attrs:{id:"transform_2",attributeName:"transform",attributeType:"XML",type:"rotate",from:"390 0 0",to:"360 0 0",dur:"0.15s",begin:"transform_1.end",repeatCount:"1"}})],1):i("svg",{staticClass:"sc-eaf7e66-0 bXujD",attrs:{id:"arrow_loading",viewBox:"0 0 24 24",color:"textSubtle",width:"27px",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{stroke:"none",fill:"#D7CAEC",d:"M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"}}),i("defs",[i("path",{attrs:{id:"arrow",stroke:"none",fill:"none",d:"M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z"}}),i("clipPath",{attrs:{id:"arrow-clip"}},[i("use",{attrs:{"xlink:href":"#arrow"}})])])])])]),i("div",{staticClass:"form"},[i("div",{staticClass:"input-container"},[i("span",[t._v(t._s(t.$t("liquidity.text3")))]),i("div",{class:t.token0?"has":"none"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.amount0,expression:"amount0"}],attrs:{type:"number",placeholder:t.$t("liquidity.text6")},domProps:{value:t.amount0},on:{input:[function(e){e.target.composing||(t.amount0=e.target.value)},t.inputAmount0]}}),t.token0?i("div",{staticClass:"select-btn",on:{click:function(e){return t.selectToken(0)}}},[i("img",{attrs:{src:t.token0.logoURI}}),i("span",{domProps:{textContent:t._s(t.token0.symbol)}}),i("img",{attrs:{src:n("1d4a")}})]):i("div",{staticClass:"select-btn",on:{click:function(e){return t.selectToken(0)}}},[i("span",[t._v(t._s(t.$t("liquidity.text5")))]),i("img",{attrs:{src:n("1d4a")}})])])]),i("van-icon",{attrs:{name:"plus"}}),i("div",{staticClass:"input-container"},[i("span",[t._v(t._s(t.$t("liquidity.text4")))]),i("div",{class:t.token1?"has":"none"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.amount1,expression:"amount1"}],attrs:{type:"number",placeholder:t.$t("liquidity.text6")},domProps:{value:t.amount1},on:{input:[function(e){e.target.composing||(t.amount1=e.target.value)},t.inputAmount1]}}),t.token1?i("div",{staticClass:"select-btn",on:{click:function(e){return t.selectToken(1)}}},[i("img",{attrs:{src:t.token1.logoURI}}),i("span",{domProps:{textContent:t._s(t.token1.symbol)}}),i("img",{attrs:{src:n("1d4a")}})]):i("div",{staticClass:"select-btn",on:{click:function(e){return t.selectToken(1)}}},[i("span",[t._v(t._s(t.$t("liquidity.text5")))]),i("img",{attrs:{src:n("1d4a")}})])])]),i("div",{staticClass:"illustrate"},[t.token0&&t.token1?i("div",[i("span",{directives:[{name:"show",rawName:"v-show",value:!t.rateChanged,expression:"!rateChanged"}]},[t._v(" 汇率 1 "+t._s(t.token0.symbol)+"≈"+t._s(t.rate1)+" "+t._s(t.token1.symbol))]),i("span",{directives:[{name:"show",rawName:"v-show",value:t.rateChanged,expression:"rateChanged"}]},[t._v("汇率 1 "+t._s(t.token1.symbol)+"≈"+t._s(t.rate0)+" "+t._s(t.token0.symbol))]),i("img",{attrs:{src:n("2f0b")},on:{click:function(e){t.rateChanged=!t.rateChanged}}})]):t._e(),i("div",[i("span",[t._v(t._s(t.$t("liquidity.text8"))+" "+t._s(t.poolProp))])])]),i("van-button",{attrs:{disabled:!t.canTrade},on:{click:t.addLiquidity}},[t._v(t._s(t.$t("liquidity.text7")))])],1)]),t.assetsPool?i("div",{staticClass:"record"},[i("div",{staticClass:"title"},[i("img",{attrs:{src:t.token0.logoURI}}),i("img",{attrs:{src:t.token1.logoURI}}),i("span",[t._v(" "+t._s(t.token0.symbol)+"/"+t._s(t.token1.symbol)+"-LP")])]),i("div",{staticClass:"Details"},[i("span",[t._v(t._s(t.assetsPool.lp.toFixed(6)))]),i("span",[t._v(t._s(t.assetsPool.myShare)+"%")])]),i("div",{staticClass:"bottom"},[i("div",[i("span",[t._v(t._s(t.token0.symbol)+"： "+t._s(t.assetsPool.amount0.toFixed(6)))]),i("span",[t._v(t._s(t.token1.symbol)+"： "+t._s(t.assetsPool.amount1.toFixed(6)))])]),i("button",{on:{click:function(e){t.$router.push({path:"/redemption",query:{info:JSON.stringify(t.assetsPool)}})}}},[t._v("赎回")])])]):i("img",{attrs:{src:n("c5f5")}}),i("search-tokens",{ref:"searchTokens",on:{select:t.select}}),i("slippage-setting",{ref:"setting"}),i("liquidity-state",{attrs:{state:t.tradeState,canTrade:t.canTrade,token0:Object.assign({},{amount:t.amount0},t.token0),token1:Object.assign({},{amount:t.amount1},t.token1),waitApprove:t.waitApprove,lp:t.liquidity,rate:t.rate1,reRate:t.rate0,prop:t.poolProp},on:{addLiquidity:t.addLiquidity,close:t.close}})],1)},r=[],s=(n("caad"),n("b0c0"),n("a9e3"),n("b680"),n("d3b7"),n("2532"),n("e7e5"),n("d399")),a=(n("96cf"),n("1da1")),c=n("5530"),d=n("ade3"),u=(n("66b9"),n("b650")),l=(n("c3a6"),n("ad06")),f=n("2f62"),h=n("e549"),m=n("b9cc"),p=n("b4e9"),b={components:(i={},Object(d["a"])(i,l["a"].name,l["a"]),Object(d["a"])(i,u["a"].name,u["a"]),Object(d["a"])(i,"search-tokens",(function(){return Promise.all([n.e("chunk-11dc367b"),n.e("chunk-2d0c0be3")]).then(n.bind(null,"bab4"))})),Object(d["a"])(i,"liquidity-state",(function(){return n.e("chunk-4c33b8d4").then(n.bind(null,"b243"))})),Object(d["a"])(i,"slippage-setting",(function(){return n.e("chunk-67302efb").then(n.bind(null,"515d"))})),i),data:function(){return{Rateamount:10,token0:p["b"],token1:null,balance0:"0",balance1:"0",allowance0:"0",allowance1:"0",reserve0:"0",reserve1:"0",amount0:"",amount1:"",pairAddress:null,totalLiquidity:"0".toBN(),inputing:!1,rateChanged:!1,assetsPool:null,tradeState:"none",interval:-1,inputIndex:0}},computed:Object(c["a"])(Object(c["a"])({},Object(f["b"])(["slippage","deadline"])),{},{pairContract:function(){return this.pairAddress?new this.$web3.eth.Contract(h,this.pairAddress):null},rate0:function(){return this.pairAddress?"1".toWei(this.token1.decimals).toBN().times(this.reserve0).div(this.reserve1).toFixed().fromWei(this.token0.decimals).toFixed(6):"--"},rate1:function(){return this.pairAddress?"1".toWei(this.token0.decimals).toBN().times(this.reserve1).div(this.reserve0).toFixed().fromWei(this.token1.decimals).toFixed(6):"--"},poolProp:function(){return Number(this.amount0)<=0||!this.pairAddress?"0%":"".concat(this.amount0.toWei(this.token0.decimals).toBN().div(this.reserve0.toBN().plus(this.amount0.toWei(this.token0.decimals))).times(100).toFixed().toFixed(6),"%")},liquidity:function(){if(!this.canTrade)return 0;if(this.reserve0.toBN().gt(0)){var t=this.amount0.toWei(this.token0.decimals).toBN().times(this.totalLiquidity).div(this.reserve0),e=this.amount1.toWei(this.token1.decimals).toBN().times(this.totalLiquidity).div(this.reserve1);return(t.lt(e)?t:e).toFixed(0).fromWei(18)}return this.amount0.toWei(this.token0.decimals).toBN().times(this.amount1.toWei(this.token1.decimals)).sqrt().toFixed(0).fromWei(18)},waitApprove:function(){var t=[];return Number(this.allowance0)<Number(this.amount0)&&this.token0.symbol!==p["b"].symbol&&t.push(this.token0),Number(this.allowance1)<Number(this.amount1)&&this.token1.symbol!==p["b"].symbol&&t.push(this.token1),t},canTrade:function(){return this.token0&&this.token1&&this.amount0>0}}),created:function(){var t=this;this.$contracts&&this.init(),this.interval=setInterval((function(){t.canTrade&&t.reload()}),5e3)},methods:{init:function(){var t=this.$route.query;t.token0&&t.token1&&(this.token0=JSON.parse(t.token0),this.token1=JSON.parse(t.token1),this.select(this.token1))},reload:function(){this.select(this.token1)},openSetting:function(){this.$refs.setting.open()},selectToken:function(t){this.$refs.searchTokens.open(t)},close:function(){this.tradeState="none",this.amount0="",this.amount1="",this.select(this.token1)},inputAmount0:function(){this.pairAddress&&(Number(this.amount0)<=0?this.amount1="":(this.inputIndex=0,this.amount1=this.amount0.toWei(this.token0.decimals).toBN().times(this.reserve1).div(this.reserve0).toFixed().fromWei(this.token1.decimals).toFixed(6)))},inputAmount1:function(){this.pairAddress&&(Number(this.amount1)<=0?this.amount0="":(this.inputIndex=1,this.amount0=this.amount1.toWei(this.token1.decimals).toBN().times(this.reserve0).div(this.reserve1).toFixed().fromWei(this.token0.decimals).toFixed(6)))},approve:function(){var t=this,e=new this.$web3.eth.Contract(m,this.waitApprove[0].address),n=Number(this.waitApprove[0].symbol===this.token1.symbol);e.methods.approve(p["c"],this["amount".concat(n)].toWei(this.waitApprove[0].decimals)).send({from:this.$address}).on("transactionHash",(function(e){t.tradeState="approve"})).on("receipt",function(){var i=Object(a["a"])(regeneratorRuntime.mark((function i(o){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.next=2,e.methods.allowance(t.$address,p["c"]).call({from:t.$address});case 2:t["allowance".concat(n)]=i.sent.fromWei(t.waitApprove[0].decimals),t.waitApprove.length>0?t.approve():t.tradeState="approved";case 4:case"end":return i.stop()}}),i)})));return function(t){return i.apply(this,arguments)}}()).on("error",(function(e){t.tradeState="none"}))},addLiquidity:function(){var t=this;if(Number(this.balance0)<Number(this.amount0))return s["a"].fail(this.$t("liquidity.text9",{symbol:this.token0.symbol}));if(Number(this.balance1)<Number(this.amount1))return s["a"].fail(this.$t("liquidity.text9",{symbol:this.token1.symbol}));if(this.waitApprove.length>0)return this.approve();if([this.token0.symbol,this.token1.symbol].includes(p["b"].symbol))return this.addLiquidityETH();var e=this.amount0.toWei(this.token0.decimals),n=this.amount1.toWei(this.token1.decimals),i=e.toBN().div(100).times(this.slippage).toFixed(0),o=n.toBN().div(100).times(this.slippage).toFixed(0),r=Math.floor((new Date).getTime()/1e3)+Number(this.deadline);this.$contracts.Router.methods.addLiquidity(this.token0.address,this.token1.address,e,n,i,o,this.$address,r).send({from:this.$address}).on("transactionHash",(function(e){t.tradeState="in"})).on("receipt",(function(e){t.tradeState="done"})).on("error",(function(e){t.tradeState="none"}))},addLiquidityETH:function(){var t=this,e=Number(this.token0.symbol===p["b"].symbol),n=Number(!(this.token0.symbol===p["b"].symbol)),i=this["amount".concat(e)].toWei(this["token".concat(e)].decimals),o=i.toBN().div(100).times(this.slippage).toFixed(0),r=this["amount".concat(n)].toWei(this["token".concat(n)].decimals),s=r.toBN().div(100).times(this.slippage).toFixed(0),a=Math.floor((new Date).getTime()/1e3)+Number(this.deadline);this.$contracts.Router.methods.addLiquidityETH(this["token".concat(e)].address,i,o,s,this.$address,a).send({from:this.$address,value:r}).on("transactionHash",(function(e){t.tradeState="in"})).on("receipt",(function(e){t.tradeState="done"})).on("error",(function(e){t.tradeState="none"}))},select:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=this["token".concat(Number(!n))];if(t.symbol===i.symbol)return this.switchToken();this["token".concat(n)]=t;var o=new this.$web3.BatchRequest,r=new this.$web3.eth.Contract(m,this.token0.address),s=new this.$web3.eth.Contract(m,this.token1.address);this.token0.symbol===p["b"].symbol?o.add(this.$web3.eth.getBalance.request(this.$address,"latest")):o.add(r.methods.balanceOf(this.$address).call.request({from:this.$address})),this.token1.symbol===p["b"].symbol?o.add(this.$web3.eth.getBalance.request(this.$address,"latest")):o.add(s.methods.balanceOf(this.$address).call.request({from:this.$address})),o.add(r.methods.allowance(this.$address,p["c"]).call.request({from:this.$address})),o.add(s.methods.allowance(this.$address,p["c"]).call.request({from:this.$address})),o.add(this.$contracts.Factory.methods.getPair(this.token0.address,this.token1.address).call.request({from:this.$address})),o.requestManager.sendBatch(o.requests,(function(t,n){if(t)console.log(n),console.log(t);else{var i=n[4].result.decode(["address"]);if(e.balance0=n[0].result.fromWei(e.token0.decimals),e.balance1=n[1].result.fromWei(e.token1.decimals),e.allowance0=n[2].result.toBN().toFixed().fromWei(e.token0.decimals),e.allowance1=n[3].result.toBN().toFixed().fromWei(e.token1.decimals),e.pairAddress=0!==Number(i)?i:null,e.pairContract){var o=new e.$web3.BatchRequest;o.add(e.pairContract.methods.getReserves().call.request({from:e.$address})),o.add(e.pairContract.methods.totalSupply().call.request({from:e.$address})),o.add(e.pairContract.methods.balanceOf(e.$address).call.request({from:e.$address})),o.requestManager.sendBatch(o.requests,(function(t,n){if(!t){var o=n[0].result.decode([{type:"uint112",name:"_reserve0"},{type:"uint112",name:"_reserve1"}]),r=o._reserve0,s=o._reserve1,a=e.token0.address.toBN().lt(e.token1.address.toBN()),c=n[2].result.toBN();e.reserve0=a?r:s,e.reserve1=a?s:r,e.totalLiquidity=n[1].result.toBN(),c.gt(0)&&(e.assetsPool={logo0:e.token0.logoURI,logo1:e.token1.logoURI,symbol0:e.token0.symbol,symbol1:e.token1.symbol,amount0:c.times(e.reserve0).div(e.totalLiquidity).toFixed(0).fromWei(e.token0.decimals),amount1:c.times(e.reserve1).div(e.totalLiquidity).toFixed(0).fromWei(e.token1.decimals),reserve0:e.reserve0,reserve1:e.reserve1,lp:c.toFixed().fromWei(18),myShare:c.div(e.totalLiquidity).times(100).toFixed().toFixed(6),address0:e.token0.address,address1:e.token1.address,decimals0:e.token0.decimals,decimals1:e.token1.decimals,address:i}),e["inputAmount".concat(e.inputIndex)]()}}))}}}))}},destroyed:function(){clearInterval(this.interval)}},v=b,g=v,C=(n("a051"),n("2877")),y=Object(C["a"])(g,o,r,!1,null,"41f62134",null);e["default"]=y.exports}}]);