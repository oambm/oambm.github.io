(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7b4291e"],{"2f51":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"my-exchange"},[e("span",[t._v(t._s(t.totalAwardA))]),e("span",[t._v(t._s(t.$t("myExchange.text1")))]),e("div",{staticClass:"info"},[e("div",[e("span",[t._v(t._s(t.$t("myExchange.text2")))]),e("span",[t._v(t._s(t.totalAwardC)+" USDT")])]),e("i"),e("div",[e("span",[t._v(t._s(t.$t("myExchange.text3")))]),e("span",[t._v(t._s(t.totalAwardB)+" "+t._s(t.$t("invitelist.text4")))])])]),e("van-button",{directives:[{name:"show",rawName:"v-show",value:!t.trading&&t.disableds,expression:"!trading && disableds"}],on:{click:t.receive}},[t._v(t._s(t.$t("myExchange.text4")))]),e("van-button",{directives:[{name:"show",rawName:"v-show",value:!t.trading&&!t.disableds,expression:"!trading && !disableds"}],attrs:{disabled:""}},[t._v(t._s(t.$t("myExchange.text4"))+" ")]),e("van-button",{directives:[{name:"show",rawName:"v-show",value:t.trading,expression:"trading"}],attrs:{loading:"","loading-text":t.$t("myExchange.text5")}})],1)},s=[],i=(e("b0c0"),e("a9e3"),e("e7e5"),e("d399")),r=e("ade3"),c=(e("66b9"),e("b650")),o={components:Object(r["a"])({},c["a"].name,c["a"]),props:{exchanged:[String,Number],exchangeds:[String,Number],totalAward:[String,Number]},data:function(){return{earnings:0,trading:!1,disableds:!1}},created:function(){this.$contracts&&this.init()},computed:{totalAwardA:function(){return this.exchangeds},totalAwardB:function(){return this.totalAward},totalAwardC:function(){return this.exchanged}},methods:{init:function(){var t=this;this.$contracts.Exchange.methods.isCloseSubscribe().call({from:this.$address},(function(a,e){a||(t.disableds=e)}))},receive:function(){var t=this;if(this.totalAwardA<=0)return i["a"].fail(this.$t("myExchange.text6"));var a=this.$contracts.Exchange.methods.receiveForce();a.call({from:this.$address},(function(e,n){e||a.send({from:t.$address}).on("transactionHash",(function(a){t.trading=!0})).on("receipt",(function(a){t.$emit("reload"),t.init(),i["a"].success(t.$t("myExchange.text7")),t.trading=!1})).on("error",(function(a){i["a"].fail(t.$t("myExchange.text8")),t.trading=!1}))}))}}},d=o,h=d,u=(e("922c"),e("2877")),l=Object(u["a"])(h,n,s,!1,null,"c586a1da",null);a["default"]=l.exports},"922c":function(t,a,e){"use strict";e("9319")},9319:function(t,a,e){}}]);