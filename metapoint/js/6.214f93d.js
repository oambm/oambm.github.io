(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{554:function(t,e,s){"use strict";s.r(e),function(t){s.d(e,"default",(function(){return m}));var i=s(94),n=s.n(i),a=s(187),c=s.n(a),o=s(547),r=s.n(o),d=(s(113),s(0)),u=s(32),h=s(95),l=(s(566),s(5));const{Option:p}=r.a;class m extends d.Component{constructor(e){super(e),this.init=async()=>{window.ethereum&&await u.c.eth.getAccounts((t,e)=>{this.setState({address:e[0]})});let t=await u.b.MetaFarm.methods.activeTokenNeed().call();this.setState({activeTokenNeed:t.fromWei()})},this.setInput1=t=>{this.setState({input1:t.target.value})},this.setInput2=t=>{this.setState({input2:t.target.value})},this.submit=()=>{u.b.MetaFarm.methods.setActiveTokenNeed(this.state.input1.toWei()).send({from:this.state.address}).on("receipt",t=>{Object(h.a)("设置成功","success"),this.init()}).on("error",e=>{Object(h.a)(t.t("CANCEL"),"error")})},this.state={address:"",input1:"",input2:"",activeTokenNeed:""}}async componentDidMount(){await this.init()}render(){const t=this.state;return Object(l.jsx)("div",{className:"ido",children:Object(l.jsxs)("div",{className:"box",children:[Object(l.jsxs)("div",{className:"title",children:["土地激活税:",t.activeTokenNeed]}),Object(l.jsxs)("div",{className:"item",id:"language-change",children:[Object(l.jsx)("span",{children:"激活消耗数量："}),Object(l.jsx)(c.a,{onInput:this.setInput1,value:t.input1}),Object(l.jsx)(n.a,{className:"same-btn",onClick:this.submit,children:"设置"})]})]})})}}}.call(this,s(51))},566:function(t,e,s){}}]);