(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{367:function(t,e,n){var content=n(416);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("417896f3",content,!0,{sourceMap:!1})},415:function(t,e,n){"use strict";n(367)},416:function(t,e,n){var r=n(29)((function(i){return i[1]}));r.push([t.i,".fade-enter-active[data-v-1337b8d5]{transition:all .3s cubic-bezier(.52,.02,.19,1.02) .15s}.fade-leave-active[data-v-1337b8d5]{transition:all .3s cubic-bezier(.52,.02,.19,1.02)}.fade-enter-from[data-v-1337b8d5]{opacity:0}.fade-enter-from[data-v-1337b8d5],.fade-leave-to[data-v-1337b8d5]{transform:scale(.8)}",""]),r.locals={},t.exports=r},470:function(t,e,n){"use strict";n.r(e);n(31),n(145);var r=n(9),o=(n(45),n(28),n(52),n(36),n(15),n(82),n(83),{name:"subscriptions",scrollToTop:!0,layout:"admin",data:function(){return{fields:[{key:"sn",label:"S/N",class:"font-medium text-gray-400 text-sm"},{key:"email",label:"Email",class:"font-medium text-gray-400 text-sm"},{key:"status",label:"Status",class:"font-medium text-gray-400 text-sm"},{key:"created_at",label:"Created At",class:"font-medium text-gray-400 text-sm"}],subscriptions:[],currentPage:1,perPage:5,search:"",showModal:!1,totalRows:1,loading:!0,isDeleting:!1,title:"Pan Africa Subscriptions",description:"Pan Africa; Original thinking, research help add to human knowledge",image:"https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png"}},head:function(){return{meta:[{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.title},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.image},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}},created:function(){this.fetchSubscriptions()},mounted:function(){this.totalRows=this.subscriptions.length},methods:{fetchSubscriptions:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,t.loading=!0,e.next=5,t.$axios.get("https://panafstrag.onrender.com/api/admin/subscription");case 5:n=e.sent,t.subscriptions=n.data,t.totalRows=n.data.length,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.$toast.error("Something went wrong, please try again.").goAway(1500);case 13:return e.prev=13,t.loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))()},goBack:function(){this.$router.go(-1)}},computed:{filteredSubscriptions:function(){var t=this;return this.subscriptions.filter((function(e){var n,r,o,l,c=null===(n=t.search)||void 0===n||null===(r=n.toLowerCase)||void 0===r?void 0:r.call(n);return null==e||null===(o=e.email)||void 0===o||null===(l=o.toLowerCase)||void 0===l?void 0:l.call(o).includes(c)}))}}}),l=(n(415),n(12)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("Transition",{attrs:{name:"fade"}},[e("b-container",[e("section",{staticClass:"text-white"},[e("div",{staticClass:"flex items-center justify-between my-3"},[e("button",{staticClass:"outline-none border bg-gray-200 text-black px-3 py-1 rounded-md text-sm",on:{click:function(e){return t.goBack()}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",viewBox:"0 0 24 24",fill:"none",stroke:"#747070","stroke-width":"2","stroke-linecap":"square","stroke-linejoin":"bevel"}},[e("path",{attrs:{d:"M19 12H6M12 5l-7 7 7 7"}})])])]),t._v(" "),e("div",{staticClass:"sm:flex-1 pb-0 mt-3"},[e("label",{staticClass:"sr-only",attrs:{for:"search"}},[t._v("Search")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"w-full rounded-tr-md rounded-tl-md outline-none bg-white p-3 text-gray-700 transition border focus:border-white focus:outline-none focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent",attrs:{type:"text",placeholder:"Search.."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),[e("b-table",{attrs:{outlined:"",striped:"","show-empty":"",responsive:"",items:t.filteredSubscriptions,fields:t.fields,busy:t.loading,"current-page":t.currentPage,"per-page":t.perPage},scopedSlots:t._u([{key:"table-busy",fn:function(){return[e("div",{staticClass:"text-center my-2"},[e("b-spinner",{staticClass:"align-middle"}),t._v(" "),e("small",[t._v("Loading...")])],1)]},proxy:!0},{key:"empty",fn:function(){return[e("p",{staticClass:"text-center text-sm text-secondary py-2"},[t._v("\n              "+t._s(t.search?'No Subscription found for search value: "'.concat(t.search,'"'):"No subscription available")+"\n            ")])]},proxy:!0},{key:"cell(sn)",fn:function(data){return[e("span",{staticClass:"font-medium py-2 text-sm"},[t._v("\n              "+t._s(data.index+1))])]}},{key:"cell(email)",fn:function(data){var n,r;return[e("span",{staticClass:"font-medium py-2 text-sm"},[t._v("\n              "+t._s(null!==(n=null==data||null===(r=data.item)||void 0===r?void 0:r.email)&&void 0!==n?n:"N/A")+"\n            ")])]}},{key:"cell(status)",fn:function(data){return[e("span",{staticClass:"font-medium py-2 text-sm text-green-500 font-medium",on:{click:function(e){return t.view(data)}}},[t._v("\n              subscribed\n            ")])]}},{key:"cell(created_at)",fn:function(data){return[e("span",{staticClass:"font-light py-2 text-sm"},[t._v(t._s(t.$moment(data.item.createdAt).format("L")))])]}}])}),t._v(" "),e("div",{staticClass:"flex justify-end items-end"},[e("b-pagination",{staticClass:"my-3",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,size:"md"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)]],2)])],1)}),[],!1,null,"1337b8d5",null);e.default=component.exports}}]);