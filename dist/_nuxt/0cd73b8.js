(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{369:function(t,e,r){"use strict";r.r(e);r(32);var n=r(10),l=(r(53),r(221),{data:function(){return{boardMembers:null}},methods:{goBack:function(){this.$router.go(-1)}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/data/board-members.json");case 3:r=e.sent,t.boardMembers=r.data.splice(0,6),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching JSON data:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}}),o=r(9),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white py-24 sm:py-32"},[e("div",{staticClass:"mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3"},[t._m(0),t._v(" "),e("ul",{staticClass:"grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2",attrs:{role:"list"}},[t._l(t.boardMembers,(function(r,n){return e("li",{key:n},[e("div",{staticClass:"flex items-center gap-x-6"},[e("img",{staticClass:"h-16 w-16 rounded-full",attrs:{src:r.avatar,alt:""}}),t._v(" "),e("div",[e("h3",{staticClass:"text-base font-semibold leading-7 tracking-tight text-gray-900"},[t._v("\n              "+t._s(r.name)+"\n            ")]),t._v(" "),e("nuxt-link",{staticClass:"text-sm font-semibold leading-6 text-indigo-600",attrs:{to:"/board-members/".concat(r._id)}},[t._v("\n              Read More\n            ")])],1)])])})),t._v(" "),e("div",{staticClass:"flex justify-center items-center"},[e("nuxt-link",{staticClass:"bg-black no-underline text-white px-6 py-2.5 rounded-full",attrs:{to:"/board-members"}},[t._v("View All Members")])],1)],2)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"max-w-2xl"},[e("h2",{staticClass:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"},[t._v("\n        Meet our leadership\n      ")]),t._v(" "),e("p",{staticClass:"mt-6 text-lg leading-8 text-gray-600"},[t._v("\n        We’re a dynamic group of individuals who are passionate about what we\n        do.\n      ")])])}],!1,null,null,null);e.default=component.exports}}]);