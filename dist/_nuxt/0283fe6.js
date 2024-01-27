(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{377:function(e,t,r){var content=r(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(30).default)("c8edee9a",content,!0,{sourceMap:!1})},436:function(e,t,r){"use strict";r(377)},437:function(e,t,r){var o=r(29)((function(i){return i[1]}));o.push([e.i,".fade-enter-active[data-v-d31d5ccc]{transition:all .3s cubic-bezier(.52,.02,.19,1.02) .15s}.fade-leave-active[data-v-d31d5ccc]{transition:all .3s cubic-bezier(.52,.02,.19,1.02)}.fade-enter-from[data-v-d31d5ccc]{opacity:0}.fade-enter-from[data-v-d31d5ccc],.fade-leave-to[data-v-d31d5ccc]{transform:scale(.8)}",""]),o.locals={},e.exports=o},479:function(e,t,r){"use strict";r.r(t);var o=r(9),n=(r(45),r(337),{name:"programmes",layout:"admin",data:function(){return{form:{title:"",theme:"",startDate:"",endDate:"",uploadedVideoUrl:"",zoomMeetingUrl:"",programmes:null,status:""},filesLength:null,loading:!1}},created:function(){this.fetchProgram()},methods:{resetForm:function(){this.form.title=null,this.form.theme=null,this.form.endDate=null,this.form.startDate=null,this.form.zoomMeetingUrl=null,this.form.status=null,this.form.uploadedVideoUrl=null,this.form.programmes=null,this.filesLength=null},goBack:function(){this.$router.go(-1)},handleProgrammeUpload:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.form.programmes=e.target.files,t.filesLength=e.target.files.length;case 2:case"end":return r.stop()}}),r)})))()},handleSubmit:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,r=new FormData,t.prev=2,r.append("title",e.form.title),r.append("theme",e.form.theme),r.append("status",e.form.status),r.append("startDate",e.form.startDate),r.append("zoomMeetingUrl",e.form.zoomMeetingUrl),r.append("endDate",e.form.endDate),r.append("uploadedVideoUrl",e.form.uploadedVideoUrl),t.next=12,e.$axios.put("https://panafstrag.onrender.com/api/panAfrica/programmes/".concat(e.$route.params.id),r);case 12:e.$toast.success("Programme was successfully updated").goAway(1500),e.$router.push("/admin/programmes"),e.loading=!1,t.next=21;break;case 17:t.prev=17,t.t0=t.catch(2),e.$toast.error(null===t.t0||void 0===t.t0||null===(o=t.t0.response)||void 0===o||null===(n=o.data)||void 0===n?void 0:n.errorMessage).goAway(1500),e.loading=!1;case 21:case"end":return t.stop()}}),t,null,[[2,17]])})))()},fetchProgram:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,t.next=4,e.$axios.get("https://panafstrag.onrender.com/api/panAfrica/programmes/".concat(e.$route.params.id));case 4:r=t.sent,e.form=null==r?void 0:r.data,t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.$toast.error("Something went wrong, please try again.").goAway(1500);case 11:return t.prev=11,e.loading=!1,t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))()}}}),l=(r(436),r(12)),component=Object(l.a)(n,(function(){var e=this,t=e._self._c;return t("Transition",{attrs:{name:"fade"}},[t("b-container",[t("button",{staticClass:"outline-none mt-2 border bg-gray-200 text-black px-3 py-1 rounded-md text-sm",on:{click:function(t){return e.goBack()}}},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",viewBox:"0 0 24 24",fill:"none",stroke:"#747070","stroke-width":"2","stroke-linecap":"square","stroke-linejoin":"bevel"}},[t("path",{attrs:{d:"M19 12H6M12 5l-7 7 7 7"}})])]),e._v(" "),t("h2",{staticClass:"text-xl my-6 font-medium text-black"},[e._v("Update programme")]),e._v(" "),t("div",{staticClass:"md:bg-white md:p-7 md:w-9/12 md:shadow-md md:rounded-md md:border md:border-2 lg:mt-4 mb-6 p-3 pb-6 lg:p-6"},[t("form",{staticClass:"space-y-6 w-full",attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.handleSubmit.apply(null,arguments)}}},[t("div",[t("label",{staticClass:"text-sm text-gray-400",attrs:{for:"title"}},[e._v("Title")]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.title,expression:"form.title"}],staticClass:"w-full rounded-lg border border-gray-200 outline-none p-3 resize-none text-sm",attrs:{placeholder:"Describe programme title...",id:"title",rows:"4"},domProps:{value:e.form.title},on:{input:function(t){t.target.composing||e.$set(e.form,"title",t.target.value)}}})]),e._v(" "),t("div",[t("label",{staticClass:"text-sm text-gray-400",attrs:{for:"theme"}},[e._v("Theme")]),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.theme,expression:"form.theme"}],staticClass:"w-full rounded-lg border border-gray-200 outline-none p-3 resize-none text-sm",attrs:{placeholder:"Describe programme theme...",id:"theme",rows:"4"},domProps:{value:e.form.theme},on:{input:function(t){t.target.composing||e.$set(e.form,"theme",t.target.value)}}})]),e._v(" "),t("div",[t("label",{staticClass:"text-sm text-gray-400",attrs:{for:"zoomMeetingUrl"}},[e._v("Zoom Meeting Link")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.zoomMeetingUrl,expression:"form.zoomMeetingUrl"}],staticClass:"w-full rounded-lg border border-gray-200 outline-none p-3 text-sm",attrs:{pattern:"https://.*",type:"url",placeholder:"Enter programme zoom meeting url",id:"zoomMeetingUrl"},domProps:{value:e.form.zoomMeetingUrl},on:{input:function(t){t.target.composing||e.$set(e.form,"zoomMeetingUrl",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"md:flex justify-between items-center space-y-7 md:space-y-0 md:space-x-3"},[t("div",{staticClass:"w-full"},[t("label",{staticClass:"text-sm text-gray-400",attrs:{for:"date"}},[e._v("Start date")]),e._v(" "),t("client-only",[t("date-picker",{staticClass:"w-full rounded-lg border border-gray-200 outline-none p-3 text-sm",attrs:{placeholder:"Select start date"},model:{value:e.form.startDate,callback:function(t){e.$set(e.form,"startDate",t)},expression:"form.startDate"}})],1)],1),e._v(" "),t("div",{staticClass:"w-full"},[t("label",{staticClass:"text-sm text-gray-400",attrs:{for:"date"}},[e._v("End date")]),e._v(" "),t("client-only",[t("date-picker",{staticClass:"w-full rounded-lg border border-gray-200 outline-none p-3 text-sm",attrs:{placeholder:"Select end date"},model:{value:e.form.endDate,callback:function(t){e.$set(e.form,"endDate",t)},expression:"form.endDate"}})],1)],1)]),e._v(" "),t("div",{staticClass:"md:flex justify-between items-center space-y-7 md:space-y-0 md:space-x-3"},[t("div",{staticClass:"mb-3 w-full mt-3"},[t("label",{staticClass:"text-sm text-gray-400",attrs:{for:"uploadedVideoUrl"}},[e._v("Video Url")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.uploadedVideoUrl,expression:"form.uploadedVideoUrl"}],staticClass:"w-full rounded-lg border border-gray-200 outline-none p-3 text-sm",attrs:{type:"text",placeholder:"https://www.youtube.com....",id:"uploadedVideoUrl"},domProps:{value:e.form.uploadedVideoUrl},on:{input:function(t){t.target.composing||e.$set(e.form,"uploadedVideoUrl",t.target.value)}}})]),e._v(" "),t("div",{staticClass:"mb-3 w-full"},[t("label",{staticClass:"text-sm text-gray-400",attrs:{for:"status"}},[e._v("Program status")]),e._v(" "),t("br"),e._v(" "),t("small",[e._v("Accepted values includes: "),t("b",[e._v("active")]),e._v(", "),t("b",[e._v("pending")]),e._v(",\n              "),t("b",[e._v("completed")]),e._v(".")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.form.status,expression:"form.status"}],staticClass:"w-full rounded-lg border border-gray-200 outline-none p-3 text-sm",attrs:{type:"text",placeholder:"Enter program status",id:"status"},domProps:{value:e.form.status},on:{input:function(t){t.target.composing||e.$set(e.form,"status",t.target.value)}}})])]),e._v(" "),t("div",{staticClass:"flex justify-center items-center flex-col"},[e.filesLength?t("div",{staticClass:"flex justify-center items-center space-x-2 py-3"},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"27",height:"27",viewBox:"0 0 24 24",fill:"none",stroke:"#e0dada","stroke-width":"1.5","stroke-linecap":"butt","stroke-linejoin":"bevel"}},[t("path",{attrs:{d:"M13 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V9l-7-7z"}}),e._v(" "),t("path",{attrs:{d:"M13 3v6h6"}})]),e._v(" "),t("span",{staticClass:"text-green-500 font-medium text-sm"},[e._v(e._s(e.filesLength)+" has been selected")])]):t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"27",height:"27",viewBox:"0 0 24 24",fill:"none",stroke:"#e0dada","stroke-width":"1.5","stroke-linecap":"butt","stroke-linejoin":"bevel"}},[t("path",{attrs:{d:"M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2-2.4-3.5-4.4-3.5h-1.2c-.7-3-3.2-5.2-6.2-5.6-3-.3-5.9 1.3-7.3 4-1.2 2.5-1 6.5.5 8.8m8.7-1.6V21"}}),e._v(" "),t("path",{attrs:{d:"M16 16l-4-4-4 4"}})]),e._v(" "),t("input",{staticClass:"hidden",attrs:{disabled:"true",multiple:"",accept:"image/*",type:"file",id:"archive"},on:{change:e.handleProgrammeUpload}}),e._v(" "),t("label",{staticClass:"text-indigo-700 text-sm font-medium cursor-pointer",attrs:{for:"archive"}},[e._v("\n            Click to update uploaded progrmmes\n          ")])]),e._v(" "),t("div",{staticClass:"mt-3 flex justify-end items-end"},[t("button",{staticClass:"inline-flex items-center justify-center rounded-lg bg-black px-3 py-2 text-white w-full md:w-3/12",class:[e.loading?"cursor-not-allowed opacity-20":""],attrs:{disabled:e.loading,type:"submit"}},[t("span",{staticClass:"font-medium"},[e._v("\n              "+e._s(e.loading?"processing...":"Continue")+"\n            ")]),e._v(" "),t("svg",{staticClass:"ml-3 h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[t("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"}})])])])])])])],1)}),[],!1,null,"d31d5ccc",null);t.default=component.exports}}]);