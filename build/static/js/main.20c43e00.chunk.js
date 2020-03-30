(this.webpackJsonpcotd=this.webpackJsonpcotd||[]).push([[0],{33:function(e,t,a){e.exports=a(67)},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(18),i=a(72),c=a(73),l=a(74),o=a(4),u=a(5),h=a(7),m=a(6),p=a(8),f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).myInput=r.a.createRef(),a.goToStore=function(e){e.preventDefault();var t=a.myInput.current.value;a.props.history.push("./store/".concat(t))},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},r.a.createElement("h2",null,"Please Enter a Store"),r.a.createElement("input",{type:"text",ref:this.myInput,required:!0,placeholder:"Store"}),r.a.createElement("button",{type:"submit"},"Visit Store "))}}]),t}(r.a.Component),d=a(13),b=function(e){function t(){return Object(o.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"top"},r.a.createElement("h1",null,"Catch",r.a.createElement("span",{className:"ofThe"},r.a.createElement("span",{className:"of"},"of"),r.a.createElement("span",{className:"the"},"the")),"Day"),r.a.createElement("h3",{className:"tagline"},r.a.createElement("span",null,"Fresh Seafood Daily")))}}]),t}(n.Component),v=a(23),y=a.n(v),g=a(19),E=a(21),O=a.n(E),j=a(31),k=a.n(j),w=O.a.initializeApp({apiKey:"AIzaSyApbkwIXnU_1tfbgSwDW_7_EQ02_eyAlII",authDomain:"fish-market-60371.firebaseapp.com",databaseURL:"https://fish-market-60371.firebaseio.com"}),S=k.a.createClass(w.database()),F=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).nameRef=r.a.createRef(),a.priceRef=r.a.createRef(),a.statusRef=r.a.createRef(),a.descRef=r.a.createRef(),a.imageRef=r.a.createRef(),a.createFish=function(e){e.preventDefault();var t={name:a.nameRef.current.value,price:parseFloat(a.priceRef.current.value),status:a.statusRef.current.value,desc:a.descRef.current.value,image:a.imageRef.current.value};a.props.addfish(t),e.currentTarget.reset()},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{action:"",className:"fish-edit",onSubmit:this.createFish},r.a.createElement("input",{name:"name",ref:this.nameRef,type:"text",placeholder:"name"}),r.a.createElement("input",{name:"price",ref:this.priceRef,type:"text",placeholder:"price"}),r.a.createElement("select",{name:"status",ref:this.statusRef},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out")),r.a.createElement("textarea",{name:"desc",ref:this.descRef,type:"text",placeholder:"desc"}),r.a.createElement("input",{name:"image",ref:this.imageRef,type:"text",placeholder:"image"}),r.a.createElement("button",{type:"submit"},"Add Fish"))}}]),t}(n.Component),C=a(20),x=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){var t=Object(d.a)({},a.props.fishes,Object(C.a)({},e.currentTarget.name,e.currentTarget.value));a.props.updateFish(a.props.index,t)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"fish-edit"},r.a.createElement("input",{name:"name",type:"text",onChange:this.handleChange,value:this.props.fishes.name}),r.a.createElement("input",{name:"price",type:"text",onChange:this.handleChange,value:this.props.fishes.price}),r.a.createElement("select",{name:"status",onChange:this.handleChange,value:this.props.fishes.status},r.a.createElement("option",{value:"available"},"Fresh!"),r.a.createElement("option",{value:"unavailable"},"Sold Out")),r.a.createElement("textarea",{name:"desc",type:"text",onChange:this.handleChange,value:this.props.fishes.desc}),r.a.createElement("input",{name:"image",type:"text",onChange:this.handleChange,value:this.props.fishes.image}),r.a.createElement("button",{onClick:function(){return e.props.deleteFish(e.props.index)}},"Remove Fish"))}}]),t}(n.Component),N=a(2),R=function(e){return r.a.createElement("nav",{className:"login"},r.a.createElement("h2",null,"Inventory Login"),r.a.createElement("p",null,"Please log in to view and manage Inventory"),r.a.createElement("button",{className:"github",onClick:function(){return e.authenticate("Github")}},"Log In With Gihub"))};R.propsTypes={authenticate:a.n(N).a.func.isRequired};var T=R,A=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={uid:null,owner:null},a.authHandler=function(e){var t;return y.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y.a.awrap(S.fetch(a.props.storeId,{context:Object(g.a)(a)}));case 2:if((t=n.sent).owner){n.next=6;break}return n.next=6,y.a.awrap(S.post("".concat(a.props.storeId,"/owner"),{data:e.user.uid}));case 6:a.setState({uid:e.user.uid,owner:t.owner||e.user.uid}),console.log(e);case 8:case"end":return n.stop()}}))},a.authenticate=function(e){var t=new(O.a.auth["".concat(e,"AuthProvider")]);w.auth().signInWithPopup(t).then(a.authHandler)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.state.uid?r.a.createElement("div",{className:"inventory"},r.a.createElement("h2",null,"Inventory"),Object.keys(this.props.fishes).map((function(t){return r.a.createElement(x,{key:t,index:t,fishes:e.props.fishes[t],updateFish:e.props.updateFish,deleteFish:e.props.deleteFish})})),r.a.createElement(F,{addfish:this.props.addfish}),r.a.createElement("button",{onClick:this.props.loadSampleFishes},"Fish Menu")):r.a.createElement(T,{authenticate:this.authenticate})}}]),t}(n.Component),I=a(14);function D(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}var P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).renderPlus=function(e){console.log(e);var t=a.props.fishes[e],n=a.props.order[e],s=t&&"available"===t.status;return t?s?r.a.createElement(I.CSSTransition,{classNames:"order",key:e,timeout:{enter:5e3,exit:5e3}},r.a.createElement("li",{className:"order-info",key:e},r.a.createElement("span",null,r.a.createElement(I.TransitionGroup,{component:"span",className:"count"},r.a.createElement(I.CSSTransition,{classNames:"count",key:n,timeout:{enter:500,exit:500}},r.a.createElement("span",{className:"order-count"},n))),r.a.createElement("span",{className:"order-count"},"lbs"),t.name),D(n*t.price),r.a.createElement("button",{onClick:function(){a.props.removeFromOrder(e)}},"X"))):r.a.createElement(I.CSSTransition,{classNames:"order",key:e,timeout:{enter:250,exit:250}},r.a.createElement("li",{key:e},"Sorry ",t," not available")):null},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce((function(t,a){var n=e.props.fishes[a],r=e.props.order[a];return n&&"available"===n.status?t+r*n.price:t}),0);return r.a.createElement("div",{className:"order-wrap"},r.a.createElement("h3",null,"Orders"),r.a.createElement(I.TransitionGroup,{component:"ul"},t.map(this.renderPlus)),r.a.createElement("div",{className:"total final-price"},r.a.createElement("p",null,"Total"),r.a.createElement("strong",null,D(a))))}}]),t}(n.Component),L={fish1:{name:"Pacific Halibut",image:"/images/hali.jpg",desc:"Everyone\u2019s favorite white fish. We will cut it to the size you need and ship it.",price:1724,status:"available"},fish2:{name:"Lobster",image:"/images/lobster.jpg",desc:"These tender, mouth-watering beauties are a fantastic hit at any dinner party.",price:3200,status:"available"},fish3:{name:"Sea Scallops",image:"/images/scallops.jpg",desc:"Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",price:1684,status:"unavailable"},fish4:{name:"Mahi Mahi",image:"/images/mahi.jpg",desc:"Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",price:1129,status:"available"},fish5:{name:"King Crab",image:"/images/crab.jpg",desc:"Crack these open and enjoy them plain or with one of our cocktail sauces",price:4234,status:"available"},fish6:{name:"Atlantic Salmon",image:"/images/salmon.jpg",desc:"This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",price:1453,status:"available"},fish7:{name:"Oysters",image:"/images/oysters.jpg",desc:"A soft plump oyster with a sweet salty flavor and a clean finish.",price:2543,status:"available"},fish8:{name:"Mussels",image:"/images/mussels.jpg",desc:"The best mussels from the Pacific Northwest with a full-flavored and complex taste.",price:425,status:"available"},fish9:{name:"Jumbo Prawns",image:"/images/prawns.jpg",desc:"With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",price:2250,status:"available"}},W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleOrder=function(){a.props.addToOrder(a.props.index)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.fishList,t=e.image,a=e.name,n=e.desc,s=e.price,i="available"===e.status;return r.a.createElement("li",{className:"menu-fish"},r.a.createElement("img",{src:t,alt:""}),r.a.createElement("h3",{className:"fish-name"},a,r.a.createElement("span",{className:"price"},D(s))),r.a.createElement("p",null,n),r.a.createElement("button",{disabled:!i,onClick:this.handleOrder},i?"Add To Order":"Sold Out!"))}}]),t}(n.Component),M=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={fishes:{},order:{}},a.addFish=function(e){var t=Object(d.a)({},a.state.fishes);t["fish".concat(Date.now())]=e,a.setState({fishes:t})},a.loadSampleFishes=function(){a.setState({fishes:L})},a.addToOrder=function(e){var t=Object(d.a)({},a.state.order);t[e]=t[e]+1||1,a.setState({order:t})},a.updateFish=function(e,t){var n=Object(d.a)({},a.state.fishes);n[e]=t,a.setState({fishes:n})},a.deleteFish=function(e){var t=Object(d.a)({},a.state.fishes);t[e]=null,a.setState({fishes:t})},a.removeFromOrder=function(e){var t=Object(d.a)({},a.state.order);delete t[e],a.setState({order:t})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.ref=S.syncState("".concat(this.props.match.params.storeId,"/fishes"),{context:this,state:"fishes"})}},{key:"componentWillUnmount",value:function(){S.removeBinding(this.ref)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"catch-of-the-day"},r.a.createElement("div",{className:"menu"},r.a.createElement(b,null),r.a.createElement("ul",{className:"fishes"},Object.keys(this.state.fishes).map((function(t){return r.a.createElement(W,{key:t,fishList:e.state.fishes[t],addToOrder:e.addToOrder,index:t})})))),r.a.createElement(P,{fishes:this.state.fishes,order:this.state.order,removeFromOrder:this.removeFromOrder}),r.a.createElement(A,{addfish:this.addFish,updateFish:this.updateFish,loadSampleFishes:this.loadSampleFishes,fishes:this.state.fishes,deleteFish:this.deleteFish,storeId:this.props.match.params.storeId}))}}]),t}(r.a.Component),U=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not Found!!"))},G=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,null,r.a.createElement(l.a,{exact:!0,path:"/",component:f}),r.a.createElement(l.a,{path:"/store/:storeId",component:M}),r.a.createElement(l.a,{component:U})))};a(66);Object(s.render)(r.a.createElement(G,null),document.querySelector("#main"))}},[[33,1,2]]]);
//# sourceMappingURL=main.20c43e00.chunk.js.map