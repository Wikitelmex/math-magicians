(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[4],{14:function(t,n,e){},20:function(t,n,e){"use strict";e.r(n);var o=e(12),r=e(13),a=e(17),c=e(16),b=e(1),l=e.n(b),u=(e(14),e(18)),i=e(15),s=e.n(i);function d(t,n,e){var o=s()(t),r=s()(n);if("+"===e)return o.plus(r).toString();if("-"===e)return o.minus(r).toString();if("x"===e)return o.times(r).toString();if("\xf7"===e)try{return o.div(r).toString()}catch(a){return"Can't divide by 0."}if("%"===e)return o.mod(r).toString();throw Error("Unknown operation '".concat(e,"'"))}var j=e(0),x=function(t){Object(a.a)(e,t);var n=Object(c.a)(e);function e(t){var r;return Object(o.a)(this,e),(r=n.call(this,t)).state={total:"",next:"",operation:""},r}return Object(r.a)(e,[{key:"stateMod",value:function(t){var n,e,o=(n=this.state,"AC"===(e=t)?{total:"",next:"",operation:""}:e.match(/[0-9]+/)?n.operation?n.next?Object(u.a)(Object(u.a)({},n),{},{next:n.next+e}):Object(u.a)(Object(u.a)({},n),{},{next:e}):n.next?{next:parseFloat(n.next+e,10).toString(),total:null}:{next:e,total:null}:"."===e?n.next?n.next.includes(".")?Object(u.a)({},n):Object(u.a)(Object(u.a)({},n),{},{next:"".concat(n.next,".")}):n.operation?{next:"0."}:n.total?n.total.includes(".")?{}:{total:"".concat(n.total,".")}:{total:"0."}:"="===e?n.next&&n.operation?{total:null,next:d(n.total,n.next,n.operation),operation:null}:{total:n.total,next:n.next,operation:n.operation}:"+/-"===e?n.next?Object(u.a)(Object(u.a)({},n),{},{next:(-1*parseFloat(n.next)).toString()}):n.total?Object(u.a)(Object(u.a)({},n),{},{total:(-1*parseFloat(n.total)).toString()}):{}:n.next||!n.total||n.operation?n.operation?n.total&&!n.next?Object(u.a)(Object(u.a)({},n),{},{operation:e}):{total:d(n.total,n.next,n.operation),next:null,operation:e}:n.next?{total:n.next,next:null,operation:e}:{operation:e}:Object(u.a)(Object(u.a)({},n),{},{operation:e}));this.setState((function(){return{total:o.total,next:o.next,operation:o.operation}}))}},{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{className:"calculator","data-testid":"Calculator",children:[Object(j.jsx)("input",{className:"w-100 button-border border-0 bg-secondary text-light screen pe-1 ps-1",type:"text",value:this.state.next}),Object(j.jsxs)("div",{className:"w-100",children:[Object(j.jsx)("button",{className:"button-border col-3 border-1",type:"button",onClick:function(){return t.stateMod("AC")},children:Object(j.jsx)("small",{children:"AC"})}),Object(j.jsx)("button",{className:"button-border col-3 border-1",type:"button",onClick:function(){return t.stateMod("+/-")},children:"\xb1"}),Object(j.jsx)("button",{className:"button-border col-3 border-1",type:"button",onClick:function(){return t.stateMod("%")},children:"%"}),Object(j.jsx)("button",{className:"button-border col-3 border-1 bg-warning",type:"button",onClick:function(){return t.stateMod("\xf7")},children:"\xf7"}),Object(j.jsx)("button",{className:"button-border col-3 border-1",type:"button",onClick:function(){return t.stateMod("7")},children:"7"}),Object(j.jsx)("button",{className:"button-border col-3 border-1",type:"button",onClick:function(){return t.stateMod("8")},children:"8"}),Object(j.jsx)("button",{className:"button-border col-3 border-1",type:"button",onClick:function(){return t.stateMod("9")},children:"9"}),Object(j.jsx)("button",{className:"button-border col-3 border-1 bg-warning",type:"button",onClick:function(){return t.stateMod("x")},children:"x"}),Object(j.jsx)("button",{className:"button-border col-3 border-1",type:"button",onClick:function(){return t.stateMod("4")},children:"4"}),Object(j.jsx)("button",{className:"button-border col-3 border-1",type:"button",onClick:function(){return t.stateMod("5")},children:"5"}),Object(j.jsx)("button",{className:"button-border col-3 border-1",type:"button",onClick:function(){return t.stateMod("6")},children:"6"}),Object(j.jsx)("button",{className:"button-border col-3 border-1 bg-warning",type:"button",onClick:function(){return t.stateMod("-")},children:"-"}),Object(j.jsx)("button",{className:"button-border col-3 border-1",type:"button",onClick:function(){return t.stateMod("1")},children:"1"}),Object(j.jsx)("button",{className:"button-border col-3 border-1",type:"button",onClick:function(){return t.stateMod("2")},children:"2"}),Object(j.jsx)("button",{className:"button-border col-3 border-1",type:"button",onClick:function(){return t.stateMod("3")},children:"3"}),Object(j.jsx)("button",{className:"button-border col-3 border-1 bg-warning",type:"button",onClick:function(){return t.stateMod("+")},children:"+"}),Object(j.jsx)("button",{className:"button-border col-6 border-1",type:"button",onClick:function(){return t.stateMod("0")},children:"0"}),Object(j.jsx)("button",{className:"button-border col-3 border-1",type:"button",onClick:function(){return t.stateMod(".")},children:"."}),Object(j.jsx)("button",{className:"button-border col-3 border-1 bg-warning",type:"button",onClick:function(){return t.stateMod("=")},children:"="})]})]})}}]),e}(l.a.Component);n.default=x}}]);
//# sourceMappingURL=4.ab8f6e1e.chunk.js.map