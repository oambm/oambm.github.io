(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SetHashrate"],{8858:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"set-convert-times"},[n("div",{staticClass:"box"},[t._m(0),n("div",{staticClass:"Whitelistfunction1"},[n("span",[t._v("当前数值:"+t._s(t.currentvalue))])]),n("div",{staticClass:"input-container input-append"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.Hashrate,expression:"Hashrate"}],attrs:{type:"number",placeholder:"输入修改算力倍数"},domProps:{value:t.Hashrate},on:{input:function(e){e.target.composing||(t.Hashrate=e.target.value)}}})]),n("van-button",{on:{click:t.SetHashrate}},[t._v("设置")])],1)])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Whitelistfunction"},[n("span",[t._v("设置算力倍数")])])}],r=(n("96cf"),n("1da1")),i={data:function(){return{Hashrate:"",currentvalue:""}},created:function(){this.$contracts&&this.init()},methods:{init:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(t.$contracts),n=t.$contracts.Govern.methods.readMultiple(),n.call({from:t.$address},(function(e,n){e||(t.currentvalue=n)}));case 3:case"end":return e.stop()}}),e)})))()},SetHashrate:function(){var t=this;if(this.Hashrate.length<=0)return vant.Toast.fail("输入数字");var e=this.$contracts.Govern.methods.setMultiple(this.Hashrate.toWei());e.call({from:this.$address},(function(n,a){n||e.send({from:t.$address}).on("transactionHash",(function(t){vant.Toast.loading({message:"交易中...",forbidClick:!0,duration:0,loadingType:"spinner"})})).on("receipt",(function(e){vant.Toast.success("成功"),t.Hashrate="",t.init()})).on("error",(function(e){vant.Toast.fail("失败"),t.Hashrate=""}))}))}}},o=i,c=o,u=(n("f059"),n("2877")),l=Object(u["a"])(c,a,s,!1,null,"0569ab18",null);e["default"]=l.exports},be1d:function(t,e,n){},f059:function(t,e,n){"use strict";n("be1d")}}]);