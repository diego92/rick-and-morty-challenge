(this["webpackJsonpinteraxa-challenge"]=this["webpackJsonpinteraxa-challenge"]||[]).push([[0],{140:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(33),c=a.n(r),s=a(35),i=a(15),o=a(191),d=a(190),l=a(192),j=a(193),u=a(187),b=a(2),p=function(){return Object(b.jsx)(d.a,{sx:{flexGrow:1},children:Object(b.jsx)(o.a,{position:"static",children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(j.a,{variant:"h6",component:s.b,to:"/",sx:{flexGrow:1},style:{textDecoration:"none",color:"white"},children:"Rick And Morty"}),Object(b.jsx)(u.a,{component:s.b,to:"/characters",children:Object(b.jsx)(j.a,{textAlign:"center",children:"CHARACTERS"})})]})})})},x=a(25),h=a(12),O=a(26),m=a.n(O),g=a(36),f=a(37),v=a.n(f),y="https://rickandmortyapi.com/api",w=a(195),k=a(197),C=a(196),S=a(180),N=a(5),_=a(194),A=a(89),E=a.n(A),I=a(189),D=(a(62),Object(N.a)(_.a)((function(e){var t=e.theme;return Object(x.a)(Object(x.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary,backgroundColor:"black"})})));function G(e){var t=e.name,a=e.status,n=e.species,r=e.gender,c=e.origin,s=e.location,i=e.image,o=e.episodes,l=e.created;return Object(b.jsxs)(w.a,{style:{marginTop:"2rem",border:"1px solid #000",height:"80vh"},sx:{display:"flex"},children:[Object(b.jsx)(C.a,{component:"img",sx:{height:"100%",width:500},image:i,alt:i}),Object(b.jsxs)(d.a,{style:{width:"100%"},sx:{display:"flex",flexDirection:"column"},children:[Object(b.jsxs)(k.a,{sx:{flex:"1 0 auto"},children:[Object(b.jsx)(j.a,{component:"span",variant:"h5",children:t}),Object(b.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",margin:"2rem 0"},children:[Object(b.jsxs)(j.a,{variant:"subtitle1",color:"text.primary",component:"div",children:["Status: ",a]}),Object(b.jsxs)(j.a,{variant:"subtitle1",color:"text.secondary",component:"div",children:["Gender: ",r]}),Object(b.jsxs)(j.a,{variant:"subtitle1",color:"text.secondary",component:"div",children:["Species: ",n]})]}),Object(b.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(b.jsxs)(j.a,{variant:"subtitle1",color:"text.secondary",component:"div",children:["Origin: ",c.name]}),Object(b.jsxs)(j.a,{variant:"subtitle1",color:"text.secondary",component:"div",children:["Created: ",E()(l).format("L")]}),Object(b.jsxs)(j.a,{variant:"subtitle1",color:"text.secondary",component:"div",children:["Location: ",s.name]})]}),Object(b.jsx)(S.a,{}),o.length>0&&Object(b.jsxs)("div",{className:"episodes__overflow",children:[Object(b.jsx)(j.a,{style:{margin:"1rem 0"},component:"div",variant:"h5",children:"Episodes"}),Object(b.jsx)(I.a,{container:!0,spacing:3,children:o.map((function(e){return Object(b.jsx)(I.a,{item:!0,xs:4,children:Object(b.jsx)(D,{style:{backgroundColor:"darkkhaki"},children:e.name})},e.name)}))})]})]}),Object(b.jsx)(d.a,{sx:{display:"flex",alignItems:"center",pl:1,pb:1}})]})]})}var R=function(){var e=Object(g.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.next=3,Promise.all(t.map((function(e){return v.a.get(e).then((function(e){a.push(e.data)}))})));case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.g)().characterId,t=Object(n.useState)({data:{},loading:!0,error:!1}),a=Object(h.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)([]),o=Object(h.a)(s,2),d=o[0],l=o[1],j=r.data;return Object(n.useEffect)((function(){(function(){var t=Object(g.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({data:{},loading:!0,error:!1}),t.next=4,v()("".concat(y,"/character/").concat(e));case 4:if(a=t.sent,c({data:a.data,loading:!1,error:!1}),!(a.data.episode.length>0)){t.next=11;break}return t.next=9,R(a.data.episode);case 9:n=t.sent,l(n);case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),c({data:{},loading:!1,error:!0});case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(b.jsx)("div",{children:j.id&&Object(b.jsx)(G,Object(x.a)(Object(x.a)({},j),{},{episodes:d}))})},P=a(186),T=a(181);function J(e){var t=e.count,a=e.handleChangePage,n=e.pageNumber;return Object(b.jsx)(I.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",style:{margin:"1rem"},children:Object(b.jsx)(T.a,{spacing:2,children:Object(b.jsx)(P.a,{count:t,color:"primary",onChange:function(e,t){a(t)},page:n})})})}var L=a(198);function H(e){var t=e.gender,a=e.image,n=e.name,r=e.species,c=e.status,i=e.id;return Object(b.jsx)(w.a,{sx:{height:"100%",display:"flex",flexDirection:"column",maxWidth:345},component:s.b,to:"characters/".concat(i),className:"card-character",children:Object(b.jsxs)(L.a,{children:[Object(b.jsx)(C.a,{component:"img",height:"350",image:a,alt:a}),Object(b.jsxs)(k.a,{children:[Object(b.jsx)(j.a,{gutterBottom:!0,variant:"h5",component:"div",children:n}),Object(b.jsx)(S.a,{}),Object(b.jsxs)("section",{style:{display:"flex",justifyContent:"space-between",marginTop:"1rem",marginBottom:"1rem"},children:[Object(b.jsxs)(j.a,{variant:"body2",color:"text.secondary",children:["Status:"," ",Object(b.jsx)("span",{className:"Alive"===c?"status__badge-alive":"Dead"===c?"status__badge-dead":"status__badge",children:c})]}),Object(b.jsxs)(j.a,{variant:"body2",color:"text.secondary",children:["Species: ",r]})]}),Object(b.jsxs)(j.a,{variant:"body1",color:"text.primary",children:["Gender: ",t]})]})]})})}var M=a(184),W=function(e){var t=e.handleChange,a=e.value;return Object(b.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"2rem 0",padding:"0.5rem 2rem"},children:Object(b.jsx)("div",{style:{display:"flex",justifyContent:"center",padding:"0.5rem 2rem",backgroundColor:"moccasin",borderRadius:"25px"},children:Object(b.jsx)(M.a,{label:"Search",variant:"outlined",onChange:t,value:a})})})},q=function(){var e=Object(n.useState)({data:[],loading:!0,error:!1}),t=Object(h.a)(e,2),a=t[0],r=t[1],c=a.data,s=Object(n.useState)(""),i=Object(h.a)(s,2),o=i[0],d=i[1],l=Object(n.useState)({count:0,pageNumber:1}),j=Object(h.a)(l,2),u=j[0],p=j[1];Object(n.useEffect)((function(){(function(){var e=Object(g.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({data:[],loading:!0,error:!1}),e.next=4,v()("".concat(y,"/character"));case 4:t=e.sent,r({data:t.data.results,loading:!1,error:!1}),p({count:t.data.info.pages,pageNumber:1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),r({data:[],loading:!1,error:!0});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.useEffect)((function(){(function(){var e=Object(g.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r({data:[],loading:!0,error:!1}),e.next=4,v()("".concat(y,"/character/?name=").concat(o,"&page=1"));case 4:t=e.sent,r({data:t.data.results,loading:!1,error:!1}),p({count:t.data.info.pages,pageNumber:1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),r({data:[],loading:!1,error:!0});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}})()()}),[o]);var O=function(){var e=Object(g.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(Object(x.a)(Object(x.a)({},u),{},{pageNumber:t})),e.prev=1,r(Object(x.a)(Object(x.a)({},a),{},{loading:!0,error:!1})),e.next=5,v()("".concat(y,"/character/?name=").concat(o,"&page=").concat(t));case 5:n=e.sent,r({data:n.data.results,loading:!1,error:!1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),r({data:[],loading:!1,error:!0});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return console.log(u),Object(b.jsxs)("div",{children:[Object(b.jsx)(W,{value:o,handleChange:function(e){d(e.target.value)}}),Object(b.jsxs)(I.a,{container:!0,spacing:4,children:[c.length>0&&c.map((function(e){return Object(b.jsx)(I.a,{item:!0,xs:12,sm:6,md:4,style:{display:"flex",justifyContent:"center"},children:Object(b.jsx)(H,Object(x.a)({},e))},e.id)})),Object(b.jsx)(J,{handleChangePage:O,count:u.count,pageNumber:u.pageNumber})]})]})},z=function(){return Object(b.jsx)(s.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{}),Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{component:B,exact:!0,path:"/characters/:characterId"}),Object(b.jsx)(i.b,{component:q,exact:!0,path:"/characters"}),Object(b.jsx)(i.a,{to:"/characters"})]})]})})};var F=function(){return Object(b.jsx)(z,{})};c.a.render(Object(b.jsx)(F,{}),document.getElementById("root"))},62:function(e,t,a){}},[[140,1,2]]]);
//# sourceMappingURL=main.9c367b60.chunk.js.map