(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["community"],{"2a5c":function(e,s,t){"use strict";t("7ae3")},"7ae3":function(e,s,t){},f7d6:function(e,s,t){"use strict";t.r(s);var n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"community"},[t("div",{staticClass:"box"},[t("span",[e._v("社区代币地址")]),t("div",{staticClass:"input-container"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.tokenAddress,expression:"tokenAddress"}],attrs:{type:"text"},domProps:{value:e.tokenAddress},on:{change:e.changeTokenAddress,input:function(s){s.target.composing||(e.tokenAddress=s.target.value)}}})]),t("span",[e._v("社区来源")]),t("div",{staticClass:"select-container"},[t("span",[e._v(e._s(e.source))]),t("span",{on:{click:function(s){e.sourceShow=!e.sourceShow}}},[e._v("▼")]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.sourceShow,expression:"sourceShow"}],staticClass:"options"},[t("span",{on:{click:function(s){return e.selectSource("PanCakeSwap")}}},[e._v("PanCakeSwap")]),t("span",{on:{click:function(s){return e.selectSource("自定义")}}},[e._v("自定义")])])]),t("span",{directives:[{name:"show",rawName:"v-show",value:e.showPrice,expression:"showPrice"}]},[e._v("社区代币价格($)")]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.showPrice,expression:"showPrice"}],staticClass:"input-container"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.tokenPrice,expression:"tokenPrice"}],attrs:{type:"number"},domProps:{value:e.tokenPrice},on:{input:function(s){s.target.composing||(e.tokenPrice=s.target.value)}}})]),t("span",[e._v("社区代币精度")]),t("div",{staticClass:"input-container"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.decimals,expression:"decimals"}],attrs:{type:"number",readonly:""},domProps:{value:e.decimals},on:{input:function(s){s.target.composing||(e.decimals=s.target.value)}}})]),t("span",[e._v("销毁地址")]),t("div",{staticClass:"select-container"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.destroyAddress,expression:"destroyAddress"}],attrs:{type:"text"},domProps:{value:e.destroyAddress},on:{input:function(s){s.target.composing||(e.destroyAddress=s.target.value)}}}),t("span",{on:{click:function(s){e.destroyShow=!e.destroyShow}}},[e._v("▼")]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.destroyShow,expression:"destroyShow"}],staticClass:"options"},[t("span",{on:{click:function(s){return e.selectDestroyAddress("0x0000")}}},[e._v("0x0000")]),t("span",{on:{click:function(s){return e.selectDestroyAddress("0xdead")}}},[e._v("0xdead")])])]),t("van-button",{on:{click:e.addToken}},[e._v("确认")])],1)])},r=[],o=(t("b680"),t("96cf"),t("1da1")),a=t("b9cc"),i={"0x0000":"0x0000000000000000000000000000000000000000","0xdead":"0x000000000000000000000000000000000000dead"},d={data:function(){return{sourceShow:!1,destroyShow:!1,tokenAddress:"",source:"",tokenPrice:"",decimals:"",destroyAddress:""}},computed:{showPrice:function(){return"PanCakeSwap"!==this.source}},methods:{selectSource:function(e){this.source=e,this.sourceShow=!1},selectDestroyAddress:function(e){this.destroyAddress=e,this.destroyShow=!1},changeTokenAddress:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var t;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(e.$web3.utils.isAddress(e.tokenAddress)){s.next=2;break}return s.abrupt("return",vant.Toast.fail("社区代币地址格式错误！"));case 2:return t=new e.$web3.eth.Contract(a,e.tokenAddress),s.prev=3,s.next=6,t.methods.decimals().call({from:e.$address});case 6:e.decimals=s.sent,s.next=12;break;case 9:return s.prev=9,s.t0=s["catch"](3),s.abrupt("return",vant.Toast.fail("不是一个正确的社区代币地址！"));case 12:case"end":return s.stop()}}),s,null,[[3,9]])})))()},addToken:function(){var e=this;if(""===this.tokenAddress)return vant.Toast.fail("请输入社区代币地址！");if(!this.$web3.utils.isAddress(this.tokenAddress))return vant.Toast.fail("社区代币地址格式错误！");if(""===this.source)return vant.Toast.fail("请选择社区来源！");if("自定义"===this.source&&""===this.tokenPrice)return vant.Toast.fail("请输入社区代币价格！");if(""===this.destroyAddress)return vant.Toast.fail("请选择或输入销毁地址！");if(!i.hasOwnProperty(this.destroyAddress)&&!this.$web3.utils.isAddress(this.destroyAddress))return vant.Toast.fail("销毁地址格式错误！");var s="PanCakeSwap"===this.source?0:"1".toBN().div(this.tokenPrice).times(1e18).toFixed(0),t=i.hasOwnProperty(this.destroyAddress)?i[this.destroyAddress]:this.destroyAddress,n=this.$contracts.Community.methods.addToken(this.tokenAddress,s,this.decimals,t);n.call({from:this.$address},(function(s,t){s||n.send({from:e.$address}).on("transactionHash",(function(e){vant.Toast.loading({message:"交易中...",forbidClick:!0,duration:0,loadingType:"spinner"})})).on("receipt",(function(s){vant.Toast.clear(),e.tokenAddress="",e.source="",e.tokenPrice="",e.decimals="",e.destroyAddress="",vant.Toast.success("添加社区代币成功！")})).on("error",(function(e){vant.Toast.clear(),vant.Toast.fail("交易失败！")}))}))}}},c=d,u=c,l=(t("2a5c"),t("2877")),v=Object(l["a"])(u,n,r,!1,null,"ac271d48",null);s["default"]=v.exports}}]);