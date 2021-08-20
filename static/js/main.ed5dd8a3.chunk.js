(this["webpackJsonpblog-frontend"]=this["webpackJsonpblog-frontend"]||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var c,r,a,o,s,i,l,u,d,j,b,p,h,x,O=n(1),m=n.n(O),f=n(18),g=n.n(f),v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,42)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))},y=n(2),k={colors:{light:"#ECF0F1",lightGray:"#D0D3D4",darkGray:"#363537",green:"#28B463",red:"#E74C3C",main:"#3D5A6C",secondary:"#75B9BE",fontColor:"#2A2D34"},fonts:{header:"'Poppins', sans-serif;",body:"'Open Sans', sans-serif;"}},w=n(3),S=Object(y.b)(c||(c=Object(w.a)(["\n    *,\n    *::before,\n    *::after {\n        box-sizing: border-box;\n        padding: 0;\n        margin: 0;\n\n    }\n    a{\n        text-decoration: none;\n        color: black;\n    }\n    h1,h2,h3,h4,h5,h6,p,div{\n        margin:0;\n        padding:0;\n    }\n    body{\n        font-family:'Open Sans', sans-serif;\n        background-color:#ECF0F1;\n        color:#2A2D34;\n    }\n    \n"]))),C=n(9),E=n(5),T=n(6),P=n(0),D=function(){return Object(P.jsx)(_,{children:Object(P.jsxs)(I,{children:[Object(P.jsx)(F,{to:"/",href:"#",children:"Home"}),Object(P.jsx)(F,{to:"/admin","aria-current":"page",href:"#",children:"Admin"}),Object(P.jsx)(F,{onClick:function(){localStorage.clear(),window.location.reload()},to:"/admin",children:"Log Out"})]})})},_=y.c.nav(r||(r=Object(w.a)(["\n  display: flex;\n  flex-direction: row;\n\n  background-color: ",";\n\n  padding: 1.5rem;\n"])),(function(e){return e.theme.colors.main})),I=y.c.div(a||(a=Object(w.a)(["\n  width: 70vw;\n  margin: 0 auto;\n"]))),F=Object(y.c)(C.c)(o||(o=Object(w.a)(["\n  color: ",";\n\n  list-style: none;\n  text-decoration: none;\n\n  padding: 0 0.6rem;\n\n  &:hover {\n    color: ",";\n    text-decoration: none;\n    list-style: none;\n\n    transform: scale(1.02);\n  }\n"])),(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.lightGray})),A=n(4),G=n.n(A),B=n(8),N=function(e){var t=e.onSubmit,n=e.children;return Object(P.jsx)(L,{onSubmit:function(e){t(e)},children:n})},L=y.c.form(s||(s=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  & > * > * {\n    padding: 0.2rem 0;\n  }\n"]))),J=function(e){var t=e.type,n=e.value,c=e.onChange;return Object(P.jsx)(z,{type:t,value:n,onChange:c})},z=y.c.input(i||(i=Object(w.a)(["\n  background-color: ",";\n\n  margin: 0.4rem 0;\n  padding: 0.2rem 0.4rem;\n\n  border: 1px solid ",";\n  border-radius: 4px;\n"])),(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.darkGray})),M=n(28),H=function(e){e.type;var t=e.value,n=e.onClick,c=e.args,r=void 0===c?[]:c,a=e.children;return n?Object(P.jsx)(q,{value:t,onClick:function(){return n.apply(void 0,Object(M.a)(r))},children:a}):Object(P.jsx)(q,{value:t,children:a})},q=y.c.button(l||(l=Object(w.a)(["\n  display: block;\n  width: 100%;\n  max-width: 170px;\n  margin: 1rem 0;\n  padding: 1rem 0.3rem;\n\n  background-color: ",";\n  color: ",";\n  cursor: pointer;\n  border-radius: 5px;\n  border: 1px solid grey;\n\n  &:active {\n    transform: scale(1.03);\n  }\n  &:hover {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.colors.secondary}),(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.main})),U=function(){var e=Object(O.useState)(""),t=Object(E.a)(e,2),n=t[0],c=t[1],r=Object(O.useState)(""),a=Object(E.a)(r,2),o=a[0],s=a[1],i=function(){var e=Object(B.a)(G.a.mark((function e(t){var c,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("https://tynasello-blog-api.herokuapp.com/blog/log-in",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:o})});case 4:return c=e.sent,e.next=7,c.json();case 7:if(r=e.sent,200!==c.status){e.next=13;break}localStorage.setItem("token",r.token),localStorage.setItem("auth","true"),e.next=15;break;case 13:return console.log(r),e.abrupt("return");case 15:T.a,window.location.reload(),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsxs)(K,{children:[Object(P.jsx)(Q,{children:"Login Page"}),Object(P.jsxs)(N,{onSubmit:i,children:[Object(P.jsx)("p",{children:"Username: "}),Object(P.jsx)(J,{type:"text",value:n,onChange:function(e){c(e.target.value)}}),Object(P.jsx)("p",{children:"Password:"}),Object(P.jsx)(J,{type:"password",value:o,onChange:function(e){s(e.target.value)}}),Object(P.jsx)(H,{value:"Submit",children:"Log In"})]})]})},K=y.c.div(u||(u=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n\n  width: 30vw;\n  margin: 0 auto;\n"]))),Q=y.c.h3(d||(d=Object(w.a)(["\n  padding: 2rem 0;\n"]))),R=function(e){var t=e.title,n=e.author,c=e.date,r=e.id,a=Object(T.h)(),o=function(){var e=Object(B.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://tynasello-blog-api.herokuapp.com/blog/posts/".concat(r,"/comments"),{method:"DELETE",headers:{"x-access-token":localStorage.getItem("token")||" "}});case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(B.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(),e.prev=1,e.next=4,fetch("https://tynasello-blog-api.herokuapp.com/blog/posts/".concat(r),{method:"DELETE",headers:{"x-access-token":localStorage.getItem("token")||" "}});case 4:window.location.reload(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(P.jsxs)(V,{children:[Object(P.jsx)(W,{children:t}),Object(P.jsx)(X,{children:n}),Object(P.jsx)(Y,{children:c}),Object(P.jsx)(C.c,{style:{color:"#0ca1a1"},to:{pathname:"".concat(a.url,"/posts/").concat(r)},children:"See More"}),Object(P.jsx)(H,{onClick:s,children:"Delete Post"})]})},V=y.c.div(j||(j=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 2rem;\n\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  & > * {\n    padding: 0.3rem 0;\n  }\n"]))),W=y.c.h3(b||(b=Object(w.a)([""]))),X=y.c.h6(p||(p=Object(w.a)([""]))),Y=y.c.h6(h||(h=Object(w.a)([""])));var Z,$,ee,te,ne,ce,re,ae,oe,se,ie,le,ue,de,je,be,pe,he,xe,Oe,me,fe,ge,ve,ye,ke,we,Se,Ce,Ee,Te,Pe,De=function(e){var t=e.value,n=e.onChange;return Object(O.useEffect)((function(){!function(e){e.forEach((function(e){e.style.height="0.8rem",e.style.height=e.scrollHeight+"px"}))}(document.querySelectorAll(_e))})),Object(P.jsx)(_e,{onChange:function(e){return n(e)},value:t})},_e=y.c.textarea(x||(x=Object(w.a)(["\n  margin: 0.4rem 0;\n  padding: 0.2rem 0.4rem;\n\n  background-color: ",";\n  border: 1px solid ",";\n  border-radius: 4px;\n"])),(function(e){return e.theme.colors.light}),(function(e){return e.theme.colors.darkGray})),Ie=function(e){var t=e.isOpen,n=e.closeModal,c=e.children;return t?g.a.createPortal(Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(Fe,{}),Object(P.jsxs)(Ae,{children:[c,Object(P.jsx)(H,{onClick:n,children:"Close"})]})]}),document.getElementById("portal")):null},Fe=y.c.div(Z||(Z=Object(w.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 5;\n  background-color: rgba(0, 0, 0, 0.7);\n"]))),Ae=y.c.div($||($=Object(w.a)(["\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 60vw;\n\n  background-color: ",";\n\n  padding: 50px;\n  z-index: 5;\n"])),(function(e){return e.theme.colors.light})),Ge=function(e){var t=e.buttonText,n=e.children,c=Object(O.useState)(!1),r=Object(E.a)(c,2),a=r[0],o=r[1];return Object(P.jsxs)(Be,{children:[Object(P.jsx)(H,{onClick:function(){return o(!0)},children:t}),Object(P.jsx)(Ie,{isOpen:a,closeModal:function(){return o(!1)},children:n})]})},Be=y.c.div(ee||(ee=Object(w.a)([""]))),Ne=function(){var e=Object(O.useState)([]),t=Object(E.a)(e,2),n=t[0],c=t[1],r=Object(O.useState)(""),a=Object(E.a)(r,2),o=a[0],s=a[1],i=Object(O.useState)(""),l=Object(E.a)(i,2),u=l[0],d=l[1],j=Object(O.useState)(""),b=Object(E.a)(j,2),p=b[0],h=b[1];Object(O.useEffect)((function(){Object(B.a)(G.a.mark((function e(){var t,n,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://tynasello-blog-api.herokuapp.com/blog/posts",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,200===t.status){e.next=9;break}return e.abrupt("return");case 9:r=Object.values(n),c(r[0]),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}),[]);var x=function(){var e=Object(B.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("https://tynasello-blog-api.herokuapp.com/blog/posts/",{method:"POST",headers:{"Content-Type":"application/json","x-access-token":localStorage.getItem("token")||" "},body:JSON.stringify({title:o,author_name:p,text:u})});case 4:window.location.reload(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsxs)(Le,{children:[Object(P.jsx)(Je,{children:n&&n.map((function(e){return Object(P.jsx)(R,{id:e._id,title:e.title,text:e.text,author:e.author_name,date:e.date},e._id)}))}),Object(P.jsx)(Ge,{buttonText:"Create New Post",children:Object(P.jsxs)(N,{onSubmit:x,children:[Object(P.jsx)("p",{style:{margin:0},children:"Post Title:"}),Object(P.jsx)(J,{type:"text",value:o,onChange:function(e){s(e.target.value)}}),Object(P.jsx)("p",{children:"Author:"}),Object(P.jsx)(J,{type:"text",value:p,onChange:function(e){h(e.target.value)}}),Object(P.jsx)("p",{children:"Text"}),Object(P.jsx)(De,{type:"text",value:u,onChange:function(e){d(e.target.value)}}),Object(P.jsx)(H,{value:"Submit",children:"Confirm New Post"})]})})]})},Le=y.c.div(te||(te=Object(w.a)(["\n  width: 50vw;\n  margin: 0 auto;\n"]))),Je=y.c.div(ne||(ne=Object(w.a)(["\n  display: grid;\n  grid-gap: 3rem;\n\n  width: 50vw;\n  margin: 0 auto;\n  padding: 3rem 0;\n"]))),ze=function(e){var t=e.title,n=e.text,c=e.author,r=e.date,a=e.id,o=Object(T.h)();return Object(P.jsxs)(Me,{children:[Object(P.jsx)(He,{children:t}),Object(P.jsx)(qe,{children:c}),Object(P.jsx)(Ue,{children:r}),Object(P.jsx)(C.c,{style:{color:"#75B9BE"},to:{pathname:"".concat(o.url,"/").concat(a),state:{title:t,text:n,author:c,date:r,id:a}},children:"See More"})]})},Me=y.c.div(ce||(ce=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n\n  & > * {\n    padding: 0.3rem 0;\n  }\n"]))),He=y.c.h3(re||(re=Object(w.a)([""]))),qe=y.c.h6(ae||(ae=Object(w.a)([""]))),Ue=y.c.h6(oe||(oe=Object(w.a)([""]))),Ke=function(){var e=Object(O.useState)([]),t=Object(E.a)(e,2),n=t[0],c=t[1];return Object(O.useEffect)((function(){Object(B.a)(G.a.mark((function e(){var t,n,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://tynasello-blog-api.herokuapp.com/blog/posts",{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,200===t.status){e.next=9;break}return e.abrupt("return");case 9:r=Object.values(n),c(r[0]),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}),[]),Object(P.jsx)(Qe,{children:n&&n.map((function(e){return Object(P.jsx)(ze,{id:e._id,title:e.title,text:e.text,author:e.author_name,date:e.date},e._id)}))})},Qe=y.c.div(se||(se=Object(w.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 4rem;\n\n  width: 70vw;\n  margin: 0 auto;\n  padding: 3rem 0;\n"]))),Re=function(){var e=Object(O.useState)([]),t=Object(E.a)(e,2),n=t[0],c=t[1],r=Object(O.useState)(""),a=Object(E.a)(r,2),o=a[0],s=a[1],i=Object(O.useState)(""),l=Object(E.a)(i,2),u=l[0],d=l[1],j=Object(T.g)(),b=j.state.title,p=j.state.text,h=j.state.author,x=j.state.date,m=j.state.id;Object(O.useEffect)((function(){Object(B.a)(G.a.mark((function e(){var t,n,r;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://tynasello-blog-api.herokuapp.com/blog/posts/".concat(m,"/comments"),{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,200===t.status){e.next=9;break}return e.abrupt("return");case 9:r=Object.values(n),c(r[0]),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}),[m]);var f=function(){var e=Object(B.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("https://tynasello-blog-api.herokuapp.com/blog/posts/".concat(m,"/comments"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({text:u,author_name:o})});case 4:window.location.reload(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsxs)(Ve,{children:[Object(P.jsx)(We,{children:b}),Object(P.jsx)(Xe,{children:h}),Object(P.jsx)(Ye,{children:x}),Object(P.jsx)(Ze,{children:p}),Object(P.jsxs)(et,{children:[Object(P.jsx)($e,{children:"Comments"}),Object(P.jsx)(rt,{children:Object(P.jsxs)(N,{onSubmit:f,children:[Object(P.jsx)("p",{children:"Author Name:"}),Object(P.jsx)(J,{type:"text",value:o,onChange:function(e){s(e.target.value)}}),Object(P.jsx)("p",{children:"Text:"}),Object(P.jsx)(De,{type:"text",value:u,onChange:function(e){d(e.target.value)}}),Object(P.jsx)(H,{value:"Submit",children:"Post Comment"})]})}),n&&n.map((function(e){return Object(P.jsxs)(tt,{children:[Object(P.jsx)(nt,{children:e.author_name}),Object(P.jsx)(ct,{children:e.text})]},e._id)}))]})]})},Ve=y.c.div(ie||(ie=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n\n  width: 50vw;\n  margin: 3rem auto;\n\n  & > * {\n    padding: 0.4rem 0;\n  }\n"]))),We=y.c.h3(le||(le=Object(w.a)(["\n  padding-bottom: 2rem;\n"]))),Xe=y.c.h6(ue||(ue=Object(w.a)([""]))),Ye=y.c.h6(de||(de=Object(w.a)([""]))),Ze=y.c.p(je||(je=Object(w.a)([""]))),$e=y.c.h4(be||(be=Object(w.a)(["\n  margin-top: 1rem;\n"]))),et=y.c.div(pe||(pe=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n\n  & > * {\n    padding: 0.4rem 0;\n  }\n"]))),tt=y.c.div(he||(he=Object(w.a)(["\n  background-color: ",";\n\n  padding: 1rem;\n  margin: 1.5rem 0;\n\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  border-radius: 4px;\n\n  & > * {\n    padding: 0.2rem 0;\n  }\n"])),(function(e){return e.theme.colors.light})),nt=y.c.h6(xe||(xe=Object(w.a)([""]))),ct=y.c.p(Oe||(Oe=Object(w.a)(["\n  font-size: 0.9rem;\n"]))),rt=y.c.div(me||(me=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),at=function(){var e=Object(O.useState)([]),t=Object(E.a)(e,2),n=t[0],c=t[1],r=window.location.pathname.split("/").pop(),a=Object(O.useState)(""),o=Object(E.a)(a,2),s=o[0],i=o[1],l=Object(O.useState)(""),u=Object(E.a)(l,2),d=u[0],j=u[1],b=Object(O.useState)(""),p=Object(E.a)(b,2),h=p[0],x=p[1],m=Object(O.useState)(""),f=Object(E.a)(m,2),g=f[0],v=f[1];Object(O.useEffect)((function(){Object(B.a)(G.a.mark((function e(){var t,n,a,o,s;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://tynasello-blog-api.herokuapp.com/blog/posts/".concat(r),{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,200===t.status){e.next=9;break}return e.abrupt("return");case 9:n=n.post,i(n.title),j(n.text),x(n.author_name),v(n.date),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:return e.prev=19,e.next=22,fetch("https://tynasello-blog-api.herokuapp.com/blog/posts/".concat(r,"/comments"),{method:"GET",headers:{"Content-Type":"application/json"}});case 22:return a=e.sent,e.next=25,a.json();case 25:if(o=e.sent,200===a.status){e.next=28;break}return e.abrupt("return");case 28:s=Object.values(o),c(s[0]),e.next=35;break;case 32:e.prev=32,e.t1=e.catch(19),console.log(e.t1);case 35:case"end":return e.stop()}}),e,null,[[0,16],[19,32]])})))()}),[r]);var y=function(){var e=Object(B.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://tynasello-blog-api.herokuapp.com/blog/posts/".concat(r,"/comments/").concat(t),{method:"DELETE",headers:{"x-access-token":localStorage.getItem("token")||" "}});case 3:window.location.reload(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(B.a)(G.a.mark((function e(t){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,fetch("https://tynasello-blog-api.herokuapp.com/blog/posts/".concat(r),{method:"PATCH",headers:{"Content-Type":"application/json","x-access-token":localStorage.getItem("token")||" "},body:JSON.stringify({title:s,author_name:h,text:d})});case 4:window.location.reload(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(P.jsxs)(ot,{children:[Object(P.jsx)(st,{children:s}),Object(P.jsx)(it,{children:h}),Object(P.jsx)(lt,{children:g}),Object(P.jsx)(ut,{children:d}),Object(P.jsxs)(Ge,{buttonText:"Edit Post",children:[Object(P.jsx)(xt,{children:"Edit Blog Post"}),Object(P.jsx)("br",{}),Object(P.jsxs)(N,{onSubmit:k,children:[Object(P.jsx)("p",{children:"Post Title:"}),Object(P.jsx)(J,{type:"text",value:s,onChange:function(e){i(e.target.value)}}),Object(P.jsx)("p",{children:"Author Name:"}),Object(P.jsx)(J,{type:"text",value:h,onChange:function(e){x(e.target.value)}}),Object(P.jsx)("p",{children:"Content:"}),Object(P.jsx)(De,{type:"text",value:d,onChange:function(e){j(e.target.value)}}),Object(P.jsx)(H,{value:"Submit",children:"Confirm Edit"})]})]}),Object(P.jsxs)(jt,{children:[Object(P.jsx)(dt,{children:"Comments"}),n&&n.map((function(e){var t=[];return t.push(e._id),Object(P.jsx)(P.Fragment,{children:Object(P.jsxs)(bt,{children:[Object(P.jsx)(pt,{children:e.author_name}),Object(P.jsx)(ht,{children:e.text}),Object(P.jsx)(H,{onClick:y,args:t,children:"Delete Comment"})]},e._id)})}))]})]})},ot=y.c.div(fe||(fe=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 50vw;\n  margin: 3rem auto;\n  & > * {\n    padding: 0.4rem 0;\n  }\n"]))),st=y.c.h3(ge||(ge=Object(w.a)(["\n  padding-bottom: 2rem;\n"]))),it=y.c.h6(ve||(ve=Object(w.a)([""]))),lt=y.c.h6(ye||(ye=Object(w.a)([""]))),ut=y.c.p(ke||(ke=Object(w.a)([""]))),dt=y.c.h4(we||(we=Object(w.a)(["\n  margin-top: 1rem;\n"]))),jt=y.c.div(Se||(Se=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n\n  & > * {\n    padding: 0.4rem 0;\n  }\n"]))),bt=y.c.div(Ce||(Ce=Object(w.a)(["\n  background-color: ",";\n\n  padding: 1rem;\n  margin: 1.5rem 0;\n\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n  border-radius: 4px;\n\n  & > * {\n    padding: 0.2rem 0;\n  }\n"])),(function(e){return e.theme.colors.light})),pt=y.c.h6(Ee||(Ee=Object(w.a)([""]))),ht=y.c.p(Te||(Te=Object(w.a)(["\n  font-size: 0.9rem;\n"]))),xt=y.c.h3(Pe||(Pe=Object(w.a)([""]))),Ot=function(){var e=Object(O.useState)(!1),t=Object(E.a)(e,2),n=t[0],c=t[1];return Object(O.useEffect)((function(){var e=localStorage.getItem("auth");c(!!e)}),[]),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(D,{}),Object(P.jsxs)(T.d,{children:[Object(P.jsx)(T.b,{exact:!0,path:"/",children:Object(P.jsx)(T.a,{to:"/posts"})}),Object(P.jsx)(T.b,{exact:!0,path:"/posts",children:Object(P.jsx)(Ke,{})}),Object(P.jsx)(T.b,{exact:!0,path:"/admin",children:n?Object(P.jsx)(Ne,{}):Object(P.jsx)(U,{})}),Object(P.jsx)(T.b,{exact:!0,path:"/posts/:id",children:Object(P.jsx)(Re,{})}),Object(P.jsx)(T.b,{exact:!0,path:"/admin/posts/:id",children:Object(P.jsx)(at,{})})]})]})},mt=function(){return Object(P.jsx)("div",{className:"App",children:Object(P.jsx)(C.a,{children:Object(P.jsx)(Ot,{})})})};g.a.render(Object(P.jsx)(m.a.StrictMode,{children:Object(P.jsx)(C.b,{basename:"/blog-frontend",children:Object(P.jsxs)(y.a,{theme:k,children:[Object(P.jsx)(S,{}),Object(P.jsx)(mt,{})]})})}),document.getElementById("root")),v()}},[[41,1,2]]]);
//# sourceMappingURL=main.ed5dd8a3.chunk.js.map