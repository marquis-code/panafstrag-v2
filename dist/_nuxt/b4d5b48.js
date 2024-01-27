(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{366:function(t,e,n){var content=n(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("23205a2b",content,!0,{sourceMap:!1})},413:function(t,e,n){"use strict";n(366)},414:function(t,e,n){var r=n(29)((function(i){return i[1]}));r.push([t.i,".fade-enter-active[data-v-2dd03f79]{transition:all .3s cubic-bezier(.52,.02,.19,1.02) .15s}.fade-leave-active[data-v-2dd03f79]{transition:all .3s cubic-bezier(.52,.02,.19,1.02)}.fade-enter-from[data-v-2dd03f79]{opacity:0}.fade-enter-from[data-v-2dd03f79],.fade-leave-to[data-v-2dd03f79]{transform:scale(.8)}",""]),r.locals={},t.exports=r},469:function(t,e,n){"use strict";n.r(e);n(31),n(145),n(28),n(52),n(53);var r=n(9),o=(n(45),n(36),n(15),n(82),n(83),n(335)),l=n.n(o),c={name:"index",scrollToTop:!0,layout:"admin",data:function(){return{fields:[{key:"sn",label:"S/N",class:"font-medium text-gray-400 text-sm"},{key:"responsibility",label:"Responsibility",class:"font-medium text-gray-400 text-sm"},{key:"created_at",label:"Date Created",class:"font-medium text-gray-400 text-sm"},{key:"actions",label:"Actions",class:"font-medium text-end text-gray-400 text-sm"}],responsibilities:[],currentPage:1,perPage:5,search:"",showModal:!1,totalRows:1,loading:!0,isDeleting:!1,title:"Pan Africa Board Members",description:"Pan Africa; Original thinking, research help add to human knowledge",image:"https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png"}},head:function(){return{meta:[{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.title},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.image},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}},created:function(){this.fetchResponsibilities()},mounted:function(){this.totalRows=this.responsibilities.length},methods:{fetchResponsibilities:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,t.loading=!0,e.next=5,t.$axios.get("https://panafstrag.onrender.com/api/panAfrica/responsibilities");case 5:n=e.sent,t.responsibilities=n.data,t.totalRows=n.data.length,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.$toast.error("Something went wrong, please try again.").goAway(1500);case 13:return e.prev=13,t.loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))()},goBack:function(){this.$router.go(-1)},handleEdit:function(t){this.$router.push("/admin/responsibilities/".concat(t))},handleDelete:function(t){var e=this;l.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(n){n.value?e.triggerDeletion(t):e.$swal("Cancelled","Your file is still intact","info")}))},triggerDeletion:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios.delete("https://panafstrag.onrender.com/api/panAfrica/responsibilities/".concat(t));case 3:return n.sent,e.$toast.success("Responsibility has been removed").goAway(1500),n.next=7,e.fetchResponsibilities();case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),e.$toast.error(n.t0.response.data.errorMessage).goAway(1500);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))()}},computed:{filteredResponsibilities:function(){var t,e,n=null===(t=(e=this.search).toLowerCase)||void 0===t?void 0:t.call(e);return this.responsibilities.filter((function(t){var e,r;return null==t||null===(e=(r=t.description).toLowerCase)||void 0===e?void 0:e.call(r).includes(n)}))}}},d=(n(413),n(12)),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("Transition",{attrs:{name:"fade"}},[e("b-container",[e("section",{staticClass:"text-white"},[e("div",{staticClass:"flex items-center justify-between my-3"},[e("button",{staticClass:"outline-none border bg-gray-200 text-black px-3 py-1 rounded-md text-sm",on:{click:function(e){return t.goBack()}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",viewBox:"0 0 24 24",fill:"none",stroke:"#747070","stroke-width":"2","stroke-linecap":"square","stroke-linejoin":"bevel"}},[e("path",{attrs:{d:"M19 12H6M12 5l-7 7 7 7"}})])]),t._v(" "),e("button",{staticClass:"text-gray-400 rounded-md border bg-black text-white text-sm px-3 py-2",on:{click:function(e){return t.$router.push("/admin/responsibilities/create")}}},[t._v("\n          Create Responsibilities\n        ")])]),t._v(" "),e("div",{staticClass:"sm:flex-1 pb-0 mt-3"},[e("label",{staticClass:"sr-only",attrs:{for:"search"}},[t._v("Search")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"w-full rounded-tr-md rounded-tl-md outline-none bg-white p-3 text-gray-700 transition border focus:border-white focus:outline-none focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent",attrs:{type:"text",placeholder:"Search.."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),[e("b-table",{attrs:{outlined:"",striped:"","show-empty":"",responsive:"",items:t.filteredResponsibilities,fields:t.fields,busy:t.loading,"current-page":t.currentPage,"per-page":t.perPage},scopedSlots:t._u([{key:"table-busy",fn:function(){return[e("div",{staticClass:"text-center my-2"},[e("b-spinner",{staticClass:"align-middle"}),t._v(" "),e("small",[t._v("Loading...")])],1)]},proxy:!0},{key:"empty",fn:function(){return[e("p",{staticClass:"text-center text-secondary py-2"},[t._v("\n              "+t._s(t.search?'No responsibilities found for search value: "'.concat(t.search,'"'):"No responsibilities available")+"\n            ")])]},proxy:!0},{key:"cell(sn)",fn:function(data){return[e("span",{staticClass:"font-medium py-2 text-sm"},[t._v("\n              "+t._s(data.index+1))])]}},{key:"cell(responsibility)",fn:function(data){return[e("span",{staticClass:"font-light py-2 text-sm"},[t._v("\n              "+t._s(data.item.description&&data.item.description.length>100?data.item.description.slice(0,100)+"...":data.item.description)+"\n            ")])]}},{key:"cell(created_at)",fn:function(data){return[e("span",{staticClass:"font-light py-2 text-sm"},[t._v(t._s(t.$moment(data.item.createdAt).format("L")))]),t._v("`\n          ")]}},{key:"cell(actions)",fn:function(data){return[e("div",{staticClass:"flex items-center space-x-3 py-2"},[e("svg",{staticClass:"cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",viewBox:"0 0 24 24",fill:"none",stroke:"#74d321","stroke-width":"2","stroke-linecap":"square","stroke-linejoin":"bevel"},on:{click:function(e){return t.handleEdit(data.item._id)}}},[e("path",{attrs:{d:"M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"}}),t._v(" "),e("polygon",{attrs:{points:"18 2 22 6 12 16 8 16 8 12 18 2"}})]),t._v(" "),e("svg",{staticClass:"cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",viewBox:"0 0 24 24",fill:"none",stroke:"#d33a21","stroke-width":"2","stroke-linecap":"square","stroke-linejoin":"bevel"},on:{click:function(e){return t.handleDelete(data.item._id)}}},[e("polyline",{attrs:{points:"3 6 5 6 21 6"}}),t._v(" "),e("path",{attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}),t._v(" "),e("line",{attrs:{x1:"10",y1:"11",x2:"10",y2:"17"}}),t._v(" "),e("line",{attrs:{x1:"14",y1:"11",x2:"14",y2:"17"}})])])]}}])}),t._v(" "),e("div",{staticClass:"flex justify-end items-end"},[e("b-pagination",{staticClass:"my-3",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,size:"md"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)]],2)])],1)}),[],!1,null,"2dd03f79",null);e.default=component.exports}}]);