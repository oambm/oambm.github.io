(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{550:function(t,s,e){"use strict";e.r(s),function(t){e.d(s,"default",(function(){return p}));var i=e(94),a=e.n(i),n=e(187),c=e.n(n),r=e(547),u=e.n(r),d=(e(113),e(0)),o=e(32),h=e(95),m=(e(562),e(5));const{Option:l}=u.a;class p extends d.Component{constructor(s){super(s),this.init=async()=>{window.ethereum&&await o.c.eth.getAccounts((t,s)=>{this.setState({address:s[0]})});let t=await o.b.MinistryLandResources.methods.maxDayMintNum().call(),s=await o.b.MinistryLandResources.methods.expMaxDayMintNum().call();this.setState({maxDayMintNum:t,expMaxDayMintNum:s})},this.setInput1=t=>{this.setState({input1:t.target.value})},this.setInput2=t=>{this.setState({input2:t.target.value})},this.submit=()=>{o.b.MinistryLandResources.methods.setMaxDayMintNum(this.state.input1).send({from:this.state.address}).on("receipt",t=>{Object(h.a)("设置成功","success"),this.init()}).on("error",s=>{Object(h.a)(t.t("CANCEL"),"error")})},this.submit1=()=>{o.b.MinistryLandResources.methods.setExpMaxDayMintNum(this.state.input2).send({from:this.state.address}).on("receipt",t=>{Object(h.a)("设置成功","success"),this.init()}).on("error",s=>{Object(h.a)(t.t("CANCEL"),"error")})},this.state={address:"",input1:"",input2:"",maxDayMintNum:"",expMaxDayMintNum:""}}async componentDidMount(){await this.init()}render(){const t=this.state;return Object(m.jsxs)("div",{className:"ido",children:[Object(m.jsxs)("div",{className:"box",children:[Object(m.jsxs)("div",{className:"title",children:["每日最大铸造量:",t.maxDayMintNum]}),Object(m.jsxs)("div",{className:"item",id:"language-change",children:[Object(m.jsx)("span",{children:"每日最大铸造量："}),Object(m.jsx)(c.a,{onInput:this.setInput1,value:t.input1}),Object(m.jsx)(a.a,{className:"same-btn",onClick:this.submit,children:"设置"})]})]}),Object(m.jsxs)("div",{className:"box",children:[Object(m.jsxs)("div",{className:"title",children:["体验土地每日最大铸造量:",t.expMaxDayMintNum]}),Object(m.jsxs)("div",{className:"item",id:"language-change",children:[Object(m.jsx)("span",{children:"每日最大铸造量："}),Object(m.jsx)(c.a,{onInput:this.setInput2,value:t.input2}),Object(m.jsx)(a.a,{className:"same-btn",onClick:this.submit1,children:"设置"})]})]})]})}}}.call(this,e(51))},562:function(t,s,e){}}]);