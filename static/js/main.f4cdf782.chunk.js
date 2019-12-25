(this["webpackJsonpsimple-rest-api-example2"]=this["webpackJsonpsimple-rest-api-example2"]||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),c=a.n(s),l=(a(72),a(73),a(36)),o=a(21),i=a(15),u=a(28),m=a(29),h=a(33),d=(a(74),a(135)),p=a(138),E=a(142),f=a(141),g=a(136),b=a(139),v=a(140),w=a(137),O=a(143),U=(a(75),a(60)),j=a.n(U),y=a(61),k=a.n(y),D=a(144),I=(a(76),function(e){return r.a.createElement("div",null,r.a.createElement("p",null,e.user.name),r.a.createElement("p",null,e.user.username),r.a.createElement("p",null,e.user.email),r.a.createElement("p",null,e.user.phone),r.a.createElement("p",null,e.user.website),r.a.createElement("p",null,e.user.company.name))}),C=function(e){return r.a.createElement("div",{className:"user-drawer"},r.a.createElement("div",{id:"title"},r.a.createElement("h1",null,"User info: "),r.a.createElement("div",{className:"icons"},r.a.createElement(D.a,{onClick:function(){return e.onSeeMoreInfo(e.user.id)}},r.a.createElement(j.a,{fontSize:"large"})),r.a.createElement(D.a,{onClick:function(){return e.onCloseDrawer()}},r.a.createElement(k.a,{fontSize:"large"})))),r.a.createElement(I,{user:e.user}))},S=a(43),P=a.n(S),M=P.a.create({baseURL:"https://jsonplaceholder.typicode.com"}),N=(P.a.create({baseURL:"https://www.mocky.io"}),a(24)),W=a(62),x=a.n(W),z=a(145),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).classes=Object(d.a)({table:{minWidth:650}}),a.fetchUsers=function(){M.get("/users").then((function(e){a.setState({users:e.data})}))},a.toggleDrawer=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a.setState(Object(l.a)({},a.state,{isDrawerOpened:e,selectedUser:t}))},a.redirectToSelectedUserPage=function(e){a.toggleDrawer(!1),a.fetchUserById(e)},a.userComponent=function(){return a.state.isDrawerOpened?r.a.createElement(C,{user:a.state.selectedUser,onCloseDrawer:function(){return a.toggleDrawer(!1)},onSeeMoreInfo:function(e){return a.redirectToSelectedUserPage(e)}}):null},a.fetchUserById=function(e){M.get("/users/"+e).then((function(t){a.setState(Object(l.a)({},a.state,{selectedUser:t.data,selectedUserId:e}))}))},a.state={users:[],isDrawerOpened:!1,selectedUser:{},selectedUserId:null},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchUsers()}},{key:"render",value:function(){var e=this;return this.state.selectedUserId?r.a.createElement(N.a,{to:{pathname:"/user/".concat(this.state.selectedUserId),state:{user:this.state.selectedUser}}}):r.a.createElement("div",null,r.a.createElement(g.a,{component:w.a},r.a.createElement(p.a,{className:this.classes.table,"aria-label":"simple table"},r.a.createElement(b.a,null,r.a.createElement(v.a,null,r.a.createElement(f.a,null,"Full name"),r.a.createElement(f.a,{align:"right"},"Username"),r.a.createElement(f.a,{align:"right"},"Email"),r.a.createElement(f.a,{align:"right"},"Address"),r.a.createElement(f.a,{align:"right"},"Phone"),r.a.createElement(f.a,{align:"right"},"Website"),r.a.createElement(f.a,{align:"right"},"Company"))),r.a.createElement(E.a,null,this.state.users.map((function(t){return r.a.createElement(v.a,{key:t.name},r.a.createElement(f.a,{component:"th",scope:"row"},r.a.createElement("span",{id:"full-name",onClick:function(){return e.toggleDrawer(!0,t)}},t.name)),r.a.createElement(f.a,{align:"right"},t.username),r.a.createElement(f.a,{align:"right"},t.email),r.a.createElement(f.a,{align:"right"},"st. ",t.address.street,", ",t.address.city),r.a.createElement(f.a,{align:"right"},t.phone),r.a.createElement(f.a,{align:"right"},t.website),r.a.createElement(f.a,{align:"right"},t.company.name))}))))),r.a.createElement(O.a,{anchor:"right",open:this.state.isDrawerOpened,onClose:function(){return e.toggleDrawer(!1)}},this.userComponent()),r.a.createElement(z.a,{open:!this.state.users.length},r.a.createElement(x.a,{size:100,color:"#b8aeae"})))}}]),t}(n.Component),T=(a(103),a(18)),J=function(e){return r.a.createElement("div",{className:"user"},r.a.createElement("nav",null,r.a.createElement(T.b,{to:"/users"},"Users"),r.a.createElement(T.b,{to:{pathname:"/posts/".concat(e.location.state.user.id)}},"Posts")),r.a.createElement("div",{id:"user-content"},r.a.createElement(I,{user:e.location.state.user})))},L=(a(104),a(64)),R=a.n(L),A=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).fetchUserPosts=function(e){M.get("/posts?userId="+e).then((function(e){a.setState(Object(l.a)({},a.state,{posts:e.data}))}))},a.renderPosts=function(){var e=[];return a.state.posts.length>0&&a.state.posts.forEach((function(t){e.push(r.a.createElement("div",{key:t.id},r.a.createElement("h2",null,"(",t.id,") ",t.title),r.a.createElement("p",null,t.body)))})),e},a.state={posts:[]},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchUserPosts(this.props.match.params.userId)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement(T.b,{to:"/users"},"Users")),this.renderPosts(),r.a.createElement(z.a,{open:!this.state.posts.length},r.a.createElement(R.a,{size:30,color:"#b8aeae"})))}}]),t}(n.Component),F=(a(105),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={redirect:!1},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timeoutInterval=setTimeout((function(){return e.setState({redirect:!0})}),1e3)}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeoutInterval)}},{key:"render",value:function(){return this.state.redirect?r.a.createElement(N.a,{to:""}):r.a.createElement("div",{className:"not-found"},r.a.createElement("h1",null,"Oops! Page not found."))}}]),t}(n.Component)),$=function(){return r.a.createElement(N.d,null,r.a.createElement(N.b,{exact:!0,path:"/",render:function(){return r.a.createElement(N.a,{to:"/users"})}}),r.a.createElement(N.b,{path:"/users",component:B}),r.a.createElement(N.b,{path:"/user/:id",component:J}),r.a.createElement(N.b,{path:"/posts/:userId",component:A}),r.a.createElement(N.b,{component:F}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(T.a,null,r.a.createElement($,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},67:function(e,t,a){e.exports=a(106)},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.f4cdf782.chunk.js.map