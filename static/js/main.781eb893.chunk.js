(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__2IPS_"}},13:function(e,t,a){e.exports={newPage:"Button_newPage__1T5bc"}},21:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(0),r=a.n(c),o=a(11),u=a.n(o),s=(a(21),a(10)),l=a(3),i=a(15),m=a(5),b=a.n(m);var j=function(e){var t=e.onSubmit,a=Object(c.useState)(null),r=Object(l.a)(a,2),o=r[0],u=r[1];return Object(n.jsx)("header",{className:b.a.Searchbar,children:Object(n.jsxs)("form",{className:b.a.SearchForm,onSubmit:function(e){e.preventDefault(),t(o),u(null)},children:[Object(n.jsx)("button",{type:"submit",className:b.a.SearchFormBbutton,children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:Object(n.jsx)(i.a,{})})}),Object(n.jsx)("input",{className:b.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){u(e.currentTarget.value.toLowerCase())}})]})})},h=a(8),f=a.n(h);var g=function(e){var t=e.webformatURL,a=e.onOpenImage;return Object(n.jsx)("li",{className:f.a.ImageGalleryItem,children:Object(n.jsx)("img",{src:t,alt:"asd",className:f.a.ImageGalleryItemImage,onClick:a})})},O=a(12),p=a.n(O);var d=function(e){var t=e.pictures,a=e.openImage;return Object(n.jsx)("ul",{className:p.a.ImageGallery,children:t.map((function(e){return Object(n.jsx)(g,{webformatURL:e.webformatURL,onOpenImage:function(){return a(e.largeImageURL)}},e.id)}))})},I=a(13),S=a.n(I);var _=function(e){var t=e.onClick;return Object(n.jsx)("button",{className:S.a.newPage,onClick:t,children:"Load more"})};var v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=".concat(e,"&page=").concat(t,"&per_page=12&key=18801685-89b573afa326cacf166b5903d");return fetch(a).then((function(e){return e.json()})).then((function(e){return e.hits}))},x=a(14),y=a.n(x),w=a(9),k=a.n(w);var F=function(e){var t=e.largeImage,a=e.closeImage,r=function(e){27===e.keyCode&&a()};return Object(c.useEffect)((function(){window.addEventListener("keyup",r)})),Object(c.useEffect)((function(){window.removeEventListener("keyup",r)})),Object(n.jsx)("div",{className:k.a.Overlay,children:Object(n.jsx)("div",{className:k.a.Modal,onClick:function(e){e.target===e.currentTarget&&a()},children:Object(n.jsx)("img",{src:t,alt:"pic"})})})};var N=function(){var e=Object(c.useState)(null),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(c.useState)([]),u=Object(l.a)(o,2),i=u[0],m=u[1],b=Object(c.useState)(1),h=Object(l.a)(b,2),f=h[0],g=h[1],O=Object(c.useState)(!1),p=Object(l.a)(O,2),I=p[0],S=p[1],x=Object(c.useState)(null),w=Object(l.a)(x,2),k=w[0],N=w[1],C=Object(c.useState)(null),G=Object(l.a)(C,2),E=G[0],L=G[1];return Object(c.useEffect)((function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),[i]),Object(c.useEffect)((function(){null!==a&&(S(!0),v(a,f).then((function(e){m((function(t){return[].concat(Object(s.a)(t),Object(s.a)(e))}))})).catch((function(e){return L(e)})).finally((function(){return S(!1)})))}),[a,f]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(j,{onSubmit:function(e){r(e),m([]),g(1)}}),i.length>0&&!E&&Object(n.jsx)(d,{pictures:i,openImage:function(e){N(e)}}),I&&Object(n.jsx)(y.a,{}),0!==i.length&&!I&&Object(n.jsx)(_,{onClick:function(){return g((function(e){return e+1}))}}),k&&Object(n.jsx)(F,{largeImage:k,closeImage:function(){N("")}})]})};u.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(N,{})}),document.getElementById("root"))},5:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__ZFt-X",SearchForm:"Searchbar_SearchForm__16Edu",SearchFormBbutton:"Searchbar_SearchFormBbutton__v99WM",SearchFormInput:"Searchbar_SearchFormInput__oBvWN"}},8:function(e,t,a){e.exports={ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__g-t9C"}},9:function(e,t,a){e.exports={Overlay:"Modal_Overlay__3mm2g",Modal:"Modal_Modal__1QGg0"}}},[[43,1,2]]]);
//# sourceMappingURL=main.781eb893.chunk.js.map