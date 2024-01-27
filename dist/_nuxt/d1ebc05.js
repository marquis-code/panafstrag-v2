(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{365:function(t,e,r){var content=r(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(30).default)("4d9e8668",content,!0,{sourceMap:!1})},411:function(t,e,r){"use strict";r(365)},412:function(t,e,r){var n=r(29)((function(i){return i[1]}));n.push([t.i,".fade-enter-active[data-v-2395645c]{transition:all .3s cubic-bezier(.52,.02,.19,1.02) .15s}.fade-leave-active[data-v-2395645c]{transition:all .3s cubic-bezier(.52,.02,.19,1.02)}.fade-enter-from[data-v-2395645c]{opacity:0}.fade-enter-from[data-v-2395645c],.fade-leave-to[data-v-2395645c]{transform:scale(.8)}",""]),n.locals={},t.exports=n},468:function(t,e,r){"use strict";r.r(e);r(31),r(145),r(53),r(84);var n=r(9),o=(r(45),r(28),r(52),r(36),r(15),r(82),r(83),r(335)),l=r.n(o),m={name:"objective",scrollToTop:!0,layout:"admin",data:function(){return{fields:[{key:"sn",label:"S/N",class:"font-medium text-gray-400 text-sm"},{key:"title",label:"Title",class:"font-medium text-gray-400 text-sm"},{key:"theme",label:"Theme",class:"font-medium text-gray-400 text-sm"},{key:"video_upload",label:"Video Upload",class:"font-medium text-gray-400 text-sm"},{key:"file_uploads",label:"File Uploads",class:"font-medium text-gray-400 text-sm"},{key:"zoom_url",label:"Zoom Link",class:"font-medium text-gray-400 text-sm"},{key:"status",label:"Status",class:"font-medium text-gray-400 text-sm"},{key:"start_date",label:"Start Date",class:"font-medium text-gray-400 text-sm"},{key:"end_date",label:"End Date",class:"font-medium text-gray-400 text-sm"},{key:"actions",label:"Actions",class:"font-medium text-end text-gray-400"}],programmes:[],currentPage:1,perPage:7,search:"",showModal:!1,totalRows:1,loading:!0,isDeleting:!1,programmeData:{},title:"Pan Africa Board Members",description:"Pan Africa; Original thinking, research help add to human knowledge",image:"https://res.cloudinary.com/marquis/image/upload/v1668940037/enagoshtazxadezqqjrj.png"}},head:function(){return{meta:[{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.title},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image},{hid:"og:image:secure_url",property:"og:image:secure_url",content:this.image},{hid:"og:image:alt",property:"og:image:alt",content:this.title}]}},created:function(){this.fetchProgrammes()},mounted:function(){this.totalRows=this.programmes.length},methods:{viewProgramme:function(t){this.programmeData=t,this.$bvModal.show("programmeModal")},fetchProgrammes:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,t.loading=!0,e.next=5,t.$axios.get("https://panafstrag.onrender.com/api/panAfrica/programmes");case 5:r=e.sent,t.programmes=r.data,t.totalRows=r.data.length,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),t.$toast.error("Something went wrong, please try again.").goAway(1500);case 13:return e.prev=13,t.loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})))()},goBack:function(){this.$router.go(-1)},handleDelete:function(t){var e=this;l.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(r){r.value?e.triggerDeletion(t):e.$swal("Cancelled","Your file is still intact","info")}))},triggerDeletion:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.delete("https://panafstrag.onrender.com/api/panAfrica/programmes/".concat(t));case 3:return e.$toast.success("Programme has been removed").goAway(1500),r.next=6,e.fetchProgrammes();case 6:r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),e.$toast.error(r.t0.response.data.errorMessage).goAway(1500);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})))()},handleEdit:function(t){this.$router.push("/admin/programmes/".concat(t))}},computed:{filteredProgrammes:function(){var t=this;return this.programmes.filter((function(e){var r,n,o,l,m,c,d,v,f=null===(r=t.search)||void 0===r||null===(n=r.toLowerCase)||void 0===n?void 0:n.call(r);return(null==e||null===(o=e.description)||void 0===o||null===(l=o.toLowerCase)||void 0===l?void 0:l.call(o).includes(f))||(null==e||null===(m=e.title)||void 0===m||null===(c=m.toLowerCase)||void 0===c?void 0:c.call(m).includes(f))||(null==e||null===(d=e.theme)||void 0===d||null===(v=d.toLowerCase)||void 0===v?void 0:v.call(d).includes(f))}))}}},c=(r(411),r(12)),component=Object(c.a)(m,(function(){var t=this,e=t._self._c;return e("main",[e("Transition",{attrs:{name:"fade"}},[e("b-container",[e("section",{staticClass:"text-white"},[e("div",{staticClass:"flex items-center justify-between my-3"},[e("button",{staticClass:"outline-none border bg-gray-200 text-black px-3 py-1 rounded-md text-sm",on:{click:function(e){return t.goBack()}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",viewBox:"0 0 24 24",fill:"none",stroke:"#747070","stroke-width":"2","stroke-linecap":"square","stroke-linejoin":"bevel"}},[e("path",{attrs:{d:"M19 12H6M12 5l-7 7 7 7"}})])]),t._v(" "),e("button",{staticClass:"text-gray-400 rounded-md border bg-black text-white text-sm px-3 py-2",on:{click:function(e){return t.$router.push("/admin/programmes/create")}}},[t._v("\n            Create Programme\n          ")])]),t._v(" "),e("div",{staticClass:"sm:flex-1 pb-0 mt-3"},[e("label",{staticClass:"sr-only",attrs:{for:"search"}},[t._v("Search")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"w-full rounded-tr-md rounded-tl-md outline-none bg-white p-3 text-gray-700 transition border focus:border-white focus:outline-none focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-transparent",attrs:{type:"text",placeholder:"Search.."},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._v(" "),e("b-card",{staticClass:"mt-3"},[e("b-table",{attrs:{striped:"","show-empty":"",responsive:"",items:t.filteredProgrammes,fields:t.fields,busy:t.loading,"current-page":t.currentPage,"per-page":t.perPage},on:{"row-clicked":t.viewProgramme},scopedSlots:t._u([{key:"table-busy",fn:function(){return[e("div",{staticClass:"text-center my-2 cursor-pointer"},[e("b-spinner",{staticClass:"align-middle"}),t._v(" "),e("small",[t._v("Loading...")])],1)]},proxy:!0},{key:"empty",fn:function(){return[e("p",{staticClass:"text-center text-sm text-secondary py-2 cursor-pointer"},[t._v("\n                "+t._s(t.search?'No programmes found for search value: "'.concat(t.search,'"'):"No programmes available")+"\n              ")])]},proxy:!0},{key:"cell(sn)",fn:function(data){return[e("span",{staticClass:"font-medium py-2 text-sm cursor-pointer"},[t._v("\n                "+t._s(data.index+1))])]}},{key:"cell(title)",fn:function(data){var r;return[e("span",{staticClass:"font-medium py-2 text-sm cursor-pointer"},[t._v("\n                "+t._s("null"===(null==data||null===(r=data.item)||void 0===r?void 0:r.title)?"N/A":data.item.title&&data.item.title.length>20?data.item.title.slice(0,20)+"...":data.item.title)+"\n              ")])]}},{key:"cell(theme)",fn:function(data){var r;return[e("span",{staticClass:"font-medium py-2 text-sm cursor-pointer"},[t._v("\n                "+t._s("null"===(null==data||null===(r=data.item)||void 0===r?void 0:r.theme)?"N/A":data.item.theme&&data.item.theme.length>20?data.item.theme.slice(0,20)+"...":data.item.theme))])]}},{key:"cell(video_upload)",fn:function(data){var r;return[e("span",{staticClass:"font-medium py-2 text-sm"},[t._v("\n                "+t._s(null!=data&&null!==(r=data.item)&&void 0!==r&&r.uploadedVideoUrl?"YES":"NO"))])]}},{key:"cell(file_uploads)",fn:function(data){var r,n,o;return[e("span",{staticClass:"font-medium py-2 text-sm cursor-pointer"},[t._v("\n                "+t._s(null!=data&&null!==(r=data.item)&&void 0!==r&&r.uploadedDocumentFiles?"".concat(null==data||null===(n=data.item)||void 0===n?void 0:n.uploadedDocumentFiles.length," ").concat((null==data||null===(o=data.item)||void 0===o?void 0:o.uploadedDocumentFiles.length)>1?"files":"file"," uploaded"):"NO"))])]}},{key:"cell(zoom_url)",fn:function(data){var r,n;return[e("a",{staticClass:"font-medium py-2 text-sm",attrs:{href:"zoom ".concat(null==data||null===(r=data.item)||void 0===r?void 0:r.zoomMeetingUrl)}},[t._v("\n                "+t._s(null==data||null===(n=data.item)||void 0===n?void 0:n.zoomMeetingUrl))])]}},{key:"cell(status)",fn:function(data){var r,n;return[e("span",{staticClass:"font-medium py-2 text-sm"},[t._v(t._s(null!==(r=null==data||null===(n=data.item)||void 0===n?void 0:n.status)&&void 0!==r?r:"N/A"))])]}},{key:"cell(start_date)",fn:function(data){return[e("span",{staticClass:"font-medium py-2 text-sm"},[t._v(t._s(t.$moment(data.item.endDate).format("L")))])]}},{key:"cell(end_date)",fn:function(data){return[e("span",{staticClass:"font-medium py-2 text-sm"},[t._v(t._s(t.$moment(data.item.endDate).format("L")))])]}},{key:"cell(actions)",fn:function(data){return[e("b-dropdown",{staticClass:"position-relative text-center w-100",attrs:{size:"sm",variant:"link","toggle-class":"text-decoration-none",disabled:t.downloading,"no-caret":!0,right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[e("div",{staticClass:"flex justify-center items-center"},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"#000000","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[e("circle",{attrs:{cx:"12",cy:"12",r:"1"}}),t._v(" "),e("circle",{attrs:{cx:"12",cy:"5",r:"1"}}),t._v(" "),e("circle",{attrs:{cx:"12",cy:"19",r:"1"}})])])]},proxy:!0}],null,!0)},[t._v(" "),e("b-dropdown-item",{on:{click:function(e){return t.handleEdit(data.item._id)}}},[e("div",{staticClass:"flex items-center space-x-2"},[e("p",[e("svg",{staticClass:"cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#74d321","stroke-width":"2","stroke-linecap":"square","stroke-linejoin":"bevel"}},[e("path",{attrs:{d:"M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"}}),t._v(" "),e("polygon",{attrs:{points:"18 2 22 6 12 16 8 16 8 12 18 2"}})])]),t._v(" "),e("p",{staticClass:"text-sm"},[t._v("Edit programme")])])]),t._v(" "),e("b-dropdown-item",{on:{click:function(e){return t.handleDelete(data.item._id)}}},[e("div",{staticClass:"flex items-center space-x-2"},[e("p",[e("svg",{staticClass:"cursor-pointer",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#d33a21","stroke-width":"2","stroke-linecap":"square","stroke-linejoin":"bevel"}},[e("polyline",{attrs:{points:"3 6 5 6 21 6"}}),t._v(" "),e("path",{attrs:{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}}),t._v(" "),e("line",{attrs:{x1:"10",y1:"11",x2:"10",y2:"17"}}),t._v(" "),e("line",{attrs:{x1:"14",y1:"11",x2:"14",y2:"17"}})])]),t._v(" "),e("p",{staticClass:"text-sm"},[t._v("Delete programme")])])])],1)]}}])}),t._v(" "),e("div",{staticClass:"flex justify-end items-end"},[e("b-pagination",{staticClass:"my-3",attrs:{"total-rows":t.totalRows,"per-page":t.perPage,size:"md"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)],1)],1)])],1),t._v(" "),e("b-modal",{attrs:{"no-close-on-backdrop":"","no-close-on-esc":"","no-stacking":"","hide-footer":"",id:"programmeModal"},scopedSlots:t._u([{key:"modal-title",fn:function(){return[e("h1",[t._v("Programme Details:")])]},proxy:!0}])},[t._v(" "),t.programmeData.title?e("div",[e("label",{staticClass:"font-medium text-sm"},[t._v("Programme Title:")]),t._v(" "),e("h4",{staticClass:"font-medium"},[t._v("\n        "+t._s(t.programmeData.title)+"\n      ")])]):t._e(),t._v(" "),"null"!==t.programmeData.theme?e("div",{staticClass:"mt-4"},[e("label",{staticClass:"font-medium text-sm"},[t._v("Programme Theme:")]),t._v(" "),e("p",{staticClass:"text-sm"},[t._v("\n        "+t._s(t.programmeData.theme)+"\n      ")])]):t._e(),t._v(" "),t.programmeData.startDate?e("div",{staticClass:"mt-4"},[e("label",{staticClass:"font-medium text-sm"},[t._v("Programme Start Date:")]),t._v(" "),e("p",{staticClass:"text-sm"},[t._v("\n        "+t._s(t.programmeData.startDate)+"\n      ")])]):t._e(),t._v(" "),t.programmeData.endDate?e("div",{staticClass:"mt-4"},[e("label",{staticClass:"font-medium text-sm"},[t._v("Programme End Date:")]),t._v(" "),e("p",{staticClass:"text-sm"},[t._v("\n        "+t._s(t.programmeData.endDate)+"\n      ")])]):t._e(),t._v(" "),t.programmeData.uploadedVideoUrl?e("div",{staticClass:"mt-4"},[e("label",{staticClass:"font-medium text-sm"},[t._v("Uploaded recordings:")]),t._v(" "),e("p",{staticClass:"text-sm"},[t._v("\n        "+t._s(t.programmeData.uploadedVideoUrl?"YES":"NO")+"\n      ")])]):t._e(),t._v(" "),t.programmeData.endDate?e("div",{staticClass:"mt-4"},[e("label",{staticClass:"font-medium text-sm"},[t._v("Uploaded Files:")]),t._v(" "),e("p",{staticClass:"text-sm"},[t._v("\n        "+t._s(t.programmeData.uploadedDocumentFiles?"".concat(t.programmeData.uploadedDocumentFiles.length," ").concat(t.programmeData.uploadedDocumentFiles.length>1?"files":"file"," uploaded"):"NO")+"\n      ")])]):t._e(),t._v(" "),t.programmeData.status?e("div",{staticClass:"mt-4"},[e("label",{staticClass:"font-medium text-sm"},[t._v("Programme Status:")]),t._v(" "),e("p",{staticClass:"text-sm",class:"completed"===t.programmeData.status?"text-green-500":"pending"===t.programmeData.status?"text-yellow-500":"active"===t.programmeData.status?"text-orange-500":""},[t._v("\n        "+t._s(t.programmeData.status)+"\n      ")])]):t._e(),t._v(" "),t.programmeData.zoomMeetingUrl?e("div",{staticClass:"mt-4"},[e("label",{staticClass:"font-medium text-sm"},[t._v("Zoom Url")]),t._v(" "),e("p",{staticClass:"text-sm"},[t._v("\n        "+t._s(t.programmeData.zoomMeetingUrl)+"\n      ")])]):t._e(),t._v(" "),e("div",{staticClass:"flex justify-end items-center"},[e("button",{staticClass:"group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring",on:{click:function(e){return t.$bvModal.hide("programmeModal")}}},[e("span",{staticClass:"absolute inset-0 border border-red-600 group-active:border-red-500 rounded-full"}),t._v(" "),e("span",{staticClass:"block border border-red-600 bg-red-600 rounded-full px-12 py-2 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"},[t._v("\n          Close\n        ")])])])])],1)}),[],!1,null,"2395645c",null);e.default=component.exports}}]);