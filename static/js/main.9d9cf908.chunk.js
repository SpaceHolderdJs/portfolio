(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports={about:"about_about__3Ytip",header:"about_header__36i4O",contentWrapper:"about_contentWrapper__D_ccE",content:"about_content__3n79Z",avatar:"about_avatar__2FdU1",list:"about_list__2UJH7"}},,function(e,t,n){e.exports={repo:"repo_repo__Ub3bU",button:"repo_button__1_87n"}},,function(e,t,n){e.exports={container:"container_container__1EP9S",title:"container_title__2R6Vx",divider:"container_divider__bfvLE"}},function(e,t,n){e.exports={header:"header_header__2Z9Qa",tabSwitcher:"header_tabSwitcher__9bHQ3",active:"header_active__TYsyR"}},,function(e,t,n){e.exports={list:"reposList_list__1lamh",repoSmall:"reposList_repoSmall__3TzGu"}},,function(e,t,n){e.exports={portfolio:"portfolio_portfolio__3r_9m"}},,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(5),i=n.n(c),a=n(17),o=n.n(a),r=(n(23),n(7)),s=n(10),d=(n(24),n(9)),l=n.n(d),u=n(13),j=n.n(u),h=n(2),b=function(e){var t=e.title,n=e.children,i=Object(c.useState)(!0),a=Object(r.a)(i,2),o=a[0],s=a[1];return Object(h.jsxs)("div",{className:"column ".concat(j.a.container),children:[Object(h.jsx)("h3",{onClick:function(){return s(!o)},className:"row centered ".concat(j.a.title),children:t}),Object(h.jsx)("div",{className:j.a.divider}),o&&Object(h.jsx)("div",{className:"animated",children:n})]})},p=function(){var e=(new Date).getFullYear()-1999;return Object(h.jsxs)("div",{className:"column centered animated ".concat(l.a.about),children:[Object(h.jsxs)("div",{className:"row centered ".concat(l.a.header),children:[Object(h.jsx)("h1",{children:"Igor Sergienko"}),Object(h.jsx)("h3",{children:"[frontend developer]"})]}),Object(h.jsxs)("div",{className:"row centered ".concat(l.a.contentWrapper),children:[Object(h.jsxs)("div",{className:"column ".concat(l.a.content),children:[Object(h.jsxs)("p",{children:["Hi! My name is Igor and I am ",e," y.o. I am in frontend dev for 5 years. This page will produce you posibility to interact with my pets. You can find some more info about me below."]}),Object(h.jsx)(b,{title:"Location",children:Object(h.jsx)("p",{children:"Kyiv, Ukraine"})}),Object(h.jsxs)(b,{title:"Education",children:[Object(h.jsx)("p",{children:"Place: National Transport University (NTU)"}),Object(h.jsx)("p",{children:"Bakalavr: 121 Programm ingeniring [2017-2021]"}),Object(h.jsx)("p",{children:"Master: 122 Computer Sience [2021-2022]"}),Object(h.jsx)("p",{children:"IT-STEPS ACADEMY - Frontend dev [2020-2021]"})]}),Object(h.jsxs)(b,{title:"Hobbies",children:[Object(h.jsx)("p",{children:"\ud83d\udcbb Programming"}),Object(h.jsx)("p",{children:"\ud83d\udcfd\ufe0f Video editing"}),Object(h.jsx)("p",{children:"\ud83d\udcda Reading"}),Object(h.jsx)("p",{children:"\ud83e\udd4a Boxing"})]})]}),Object(h.jsxs)("div",{className:"column centered ".concat(l.a.content),children:[Object(h.jsx)("img",{src:"/assets/statics/me.jpg",alt:"me",className:"shadow ".concat(l.a.avatar)}),Object(h.jsx)(b,{title:"My stacks",children:Object(h.jsx)("ul",{className:l.a.list,children:["HTML","CSS","JS","GIT","Webpack","React","Redux","Adobe Photoshop (basics)","Three.js","MERN"].map((function(e){return Object(h.jsx)("li",{children:e},e)}))})})]})]})]})},m=n(14),f=n.n(m),w=function(){var e=Object(c.useContext)(K),t=e.dispatch,n=e.store;return Object(h.jsx)("div",{className:"row centered shadow ".concat(f.a.header),children:["about","portfolio"].map((function(e){return Object(h.jsx)("button",{className:"".concat(f.a.tabSwitcher," ").concat(n.tab===e&&f.a.active),onClick:function(){return t({type:"INIT_TAB",payload:e})},children:e},e)}))})},O=n(11),x=n.n(O),v=function(e){var t=e.repo,n=e.closeFunc;console.log(t);var c=t.name,i=t.description,a=t.created_at,o=t.topics,r=t.html_url,s=t.updated_at,d=new Date(Date.parse(a)),l=new Date(Date.parse(s)),u=function(e){return e.toString().length<2?"0"+e:e};return Object(h.jsxs)("div",{className:"column animated ".concat(x.a.repo),children:[Object(h.jsx)("h2",{children:c}),Object(h.jsx)("p",{children:i}),Object(h.jsxs)("span",{children:["Created:",u(d.getDate()),".",u(d.getMonth()),".",u(d.getFullYear())]}),Object(h.jsxs)("span",{children:["Last update:",u(l.getDate()),".",u(l.getMonth()),".",u(l.getFullYear())]}),o.length&&Object(h.jsx)(b,{title:"Topics",children:Object(h.jsx)("ul",{children:o.map((function(e){return Object(h.jsx)("li",{children:e})}))})}),Object(h.jsxs)("div",{className:"row centered",children:[Object(h.jsx)("a",{className:"row centered ".concat(x.a.button),href:"https://spaceholderdjs.github.io/".concat(c),children:"View"}),Object(h.jsx)("a",{className:"row centered ".concat(x.a.button),href:r,children:"View Code"}),Object(h.jsx)("button",{className:"row centered ".concat(x.a.button),onClick:function(){return n()},children:"Back"})]})]})},_=n(0),g=n(1),y=n(4),N=n(8),S=new y.k,E=new y.g(75,window.innerWidth/window.innerHeight,.1,1e3),M=new y.p({antialias:!0});M.setSize(window.innerWidth,window.innerHeight),M.domElement.classList.add("scene"),S.background=new y.a("rgb(10, 10, 35)");var k=new y.n,C=k.load("/assets/statics/height.png"),T=new y.h(40,40,64,64);S.fog=new y.b("rgb(10, 10, 35)",10,20),console.log(T);var L=new y.e({color:"grey",displacementMap:C,displacementScale:5,wireframe:!0,wireframeLinewidth:5.3,transparent:!0,opacity:.3}),F=new y.c(T,L);F.rotation.x=-20,S.add(F);var z=new y.i("white");z.position.set(0,55,0),S.add(z);var I=new y.i("white",8,9);I.position.set(0,0,4),S.add(I),E.position.z=7;var H=function(){function e(t,n,c){Object(_.a)(this,e),this.repo=t,this.orderNumber=n,this.currentRepoSetter=c,this.img="/assets/".concat(t.name,".png")}return Object(g.a)(e,[{key:"initialization",value:function(e){var t=this,n=new y.h(7,4,15,15),c=new y.e({map:k.load(this.img),metalness:.8,displacementMap:C,displacementScale:1.5*Math.random()-1.5*Math.random()}),i=new y.c(n,c);return i.name=this.name,i.clickEventHandler=function(){return t.currentRepoSetter(t.repo)},i.position.set(2*Math.random()+3,6.5*this.orderNumber,-3),e.add(i),this}}]),e}(),W=new y.f;W.visible=!1,W.position.set(0,3,0),S.add(W);var Y=new y.f;S.add(Y);!function(e){for(var t=new y.d,n=new y.l(.03,.03,5,5),c=0;c<e;c++){var i=new y.c(n,t);Y.add(i),i.position.set(15*Math.random()-15*Math.random(),15+55*Math.random(),10*Math.random()-10*Math.random())}}(1e3);var D=new y.d({map:k.load("/assets/statics/moonMap.jpg")}),P=new y.m(10,10,55,55),R=new y.c(P,D);R.position.set(-3,20+10*Math.random(),-20),S.add(R);var B=0,U=0,A=new y.o;window.addEventListener("mousemove",(function(e){A.x=e.clientX/window.innerWidth*2-1,A.y=-e.clientY/window.innerHeight*2+1,E.rotation.y=3e-4*(window.innerWidth/2-e.pageX)})),window.addEventListener("wheel",(function(e){B=.0012*e.deltaY})),window.addEventListener("scroll",(function(e){E.position.z=5+5e-4*window.scrollY})),window.addEventListener("mousemove",(function(e){F.rotation.x=5e-5*e.pageX-20,I.position.set(1+.0055*(e.pageX-window.innerWidth/2),1+.005*(window.innerWidth/2-e.pageY),4),F.material.displacementScale=.0075*(e.pageX-window.innerWidth/2)})),window.addEventListener("click",(function(){X.setFromCamera(A,E);var e=X.intersectObjects(W.children);e[0]&&e[0].object.clickEventHandler()}));var X=new y.j;!function e(){requestAnimationFrame(e),X.setFromCamera(A,E);var t=X.intersectObjects(W.children);t.forEach((function(e){N.a.to(e.object.scale,{x:1.2,y:1.2}),N.a.to(e.object.rotation,{y:-.3}),N.a.to(e.object.position,{z:1}),e.object.material.displacementScale=0})),W.children.filter((function(e){return!t.find((function(t){return t.object.uuid===e.uuid}))})).forEach((function(e){N.a.to(e.scale,{x:1,y:1}),N.a.to(e.rotation,{y:0}),N.a.to(e.position,{z:-3})})),U+=B,B*=.9,E.position.y=U,I.position.y=U,F.rotation.z+=.002,Y.rotation.y+=.002,R.rotation.y+=.002,R.rotation.x+=.002,M.render(S,E)}();var J=n(18),V=n.n(J),G=n(16),Q=n.n(G),Z=function(e){var t=e.repos,n=e.repoSetter;return Object(h.jsx)("div",{className:"column animated ".concat(Q.a.list),children:t.length>0?t.map((function(e,t){var c=e.name,i=e.size;return Object(h.jsxs)("div",{className:"row centered ".concat(Q.a.repoSmall),onClick:function(){return n(e)},children:[Object(h.jsx)("h3",{children:c}),Object(h.jsxs)("span",{children:[i,"kb"]})]},e+t)})):Object(h.jsx)("h1",{children:"Loading..."})})},q=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(),o=Object(r.a)(a,2),s=o[0],d=o[1],l=Object(c.useCallback)((function(){fetch("https://api.github.com/users/".concat("spaceholderdjs","/repos")).then((function(e){return e.json()})).then((function(e){var t,n;i(e.filter((function(e){return e.has_pages}))),t=e.filter((function(e){return e.has_pages})),n=d,W.children.forEach((function(e){return W.remove(e)})),t.forEach((function(e,t){return new H(e,t,n).initialization(W)}))}))}),[]);return Object(c.useEffect)((function(){l()}),[]),Object(c.useEffect)((function(){console.log(n)}),[n]),Object(c.useEffect)((function(){var e;console.log(s),s&&(e=n.indexOf(s),B=.105*W.children[e].position.y,z.position.y=E.position.y=U=B)}),[s]),Object(h.jsxs)("div",{className:"column  animated ".concat(V.a.portfolio),children:[Object(h.jsx)("h1",{children:"Portfolio"}),Object(h.jsx)("p",{children:"Here you can list my last projects"}),s?Object(h.jsx)(v,{repo:s,closeFunc:function(){return d(null)}}):Object(h.jsx)(Z,{repos:n,repoSetter:d})]})},K=Object(c.createContext)(),$=function(e,t){return"INIT_TAB"===t.type?Object(s.a)(Object(s.a)({},e),{},{tab:t.payload}):e};var ee=function(){var e=Object(c.useReducer)($,{tab:"about"}),t=Object(r.a)(e,2),n=t[0],i=t[1],a=n.tab;return Object(c.useEffect)((function(){document.body.appendChild(M.domElement)}),[]),Object(c.useEffect)((function(){!function(e){"portfolio"===e?(W.visible=!0,N.a.to(F.position,{z:-3})):(W.visible=!1,N.a.to(F.position,{z:3}))}(a)}),[a]),Object(h.jsx)("div",{className:"column centered app",children:Object(h.jsxs)(K.Provider,{value:{dispatch:i,store:n},children:[Object(h.jsx)(w,{}),"about"===a&&Object(h.jsx)(p,{}),"portfolio"===a&&Object(h.jsx)(q,{})]})})},te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(ee,{})}),document.getElementById("root")),te()}],[[27,1,2]]]);
//# sourceMappingURL=main.9d9cf908.chunk.js.map