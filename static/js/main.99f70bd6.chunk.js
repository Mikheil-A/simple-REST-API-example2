(this["webpackJsonpsimple-rest-api-example2"]=this["webpackJsonpsimple-rest-api-example2"]||[]).push([[0],{51:function(e,t,a){e.exports=a(82)},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),i=a.n(l),c=(a(56),a(44)),s=a(21),o=a(13),u=a(26),m=a(27),h=a(30),g=(a(57),a(58),a(45)),E=a.n(g),p=a(109),d=a(114),f=a(118),b=a(117),O=a(111),j=a(115),w=a(116),v=a(113),D=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).classes=Object(p.a)({table:{minWidth:650}}),a.fetchUsers=function(){E.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){a.setState({users:e.data})}))},a.state={users:[]},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.fetchUsers()}},{key:"render",value:function(){var e=this;return r.a.createElement(O.a,{component:v.a},r.a.createElement(d.a,{className:this.classes.table,"aria-label":"simple table"},r.a.createElement(j.a,null,r.a.createElement(w.a,null,r.a.createElement(b.a,null,"Full name"),r.a.createElement(b.a,{align:"right"},"Username"),r.a.createElement(b.a,{align:"right"},"Email"),r.a.createElement(b.a,{align:"right"},"Address"),r.a.createElement(b.a,{align:"right"},"Phone"),r.a.createElement(b.a,{align:"right"},"Website"),r.a.createElement(b.a,{align:"right"},"Company"))),r.a.createElement(f.a,null,this.state.users.map((function(t){return r.a.createElement(w.a,{key:t.name},r.a.createElement(b.a,{component:"th",scope:"row"},r.a.createElement("span",{id:"full-name",onClick:function(){return e.props.onUserClick(t)}},t.name)),r.a.createElement(b.a,{align:"right"},t.username),r.a.createElement(b.a,{align:"right"},t.email),r.a.createElement(b.a,{align:"right"},"st. ",t.address.street,", ",t.address.city),r.a.createElement(b.a,{align:"right"},t.phone),r.a.createElement(b.a,{align:"right"},t.website),r.a.createElement(b.a,{align:"right"},t.company.name))})))))}}]),t}(n.Component),k=(a(80),a(47)),y=a.n(k),C=a(48),U=a.n(C),S=a(120),W=function(e){return r.a.createElement("div",{className:"user"},function(){var t=null;return e.userDataObj.isDrawerOpened&&(t=r.a.createElement("div",null,r.a.createElement("div",{id:"title"},r.a.createElement("h1",null,"User info: "),r.a.createElement("div",{className:"icons"},r.a.createElement(S.a,{onClick:function(){return e.onSeeMoreInfo(e.userDataObj.user.id)}},r.a.createElement(y.a,{fontSize:"large"})),r.a.createElement(S.a,{onClick:function(){return e.onCloseDrawer()}},r.a.createElement(U.a,{fontSize:"large"})))),r.a.createElement("p",null,e.userDataObj.user.name),r.a.createElement("p",null,e.userDataObj.user.username),r.a.createElement("p",null,e.userDataObj.user.email),r.a.createElement("p",null,e.userDataObj.user.phone),r.a.createElement("p",null,e.userDataObj.user.website),r.a.createElement("p",null,e.userDataObj.user.company.name))),r.a.createElement("div",null,t)}())},x=a(119),I=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).toggleDrawer=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a.setState(Object(c.a)({},a.state,{isDrawerOpened:e,user:t}))},a.redirectToUserPage=function(e){a.toggleDrawer(!1),console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>",e)},a.state={isDrawerOpened:!1,user:{}},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(D,{onUserClick:function(t){return e.toggleDrawer(!0,t)}}),r.a.createElement(x.a,{anchor:"right",open:this.state.isDrawerOpened,onClose:function(){return e.toggleDrawer(!1)}},r.a.createElement(W,{userDataObj:this.state,onCloseDrawer:function(){return e.toggleDrawer(!1)},onSeeMoreInfo:function(t){return e.redirectToUserPage(t)}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.99f70bd6.chunk.js.map