(this["webpackJsonpreact-food-recipe"]=this["webpackJsonpreact-food-recipe"]||[]).push([[0],{22:function(e,c,t){},24:function(e,c,t){},42:function(e,c,t){"use strict";t.r(c);var n=t(0),a=t(2),s=t.n(a),r=t(14),i=t.n(r),o=(t(22),t(4)),u=t.n(o),l=t(15),d=t(5),p=(t(24),function(e){var c=e.search,t=e.onInputChange,a=e.onSearchClick;return Object(n.jsxs)("div",{className:"jumbotron",children:[Object(n.jsxs)("h1",{className:"display-1",children:[Object(n.jsx)("span",{className:"material-icons brand__icon",children:"fastfood"}),"Food Recipes "]}),Object(n.jsxs)("div",{className:"input-group w-50 mx-auto",children:[Object(n.jsx)("input",{type:"text",class:"form-control",placeholder:"Seacrh Your Recipe...","aria-label":"Recipient's username",value:c,onChange:t}),Object(n.jsx)("div",{className:"input-group-append",children:Object(n.jsx)("button",{className:"btn btn-dark",onClick:a,children:"Search Recipe"})})]})]})}),j=function(e){var c=e.recipes;return Object(n.jsx)("div",{className:"card-columns",children:c.map((function(e){return Object(n.jsxs)("div",{className:"card py-2 text-center",children:[Object(n.jsx)("img",{src:e.recipe.image,className:"img-fluid w-50 mx-auto rounded-circle"}),Object(n.jsx)("div",{className:"card-body",children:Object(n.jsx)("h5",{children:e.recipe.label})}),Object(n.jsx)("ul",{className:"list-group list-group-flush",children:e.recipe.ingredientLines.map((function(e){return Object(n.jsx)("li",{className:"list-group-item",children:e})}))})]})}))})},b=t(16),h=t.n(b),m=function(){var e=Object(a.useState)("chiken"),c=Object(d.a)(e,2),t=c[0],s=c[1],r=Object(a.useState)([]),i=Object(d.a)(r,2),o=i[0],b=i[1];Object(a.useEffect)((function(){m()}),[]);var m=function(){var e=Object(l.a)(u.a.mark((function e(){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://api.edamam.com/search?q=".concat(t,"&app_id=").concat("eb5fba07","&app_key=").concat("f5898751a99f9d870ec1912c12a53f7b"));case 2:c=e.sent,b(c.data.hits);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(p,{search:t,onInputChange:function(e){s(e.target.value)},onSearchClick:function(){m()}}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(j,{recipes:o})})]})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,s=c.getLCP,r=c.getTTFB;t(e),n(e),a(e),s(e),r(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(m,{})}),document.getElementById("root")),f()}},[[42,1,2]]]);
//# sourceMappingURL=main.810ad53d.chunk.js.map