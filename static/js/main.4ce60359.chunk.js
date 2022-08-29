(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{24:function(e,t,n){},28:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(17),c=n.n(a),r=n(6),s=(n(24),n(2)),o=(n(25),n(3)),l=n(5),i=n(1),b=n.n(i),j=n(18),u=n(13),d=n.n(u),m="".concat("https://mate-academy.github.io","/react_people-table/api/people.json");function h(){return(h=Object(j.a)(d.a.mark((function e(){var t,n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m);case 2:if((t=e.sent).ok){e.next=6;break}throw n=t.status,a=t.statusText,new Error("".concat(n," - ").concat(a));case 6:return e.abrupt("return",t.json());case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O=n(0);var p,f,x=b.a.createContext({people:[],setPeople:function(){}}),v=function(e){var t=e.children,n=Object(i.useState)([]),a=Object(o.a)(n,2),c=a[0],r=a[1];Object(i.useEffect)((function(){(function(){return h.apply(this,arguments)})().then((function(e){return r(function(e){return e.map((function(t){var n=t.motherName,a=t.fatherName;return Object(l.a)(Object(l.a)({},t),{},{mother:e.find((function(e){return n===e.name})),father:e.find((function(e){return a===e.name}))})}))}(e))}))}),[]);var s={people:c,setPeople:r};return Object(O.jsx)(x.Provider,{value:s,children:t})},g=function(){return Object(O.jsx)("h1",{children:"Home Page"})},N=n(8),_=n(11),C=(n(28),n(19)),y=n.n(C);!function(e){e.Name="name",e.Sex="sex",e.Born="born",e.Died="died"}(p||(p={})),function(e){e.asc="asc",e.desc="desc"}(f||(f={}));n(40);var k=n(10),w=n.n(k),P=function(e){var t=e.name,n=e.personSlug,a=Object(s.f)().search;return Object(O.jsx)(r.b,{to:{pathname:"/people/".concat(n),search:a},style:{color:"inherit"},children:t})};function S(e){return"m"===e?"rgb(0, 71, 171)":"rgb(255, 0, 0)"}var B=b.a.memo((function(e){var t=e.person,n=Object(s.h)().personSlug;return Object(O.jsxs)("tr",{className:w()("Person"),style:n===t.slug?{backgroundColor:"green"}:{},children:[Object(O.jsx)("th",{style:{color:S(t.sex)},children:Object(O.jsx)(P,{name:t.name,personSlug:t.slug})}),Object(O.jsx)("th",{children:t.sex}),Object(O.jsx)("th",{children:t.born}),Object(O.jsx)("th",{children:t.died}),Object(O.jsx)("th",{style:{color:t.mother?S(t.mother.sex):"black"},children:t.mother?Object(O.jsx)(P,{name:t.mother.name,personSlug:t.mother.slug}):Object(O.jsx)("b",{children:t.motherName})}),Object(O.jsx)("th",{style:{color:t.father?S(t.father.sex):"black"},children:t.father?Object(O.jsx)(P,{name:t.father.name,personSlug:t.father.slug}):Object(O.jsx)("b",{children:t.fatherName})})]},t.name)})),T=b.a.memo((function(e){var t=e.people,n=e.sortPeople,a=[p.Name,p.Sex,p.Born,p.Died],c=Object(s.f)().search,r=new URLSearchParams(c),o=r.get("sortBy"),l=r.get("sortOrder"),b=Object(i.useCallback)((function(e){return e===o}),[o]);return Object(O.jsxs)("table",{className:"PeopleTable table is-bordered is-fullwidth",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[a.map((function(e){return Object(O.jsxs)("th",{className:" PeopleTable__column-title PeopleTable__column-title--sortable",onClick:function(){return n(e)},children:[e,b(e)?Object(O.jsx)("img",{src:"images/sort_".concat(Object.values(f).includes(l)?l:"both",".png"),alt:"sort ".concat(l||"both")}):Object(O.jsx)("img",{src:"images/sort_both.png",alt:"sort both"})]},e)})),Object(O.jsx)("th",{className:"PeopleTable__column-title",children:"Mother"}),Object(O.jsx)("th",{className:"PeopleTable__column-title",children:"Father"})]})}),Object(O.jsx)("tbody",{children:t.map((function(e){return Object(O.jsx)(B,{person:e},e.name)}))})]})})),q=(n(41),n(42),b.a.memo((function(e){var t=e.onClose,n=Object(i.useContext)(x),a=n.people,c=n.setPeople,r=Object(i.useState)({name:"",sex:"m",born:0,died:0,fatherName:"",motherName:"",slug:""}),s=Object(o.a)(r,2),b=s[0],j=s[1],u=Object(i.useState)(!1),d=Object(o.a)(u,2),m=d[0],h=d[1],p=Object(i.useState)(!1),f=Object(o.a)(p,2),v=f[0],g=f[1],C=Object(i.useState)(!1),y=Object(o.a)(C,2),k=y[0],w=y[1],P=/^[a-zA-Z ]{3,30}$/;Object(i.useEffect)((function(){var e=b.born,t=b.died;t&&e&&w(t-e>=150)}),[b.born,b.died]);var S=function(e,t){j(Object(l.a)(Object(l.a)({},b),{},Object(N.a)({},e,t)))},B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1400;return a.filter((function(n){return n.sex===e&&n.born<=t-18&&n.died>=t+1}))};return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h1",{children:"Create a new Person"}),Object(O.jsxs)("form",{className:"form",onSubmit:function(e){var n=b.name,r=b.born;e.preventDefault();var s="".concat(n.split(" ").join("-"),"-").concat(r),o=Object(l.a)(Object(l.a)({},b),{},{slug:s});c([].concat(Object(_.a)(a),[o])),j({name:"",sex:"m",born:0,died:0,fatherName:"",motherName:"",slug:""}),t()},children:[Object(O.jsxs)("label",{className:"form__field",children:[Object(O.jsx)("input",{className:"form-control",type:"text",placeholder:"Name",value:b.name,onChange:function(e){S("name",e.target.value),h(!1)},onBlur:function(e){!function(e){var t=e.target.value;h(!t.length)}(e),function(){var e=b.name;g(e.length>0&&!P.test(e))}()}}),m&&Object(O.jsx)("span",{className:"form__error",children:"Name field if required"}),v&&Object(O.jsx)("span",{className:"form__error",children:"The name can contain only letters and spaces and be between 3 and 30 characters long"})]}),Object(O.jsxs)("label",{className:"form__radio",children:["Male",Object(O.jsx)("input",{required:!0,type:"radio",name:"sex",value:"m",checked:"m"===b.sex,onChange:function(e){return S("sex",e.target.value)},className:"form-check-input mt-0"})]}),Object(O.jsxs)("label",{className:"form__radio",children:["Female",Object(O.jsx)("input",{required:!0,type:"radio",name:"sex",value:"f",checked:"f"===b.sex,onChange:function(e){return S("sex",e.target.value)},className:"form-check-input mt-0"})]}),Object(O.jsxs)("label",{className:"form__field",children:["Born",Object(O.jsx)("input",{type:"number",placeholder:"Born year",value:b.born,min:1400,max:(new Date).getFullYear(),onChange:function(e){S("born",Number(e.target.value))},className:"form-control"})]}),Object(O.jsxs)("label",{children:["Died",Object(O.jsx)("input",{type:"number",placeholder:"Death year",disabled:!b.born,value:b.died,min:b.born,max:(new Date).getFullYear(),onChange:function(e){S("died",Number(e.target.value))},className:"form-control"}),k&&Object(O.jsx)("span",{className:"form__error",children:"The life period of a person should be less than 150 years"})]}),Object(O.jsx)("label",{children:Object(O.jsxs)("select",{disabled:!b.born,value:b.fatherName,onChange:function(e){S("fatherName",e.target.value)},className:"form-select",children:[Object(O.jsx)("option",{value:"",disabled:!0,children:"Choose a father"}),B("m",b.born).map((function(e){return Object(O.jsx)("option",{value:e.name,children:e.name},e.slug)}))]})}),Object(O.jsx)("label",{children:Object(O.jsxs)("select",{disabled:!b.born,value:b.motherName,onChange:function(e){S("motherName",e.target.value)},className:"form-select",children:[Object(O.jsx)("option",{value:"",disabled:!0,children:"Choose a mother"}),B("f",b.born).map((function(e){return Object(O.jsx)("option",{value:e.name,children:e.name},e.slug)}))]})}),Object(O.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Add a new person"})]})]})})}))),D=function(e){var t=e.onClose;return Object(O.jsxs)("div",{className:"modal is-active",children:[Object(O.jsx)("div",{className:"modal-background"}),Object(O.jsx)("div",{className:"modal-content",children:Object(O.jsx)("div",{className:"box",children:Object(O.jsx)(q,{onClose:t})})}),Object(O.jsx)("button",{type:"button",className:"modal-close is-large","aria-label":"close",onClick:function(){var e=document.querySelector(".modal");null===e||void 0===e||e.classList.add("out"),setTimeout(t,2e3)},children:"Close"})]})},L=function(e,t){return e.localeCompare(t)},A=function(){var e,t=Object(s.f)().pathname,n=Object(r.d)(),a=Object(o.a)(n,2),c=a[0],b=a[1],j=(null===(e=c.get("query"))||void 0===e?void 0:e.toLowerCase())||"",u=c.get("sortBy")||"",d=c.get("sortOrder")||"",m=Object(i.useState)({query:j,sortBy:u,sortOrder:d}),h=Object(o.a)(m,2),v=h[0],g=h[1],C=Object(i.useContext)(x).people,k=Object(i.useState)(!1),w=Object(o.a)(k,2),P=w[0],S=w[1],B={open:function(){return S(!0)},close:function(){return S(!1)}},q=C.filter((function(e){var t,n;return e.name.toLowerCase().includes(j)||(null===(t=e.motherName)||void 0===t?void 0:t.toLowerCase().includes(j))||(null===(n=e.fatherName)||void 0===n?void 0:n.toLowerCase().includes(j))})),A=Object(i.useCallback)((function(){return u?Object(_.a)(q).sort((function(e,t){switch(u){case p.Name:case p.Sex:return d===f.asc?L(e[u],t[u]):L(t[u],e[u]);case p.Born:case p.Died:return d===f.asc?e[u]-t[u]:t[u]-e[u];default:return 0}})):q}),[q,u,d]),F=Object(i.useCallback)((function(e){Object.entries(e).forEach((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];return a?c.set(n,a):c.delete(n)})),b(c)}),[t]),E=Object(i.useCallback)(y()((function(e){F(e)}),500),[t]),H=Object(i.useCallback)((function(e){var t=Object(l.a)(Object(l.a)({},v),{},{sortBy:e.toLowerCase()});if(e!==v.sortBy)t.sortOrder=f.asc;else switch(v.sortOrder){case f.asc:t.sortOrder=f.desc;break;case f.desc:t.sortOrder=f.asc;break;default:t.sortOrder=""}g(t),F(t)}),[v]);return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"people-page",children:Object(O.jsxs)("div",{className:"people-page__container",children:[Object(O.jsxs)("div",{className:"people-page__tools",children:[Object(O.jsx)("div",{className:"people-page__tools__filter",children:Object(O.jsx)("input",{className:"input is-normal is-rounded","data-cy":"filterInput",name:"query",placeholder:"Person Name",value:v.query,onChange:function(e){var t=e.target,n=t.name,a=t.value,c=void 0===a?"":a,r=Object(l.a)(Object(l.a)({},v),{},Object(N.a)({},n,c.toLowerCase()));g(r),E(r)}})}),Object(O.jsx)("div",{className:"people-page__tools__create-new-user",children:Object(O.jsx)("button",{className:"button is-success is-light",type:"button",onClick:B.open,children:"Create New Person"})})]}),Object(O.jsx)("div",{className:"people-page__table-container",children:C.length?Object(O.jsx)(T,{sortPeople:H,people:A()}):Object(O.jsx)("h1",{children:"There is nobody :/"})}),P&&Object(O.jsx)(D,{onClose:B.close})]})})})},F=(n(43),function(){return Object(O.jsx)("header",{children:Object(O.jsx)("nav",{className:"navbar",children:Object(O.jsxs)("div",{className:"navbar-brand",children:[Object(O.jsx)(r.c,{to:"/",className:function(e){var t=e.isActive;return w()("navbar-item","is-tab",{"is-active":t})},children:"Home"}),Object(O.jsx)(r.c,{to:"/people",className:function(e){var t=e.isActive;return w()("navbar-item","is-tab",{"is-active":t})},children:"People"})]})})})}),E=function(){return Object(O.jsx)(v,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(F,{}),Object(O.jsx)("div",{className:"App__main",children:Object(O.jsxs)(s.d,{children:[Object(O.jsx)(s.b,{path:"/people",element:Object(O.jsx)(A,{}),children:Object(O.jsx)(s.b,{path:":personSlug",element:Object(O.jsx)(A,{})})}),Object(O.jsx)(s.b,{path:"/",element:Object(O.jsx)(g,{})}),Object(O.jsx)(s.b,{path:"/home",element:Object(O.jsx)(s.a,{to:"/"})}),Object(O.jsx)(s.b,{path:"*",element:Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("h1",{children:"Page not found"})})})]})})]})})};c.a.render(Object(O.jsx)(r.a,{children:Object(O.jsx)(E,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.4ce60359.chunk.js.map