(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{359:function(t,e,r){var content=r(399);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("2b202e3e",content,!0,{sourceMap:!1})},398:function(t,e,r){"use strict";r(359)},399:function(t,e,r){var n=r(29)((function(i){return i[1]}));n.push([t.i,".fade-enter-active[data-v-696a1e0d]{transition:all .3s cubic-bezier(.52,.02,.19,1.02) .15s}.fade-leave-active[data-v-696a1e0d]{transition:all .3s cubic-bezier(.52,.02,.19,1.02)}.fade-enter-from[data-v-696a1e0d]{opacity:0}.fade-enter-from[data-v-696a1e0d],.fade-leave-to[data-v-696a1e0d]{transform:scale(.8)}",""]),n.locals={},t.exports=n},457:function(t,e,r){"use strict";r.r(e);r(35),r(31),r(214),r(53);var n=r(9),l=(r(45),r(28),r(52),{name:"board-members",scrollToTop:!0,data:function(){return{boardMembers:[],loading:!0,title:"Pan Africa Board Members",description:"Pan Africa; Original thinking, research help add to human knowledge",image:"https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png"}},head:function(){return{title:"PANAFSTRAG Board Member",meta:[{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.title},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.image},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}},created:function(){this.getBoardMembers()},methods:{getBoardMembers:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("https://panafstrag.onrender.com/api/panAfrica/board-member");case 3:r=e.sent,t.boardMembers=r.data,t.loading=!1,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.$toast.error("Something went wrong, please try again.").goAway(1500);case 11:return e.prev=11,t.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()},goBack:function(){this.$router.go(-1)}}}),o=(r(398),r(12)),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"text-gray-600 body-font"},[t._m(0),t._v(" "),e("div",{staticClass:"container px-5 py-24 mx-auto"},[t.loading?t._e():e("div",{staticClass:"flex flex-wrap -m-4"},t._l(t.boardMembers,(function(r){return e("div",{key:r._id,staticClass:"p-4 lg:w-1/2"},[e("nuxt-link",{staticClass:"h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left",attrs:{to:"/board-members/"+r._id}},[e("img",{staticClass:"flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4",attrs:{alt:"team",src:r.avatar}}),t._v(" "),e("div",{staticClass:"flex-grow sm:pl-8"},[e("h2",{staticClass:"title-font font-medium text-lg text-gray-900"},[t._v(" "+t._s(r.name))]),t._v(" "),t._l(r.email,(function(r){return e("h3",{key:r,staticClass:"text-gray-500 mb-3"},t._l(r.split(","),(function(r){return e("span",{key:r,staticClass:"mr-2 text-xs"},[t._v(t._s("null"===r?null:r))])})),0)})),t._v(" "),e("p",{staticClass:"mb-4"},[t._v(t._s((null==r?void 0:r.bio.length)>100?"".concat(null==r?void 0:r.bio.slice(0,100),"..."):null==r?void 0:r.bio.length))]),t._v(" "),e("span",{staticClass:"inline-flex"},[e("nuxt-link",{staticClass:"text-gray-500 underline font-bold",attrs:{to:"/board-members/"+r._id}},[t._v("\n                Find out more\n              ")])],1)],2)])],1)})),0),t._v(" "),t.loading&&t.$nuxt.isOnline?e("section",{staticClass:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"},t._l(3,(function(i){return e("div",{key:i},[t._m(1,!0)])})),0):t._e()])])}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"overflow-hidden bg-[url('~/assets/images/board.jpeg')] bg-cover bg-top bg-no-repeat"},[e("div",{staticClass:"bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24"},[e("div",{staticClass:"text-center ltr:sm:text-left rtl:sm:text-right"},[e("div",{staticClass:"flex flex-wrap w-full mb-20 justify-center items-center flex-col"},[e("div",{staticClass:"lg:w-1/2 w-full mb-6 lg:mb-0 flex justify-center items-center flex-col gap-y-3"},[e("h1",{staticClass:"sm:text-3xl text-3xl font-medium title-font mb-2 text-white"},[t._v("OUR BOARD MEMBERS")]),t._v(" "),e("div",{staticClass:"h-1 w-20 bg-indigo-500 rounded"})])])])])])},function(){var t=this,e=t._self._c;return e("article",{staticClass:"overflow-hidden rounded-md shadow-md dark:border-gray-800 dark:shadow-gray-700/25 p-4 w-full mx-auto"},[e("div",{staticClass:"animate-pulse flex flex-col space-x-4"},[e("div",{staticClass:"bg-slate-400 h-40 w-full px-0 mx-0 rounded-tr-md rounded-tl-md"}),t._v(" "),e("div",{staticClass:"flex-1 space-y-3 py-3"},[e("div",{staticClass:"h-3 w-1/2 pl-0 -ml-4 bg-slate-400 rounded-full"}),t._v(" "),e("div",{staticClass:"h-3 w-1/2 pl-0 -ml-4 bg-slate-400 rounded-full"}),t._v(" "),e("div",{staticClass:"h-3 w-1/2 pl-0 -ml-4 bg-slate-400 rounded-full"}),t._v(" "),e("div",{staticClass:"h-3 w-1/4 pl-0 -ml-4 bg-slate-400 rounded-full"})])])])}],!1,null,"696a1e0d",null);e.default=component.exports}}]);