webpackJsonp([1],{"0gU3":function(t,s,e){t.exports=e.p+"static/img/avatar.f85001a.png"},"3vLx":function(t,s){},"6LDG":function(t,s){},"8vTG":function(t,s){},"9bx5":function(t,s,e){t.exports=e.p+"static/img/welcome.2211ba9.jpg"},CFSk:function(t,s){},FFQj:function(t,s){},FUaA:function(t,s){},GibY:function(t,s){},IxSg:function(t,s){},Ltas:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var n=e("VU/8")({name:"App"},a,!1,function(t){e("uwQT")},null,null).exports,o=e("/ocq"),c={data:function(){return{isHide:!1}},created:function(){var t=this;this.$store.state.isFirstLoad?setTimeout(function(){t.isHide=!0},3500):this.isHide=!0}},r={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"welcome",class:{hide:this.isHide}},[this._m(0),this._v(" "),this._m(1)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:e("9bx5"),width:"100%",height:"100%"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"text-wrap"},[s("div",{staticClass:"text"},[s("span",{staticClass:"title"},[this._v("知乎日报")]),this._v(" "),s("span",{staticClass:"bio"},[this._v("每天三次，每次七分钟")])])])}]};var l=e("VU/8")(c,r,!1,function(t){e("GibY")},"data-v-92b66aa4",null).exports,d=e("I29D"),m=e.n(d),u={data:function(){return{topStories:{}}},created:function(){var t=this;m.a.get("api/news/latest").then(function(s){t.topStories=s.data.top_stories}).catch(function(t){console.log(t)})},methods:{viewDetail:function(t){at.push({name:"newsDetail",params:{id:t}})},attachImageUrl:function(t){if(void 0!==t)return t.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")}}},h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"swipe"},[e("mt-swipe",{attrs:{auto:4e3}},t._l(t.topStories,function(s){return e("mt-swipe-item",{key:s.id,nativeOn:{click:function(e){return t.viewDetail(s.id)}}},[e("img",{attrs:{src:t.attachImageUrl(s.image),alt:s.title}}),t._v(" "),e("span",{staticClass:"top-story-title"},[t._v(t._s(s.title))])])}),1)],1)},staticRenderFns:[]};var f=e("VU/8")(u,h,!1,function(t){e("gVy5")},null,null).exports,v=e("Au9i"),p=e.n(v),_={data:function(){return{loading:!1,date:Date,dateStr:""}},created:function(){var t=this;this.$store.state.isFirstLoad&&(this.fetchData(),this.$store.dispatch("changeLoadState")),this.initDate(),this.$on("refresh",function(){t.refreshData()})},methods:{viewDetail:function(t){this.$store.dispatch("changeCurrentNewsId",t),this.$store.dispatch("changeNewsType",0),at.push({name:"newsDetail",params:{id:t}})},attachImageUrl:function(t){if(void 0!==t)return t.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},fetchData:function(){var t=this;m.a.get("api/news/latest").then(function(s){var e=s.data.stories,i=e.map(function(t){return t.id});t.$store.dispatch("addNews",{stories:e,ids:i})}).catch(function(t){console.log(t)})},refreshData:function(){var t=this;this.$store.dispatch("refreshNews"),this.$nextTick(function(){t.fetchData()})},initDate:function(){this.date=new Date,this.changeDate2String()},changeDate2String:function(){var t=this.date.getFullYear(),s=this.date.getMonth()+1,e=this.date.getDate();s=s<10?"0"+s:s,e=e<10?"0"+e:e,this.dateStr=t+s+e},decreaseDate:function(){this.date.setDate(this.date.getDate()-1),this.changeDate2String()},fetchMoreData:function(){var t=this;m.a.get("api/news/before/"+this.dateStr).then(function(s){var e=s.data.stories,i=e.map(function(t){return t.id});t.$store.dispatch("addNews",{stories:e,ids:i}),v.Indicator.close()}).catch(function(t){console.log(t)}),this.decreaseDate()},loadMore:function(){this.loading=!0,v.Indicator.open({spinnerType:"fading-circle"}),this.$nextTick(function(){this.fetchMoreData()}),this.loading=!1}}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"news-list"},[e("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],ref:"newsList",staticClass:"list",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-immediate-check":"false","infinite-scroll-distance":"40"}},t._l(this.$store.state.stories,function(s){return e("li",{key:s.id,staticClass:"list-item",on:{click:function(e){return t.viewDetail(s.id)}}},[e("span",{staticClass:"item-title"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"image-wrapper"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy.newsList",value:t.attachImageUrl(s.images[0]),expression:"attachImageUrl(story.images[0])",modifiers:{newsList:!0}}],staticClass:"item-image",attrs:{alt:s.title}}),t._v(" "),s.multipic?e("i",{staticClass:"icon iconfont icon-duotu multipic"},[t._v("多图")]):t._e()])])}),0)])},staticRenderFns:[]};var C=e("VU/8")(_,g,!1,function(t){e("8vTG")},"data-v-431e99de",null).exports,w=e("/QXl"),j={data:function(){return{data:[]}},created:function(){this.fetchData()},methods:{hideSidebar:function(){this.$emit("hideSidebar")},fetchData:function(){var t=this;m.a.get("api/themes").then(function(s){t.data=s.data.others,t.data.unshift({color:0,thumbnail:"",description:"首页",id:-1,name:"首页"}),t.$nextTick(function(){t.menuScroll=new w.a(t.$refs.menuWrapper,{click:!0})})}).catch(function(t){console.log(t)})},themeDetail:function(t){-1===t?this.hideSidebar():(this.$store.dispatch("changeCurrentThemeId",t),at.push({name:"themeDetail",params:{id:t}}))},goCollect:function(){at.push({name:"collect"})}}},y={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("transition",{attrs:{name:"move"}},[i("div",{staticClass:"wrap"},[i("div",{staticClass:"sidebar"},[i("div",{staticClass:"top"},[i("img",{staticClass:"avatar",attrs:{src:e("0gU3")}}),t._v(" "),i("span",{staticClass:"name"},[t._v("唐瑶")])]),t._v(" "),i("div",{staticClass:"menubar"},[i("div",{on:{click:t.goCollect}},[i("i",{staticClass:"icon iconfont icon-shoucang"}),t._v(" "),i("span",[t._v("收藏")])])]),t._v(" "),i("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[i("ul",t._l(t.data,function(s){return i("li",{key:s.id,staticClass:"menu-item",on:{click:function(e){return t.themeDetail(s.id)}}},[-1===s.id?i("i",{staticClass:"icon iconfont icon-shouyeshouye"}):t._e(),t._v("\n            "+t._s(s.name)+"\n            "),i("i",{staticClass:"icon iconfont icon-more"})])}),0)])]),t._v(" "),i("div",{staticClass:"mask",on:{click:t.hideSidebar}})])])},staticRenderFns:[]};var b=e("VU/8")(j,y,!1,function(t){e("Ltas")},"data-v-4da4a8c8",null).exports,k=(e("mzOs"),{data:function(){return{isShowSidebar:!1}},created:function(){this.isShowSidebar=!1},components:{welcome:l,swipe:f,newsList:C,sidebar:b},methods:{toggleSidebar:function(){var t=void 0;this.isShowSidebar?(document.body.style.position="",document.scrollingElement.scrollTop=t):(t=document.scrollingElement.scrollTop,document.body.style.position="fixed",document.body.style.top=-t+"px"),this.isShowSidebar=!this.isShowSidebar},loadTop:function(){this.$refs.newsList.$emit("refresh"),this.$refs.loadmore.onTopLoaded()}}}),D={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"index"},[e("welcome"),t._v(" "),t.isShowSidebar?e("sidebar",{on:{hideSidebar:t.toggleSidebar}}):t._e(),t._v(" "),e("mt-loadmore",{ref:"loadmore",attrs:{"top-method":t.loadTop,topDistance:40}},[e("header",[e("i",{staticClass:"icon iconfont icon-fenlei",on:{click:t.toggleSidebar}}),t._v(" "),e("span",{staticClass:"hot-news"},[t._v("今日热闻")])]),t._v(" "),e("swipe"),t._v(" "),e("newsList",{ref:"newsList"})],1)],1)},staticRenderFns:[]};var x=e("VU/8")(k,D,!1,function(t){e("oDZJ")},"data-v-2ca2904c",null).exports,S={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"share"},[e("span",{staticClass:"share-title"},[t._v("分享这篇内容")]),t._v(" "),e("mt-swipe",{attrs:{auto:0}},[e("mt-swipe-item",[e("div",{staticClass:"share-item"},[e("i",{staticClass:"icon iconfont icon-weixinhaoyou"}),t._v(" "),e("span",[t._v("微信好友")])]),t._v(" "),e("div",{staticClass:"share-item"},[e("i",{staticClass:"icon iconfont icon-weixinpengyouquan"}),t._v(" "),e("span",[t._v("微信朋友圈")])]),t._v(" "),e("div",{staticClass:"share-item"},[e("i",{staticClass:"icon iconfont icon-QQ"}),t._v(" "),e("span",[t._v("QQ")])]),t._v(" "),e("div",{staticClass:"share-item"},[e("i",{staticClass:"icon iconfont icon-weibo"}),t._v(" "),e("span",[t._v("新浪微博")])]),t._v(" "),e("div",{staticClass:"share-item"},[e("i",{staticClass:"icon iconfont icon-fuzhi"}),t._v(" "),e("span",[t._v("复制链接")])]),t._v(" "),e("div",{staticClass:"share-item"},[e("i",{staticClass:"icon iconfont icon-youdaoyunbiji"}),t._v(" "),e("span",[t._v("有道云笔记")])]),t._v(" "),e("div",{staticClass:"share-item"},[e("i",{staticClass:"icon iconfont icon-yinxiangbiji"}),t._v(" "),e("span",[t._v("印象笔记")])]),t._v(" "),e("div",{staticClass:"share-item"},[e("i",{staticClass:"icon iconfont icon-tengxunweibo"}),t._v(" "),e("span",[t._v("腾讯微博")])])]),t._v(" "),e("mt-swipe-item",[e("div",{staticClass:"share-item"},[e("i",{staticClass:"icon iconfont icon-xinxi"}),t._v(" "),e("span",[t._v("微信好友")])]),t._v(" "),e("div",{staticClass:"share-item"},[e("i",{staticClass:"icon iconfont icon-instapaper"}),t._v(" "),e("span",[t._v("微信朋友圈")])])])],1),t._v(" "),e("div",{staticClass:"button",on:{click:t.toggleCollect}},[t._v(t._s(this.$store.getters.collectText))]),t._v(" "),e("div",{staticClass:"button",on:{click:t.cancel}},[t._v("取消")])],1)},staticRenderFns:[]};var E={data:function(){return{isDianzan:!1,popupVisible:!1}},created:function(){this.fetchStoryExtra()},watch:{$route:"reloadId"},methods:{fetchStoryExtra:function(){var t=this;m.a.get("api/story-extra/"+this.$store.state.id).then(function(s){t.$store.state.long_comments=s.data.long_comments,t.$store.state.popularity=s.data.popularity,t.$store.state.short_comments=s.data.short_comments,t.$store.state.comments=s.data.comments}).catch(function(t){console.log(t)})},goBack:function(){var t=this.$store.state.newsType;if(0===t)at.push({name:"index"});else if(1===t){var s=this.$store.state.currentThemeId;at.push({name:"themeDetail",params:{id:s}})}else 2===t&&at.push({name:"collect"})},thumbUp:function(){this.isDianzan?this.$store.state.popularity--:this.$store.state.popularity++,this.isDianzan=!this.isDianzan},showMenu:function(){this.popupVisible=!0},hideMenu:function(){this.popupVisible=!1},goNext:function(){at.push({name:"newsDetail",params:{id:this.$store.state.nextId}})},reloadId:function(){this.$emit("reloadId"),this.fetchStoryExtra()},showComment:function(){at.push({name:"comment",params:{id:this.$store.state.id}})}},components:{share:e("VU/8")({data:function(){return{}},created:function(){this.$store.dispatch("judgeCollectState")},methods:{cancel:function(){this.$emit("cancel")},toggleCollect:function(){this.$store.dispatch("toggleCollect")}}},S,!1,function(t){e("IxSg")},null,null).exports}},I={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"news-menu"},[e("ul",{staticClass:"menu-wrap"},[e("li",{staticClass:"menu-item",on:{click:t.goBack}},[e("i",{staticClass:"icon iconfont icon-back"})]),t._v(" "),e("li",{staticClass:"menu-item",on:{click:t.goNext}},[e("i",{staticClass:"icon iconfont icon-moreunfold"})]),t._v(" "),e("li",{staticClass:"menu-item",class:{"dianzan-active":t.isDianzan},on:{click:t.thumbUp}},[e("i",{staticClass:"icon iconfont icon-dianzan"}),t._v(" "),e("span",{staticClass:"dianzan-number"},[t._v(t._s(this.$store.state.popularity))])]),t._v(" "),e("li",{staticClass:"menu-item",on:{click:t.showMenu}},[e("i",{staticClass:"icon iconfont icon-fenxiang"})]),t._v(" "),e("li",{staticClass:"menu-item",on:{click:t.showComment}},[e("i",{staticClass:"icon iconfont icon-pinglun"}),t._v(" "),e("span",{staticClass:"comments-number"},[t._v(t._s(this.$store.state.comments))])])]),t._v(" "),e("mt-popup",{attrs:{"popup-transition":"popup-fade",position:"bottom"},model:{value:t.popupVisible,callback:function(s){t.popupVisible=s},expression:"popupVisible"}},[e("share",{on:{cancel:t.hideMenu}})],1)],1)},staticRenderFns:[]};var U={data:function(){return{data:{}}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this,s=this.$route.params.id;m.a.get("api/news/"+s).then(function(s){s.data.body=t.attachBodyContent(s.data.body),t.data=s.data}).catch(function(t){console.log(t)}),this.$store.dispatch("changeCurrentNewsId",s),this.$store.dispatch("judgeCollectState")},attachImageUrl:function(t){if(void 0!==t)return t.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},attachBodyContent:function(t){return t.replace(/src="http\w{0,1}:\/\//g,'src="https://images.weserv.nl/?url=')}},components:{"news-menu":e("VU/8")(E,I,!1,function(t){e("dSO7")},null,null).exports}},T={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"news-detail"},[0===this.$store.state.newsType?e("div",{staticClass:"top-wrapper"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.attachImageUrl(this.data.image),expression:"attachImageUrl(this.data.image)"}],attrs:{alt:this.data.title}}),t._v(" "),e("span",{staticClass:"top-title"},[t._v(t._s(t.data.title))]),t._v(" "),e("span",{staticClass:"image-source"},[t._v("图片："+t._s(this.data.image_source))])]):t._e(),t._v(" "),e("div",{staticClass:"body-wrap",domProps:{innerHTML:t._s(this.data.body)}}),t._v(" "),e("news-menu",{on:{reloadId:t.fetchData}})],1)},staticRenderFns:[]};var N=e("VU/8")(U,T,!1,function(t){e("suVL")},null,null).exports,$=e("ryJa"),L=e.n($),z={data:function(){return{comments:[]}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;m.a.get("api/story/"+this.$store.state.id+"/long-comments").then(function(s){t.comments=s.data.comments}).catch(function(t){console.log(t)})},attachImageUrl:function(t){if(void 0!==t)return t.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},changeTime:function(t){return L()(t).format("MM-DD HH:mm")}}},F={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"long-comment"},[e("div",{staticClass:"box"}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:0!==this.comments.length,expression:"this.comments.length !== 0"}],staticClass:"long-comment-number"},[t._v(t._s(this.$store.state.long_comments)+"条长评")]),t._v(" "),e("ul",{ref:"longCommentList",staticClass:"comment-list"},[e("i",{staticClass:"icon iconfont icon-shafa"}),t._v(" "),t._l(this.comments,function(s){return e("li",{staticClass:"comment-item"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy.longCommentList",value:t.attachImageUrl(s.avatar),expression:"attachImageUrl(comment.avatar)",modifiers:{longCommentList:!0}}],staticClass:"avatar",attrs:{alt:s.author}}),t._v(" "),e("div",{staticClass:"comment-content"},[e("span",{staticClass:"author"},[t._v(t._s(s.author))]),t._v(" "),e("i",{staticClass:"icon iconfont icon-dianzan"},[t._v(t._s(s.likes))]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.content))]),t._v(" "),void 0!==s.reply_to?[e("p",{staticClass:"reply"},[e("span",{staticClass:"reply-author"},[t._v("//"+t._s(s.reply_to.author)+":")]),t._v("\n            "+t._s(s.reply_to.content)+"\n         ")])]:t._e(),t._v(" "),e("span",{staticClass:"date"},[t._v(t._s(t.changeTime(s.time)))])],2)])})],2)])},staticRenderFns:[]};var R={data:function(){return{comments:[],isShow:!1}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;m.a.get("api/story/"+this.$store.state.id+"/short-comments").then(function(s){t.comments=s.data.comments}).catch(function(t){console.log(t)})},toggleShortComment:function(){this.isShow=!this.isShow},attachImageUrl:function(t){if(void 0!==t)return t.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},changeTime:function(t){return L()(t).format("MM-DD HH:mm")}}},H={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"short-comment"},[e("div",{directives:[{name:"show",rawName:"v-show",value:0!==this.comments.length,expression:"this.comments.length !== 0"}],staticClass:"short-comment-number",on:{click:t.toggleShortComment}},[t._v("\n    "+t._s(this.$store.state.short_comments)+"条短评\n    "),e("i",{staticClass:"icon iconfont",class:[t.isShow?"icon-updouble":"icon-downdouble"]})]),t._v(" "),e("ul",{ref:"shortCommentList",staticClass:"comment-list",class:{hide:!t.isShow}},t._l(this.comments,function(s){return e("li",{staticClass:"comment-item"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy.shortCommentList",value:t.attachImageUrl(s.avatar),expression:"attachImageUrl(comment.avatar)",modifiers:{shortCommentList:!0}}],staticClass:"avatar",attrs:{alt:s.author}}),t._v(" "),e("div",{staticClass:"comment-content"},[e("span",{staticClass:"author"},[t._v(t._s(s.author))]),t._v(" "),e("i",{staticClass:"icon iconfont icon-dianzan"},[t._v(t._s(s.likes))]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.content))]),t._v(" "),void 0!==s.reply_to?[e("p",{staticClass:"reply"},[e("span",{staticClass:"reply-author"},[t._v("//"+t._s(s.reply_to.author)+":")]),t._v("\n            "+t._s(s.reply_to.content)+"\n         ")])]:t._e(),t._v(" "),e("span",{staticClass:"date"},[t._v(t._s(t.changeTime(s.time)))])],2)])}),0)])},staticRenderFns:[]};var V={methods:{backToDetail:function(){at.go(-1)},writeComment:function(){at.push({name:"writeComment",params:{id:this.$store.state.id}})}},components:{"long-comment":e("VU/8")(z,F,!1,function(t){e("uRw7")},null,null).exports,"short-comment":e("VU/8")(R,H,!1,function(t){e("3vLx")},null,null).exports}},A={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"comment"},[e("div",{staticClass:"head"},[t._v(t._s(this.$store.state.comments)+"条点评")]),t._v(" "),e("long-comment"),t._v(" "),e("short-comment"),t._v(" "),e("div",{staticClass:"foot"},[e("i",{staticClass:"icon iconfont icon-back",on:{click:t.backToDetail}}),t._v(" "),e("i",{staticClass:"icon iconfont icon-bianxie",on:{click:t.writeComment}},[t._v("写评论")])])],1)},staticRenderFns:[]};var G=e("VU/8")(V,A,!1,function(t){e("o8LU")},"data-v-4c926f38",null).exports,O={methods:{backToComment:function(){at.go(-1)},release:function(){alert("发布评论")}}},M={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"write-comment"},[s("div",{staticClass:"header"},[s("i",{staticClass:"icon iconfont icon-back",on:{click:this.backToComment}}),this._v(" "),s("span",{staticClass:"header-text"},[this._v("写点评")]),this._v(" "),s("span",{staticClass:"header-release",on:{click:this.release}},[this._v("发布")])]),this._v(" "),s("textarea",{staticClass:"warning-text",attrs:{placeholder:"不友善言论会被删除，深度讨论会被优先展示"}})])},staticRenderFns:[]};var J=e("VU/8")(O,M,!1,function(t){e("6LDG")},null,null).exports,K={data:function(){return{id:"",data:{},editorIds:[],isFocus:!0}},created:function(){this.id=this.$route.params.id,this.fetchData()},methods:{fetchData:function(){var t=this;m.a.get("api/theme/"+this.id).then(function(s){t.data=s.data,t.data.editors.map(function(s){t.editorIds.push(s.id)})})},viewDetail:function(t){this.$store.dispatch("changeCurrentNewsId",t),this.$store.dispatch("changeNewsType",1),at.push({name:"newsDetail",params:{id:t}})},backIndex:function(){at.push({name:"index"})},attachImageUrl:function(t){if(void 0!==t)return t.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},toggleThemeFocus:function(){this.isFocus=!this.isFocus},showEditors:function(){at.push({name:"editorsList",params:{themeId:this.id}})}}},W={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"theme-detail"},[e("header",[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.attachImageUrl(t.data.image),expression:"attachImageUrl(data.image)"}],attrs:{alt:""}}),t._v(" "),e("i",{staticClass:"icon iconfont icon-back",on:{click:t.backIndex}}),t._v(" "),e("span",{staticClass:"title"},[t._v(t._s(t.data.name))]),t._v(" "),e("i",{staticClass:"icon iconfont",class:[t.isFocus?"icon-jian":"icon-jia"],on:{click:t.toggleThemeFocus}})]),t._v(" "),e("div",{staticClass:"editors",on:{click:function(s){return t.showEditors()}}},[e("span",{staticClass:"text"},[t._v("主编")]),t._v(" "),t._l(t.data.editors,function(s){return e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.attachImageUrl(s.avatar),expression:"attachImageUrl(item.avatar)"}],attrs:{alt:""}})}),t._v(" "),e("i",{staticClass:"icon iconfont icon-more"})],2),t._v(" "),e("ul",{ref:"list",staticClass:"list"},t._l(t.data.stories,function(s){return e("li",{key:s.id,staticClass:"list-item",on:{click:function(e){return t.viewDetail(s.id)}}},[e("span",{staticClass:"item-title"},[t._v(t._s(s.title))]),t._v(" "),void 0!==s.images?e("div",{staticClass:"image-wrapper"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy.list",value:t.attachImageUrl(s.images[0]),expression:"attachImageUrl(story.images[0])",modifiers:{list:!0}}],staticClass:"item-image",attrs:{alt:s.title}})]):t._e()])}),0)])},staticRenderFns:[]};var B=e("VU/8")(K,W,!1,function(t){e("FUaA")},"data-v-316644cd",null).exports,Q={data:function(){return{data:[]}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;m.a.get("api/theme/"+this.$route.params.id).then(function(s){t.data=s.data.editors})},back:function(){at.go(-1)},attachImageUrl:function(t){if(void 0!==t)return t.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},viewEditorProfile:function(t,s){at.push({name:"editor",params:{editorId:t,editorName:s}})}}},Z={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"editors-list"},[e("header",[e("i",{staticClass:"icon iconfont icon-back",on:{click:t.back}}),t._v(" "),e("span",{staticClass:"text"},[t._v("主编")])]),t._v(" "),e("ul",{ref:"editorList",staticClass:"list"},t._l(t.data,function(s){return e("li",{staticClass:"item",on:{click:function(e){return t.viewEditorProfile(s.id,s.name)}}},[e("div",{staticClass:"wrap"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy.editorList",value:t.attachImageUrl(s.avatar),expression:"attachImageUrl(item.avatar)",modifiers:{editorList:!0}}],attrs:{alt:""}}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("span",{staticClass:"bio"},[t._v(t._s(s.bio))]),t._v(" "),e("i",{staticClass:"icon iconfont icon-more"})])])}),0)])},staticRenderFns:[]};var q=e("VU/8")(Q,Z,!1,function(t){e("FFQj")},"data-v-e37ffa40",null).exports,Y={data:function(){return{data:"",html:""}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;m.a.get("api/editor/"+this.$route.params.editorId+"/profile-page/ios").then(function(s){s.data=t.attachBodyContent(s.data),t.data=s.data})},back:function(){at.go(-1)},attachBodyContent:function(t){return t.replace(/src="http\w{0,1}:\/\//g,'src="https://images.weserv.nl/?url=')}}},X={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"editor"},[s("header",[s("i",{staticClass:"icon iconfont icon-back",on:{click:this.back}}),this._v(" "),s("div",{staticClass:"text"},[this._v(this._s(this.$route.params.editorName))]),this._v(" "),s("div",{staticClass:"box"})]),this._v(" "),s("div",{staticClass:"html-content",domProps:{innerHTML:this._s(this.data)}})])},staticRenderFns:[]};var P=e("VU/8")(Y,X,!1,function(t){e("ykqr")},"data-v-5b3304da",null).exports,tt={data:function(){return{}},created:function(){},methods:{back:function(){at.push({name:"index"})},attachImageUrl:function(t){if(void 0!==t)return t.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},viewDetail:function(t){this.$store.dispatch("changeCurrentNewsId",t),this.$store.dispatch("changeNewsType",2),at.push({name:"newsDetail",params:{id:t}})}}},st={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"collect"},[e("mt-header",{attrs:{fixed:"",title:"收藏"}},[e("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:t.back},slot:"left"})],1),t._v(" "),e("ul",{ref:"collectList",staticClass:"list"},t._l(this.$store.state.collectStories,function(s){return e("li",{key:s.id,staticClass:"list-item",on:{click:function(e){return t.viewDetail(s.id)}}},[e("span",{staticClass:"item-title"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"image-wrapper"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy.collectList",value:t.attachImageUrl(s.images[0]),expression:"attachImageUrl(story.images[0])",modifiers:{collectList:!0}}],staticClass:"item-image",attrs:{alt:s.title}}),t._v(" "),s.multipic?e("i",{staticClass:"icon iconfont icon-duotu multipic"},[t._v("多图")]):t._e()])])}),0)],1)},staticRenderFns:[]};var et=e("VU/8")(tt,st,!1,function(t){e("SCJj")},"data-v-39bced73",null).exports;i.default.use(o.a);var it,at=new o.a({routes:[{path:"/",name:"index",component:x},{path:"/newsDetail/:id",name:"newsDetail",component:N},{path:"/comment/:id",name:"comment",component:G},{path:"/writeComment/:id",name:"writeComment",component:J},{path:"/themeDetail/:id",name:"themeDetail",component:B},{path:"/editorsList/:id",name:"editorsList",component:q},{path:"/editor/:editorId/:editorName",name:"editor",component:P},{path:"/collect",name:"collect",component:et}]}),nt=e("b8UZ"),ot={addNews:function(t,s){(0,t.commit)("ADD_NEWS",s)},changeLoadState:function(t){(0,t.commit)("CHANGE_LOAD_STATE")},refreshNews:function(t){(0,t.commit)("REFRESH_NEWS")},changeCurrentNewsId:function(t,s){(0,t.commit)("CHANGE_CURRENT_NEWS_ID",s)},toggleCollect:function(t){(0,t.commit)("TOGGLE_COLLECT")},judgeCollectState:function(t){(0,t.commit)("JUDGE_COLLECT_STATE")},changeNewsType:function(t,s){(0,t.commit)("CHANGE_NEWS_TYPE",s)},changeCurrentThemeId:function(t,s){(0,t.commit)("CHANGE_CURRENT_THEME_ID",s)}},ct=e("bOdI"),rt=e.n(ct),lt=(it={},rt()(it,"ADD_NEWS",function(t,s){t.stories=t.stories.concat(s.stories),t.ids=t.ids.concat(s.ids)}),rt()(it,"REFRESH_NEWS",function(t){t.stories=[]}),rt()(it,"CHANGE_LOAD_STATE",function(t){t.isFirstLoad=!t.isFirstLoad}),rt()(it,"CHANGE_CURRENT_NEWS_ID",function(t,s){t.id=s;var e=t.ids.indexOf(s);t.nextId=t.ids[++e]}),rt()(it,"TOGGLE_COLLECT",function(t){var s=t.collectIds.indexOf(t.id);s<0?(t.collectIds.push(t.id),t.stories.map(function(s){s.id===t.id&&t.collectStories.push(s)})):(t.collectIds.splice(s,1),t.collectStories.splice(s,1)),t.isCollect=!t.isCollect}),rt()(it,"JUDGE_COLLECT_STATE",function(t){t.collectIds.indexOf(t.id)<0?t.isCollect=!1:t.isCollect=!0}),rt()(it,"CHANGE_NEWS_TYPE",function(t,s){t.newsType=s}),rt()(it,"CHANGE_CURRENT_THEME_ID",function(t,s){t.currentThemeId=s}),it);i.default.use(nt.a);var dt=new nt.a.Store({state:{width:0,height:0,stories:[],ids:[],id:"",nextId:"",isFirstLoad:!0,collectIds:[],collectStories:[],isCollect:!1,comments:0,long_comments:0,short_comments:0,popularity:0,currentThemeId:-1,newsType:-1},getters:{collectText:function(t){return t.isCollect?"取消收藏":"收藏"}},actions:ot,mutations:lt}),mt=(e("sVYa"),e("CFSk"),e("d8/S"),e("AXdl"));i.default.config.productionTip=!1,i.default.use(p.a),i.default.use(mt.default,{preLoad:1.3}),new i.default({el:"#app",router:at,store:dt,template:"<App/>",components:{App:n}})},SCJj:function(t,s){},"d8/S":function(t,s){},dSO7:function(t,s){},fSkL:function(t,s,e){var i={"./af":"1OrJ","./af.js":"1OrJ","./ar":"bHl5","./ar-dz":"qFyv","./ar-dz.js":"qFyv","./ar-kw":"OhBR","./ar-kw.js":"OhBR","./ar-ly":"3AjD","./ar-ly.js":"3AjD","./ar-ma":"sFwh","./ar-ma.js":"sFwh","./ar-sa":"gg0N","./ar-sa.js":"gg0N","./ar-tn":"lqw4","./ar-tn.js":"lqw4","./ar.js":"bHl5","./az":"xLUF","./az.js":"xLUF","./be":"NWv/","./be.js":"NWv/","./bg":"G9eV","./bg.js":"G9eV","./bm":"zaEJ","./bm.js":"zaEJ","./bn":"/icp","./bn.js":"/icp","./bo":"UyM9","./bo.js":"UyM9","./br":"G5xs","./br.js":"G5xs","./bs":"9h8A","./bs.js":"9h8A","./ca":"8ccl","./ca.js":"8ccl","./cs":"TEiJ","./cs.js":"TEiJ","./cv":"7EVA","./cv.js":"7EVA","./cy":"H6w8","./cy.js":"H6w8","./da":"MSIt","./da.js":"MSIt","./de":"Rl+D","./de-at":"30Vd","./de-at.js":"30Vd","./de-ch":"KKU8","./de-ch.js":"KKU8","./de.js":"Rl+D","./dv":"+DOJ","./dv.js":"+DOJ","./el":"8nDw","./el.js":"8nDw","./en-SG":"1hne","./en-SG.js":"1hne","./en-au":"ZsCN","./en-au.js":"ZsCN","./en-ca":"rHyc","./en-ca.js":"rHyc","./en-gb":"ehFk","./en-gb.js":"ehFk","./en-ie":"Hxoc","./en-ie.js":"Hxoc","./en-il":"oEKo","./en-il.js":"oEKo","./en-nz":"SfkL","./en-nz.js":"SfkL","./eo":"UhWX","./eo.js":"UhWX","./es":"JJW5","./es-do":"LWvi","./es-do.js":"LWvi","./es-us":"RzRn","./es-us.js":"RzRn","./es.js":"JJW5","./et":"pjM/","./et.js":"pjM/","./eu":"oBFE","./eu.js":"oBFE","./fa":"z8Fc","./fa.js":"z8Fc","./fi":"j+B7","./fi.js":"j+B7","./fo":"MuUW","./fo.js":"MuUW","./fr":"CZ8n","./fr-ca":"nDiE","./fr-ca.js":"nDiE","./fr-ch":"T2mj","./fr-ch.js":"T2mj","./fr.js":"CZ8n","./fy":"+eCN","./fy.js":"+eCN","./ga":"6KMf","./ga.js":"6KMf","./gd":"Osat","./gd.js":"Osat","./gl":"3uJi","./gl.js":"3uJi","./gom-latn":"kQyN","./gom-latn.js":"kQyN","./gu":"C85o","./gu.js":"C85o","./he":"Uaie","./he.js":"Uaie","./hi":"KLVO","./hi.js":"KLVO","./hr":"/AQ7","./hr.js":"/AQ7","./hu":"neNx","./hu.js":"neNx","./hy-am":"HL0q","./hy-am.js":"HL0q","./id":"fVYV","./id.js":"fVYV","./is":"pUHy","./is.js":"pUHy","./it":"N5fZ","./it-ch":"KCG7","./it-ch.js":"KCG7","./it.js":"N5fZ","./ja":"bVIB","./ja.js":"bVIB","./jv":"NpB+","./jv.js":"NpB+","./ka":"8RqC","./ka.js":"8RqC","./kk":"pcbE","./kk.js":"pcbE","./km":"o5og","./km.js":"o5og","./kn":"BKte","./kn.js":"BKte","./ko":"vztA","./ko.js":"vztA","./ku":"OmHn","./ku.js":"OmHn","./ky":"gQFs","./ky.js":"gQFs","./lb":"sJOA","./lb.js":"sJOA","./lo":"Wg2E","./lo.js":"Wg2E","./lt":"N5Ie","./lt.js":"N5Ie","./lv":"Z/KU","./lv.js":"Z/KU","./me":"6nQR","./me.js":"6nQR","./mi":"dZ9v","./mi.js":"dZ9v","./mk":"8ttA","./mk.js":"8ttA","./ml":"TFUT","./ml.js":"TFUT","./mn":"Rtcs","./mn.js":"Rtcs","./mr":"ZrND","./mr.js":"ZrND","./ms":"Uszi","./ms-my":"B+3a","./ms-my.js":"B+3a","./ms.js":"Uszi","./mt":"f+DN","./mt.js":"f+DN","./my":"7hhd","./my.js":"7hhd","./nb":"O+uN","./nb.js":"O+uN","./ne":"xB1H","./ne.js":"xB1H","./nl":"pyzp","./nl-be":"6XY9","./nl-be.js":"6XY9","./nl.js":"pyzp","./nn":"wWYI","./nn.js":"wWYI","./pa-in":"khMS","./pa-in.js":"khMS","./pl":"J+lf","./pl.js":"J+lf","./pt":"imZp","./pt-br":"yh7C","./pt-br.js":"yh7C","./pt.js":"imZp","./ro":"/ydL","./ro.js":"/ydL","./ru":"XA72","./ru.js":"XA72","./sd":"K+sy","./sd.js":"K+sy","./se":"HXCg","./se.js":"HXCg","./si":"JhyT","./si.js":"JhyT","./sk":"QL3+","./sk.js":"QL3+","./sl":"KbOk","./sl.js":"KbOk","./sq":"jkQm","./sq.js":"jkQm","./sr":"vGLH","./sr-cyrl":"lZcv","./sr-cyrl.js":"lZcv","./sr.js":"vGLH","./ss":"ikBz","./ss.js":"ikBz","./sv":"gbWe","./sv.js":"gbWe","./sw":"YR+a","./sw.js":"YR+a","./ta":"otVD","./ta.js":"otVD","./te":"3YuF","./te.js":"3YuF","./tet":"IJME","./tet.js":"IJME","./tg":"iKfg","./tg.js":"iKfg","./th":"v87T","./th.js":"v87T","./tl-ph":"otiP","./tl-ph.js":"otiP","./tlh":"L/GK","./tlh.js":"L/GK","./tr":"phcV","./tr.js":"phcV","./tzl":"rgrh","./tzl.js":"rgrh","./tzm":"1pHS","./tzm-latn":"q7e0","./tzm-latn.js":"q7e0","./tzm.js":"1pHS","./ug-cn":"tsGA","./ug-cn.js":"tsGA","./uk":"01SB","./uk.js":"01SB","./ur":"jayG","./ur.js":"jayG","./uz":"k3sX","./uz-latn":"nmSA","./uz-latn.js":"nmSA","./uz.js":"k3sX","./vi":"KTvP","./vi.js":"KTvP","./x-pseudo":"dccK","./x-pseudo.js":"dccK","./yo":"IAhR","./yo.js":"IAhR","./zh-cn":"5Spc","./zh-cn.js":"5Spc","./zh-hk":"ECSc","./zh-hk.js":"ECSc","./zh-tw":"hH/4","./zh-tw.js":"hH/4"};function a(t){return e(n(t))}function n(t){var s=i[t];if(!(s+1))throw new Error("Cannot find module '"+t+"'.");return s}a.keys=function(){return Object.keys(i)},a.resolve=n,t.exports=a,a.id="fSkL"},gVy5:function(t,s){},o8LU:function(t,s){},oDZJ:function(t,s){},suVL:function(t,s){},uRw7:function(t,s){},uwQT:function(t,s){},ykqr:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.c7ed63254d69e5e3bae3.js.map