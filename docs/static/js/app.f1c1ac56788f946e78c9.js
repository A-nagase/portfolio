webpackJsonp([0],{"96t9":function(t,e,s){t.exports=s.p+"static/img/copro.dedde19.png"},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("7+uW"),a=s("/ocq"),i={name:"App",mounted:function(){var t="Nagase Portfolio";document.title=t,document.querySelector("meta[property='og:title']").setAttribute("content",t),document.querySelector("meta[name='description']").setAttribute("content","永瀬のポートフォリオサイトです。"),document.querySelector("meta[property='og:description']").setAttribute("content","永瀬のポートフォリオサイトです。")}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-style",attrs:{id:"app"}},[s("div",{staticClass:"header",attrs:{id:"header"}},[s("ul",{staticClass:"header__list impact"},[s("li",{staticClass:"header__list__item"},[s("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),s("li",{staticClass:"header__list__item"},[s("router-link",{attrs:{to:"/Profile"}},[t._v("Profile")])],1),t._v(" "),s("li",{staticClass:"header__list__item"},[s("router-link",{attrs:{to:"/Skill"}},[t._v("Skill")])],1),t._v(" "),s("li",{staticClass:"header__list__item"},[s("router-link",{attrs:{to:"/Work"}},[t._v("Work")])],1)])]),t._v(" "),s("main",{staticClass:"main"},[s("div",{staticClass:"main-wrap"},[s("transition",{attrs:{mode:"out-in"}},[s("router-view")],1)],1)]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer"},[e("p",[this._v("Nagase Portfolio")])])}]};var o=s("VU/8")(i,r,!1,function(t){s("OeBl")},null,null).exports,c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("h1",{staticClass:"impact"},[this._v("Nagase Portfolio")])])}]};var l=s("VU/8")({name:"Home"},c,!1,function(t){s("ys0h")},null,null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"profile"},[e("p",[this._v("\n    永瀬 歩です"),e("br"),this._v("\n    2015年に職業訓練校にてHTML/CSS/JSの勉強をしてその後は独学"),e("br"),this._v("\n    WEB制作会社やデザイン会社などで"),e("br"),this._v("\n    主にWEBサイトのコーディングをやってます\n  ")])])}]};var u=s("VU/8")({name:"Profile"},p,!1,function(t){s("koi7")},"data-v-3efeb78d",null).exports,_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"overlay"},[s("div",{staticClass:"content"},[s("img",{attrs:{src:t.val.img_src}}),t._v(" "),s("p",{staticClass:"txt"},[t._v(t._s(t.val.desc))]),t._v(" "),s("p",{domProps:{innerHTML:t._s(t.val.url)}}),t._v(" "),s("p",[t._v("作業範囲："+t._s(t.val.range))]),t._v(" "),s("p",[t._v("使用技術："+t._s(t.val.lang))]),t._v(" "),s("p",[t._v("作業時間："+t._s(t.val.time))]),t._v(" "),s("div",{staticClass:"close-btn",on:{click:function(e){return t.$emit("close")}}},[s("span",{staticClass:"btn-bar btn-bar--01"}),t._v(" "),s("span",{staticClass:"btn-bar btn-bar--02"})])])])},staticRenderFns:[]};var m={components:{modal:s("VU/8")({name:"modal",props:["val"]},_,!1,function(t){s("Rc2T")},null,null).exports},data:function(){return{showContent:!1,postItem:"",items:[{id:1,desc:"自身のポートフォリオサイトをSPAで作成しました。モーダルをライブラリを使わずに実装したのですがなかなかうまくいかず時間が掛かりました。もう少し改良したいです。",range:"デザイン、コーディング",lang:"HTML, CSS, Vue.js, vue-cli",time:"約20時間",img_src:s("P5iZ")},{id:2,desc:"福袋特集LPです。カテゴリごとの絞り込みなど含めすべてvueで構築しました。データはjsonファイルを用意しそこから読み込んでます。",url:'<a href="https://www.mozo-wondercity.com/lp/2024/fukubukuro/#/" target="_blank">https://www.mozo-wondercity.com/lp/2024/fukubukuro/#/</a>',range:"コーディング（レスポンシブ対応）",lang:"HTML, CSS, Vue.js, vue-cli",time:"約16時間",img_src:s("TMtY")},{id:3,desc:"コーポレートサイトのリニューアル案件です。背景に斜線があったりとCSS的に難しいところが多く苦労しました。",url:'<a href="https://www.coprosystem.co.jp/" target="_blank">https://www.coprosystem.co.jp/</a>',range:"コーディング（レスポンシブ対応）",lang:"HTML, CSS(Sass), jQuery",time:"約160時間",img_src:s("96t9")},{id:4,desc:"イベント・ショップ紹介LPです。ショップ情報の部分はvueを使用してます。",url:'<a href="https://www.mozo-wondercity.com/lp/renewal/" target="_blank">https://www.mozo-wondercity.com/lp/renewal/</a>',range:"コーディング（レスポンシブ対応）",lang:"HTML, CSS, Vue.js",time:"約16時間",img_src:s("QRMu")},{id:5,desc:"製品サイトのリニューアル案件です。製品詳細ページのスライダー部分はslick.jsをカスタマイズして使用してます。タスクランナーはいままでglupを使用していたのですが、この案件ではnpm-scriptsでタスクを処理するという方法をとりました。",url:'<a href="https://www.leaffresh.jp/" target="_blank">https://www.leaffresh.jp/</a>',range:"コーディング（レスポンシブ対応）",lang:"HTML(ejs), CSS(Sass), jQuery",time:"約20時間",img_src:s("Rzd+")},{id:6,desc:"キャンペーンLPです。アニメーション部分はGSAPを使用してます",url:'<a href="https://www.mec-markis.jp/mm/store_event/2022/spring/" target="_blank">https://www.mec-markis.jp/mm/store_event/2022/spring/</a>',range:"コーディング（レスポンシブ対応）",lang:"HTML, CSS, GSAP",time:"約8時間",img_src:s("Ts44")},{id:7,desc:"コーポレートサイトの新規案件です。こちらはアクセシビリティ対応をしてほしいとのことだったので、全ての操作がキーボードで完結するなどアクセシビリティを意識したコーディングを心がけました。",url:'<a href="https://www.cet-tyb.com/" target="_blank">https://www.cet-tyb.com/</a>',range:"コーディング（レスポンシブ対応）",lang:"HTML(Pug), CSS(Sass), glup, jQuery",time:"約80時間",img_src:s("cAkI")},{id:8,desc:"コーポレートサイトのリニューアル案件です。採用サイトと合わせて30ページ程の規模です。",url:'<a href="https://www.tomypure.co.jp/" target="_blank">https://www.tomypure.co.jp/</a>',range:"コーディング（レスポンシブ対応）",lang:"HTML, CSS, jQuery",time:"約160時間",img_src:s("qNcX")}]}},methods:{openModal:function(t){this.showContent=!0,this.postItem=t},closeModal:function(){this.showContent=!1}}},v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"work-wrap"},[t._m(0),t._v(" "),s("div",{staticClass:"work"},t._l(t.items,function(e,n){return s("div",{key:n,staticClass:"item-list"},[s("div",{staticClass:"card"},[s("img",{attrs:{src:e.img_src,alt:"Card image"},on:{click:function(s){return t.openModal(e)}}})]),t._v(" "),s("transition",{attrs:{mode:"out-in"}},[s("modal",{directives:[{name:"show",rawName:"v-show",value:t.showContent,expression:"showContent"}],attrs:{val:t.postItem},on:{close:t.closeModal}})],1)],1)}),0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"work-heading"},[e("p",[this._v("今まで担当した案件の一部をまとめました。")])])}]};var d=s("VU/8")(m,v,!1,function(t){s("P5DV")},"data-v-f810ec9c",null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"skill"},[s("div",{staticClass:"skill-txt"},[s("p")]),t._v(" "),s("div",{staticClass:"skill-box lang"},[s("p",[t._v("言語")]),t._v(" "),s("span",[t._v("HTML")]),t._v(" "),s("span",[t._v("CSS")]),t._v(" "),s("span",[t._v("Javascript")]),t._v(" "),s("span",[t._v("node.js")])]),t._v(" "),s("div",{staticClass:"skill-box frame"},[s("p",[t._v("ライブラリ・フレームワーク")]),t._v(" "),s("span",[t._v("Vue.js")]),t._v(" "),s("span",[t._v("jQuery")]),t._v(" "),s("span",[t._v("GSAP")])]),t._v(" "),s("div",{staticClass:"skill-box tools"},[s("p",[t._v("ツール")]),t._v(" "),s("span",[t._v("Git")]),t._v(" "),s("span",[t._v("Slack")]),t._v(" "),s("span",[t._v("gulp")]),t._v(" "),s("span",[t._v("npm")])])])}]};var h=s("VU/8")({name:"Skill"},f,!1,function(t){s("a3Pw")},"data-v-27d6ef58",null).exports;n.a.use(a.a);var g=[{path:"/",component:l},{path:"/Profile",component:u},{path:"/Work",component:d},{path:"/Skill",component:h}],w=new a.a({mode:"history",routes:g});new n.a({el:"#app",router:w,render:function(t){return t(o)}}).$mount("#app")},OeBl:function(t,e){},P5DV:function(t,e){},P5iZ:function(t,e,s){t.exports=s.p+"static/img/portfolio.4fba28f.png"},QRMu:function(t,e,s){t.exports=s.p+"static/img/mozo.0537a1a.png"},Rc2T:function(t,e){},"Rzd+":function(t,e,s){t.exports=s.p+"static/img/leaffresh.95c0cd3.png"},TMtY:function(t,e,s){t.exports=s.p+"static/img/fukubukuro.908d688.png"},Ts44:function(t,e,s){t.exports=s.p+"static/img/markis.03bbcec.png"},a3Pw:function(t,e){},cAkI:function(t,e,s){t.exports=s.p+"static/img/cet.50898b5.png"},koi7:function(t,e){},qNcX:function(t,e,s){t.exports=s.p+"static/img/tommy.3a05f61.png"},ys0h:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f1c1ac56788f946e78c9.js.map