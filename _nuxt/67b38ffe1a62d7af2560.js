(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{389:function(t,o,n){var content=n(401);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("7515f19e",content,!0,{sourceMap:!1})},400:function(t,o,n){"use strict";var e=n(389);n.n(e).a},401:function(t,o,n){(t.exports=n(21)(!1)).push([t.i,".left-list-menu[data-v-8a72f7dc]{background:#eee}.list-group-item[data-v-8a72f7dc]{border-radius:0;cursor:pointer}.list-group-item[data-v-8a72f7dc]:hover{color:#eee;background-color:#777272}.list-group-item.item-active[data-v-8a72f7dc]{background:rgba(40,140,167,.4);color:#007bff}",""])},431:function(t,o,n){"use strict";n.r(o);var e={layout:"DashboardPage",data:function(){return{activeComponent:"DashboardOrder"}},components:{DashboardItems:function(){return n.e(26).then(n.bind(null,447))},DashboardOrder:function(){return n.e(27).then(n.bind(null,448))},DashboardPost:function(){return n.e(28).then(n.bind(null,449))},DashboardCoupon:function(){return n.e(22).then(n.bind(null,450))}},methods:{Change_component:function(component){this.activeComponent=component}}},r=(n(400),n(6)),component=Object(r.a)(e,function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("b-row",{staticClass:"mx-0"},[n("b-col",{staticClass:"min-vh-100 left-list-menu px-0 ",attrs:{cols:"2"}},[n("b-list-group",[n("b-list-group-item",{class:["DashboardOrder"===t.activeComponent?"item-active":""],on:{click:function(o){return t.Change_component("DashboardOrder")}}},[t._v("訂單資訊")]),t._v(" "),n("div",[n("b-list-group-item",{class:["DashboardItems"===t.activeComponent?"item-active":""],on:{click:function(o){return t.Change_component("DashboardItems")}}},[t._v("商品管理")]),t._v(" "),n("b-list-group-item",{class:["DashboardPost"===t.activeComponent?"item-active":""],on:{click:function(o){return t.Change_component("DashboardPost")}}},[t._v("商品上傳")]),t._v(" "),n("b-list-group-item",{class:["DashboardCoupon"===t.activeComponent?"item-active":""],on:{click:function(o){return t.Change_component("DashboardCoupon")}}},[t._v("優惠卷管理")])],1),t._v(" "),n("b-list-group-item",{attrs:{to:"/"}},[t._v("返回首頁")])],1)],1),t._v(" "),n("b-col",{staticClass:"min-vh-100 px-3",attrs:{cols:"9"}},[n(t.activeComponent,{tag:"component"})],1)],1)},[],!1,null,"8a72f7dc",null);o.default=component.exports}}]);