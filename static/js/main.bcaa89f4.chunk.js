(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(3),c=n.n(s),o=n(6),r=n(4),i=n(5),l=n(8),a=n(7),u=n(1),h=n.n(u),j=(n(13),n(14),n(0)),b=function(t){var e=t.goods;return Object(j.jsx)("div",{className:"item-list",children:Object(j.jsx)("ul",{children:e.map((function(t){return Object(j.jsx)("li",{children:t},t)}))})})},d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(t){Object(l.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,c=new Array(s),o=0;o<s;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={goods:d,confirmBtn:!0,isReversed:!1,sortBy:"",selectedOption:1},t.reversed=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortAlphabetically=function(){t.setState({sortBy:"alpha"})},t.reset=function(){t.setState({selectedOption:1,isReversed:!1,sortBy:""})},t.sortByLength=function(){t.setState({sortBy:"length"})},t.handleChange=function(e){t.setState((function(){return{selectedOption:+e}}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.goods,s=e.confirmBtn,c=e.isReversed,r=e.sortBy,i=e.selectedOption,l=Object(o.a)(n).filter((function(t){return t.length>=i}));return l.sort((function(t,e){switch(r){case"alpha":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}})),c&&l.reverse(),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Goods"}),Object(j.jsxs)("div",{className:"button-section",children:[s&&Object(j.jsx)("button",{type:"button",className:"button",onClick:function(){return t.setState((function(t){return{confirmBtn:!t.confirmBtn}}))},children:"Start"}),!s&&Object(j.jsx)("button",{type:"button",className:"button",onClick:this.reversed,children:"Reverse"}),Object(j.jsx)("button",{type:"button",className:"button",onClick:this.sortAlphabetically,children:"Sort A-Z"}),Object(j.jsx)("button",{type:"button",className:"button",onClick:this.reset,children:"Reset"}),Object(j.jsx)("button",{type:"button",className:"button",onClick:this.sortByLength,children:"Sort by length"}),Object(j.jsxs)("select",{className:"button",value:i,onChange:function(e){return t.handleChange(e.target.value)},children:[Object(j.jsx)("option",{value:"1",children:"1"}),Object(j.jsx)("option",{value:"2",children:"2"}),Object(j.jsx)("option",{value:"3",children:"3"}),Object(j.jsx)("option",{value:"4",children:"4"}),Object(j.jsx)("option",{value:"5",children:"5"}),Object(j.jsx)("option",{value:"6",children:"6"}),Object(j.jsx)("option",{value:"7",children:"7"}),Object(j.jsx)("option",{value:"8",children:"8"}),Object(j.jsx)("option",{value:"9",children:"9"}),Object(j.jsx)("option",{value:"10",children:"10"})]})]}),!s&&Object(j.jsx)(b,{goods:l})]})}}]),n}(h.a.PureComponent),O=p;c.a.render(Object(j.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.bcaa89f4.chunk.js.map