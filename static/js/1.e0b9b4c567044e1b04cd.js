webpackJsonp([1],{"2NXm":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={name:"blog-home-button",props:{name:String,icon:String,active:{type:Boolean,default:!1}},data:function(){return{iconClazz:["iconfont",this.icon]}},methods:{onClick:function(){this.$emit("click")}}},s={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{class:{"blog-home-button":!0,active:this.active},on:{click:this.onClick}},[n("i",{class:this.iconClazz}),this._v(" "),n("span",[this._v(this._s(this.name))])])},staticRenderFns:[]};var a={components:{HomeButton:i("VU/8")(e,s,!1,function(t){i("4A7s")},"data-v-8868a136",null).exports},data:function(){return{isActiveIndex:0}},methods:{onNavClick:function(t){this.isActiveIndex=t}}},c={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"index-wrap"},[i("div",{staticClass:"index-header-wrap"},[i("HomeButton",{staticClass:"index-button",attrs:{icon:"icon-shouye",name:"首页",active:0===t.isActiveIndex},on:{click:function(n){return t.onNavClick(0)}}}),t._v(" "),i("HomeButton",{staticClass:"index-button",attrs:{icon:"icon-guanyuwomen",name:"关于",active:1===t.isActiveIndex},on:{click:function(n){return t.onNavClick(1)}}})],1),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"index-content"},[i("router-view")],1)])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"index-saying"},[n("h1",{staticClass:"index-saying-h1"},[this._v("秋过冬漫长")]),this._v(" "),n("p",{staticClass:"index-saying-h5"},[this._v("来来往往总是那么几个人")])])}]};var o=i("VU/8")(a,c,!1,function(t){i("ag+s")},"data-v-57456484",null);n.default=o.exports},"4A7s":function(t,n){},"ag+s":function(t,n){}});
//# sourceMappingURL=1.e0b9b4c567044e1b04cd.js.map