(this.webpackJsonpgameshop=this.webpackJsonpgameshop||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},42:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(15),i=n.n(r),s=n(4),o="/game",l="/order",u=(n(32),n(33),n(34),n(2)),d=function(e){var t=e.image,n=void 0===t?"":t;return console.log(n),Object(u.jsx)("div",{className:"game-cover",style:{backgroundImage:"url(".concat(n,")")}})},m=(n(36),n(21)),j=n.n(m),b=(n(37),function(e){e.size;var t=e.children,n=e.onClick,a=e.type,c=j()({btn:!0,"btn--secondary":"secondary"===a,"btn--primary":"primary"===a,"btn--small":"s"===a,"btn--medium":"m"===a});return Object(u.jsx)("button",{className:c,onClick:n,children:t})}),p=n(5),g="ADD_ITEM_TO_CART";var h="DELETE_ITEM_FROM_CART";function f(e){return{type:h,payload:{id:e}}}var O=function(e){var t,n=e.game,a=Object(p.b)(),c=Object(p.c)((function(e){return e.cart})).itemsInCart;console.log(c,222),t=c.some((function(e){return e.id===n.id})),console.log(t,555);return Object(u.jsxs)("div",{className:"game-buy",children:[Object(u.jsxs)("span",{className:"game-buy__price",children:[n.price," AMD."]}),Object(u.jsx)(b,{type:t?"secondary":"primary",onClick:function(e){e.stopPropagation(),a(t?f(n.id):{type:g,payload:{item:n}})},children:t?"Remove":"Add Cart"})]})},v=(n(42),function(e){var t=e.genre;return Object(u.jsx)("span",{className:"game-genre",children:t})}),_="SET_CURRENT_GAME";var x=function(e){var t=e.game,n=Object(s.g)(),a=Object(p.b)();return Object(u.jsxs)("div",{className:"game-item",onClick:function(){a(function(e){return{type:_,payload:{game:e}}}(t)),n.push(o+"".concat(t.title))},children:[Object(u.jsx)(d,{image:t.image}),Object(u.jsxs)("div",{className:"game-item__details",children:[Object(u.jsx)("span",{className:"game-item__title",children:t.title}),Object(u.jsx)("div",{className:"game-item__genre",children:t.genres.map((function(e){return Object(u.jsx)(v,{genre:e})}))}),Object(u.jsx)("div",{className:"game-item__description"}),Object(u.jsx)("div",{className:"game-item__buy",children:Object(u.jsx)(O,{game:t})})]})]})},y=[{image:"/game-covers/forza_5.jpeg",title:"Forza Horizon 5",genres:["\u0413\u043e\u043d\u043a\u0438","\u0421\u0438\u043c\u0443\u043b\u044f\u0442\u043e\u0440","\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0439 \u043c\u0438\u0440"],price:16401,video:"https://www.youtube.com/embed/FYH9n37B7Yw",id:1,description:"\u0412\u0430\u0441 \u0436\u0434\u0451\u0442 \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0439 \u043a\u0430\u043b\u0435\u0439\u0434\u043e\u0441\u043a\u043e\u043f \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 Horizon! \u0421\u043e\u0432\u0435\u0440\u0448\u0430\u0439\u0442\u0435 \u0443\u0432\u043b\u0435\u043a\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u043e\u0435\u0437\u0434\u043a\u0438 \u043f\u043e \u043d\u0435\u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e \u043a\u0440\u0430\u0441\u0438\u0432\u043e\u043c\u0443 \u0438 \u0441\u0430\u043c\u043e\u0431\u044b\u0442\u043d\u043e\u043c\u0443 \u043c\u0438\u0440\u0443 \u041c\u0435\u043a\u0441\u0438\u043a\u0438 \u0437\u0430 \u0440\u0443\u043b\u0451\u043c \u0432\u0435\u043b\u0438\u0447\u0430\u0439\u0448\u0438\u0445 \u0430\u0432\u0442\u043e\u043c\u043e\u0431\u0438\u043b\u0435\u0439 \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0438. \u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u043f\u0440\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 Horizon \u0443\u0436\u0435 \u0441\u0435\u0433\u043e\u0434\u043d\u044f, \u0434\u043e\u0431\u0430\u0432\u0438\u0432 \u0438\u0433\u0440\u0443 \u0432 \u0441\u0432\u043e\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0436\u0435\u043b\u0430\u043d\u0438\u0439!"},{image:"/game-covers/battlefield_2042.jpg",title:"Battlefield 2042",genres:["\u042d\u043a\u0448\u0435\u043d","\u0428\u0443\u0442\u0435\u0440","\u0412\u043e\u0439\u043d\u0430"],video:"https://www.youtube.com/embed/ASzOzrB-a9E",price:17031,id:2,description:"Battlefield\u2122 2042 \u2014 \u044d\u0442\u043e \u0448\u0443\u0442\u0435\u0440 \u043e\u0442 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043b\u0438\u0446\u0430, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0441\u0435\u0440\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u043a \u043b\u0435\u0433\u0435\u043d\u0434\u0430\u0440\u043d\u044b\u043c \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u043d\u044b\u043c \u0441\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043c. \u0412 \u0431\u0443\u0434\u0443\u0449\u0435\u043c, \u0433\u0434\u0435 \u0446\u0430\u0440\u0438\u0442 \u0445\u0430\u043e\u0441, \u0430\u0434\u0430\u043f\u0442\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044c \u0438 \u043f\u0440\u043e\u0446\u0432\u0435\u0442\u0430\u0439\u0442\u0435 \u043d\u0430 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u043c\u0435\u043d\u044f\u044e\u0449\u0438\u0445\u0441\u044f \u043f\u043e\u043b\u044f\u0445 \u0431\u043e\u044f \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f \u0441\u0432\u043e\u0435\u043c\u0443 \u043e\u0442\u0440\u044f\u0434\u0443 \u0438 \u0430\u0440\u0441\u0435\u043d\u0430\u043b\u0443 \u043d\u043e\u0432\u0435\u0439\u0448\u0438\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439."},{image:"/game-covers/life_is_strange_true_colors.jpeg",title:"Life is Strange True Colors",genres:["\u0413\u043b\u0443\u0431\u043e\u043a\u0438\u0439 \u0441\u044e\u0436\u0435\u0442","\u041f\u0440\u043e\u0442\u0430\u0433\u043e\u043d\u0438\u0441\u0442\u043a\u0430"],video:"https://www.youtube.com/embed/b6CkzwVAr0M",price:21147,id:3,description:"\u0410\u043b\u0435\u043a\u0441 \u0427\u044d\u043d\u044c \u043e\u0442 \u0432\u0441\u0435\u0445 \u0441\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0441\u0432\u043e\u0451 \xab\u043f\u0440\u043e\u043a\u043b\u044f\u0442\u0438\u0435\xbb \u2014 \u0441\u0432\u0435\u0440\u0445\u044a\u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u043e\u0441\u0442\u044c \u0441\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u0441\u0438\u043b\u044c\u043d\u044b\u0435 \u044d\u043c\u043e\u0446\u0438\u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0438 \u0432\u043b\u0438\u044f\u0442\u044c \u043d\u0430 \u043d\u0438\u0445. \u041d\u043e \u043a\u043e\u0433\u0434\u0430 \u0435\u0451 \u0431\u0440\u0430\u0442 \u043f\u043e\u0433\u0438\u0431\u0430\u0435\u0442 \u2014 \u044f\u043a\u043e\u0431\u044b \u0432 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0435 \u043d\u0435\u0441\u0447\u0430\u0441\u0442\u043d\u043e\u0433\u043e \u0441\u043b\u0443\u0447\u0430\u044f, \u2014 \u0410\u043b\u0435\u043a\u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0435\u0451, \u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u043f\u0440\u0430\u0432\u0434\u0443."},{image:"/game-covers/gta_v.jpeg",title:"Grand Theft Auto V",genres:["\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0439 \u043c\u0438\u0440","\u042d\u043a\u0448\u0435\u043d"],video:"https://www.youtube.com/embed/QkkoHAzjnUs",price:5523,id:4,description:"Grand Theft Auto V \u0434\u043b\u044f PC \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0433\u0440\u043e\u043a\u0430\u043c \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u044c \u0437\u043d\u0430\u043c\u0435\u043d\u0438\u0442\u044b\u0439 \u043c\u0438\u0440 \u041b\u043e\u0441-\u0421\u0430\u043d\u0442\u043e\u0441\u0430 \u0438 \u043e\u043a\u0440\u0443\u0433\u0430 \u0411\u043b\u044d\u0439\u043d \u0432 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0438 \u0434\u043e 4k \u0438 \u0432\u044b\u0448\u0435 \u0441 \u0447\u0430\u0441\u0442\u043e\u0442\u043e\u0439 60 \u043a\u0430\u0434\u0440\u043e\u0432 \u0432 \u0441\u0435\u043a\u0443\u043d\u0434\u0443."},{image:"/game-covers/rainbow_siege.jpeg",title:"Tom Clancy's Rainbow Six\xae Siege",video:"https://www.youtube.com/embed/6wlvYh0h63k",genres:["\u0422\u0430\u043a\u0442\u0438\u043a\u0430","\u0428\u0443\u0442\u0435\u0440"],price:982,id:5,description:"Tom Clancy's Rainbow Six \u041e\u0441\u0430\u0434\u0430 \u2013 \u044d\u0442\u043e \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0435\u043d\u0438\u0435 \u043d\u0430\u0448\u0443\u043c\u0435\u0432\u0448\u0435\u0433\u043e \u0448\u0443\u0442\u0435\u0440\u0430 \u043e\u0442 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u043b\u0438\u0446\u0430, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u043e\u0433\u043e \u0441\u0442\u0443\u0434\u0438\u0435\u0439 Ubisoft Montreal."},{image:"/game-covers/assassins_creed_valhalla.png",title:"Assassin\u2019s Creed Valhalla",genres:["\u041f\u0430\u0440\u043a\u0443\u0440","\u0420\u041f\u0413","\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0439 \u043c\u0438\u0440"],video:"https://www.youtube.com/embed/ssrNcwxALS4",price:20041,id:6,description:"Assassin\u2019s Creed Valhalla \u2014 \u043c\u0443\u043b\u044c\u0442\u0438\u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0435\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u0430\u044f \u0438\u0433\u0440\u0430 \u0432 \u0436\u0430\u043d\u0440\u0435 action/RPG, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u0430\u044f \u0441\u0442\u0443\u0434\u0438\u0435\u0439 Ubisoft Montreal \u043f\u043e\u0434 \u0438\u0437\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e\u043c \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 Ubisoft. \u042f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0434\u0432\u0435\u043d\u0430\u0434\u0446\u0430\u0442\u043e\u0439 \u0438\u0433\u0440\u043e\u0439 \u0432 \u0441\u0435\u0440\u0438\u0438 \u0438\u0433\u0440 Assassin\u2019s Creed."}],N=function(){return console.log(y),Object(u.jsx)("div",{className:"home-page",children:y.map((function(e){return Object(u.jsx)(x,{game:e},e.id)}))})},w=(n(45),function(){var e=Object(p.c)((function(e){return e.game})).game;return e?Object(u.jsxs)("div",{className:"game-page",children:[Object(u.jsx)("h1",{className:"game-page__title",children:e.title}),Object(u.jsxs)("div",{className:"game-page__content",children:[Object(u.jsx)("div",{className:"game-page__left",children:Object(u.jsx)("iframe",{src:e.video,width:"90%",height:"400px",frameBorder:"0",title:"YouTube Video Player"})}),Object(u.jsxs)("div",{className:"game-page__right",children:[Object(u.jsx)(d,{image:e.image}),Object(u.jsx)("p",{className:"game-page__paragraph",children:e.description}),Object(u.jsx)("p",{className:"secondary-text",children:"The Favourite Tags For This Item:"}),e.genres.map((function(e){return Object(u.jsx)(v,{genre:e})})),Object(u.jsx)("div",{className:"game-page__buy",children:Object(u.jsx)(O,{game:e})})]})]})]}):null}),C=(n(46),n(47),n(24)),k=function(e){var t=e.game,n=Object(p.b)();return Object(u.jsxs)("div",{className:"order-item",children:[Object(u.jsx)("div",{className:"order-item__cover",children:Object(u.jsx)(d,{image:t.image})}),Object(u.jsx)("div",{className:"order-item__title",children:t.title}),Object(u.jsxs)("div",{className:"order-item__left",children:[Object(u.jsxs)("div",{className:"order-item__price",children:[t.price," AMD"]}),Object(u.jsx)(C.a,{size:25,className:"cart-item__delete-icon",onClick:function(){n(f(t.id))}})]})]})};function E(e){return e.reduce((function(e,t){return e+t.price}),0)}var T=[{path:l,component:function(){var e=Object(p.c)((function(e){return e.cart.itemsInCart}));return e.length<1?Object(u.jsx)("h1",{children:"Your Cart Is Empty"}):Object(u.jsxs)("div",{className:"order-page",children:[Object(u.jsx)("div",{className:"order-page__content",children:Object(u.jsx)("div",{className:"order-page__left",children:e.map((function(e){return Object(u.jsx)(k,{game:e})}))})}),Object(u.jsxs)("div",{className:"order-page__total-price",children:[e.length," items total sum ",Object(u.jsx)("span",{children:E(e)})]})]})}}],S=[{path:"/",component:N},{path:"/game:title/",component:w}],A=n(10),I=(n(48),n(27)),R=(n(49),n(25)),M=(n(50),function(e){var t=e.items,n=Object(s.g)(),a=E(t);return Object(u.jsxs)("div",{className:"cart-menu",children:[t.map((function(e){return Object(u.jsxs)("div",{className:"cart-menu__game-list",children:[Object(u.jsx)("div",{className:"cart-menu__game-img",style:{backgroundImage:"url(".concat(e.image,")")}}),Object(u.jsx)("div",{className:"cart-menu__game-title",children:e.title}),Object(u.jsxs)("div",{className:"cart-menu__game-price",children:[e.price," AMD"]})]},e.title)})),t.length?Object(u.jsxs)("div",{className:"cart-menu__arrange",children:[Object(u.jsxs)("div",{className:"cart-menu__total-price",children:[a," AMD"]}),Object(u.jsx)(b,{type:"primary",onClick:function(){n.push(l)},children:"Check Order"})]}):"Cart is Empty"]})}),z=(n(51),function(e){var t=e.quantity;return Object(u.jsx)("span",{className:"items-in-cart",children:t})}),U=function(){var e=Object(p.c)((function(e){return e.cart})).itemsInCart,t=Object(a.useState)(!1),n=Object(I.a)(t,2),c=n[0],r=n[1],i=E(e);return Object(u.jsxs)("div",{className:"cart-block",onClick:function(){return r(!c)},children:[e.length>0?Object(u.jsx)(z,{quantity:e.length}):null,Object(u.jsx)(R.a,{size:25,className:"cart-block__icon"}),e.length>0?Object(u.jsxs)("span",{className:"cart-block__total-price",children:[i," AMD"]}):null,c?Object(u.jsx)(M,{onClick:function(){return null},items:e,setCartVisible:function(){return r(!c)}}):null]})},D=function(){return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("div",{className:"wrapper",children:Object(u.jsx)(A.b,{to:"/",className:"header__store-title",children:"Game Store"})}),Object(u.jsx)("div",{className:"wrapper header__cart-btn-wrapper",children:Object(u.jsx)(U,{})})]})},F=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(D,{}),Object(u.jsx)(s.d,{children:T.map((function(e){var t=e.path,n=e.component;return Object(u.jsx)(s.b,{path:t,component:n,exact:!0},t)}))}),Object(u.jsx)(s.d,{children:S.map((function(e){var t=e.path,n=e.component;return Object(u.jsx)(s.b,{path:t,component:n,exact:!0},t)}))}),Object(u.jsx)(s.a,{to:"/"})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))},V=(n(52),n(13)),B=n(11),P={itemsInCart:[]};var q=[];var Q=Object(V.b)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:var n=t.payload.item;return e.itemsInCart.push(n),Object(B.a)({},e);case h:var a,c=t.payload.id,r=e.itemsInCart;return a=r.filter((function(e){return e.id!==c})),console.log(r),Object(B.a)(Object(B.a)({},e),{},{itemsInCart:a});default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:var n=t.payload.game;return Object(B.a)(Object(B.a)({},e),{},{game:n});default:return e}}}),G=n(19),H=n.n(G),Y=n(26);var J=[];function X(e){J.push(e.REQUEST)}function K(e){return J.find((function(t){return t===e.REQUEST}))}function W(e){J=J.filter((function(t){return t!==e.REQUEST}))}var Z={request:function(e){return e},success:function(e){return e},fail:function(e){return e}},$=function(e){var t=e.dispatch,n=e.getState;return function(e){return function(){var a=Object(Y.a)(H.a.mark((function a(c){var r,i;return H.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!c.REQUEST){a.next=20;break}return r={dispatch:t,getState:n},t({type:c.REQUEST,payload:c.request(c.payload,r)||Z.request(c.payload,r)||c.payload,status:"request"}),X(c),a.prev=4,a.next=7,c.cb(r);case 7:if(i=a.sent,W(c),!c._takeLatest||!K(c)){a.next=11;break}return a.abrupt("return",null);case 11:return a.abrupt("return",t({type:c.SUCCESS,payload:c.success(i,r)||Z.success(i,r)||i,status:"ok"}));case 14:if(a.prev=14,a.t0=a.catch(4),W(c),!c._takeLatest||!K(c)){a.next=19;break}return a.abrupt("return",null);case 19:return a.abrupt("return",t({type:c.FAIL,payload:c.fail(a.t0,r)||Z.fail(a.t0,r)||a.t0,status:"error"}));case 20:return a.abrupt("return",e(c));case 21:case"end":return a.stop()}}),a,null,[[4,14]])})));return function(e){return a.apply(this,arguments)}}()}};$.on=Z;var ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||V.c,te=Object(V.d)(Q,ee(Object(V.a)($)));$.on.fail=function(e){if(e.response)return e.response;throw e},i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(p.a,{store:te,children:Object(u.jsx)(A.a,{children:Object(u.jsx)(F,{})})})}),document.getElementById("root")),L()}},[[54,1,2]]]);
//# sourceMappingURL=main.75c20805.chunk.js.map