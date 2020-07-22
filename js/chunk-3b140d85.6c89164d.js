(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b140d85"],{5652:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container py-5"},[a("AdminNav"),a("form",{staticClass:"form-inline"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newCategoryName,expression:"newCategoryName"}],staticClass:"form-control",attrs:{type:"text",name:"categoryName",placeholder:"Create new category"},domProps:{value:e.newCategoryName},on:{input:function(t){t.target.composing||(e.newCategoryName=t.target.value)}}}),a("button",{staticClass:"btn btn-secondary ml-2",on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.createCategory(t)}}},[e._v("Create")])]),a("br"),a("table",{staticClass:"table"},[e._m(0),a("tbody",e._l(e.categories,(function(t){return a("tr",{key:t.id},[a("th",{attrs:{scope:"row"}},[e._v(e._s(t.id))]),a("td",{staticClass:"position-relative w-60"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!category.isEditing"}],staticClass:"category-name"},[e._v(e._s(t.name))]),a("input",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"category.isEditing"},{name:"model",rawName:"v-model",value:t.name,expression:"category.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(a){a.target.composing||e.$set(t,"name",a.target.value)}}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"category.isEditing"}],staticClass:"cancel",on:{click:function(a){return e.handleCancel(t.id)}}},[e._v("✕")])]),a("td",[a("button",{directives:[{name:"show",rawName:"v-show",value:!t.isEditing,expression:"!category.isEditing"}],staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.toggleIsEditing(t.id)}}},[e._v("Edit")]),a("button",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"category.isEditing"}],staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.updateCategory({categoryId:t.id,name:t.name})}}},[e._v("Save")]),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),e.deleteCategory(t.id)}}},[e._v("Delete")])])])})),0)])],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[e._v("#")]),a("th",{attrs:{scope:"col"}},[e._v("Category")]),a("th",{attrs:{scope:"col"}},[e._v("Action")])])])}],s=(a("4de4"),a("d81d"),a("b0c0"),a("5530")),i=(a("96cf"),a("1da1")),o=a("e04c"),c=a("be6c"),u=a("2fa3"),d={components:{AdminNav:o["a"]},data:function(){return{categories:[],newCategoryName:""}},methods:{fetchCategories:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].categories.get();case 3:if(a=t.sent,r=a.data,"error"!==r.status){t.next=7;break}throw new Error(r.message);case 7:e.categories=r.categories.map((function(e){return Object(s["a"])(Object(s["a"])({},e),{},{isEditing:!1,nameCached:""})})),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](0),u["a"].fire({icon:"error",title:t.t0.message||"無法顯示類別，請稍後再試"});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},createCategory:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c["a"].categories.create({name:e.newCategoryName});case 3:if(a=t.sent,r=a.data,"success"===r.status){t.next=7;break}throw new Error(r.message);case 7:e.categories.push({id:r.categoryId,name:e.newCategoryName,isEditing:!1,nameCached:""}),e.newCategoryName="",t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),u["a"].fire({icon:"error",title:t.t0});case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},deleteCategory:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,c["a"].categories.delete({categoryId:e});case 3:if(r=a.sent,n=r.data,"success"===n.status){a.next=7;break}throw new Error(n.message);case 7:t.categories=t.categories.filter((function(t){return t.id!==e})),a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),u["a"].fire({icon:"error",title:a.t0});case 13:case"end":return a.stop()}}),a,null,[[0,10]])})))()},toggleIsEditing:function(e){this.categories.map((function(t){t.id===e&&(t.isEditing=!t.isEditing,t.nameCached=t.name)}))},updateCategory:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,n,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.categoryId,n=e.name,a.prev=1,a.next=4,c["a"].categories.update({categoryId:r,name:n});case 4:if(s=a.sent,i=s.data,"success"===i.status){a.next=8;break}throw new Error(i.message);case 8:t.toggleIsEditing(r),a.next=14;break;case 11:a.prev=11,a.t0=a["catch"](1),u["a"].fire({icon:"error",title:a.t0});case 14:case"end":return a.stop()}}),a,null,[[1,11]])})))()},handleCancel:function(e){this.categories=this.categories.map((function(t){return t.id===e?Object(s["a"])(Object(s["a"])({},t),{},{name:t.nameCached}):t})),this.toggleIsEditing(e)}},created:function(){this.fetchCategories()}},g=d,l=(a("b145"),a("2877")),m=Object(l["a"])(g,r,n,!1,null,"02b90f07",null);t["default"]=m.exports},b145:function(e,t,a){"use strict";var r=a("f0a7"),n=a.n(r);n.a},be6c:function(e,t,a){"use strict";a("b0c0");var r=a("2fa3");t["a"]={categories:{get:function(){return r["b"].get("/admin/categories")},create:function(e){var t=e.name;return r["b"].post("/admin/categories",{name:t})},update:function(e){var t=e.categoryId,a=e.name;return r["b"].put("/admin/categories/".concat(t),{name:a})},delete:function(e){var t=e.categoryId;return r["b"].delete("/admin/categories/".concat(t))}},restaurants:{get:function(){return r["b"].get("/admin/restaurants")},getDetail:function(e){var t=e.restaurantId;return r["b"].get("/admin/restaurants/".concat(t))},create:function(e){var t=e.formData;return r["b"].post("/admin/restaurants",t)},update:function(e){var t=e.formData,a=e.restaurantId;return r["b"].put("/admin/restaurants/".concat(a),t)},delete:function(e){var t=e.restaurantId;return r["b"].delete("/admin/restaurants/".concat(t))}},users:{get:function(){return r["b"].get("/admin/users")},update:function(e){var t=e.userId;return r["b"].put("/admin/users/".concat(t),null)}}}},d81d:function(e,t,a){"use strict";var r=a("23e7"),n=a("b727").map,s=a("1dde"),i=a("ae40"),o=s("map"),c=i("map");r({target:"Array",proto:!0,forced:!o||!c},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},e04c:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mb-3"},[a("h1",[e._v("餐廳後台")]),a("router-link",{attrs:{to:"/admin/restaurants/"}},[e._v("Restaurants")]),e._v(" | "),a("router-link",{attrs:{to:"/admin/users/"}},[e._v("Users")]),e._v(" | "),a("router-link",{attrs:{to:"/admin/categories"}},[e._v("Categories")])],1)},n=[],s=a("2877"),i={},o=Object(s["a"])(i,r,n,!1,null,null,null);t["a"]=o.exports},f0a7:function(e,t,a){}}]);
//# sourceMappingURL=chunk-3b140d85.6c89164d.js.map