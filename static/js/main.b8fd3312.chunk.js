(this["webpackJsonpcryptocurrency-report"]=this["webpackJsonpcryptocurrency-report"]||[]).push([[0],{54:function(n,t,e){"use strict";e.r(t);var r,a,c,i=e(0),s=e.n(i),o=e(20),d=e.n(o),p=e(3),b=e(4),u=e(5),j=e.n(u),x=e(6),l=e(26),h=e(21),m=e.n(h),f=e(22),O=e.n(f),g=m.a.create({baseURL:"https://api.coincap.io/v2/"}),v=function(){var n=Object(x.a)(j.a.mark((function n(t){var e,r;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.get("assets/".concat(t));case 2:return n.next=4,n.sent.data;case 4:return e=n.sent,r=O()(e.timestamp).format("DD/MM/YYYY - HH:mm:ss"),n.abrupt("return",{id:e.data.id,rank:e.data.rank,symbol:e.data.symbol,name:e.data.name,priceUsd:e.data.priceUsd,updated:r});case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),y=e(1),w=b.b.div(r||(r=Object(p.a)(["\n  max-width: 450px;\n  width: 100%;\n  margin: 20px;\n  background-color: #f94144;\n  padding: 20px;\n  border-radius: 5px;\n  font-size: 1.8rem;\n  position: relative;\n  box-shadow: 1px 2px 5px #222;\n  transition: 0.3s;\n\n  &:hover {\n    transform: scale(1.05);\n  }\n"]))),k=b.b.p(a||(a=Object(p.a)(["\n  margin: 5px 0;\n"]))),S=b.b.img(c||(c=Object(p.a)(["\n  width: 36px;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n"])));var U,L,z=function(n){var t=n.id,e=Object(i.useState)({id:"",rank:"",symbol:"",name:"",priceUsd:"",updated:""}),r=Object(l.a)(e,2),a=r[0],c=r[1];return Object(i.useEffect)((function(){var n=function(){var n=Object(x.a)(j.a.mark((function n(){var e;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,v(t);case 2:e=n.sent,c(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n(),setInterval(n,6e4)}),[t]),Object(y.jsxs)(w,{children:[Object(y.jsxs)(k,{children:["Rank: ",a.rank]}),Object(y.jsxs)(k,{children:["Symbol: ",a.symbol]}),Object(y.jsxs)(k,{children:["Name: ",a.name]}),Object(y.jsxs)(k,{children:["Price: $",a.priceUsd]}),Object(y.jsxs)(k,{children:["Updated: ",a.updated]}),Object(y.jsx)(S,{src:"https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons/32/icon/".concat(a.symbol.toLocaleLowerCase(),".png"),alt:t})]})},C=b.b.h1(U||(U=Object(p.a)(["\n  text-align: center;\n  margin-top: 5px;\n"]))),F=b.b.div(L||(L=Object(p.a)(["\n  align-items: center;\n  display: flex;\n  height: auto;\n  justify-content: space-around;\n  min-height: calc(100vh - 38px);\n  width: 100%;\n  max-width: 980px;\n  margin: 0 auto;\n  flex-wrap: wrap;\n"])));var Y,D=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)(C,{children:"cryptocurrency-report"}),Object(y.jsxs)(F,{children:[Object(y.jsx)(z,{id:"bitcoin"}),Object(y.jsx)(z,{id:"ethereum"}),Object(y.jsx)(z,{id:"bitcoin-cash"}),Object(y.jsx)(z,{id:"litecoin"}),Object(y.jsx)(z,{id:"tether"}),Object(y.jsx)(z,{id:"xrp"})]})]})},I=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,55)).then((function(t){var e=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;e(n),r(n),a(n),c(n),i(n)}))},M=Object(b.a)(Y||(Y=Object(p.a)(["\n  :root {\n    font-size: 62.5%;\n  }\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    background: #1d3557;\n    color: #f1faee;\n    font-family: 'Roboto', Sans-Serif;\n    font-size: 1.6rem;\n  }\n"])));d.a.render(Object(y.jsxs)(s.a.StrictMode,{children:[Object(y.jsx)(M,{}),Object(y.jsx)(D,{})]}),document.getElementById("root")),I()}},[[54,1,2]]]);
//# sourceMappingURL=main.b8fd3312.chunk.js.map