(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{557:function(t,e,s){"use strict";s.r(e),function(t){s.d(e,"default",(function(){return b}));var i=s(94),n=s.n(i),a=s(187),c=s.n(a),u=s(547),o=s.n(u),r=(s(113),s(0)),d=s(32),l=s(95),h=(s(569),s(5));const{Option:p}=o.a;class b extends r.Component{constructor(e){super(e),this.init=async()=>{window.ethereum&&await d.c.eth.getAccounts((t,e)=>{this.setState({address:e[0]})});let t=await d.b.MedalFactory.methods.blockOutput().call();this.setState({blockOutput:t.fromWei()})},this.setInput1=t=>{this.setState({input1:t.target.value})},this.setInput2=t=>{this.setState({input2:t.target.value})},this.submit=()=>{d.b.MedalFactory.methods.setBlockOutput(this.state.input1.toWei()).send({from:this.state.address}).on("receipt",t=>{Object(l.a)("设置成功","success"),this.init()}).on("error",e=>{Object(l.a)(t.t("CANCEL"),"error")})},this.state={address:"",input1:"",input2:"",blockOutput:""}}async componentDidMount(){await this.init()}render(){const t=this.state;return Object(h.jsx)("div",{className:"ido",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsxs)("div",{className:"title",children:["当前块产出:",t.blockOutput]}),Object(h.jsxs)("div",{className:"item",id:"language-change",children:[Object(h.jsx)("span",{children:"块产出："}),Object(h.jsx)(c.a,{onInput:this.setInput1,value:t.input1}),Object(h.jsx)(n.a,{className:"same-btn",onClick:this.submit,children:"设置"})]})]})})}}}.call(this,s(51))},569:function(t,e,s){}}]);