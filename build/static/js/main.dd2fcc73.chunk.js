(this["webpackJsonpjwt-boilerplate"]=this["webpackJsonpjwt-boilerplate"]||[]).push([[0],{142:function(e,t,n){},143:function(e,t,n){},147:function(e,t,n){},154:function(e,t,n){},155:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(52),a=n.n(o),c=(n(141),n(142),n(11)),s=n(9),i=(n(143),n(31)),l=n(60),u=n(74),j=n(17),d=n.n(j),h=n(2);function b(e){return Object(h.jsx)("span",{className:"error",children:e.error})}var p=n(172),g=n(173),O=n(124),f=n(167),m=n(174),x=n(170),v=n(169);function k(){var e=localStorage.getItem("token");e&&(JSON.parse(atob(e.split(".")[1])).exp<Date.now()/1e3&&(localStorage.removeItem("token"),e=null));return e}var w={setToken:function(e){e?localStorage.setItem("token",e):localStorage.removeItem("token")},getToken:k,removeToken:function(){localStorage.removeItem("token")},getUserFromToken:function(){var e=k();return e?JSON.parse(atob(e.split(".")[1])).user:null}},y="/api/users/";var S={signup:function(e){return fetch(y+"signup",{method:"POST",body:e}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var t=e.token;return w.setToken(t)}))},logout:function(){w.removeToken()},login:function(e){return fetch(y+"login",{method:"POST",headers:new Headers({"Content-Type":"application/json"}),body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))})).then((function(e){var t=e.token;return w.setToken(t)}))},getUser:function(){return w.getUserFromToken()},getProfile:function(e){return console.log("getProfile calling"),fetch(y+e,{headers:{Authorization:"Bearer "+w.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error("Error from getProfile, check the server terminal")}))}},C=n(19);n(147);function U(e){var t=Object(r.useState)({message:"",passwordError:!1}),n=Object(c.a)(t,2),o=n[0],a=n[1],j=Object(r.useState)({username:"",email:"",password:"",passwordConf:""}),k=Object(c.a)(j,2),w=k[0],y=k[1],U=Object(s.g)(),P=Object(r.useState)(""),L=Object(c.a)(P,2),A=L[0],T=L[1];function I(e){y(Object(u.a)(Object(u.a)({},w),{},Object(l.a)({},e.target.name,e.target.value)))}function E(){return(E=Object(i.a)(d.a.mark((function t(n){var r,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(o in n.preventDefault(),(r=new FormData).append("photo",A),w)r.append(o,w[o]);return console.log(r,"<-formdata"),t.prev=5,t.next=8,S.signup(r);case 8:e.handleSignUpOrLogin(),U("/"),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(5),console.log(t.t0),a({message:t.t0.message,passwordError:!1});case 16:case"end":return t.stop()}}),t,null,[[5,12]])})))).apply(this,arguments)}return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"Body",children:Object(h.jsx)(p.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle",children:Object(h.jsxs)(p.a.Column,{style:{maxWidth:450},children:[Object(h.jsxs)(g.a,{as:"h2",color:"yellow",textAlign:"center",children:[Object(h.jsx)(O.a,{src:"/animal.png"})," Sign Up"]}),Object(h.jsxs)(f.a,{onSubmit:function(e){return E.apply(this,arguments)},size:"large",autoComplete:"on",className:"SignUpForm",children:[Object(h.jsxs)(m.a,{stacked:!0,children:[Object(h.jsx)(f.a.Input,{name:"username",value:w.username,iconPosition:"left",placeholder:"username",fluid:!0,icon:"user",onChange:I,required:!0}),Object(h.jsx)(f.a.Input,{name:"email",type:"email",value:w.email,iconPosition:"left",placeholder:"email",fluid:!0,icon:"mail",onChange:I,required:!0}),Object(h.jsx)(f.a.Input,{name:"password",type:"password",value:w.password,iconPosition:"left",placeholder:"Password",fluid:!0,icon:"lock",onChange:I,required:!0}),Object(h.jsx)(f.a.Input,{name:"passwordConf",type:"password",iconPosition:"left",placeholder:"Confirm Password",fluid:!0,icon:"lock",value:w.passwordConf,onChange:I,required:!0}),Object(h.jsx)(f.a.Field,{children:Object(h.jsx)(f.a.Input,{type:"file",name:"photo",placeholder:"upload image",onChange:function(e){console.log(e.target.files,"<-this is e.target.files"),T(e.target.files[0])}})}),Object(h.jsx)(x.a,{color:"yellow",fluid:!0,size:"large",children:"Sign Up"})]}),o.message?Object(h.jsx)(b,{error:o.message}):null]}),Object(h.jsxs)(v.a,{children:["Already a member? ",Object(h.jsx)(C.b,{to:"/login",children:"Login"})]})]})})})})}n(154);function P(e){var t=Object(r.useState)(""),n=Object(c.a)(t,2),o=n[0],a=n[1],j=Object(r.useState)({email:"",password:""}),k=Object(c.a)(j,2),w=k[0],y=k[1],U=Object(s.g)();function P(e){y(Object(u.a)(Object(u.a)({},w),{},Object(l.a)({},e.target.name,e.target.value)))}function L(){return(L=Object(i.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,S.login(w);case 4:e.handleSignUpOrLogin(),U("/"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}return Object(h.jsx)(p.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle",children:Object(h.jsxs)(p.a.Column,{style:{maxWidth:450},children:[Object(h.jsxs)(g.a,{as:"h2",color:"teal",textAlign:"center",children:[Object(h.jsx)(O.a,{src:"/animal.png"})," Welcome Back!"]}),Object(h.jsx)(f.a,{onSubmit:function(e){return L.apply(this,arguments)},size:"large",autoComplete:"on",children:Object(h.jsxs)(m.a,{stacked:!0,children:[Object(h.jsx)(f.a.Input,{name:"email",type:"email",value:w.email,iconPosition:"left",placeholder:"email",fluid:!0,icon:"mail",onChange:P,required:!0}),Object(h.jsx)(f.a.Input,{name:"password",type:"password",value:w.password,iconPosition:"left",placeholder:"Password",fluid:!0,icon:"lock",onChange:P,required:!0}),Object(h.jsx)(x.a,{color:"teal",fluid:!0,size:"large",children:"Log In"})]})}),Object(h.jsxs)(v.a,{children:["New to us? ",Object(h.jsx)(C.b,{to:"/signup",children:"Sign Up"})]}),o?Object(h.jsx)(b,{error:o}):null]})})}var L=n(112);function A(e){var t=e.loggedUser,n=e.handleLogout;return console.log(t,"<-user in header"),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(g.a,{as:"h3",floated:"right",children:Object(h.jsx)(C.b,{to:"/",children:"Home"})}),Object(h.jsxs)(g.a,{as:"h3",floated:"right",children:[Object(h.jsx)(C.b,{to:"/"}),Object(h.jsx)(C.b,{to:"/",onClick:n,children:"Logout"})]}),Object(h.jsx)(g.a,{as:"h3",floated:"right",children:Object(h.jsx)(C.b,{to:"/".concat(null===t||void 0===t?void 0:t.username),children:"My Page"})}),Object(h.jsx)(O.a,{centered:!0,size:"small",src:"/animal.png"})]})}var T=n(168),I=n(78);var E=function(e){var t=e.post,n=e.isProfile,r=e.addLike,o=e.removeLike,a=e.loggedUser,c=t.likes.findIndex((function(e){return e.username===a.username})),s=c>-1?"red":"grey",i=c>-1?function(){return o(t.likes[c]._id)}:function(){return r(t._id)};return Object(h.jsxs)(T.a,{raised:!0,children:[n?"":Object(h.jsx)(T.a.Content,{textAlign:"left",children:Object(h.jsx)(T.a.Header,{children:Object(h.jsxs)(C.b,{to:"/".concat(t.user.username),children:[Object(h.jsx)(O.a,{size:"large",avatar:!0,src:t.user.photoUrl?t.user.photoUrl:"https://react.semantic-ui.com/images/wireframe/square-image.png"}),t.user.username]})})}),Object(h.jsx)(O.a,{src:"".concat(null===t||void 0===t?void 0:t.photoUrl),wrapped:!0,ui:!1}),Object(h.jsx)(T.a.Content,{children:Object(h.jsx)(T.a.Description,{children:t.caption})}),Object(h.jsxs)(T.a.Content,{extra:!0,textAlign:"right",children:[Object(h.jsx)(I.a,{name:"delete",size:"large",onClick:""}),Object(h.jsx)(I.a,{name:"heart",size:"large",color:s,onClick:i}),t.likes.length," Likes"]})]},t._id)};function z(e){var t=e.posts,n=e.numPhotosCol,r=e.isProfile,o=e.removeLike,a=e.addLike,c=e.loggedUser;return Object(h.jsx)(T.a.Group,{itemsPerRow:n,stackable:!0,children:t.map((function(e){return Object(h.jsx)(E,{post:e,isProfile:r,removeLike:o,addLike:a,loggedUser:c},e._id)}))})}function B(e){var t=Object(r.useState)({caption:""}),n=Object(c.a)(t,2),o=n[0],a=n[1],s=Object(r.useState)(""),i=Object(c.a)(s,2),l=i[0],u=i[1];return Object(h.jsx)(m.a,{children:Object(h.jsxs)(f.a,{onSubmit:function(t){t.preventDefault();var n=new FormData;n.append("photo",l),n.append("caption",o.caption),e.handleAddPost(n)},children:[Object(h.jsx)(f.a.Input,{className:"form",name:"caption",value:o.caption,onChange:function(e){a({caption:e.target.value})},required:!0}),Object(h.jsx)(f.a.Field,{children:Object(h.jsx)(f.a.Input,{type:"file",name:"photo",placeholder:"add an image",onChange:function(e){console.log(e.target.files,"<-e.target.files"),u(e.target.files[0])}})}),Object(h.jsx)(x.a,{type:"submit",className:"btn",children:"ADD BABY ANIMAL"})]})})}var D="/api/posts";function F(e){return fetch(D,{method:"POST",body:e,headers:{Authorization:"Bearer "+w.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))}))}function N(){return fetch(D,{headers:{Authorization:"Bearer "+w.getToken()}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.err)}))}))}var q="/api/";function R(e){return fetch("".concat(q,"posts/").concat(e,"/likes"),{method:"POST",headers:{Authorization:"Bearer "+w.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error(e.error)}))}function W(e){return fetch("".concat(q,"likes/").concat(e),{method:"DELETE",headers:{Authorization:"Bearer "+w.getToken()}}).then((function(e){if(e.ok)return e.json();throw new Error(e.error)}))}function J(e){var t=e.loggedUser,n=e.handleLogout,o=Object(r.useState)([]),a=Object(c.a)(o,2),s=a[0],l=a[1],u=Object(r.useState)(""),j=Object(c.a)(u,2),b=(j[0],j[1]);function g(){return(g=Object(i.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R(t);case 3:e.sent,m(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),b("error adding like");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function O(){return(O=Object(i.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W(t);case 3:n=e.sent,console.log(n,"<-remove likes"),m(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function f(){return(f=Object(i.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F(t);case 3:n=e.sent,console.log(n),l([n.data].concat(Object(L.a)(s))),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message),b("Error creating post, please try again");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(){return x.apply(this,arguments)}function x(){return(x=Object(i.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N();case 3:t=e.sent,console.log(t," data"),l(Object(L.a)(t.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message," this is the error");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){m()}),[]),Object(h.jsxs)(p.a,{textAlign:"center",columns:3,children:[Object(h.jsx)(p.a.Row,{children:Object(h.jsx)(p.a.Column,{style:{maxWidth:1e3},children:Object(h.jsx)(A,{handleLogout:n,loggedUser:t})})}),Object(h.jsx)(p.a.Row,{children:Object(h.jsx)(p.a.Column,{style:{maxWidth:450},children:Object(h.jsx)(B,{handleAddPost:function(e){return f.apply(this,arguments)}})})}),Object(h.jsx)(p.a.Row,{children:Object(h.jsx)(p.a.Column,{children:Object(h.jsx)(z,{posts:s,numsPhotosCol:3,isProfile:!1,addLike:function(e){return g.apply(this,arguments)},removeLike:function(e){return O.apply(this,arguments)},loggedUser:t})})})]})}var _=function(e){var t=e.user;return Object(h.jsx)(p.a,{textAlign:"center",columns:2,children:Object(h.jsxs)(p.a.Row,{children:[Object(h.jsx)(p.a.Column,{children:Object(h.jsx)(O.a,{src:"".concat(t.photoUrl?t.photoUrl:"https://react.semantic-ui.com/images/wireframe/square-image.png"," "),avatar:!0,size:"small"})}),Object(h.jsx)(p.a.Column,{textAlign:"center",style:{maxWidth:600},children:Object(h.jsx)(m.a,{vertical:!0,children:Object(h.jsx)("h3",{children:t.username})})})]})})};function H(e){var t=e.loggedUser,n=e.handleLogout,o=Object(r.useState)([]),a=Object(c.a)(o,2),l=a[0],u=a[1],j=Object(r.useState)({}),g=Object(c.a)(j,2),O=g[0],f=g[1],m=Object(r.useState)(""),x=Object(c.a)(m,2),v=x[0],k=x[1],w=Object(s.h)().username,y=Object(r.useCallback)(Object(i.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.getProfile(w);case 3:t=e.sent,f(t.data.user),u(t.data.posts),console.log(t),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.message),k("Profile does not exist");case 13:case"end":return e.stop()}}),e,null,[[0,9]])}))),[w]);return Object(r.useEffect)((function(){console.log("firing"),y()}),[w,y]),v?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(A,{handleLogout:n,loggedUser:t}),Object(h.jsx)(b,{error:v}),";"]}):Object(h.jsxs)(p.a,{children:[Object(h.jsx)(p.a.Row,{children:Object(h.jsx)(p.a.Column,{children:Object(h.jsx)(A,{handleLogout:n,loggedUser:t})})}),Object(h.jsx)(p.a.Row,{children:Object(h.jsx)(p.a.Column,{children:Object(h.jsx)(_,{user:O})})}),Object(h.jsx)(p.a.Row,{children:Object(h.jsx)(p.a.Column,{children:Object(h.jsx)(z,{posts:l,numPhotosCol:1,isProfile:!0,loggedUser:t})})})]})}var M=function(){var e=Object(r.useState)(S.getUser()),t=Object(c.a)(e,2),n=t[0],o=t[1];function a(){o(S.getUser())}function i(){S.logout(),o(null)}return n?Object(h.jsxs)(s.d,{children:[Object(h.jsx)(s.b,{path:"/:username",element:Object(h.jsx)(H,{handleLogout:i})}),Object(h.jsx)(s.b,{path:"/",element:Object(h.jsx)(J,{loggedUser:n,handleLogout:i})}),Object(h.jsx)(s.b,{path:"/login",element:Object(h.jsx)(P,{handleSignUpOrLogin:a})}),Object(h.jsx)(s.b,{path:"/signup",element:Object(h.jsx)(U,{handleSignUpOrLogin:a})})]}):Object(h.jsxs)(s.d,{children:[Object(h.jsx)(s.b,{path:"/login",element:Object(h.jsx)(P,{handleSignUpOrLogin:a})}),Object(h.jsx)(s.b,{path:"/signup",element:Object(h.jsx)(U,{handleSignUpOrLogin:a})}),Object(h.jsx)(s.b,{path:"/*",element:Object(h.jsx)(s.a,{to:"/login"})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(h.jsx)(C.a,{children:Object(h.jsx)(M,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[155,1,2]]]);
//# sourceMappingURL=main.dd2fcc73.chunk.js.map