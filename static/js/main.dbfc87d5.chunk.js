(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(3),c=n.n(o),s=n(4),r=n(5),i=n(7),l=n(6),a=n(1),u=n.n(a),d=(n(12),n(13),n(0)),j=function(t){var e=t.goods,n=t.select;return Object(d.jsx)("div",{className:"item-list",children:Object(d.jsx)("ul",{children:e.filter((function(t){return t.length>=n})).map((function(t){return Object(d.jsx)("li",{children:t},t)}))})})},b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(t){Object(i.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={confirmBtn:!0,selectedOption:1,goods:[].concat(b)},t.reversed=function(){t.setState((function(t){return{goods:t.goods.reverse()}}))},t.sortAlphabetically=function(){t.setState((function(t){return{goods:t.goods.sort((function(t,e){return t.localeCompare(e)}))}}))},t.sortByLength=function(){t.setState((function(t){return{goods:t.goods.sort((function(t,e){return t.length-e.length}))}}))},t.handleChange=function(e){t.setState((function(){return{selectedOption:+e}}))},t.reset=function(){t.setState({selectedOption:1,goods:b})},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.goods,o=e.confirmBtn,c=e.selectedOption;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Goods"}),Object(d.jsxs)("div",{className:"button-section",children:[o&&Object(d.jsx)("button",{type:"button",className:"button",onClick:function(){return t.setState((function(t){return{confirmBtn:!t.confirmBtn}}))},children:"Start"}),!o&&Object(d.jsx)("button",{type:"button",className:"button",onClick:this.reversed,children:"Reverse"}),Object(d.jsx)("button",{type:"button",className:"button",onClick:this.sortAlphabetically,children:"Sort A-Z"}),Object(d.jsx)("button",{type:"button",className:"button",onClick:this.reset,children:"Reset"}),Object(d.jsx)("button",{type:"button",className:"button",onClick:this.sortByLength,children:"Sort by length"}),Object(d.jsxs)("select",{className:"button",value:c,onChange:function(e){return t.handleChange(e.target.value)},children:[Object(d.jsx)("option",{value:"1",children:"1"}),Object(d.jsx)("option",{value:"2",children:"2"}),Object(d.jsx)("option",{value:"3",children:"3"}),Object(d.jsx)("option",{value:"4",children:"4"}),Object(d.jsx)("option",{value:"5",children:"5"}),Object(d.jsx)("option",{value:"6",children:"6"}),Object(d.jsx)("option",{value:"7",children:"7"}),Object(d.jsx)("option",{value:"8",children:"8"}),Object(d.jsx)("option",{value:"9",children:"9"}),Object(d.jsx)("option",{value:"10",children:"10"})]})]}),!o&&Object(d.jsx)(j,{goods:n,select:c})]})}}]),n}(u.a.Component),p=h;c.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.dbfc87d5.chunk.js.map