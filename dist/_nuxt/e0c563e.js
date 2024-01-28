(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{388:function(t,e,r){var content=r(442);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(27).default)("32f8dbc3",content,!0,{sourceMap:!1})},441:function(t,e,r){"use strict";r(388)},442:function(t,e,r){var n=r(26)((function(i){return i[1]}));n.push([t.i,".fade-enter-active[data-v-45fc6678]{transition:all .3s cubic-bezier(.52,.02,.19,1.02) .15s}.fade-leave-active[data-v-45fc6678]{transition:all .3s cubic-bezier(.52,.02,.19,1.02)}.fade-enter-from[data-v-45fc6678]{opacity:0}.fade-enter-from[data-v-45fc6678],.fade-leave-to[data-v-45fc6678]{transform:scale(.8)}",""]),n.locals={},t.exports=n},488:function(t,e,r){"use strict";r.r(e);r(30),r(52);var n=r(10),o=(r(53),{name:"archives",layout:"admin",data:function(){return{form:{description:"",title:"",url:""},loading:!1}},created:function(){this.fetchMeeting()},methods:{resetForm:function(){this.form.description=null,this.form.url=null,this.form.title=null},goBack:function(){this.$router.go(-1)},handleSubmit:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$axios.put("https://panafstrag.onrender.com/api/panAfrica/meeting/".concat(t.$route.params.id),t.form);case 4:t.$toast.success("Meeting was successfully updated").goAway(1500),t.$router.push("/admin/meetings"),t.loading=!1,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),t.$toast.error(e.t0.response.data.errorMessage).goAway(1500),t.loading=!1;case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))()},fetchMeeting:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$axios.get("https://panafstrag.onrender.com/api/panAfrica/meeting/".concat(t.$route.params.id));case 4:r=e.sent,t.form=r.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t.$toast.error("Something went wrong, please try again.").goAway(1500);case 11:return e.prev=11,t.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})))()}}}),l=(r(441),r(9)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("Transition",{attrs:{name:"fade"}},[e("section",{},[e("b-container",[e("button",{staticClass:"outline-none mt-2 border bg-gray-200 text-black px-3 py-1 rounded-md text-sm",on:{click:function(e){return t.goBack()}}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"23",height:"23",viewBox:"0 0 24 24",fill:"none",stroke:"#747070","stroke-width":"2","stroke-linecap":"square","stroke-linejoin":"bevel"}},[e("path",{attrs:{d:"M19 12H6M12 5l-7 7 7 7"}})])]),t._v(" "),e("h2",{staticClass:"text-xl my-6 font-medium text-black"},[t._v("Update meeting")]),t._v(" "),e("div",{staticClass:"md:bg-white md:p-7 md:w-9/12 md:shadow-md md:rounded-md md:border lg:mt-4 mb-6 p-3 pb-6 lg:p-6 mt-6"},[e("form",{staticClass:"space-y-6 w-full",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.handleSubmit.apply(null,arguments)}}},[e("div",[e("label",{staticClass:"sr-only",attrs:{for:"title"}},[t._v("Description")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.title,expression:"form.title"}],staticClass:"w-full rounded-lg border outline-none p-3 text-sm",attrs:{placeholder:"Enter meeting title here...",rows:"2",id:"title"},domProps:{value:t.form.title},on:{input:function(e){e.target.composing||t.$set(t.form,"title",e.target.value)}}})]),t._v(" "),e("div",[e("label",{staticClass:"sr-only",attrs:{for:"description"}},[t._v("Description")]),t._v(" "),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.description,expression:"form.description"}],staticClass:"w-full rounded-lg border outline-none p-3 text-sm",attrs:{placeholder:"Enter objectives description here...",rows:"3",id:"description"},domProps:{value:t.form.description},on:{input:function(e){e.target.composing||t.$set(t.form,"description",e.target.value)}}})]),t._v(" "),e("div",[e("label",{staticClass:"sr-only",attrs:{for:"url"}},[t._v("Meeting Url")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.url,expression:"form.url"}],staticClass:"w-full rounded-lg border outline-none p-3 text-sm",attrs:{placeholder:"Enter meeting url here...",id:"url"},domProps:{value:t.form.url},on:{input:function(e){e.target.composing||t.$set(t.form,"url",e.target.value)}}})]),t._v(" "),e("div",{staticClass:"mt-3 flex justify-end items-center"},[e("button",{staticClass:"inline-flex items-center justify-center rounded-lg bg-black px-3 py-2 w-full md:w-3/12 text-white",class:[t.loading?"cursor-not-allowed opacity-20":""],attrs:{disabled:t.loading,type:"submit"}},[e("span",{staticClass:"font-medium"},[t._v("\n                "+t._s(t.loading?"processing...":"Continue"))]),t._v(" "),e("svg",{staticClass:"ml-3 h-5 w-5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M14 5l7 7m0 0l-7 7m7-7H3"}})])])])])])])],1)])}),[],!1,null,"45fc6678",null);e.default=component.exports}}]);