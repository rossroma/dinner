webpackJsonp([1],{100:function(e,t){},101:function(e,t,a){"use strict";function n(e){a(175),a(174)}var r=a(126),s=a(179),o=a(178),i=n,l=o(r.a,s.a,!1,i,"data-v-21c8e972",null);t.a=l.exports},124:function(e,t,a){"use strict";var n=a(52),r=a(180);n.a.use(r.a);var s=function(e,t){n.a.http.get("/"+e).then(function(e){200===e.status?t(e.body):console.log(e.status)})},o=function(e,t,a){n.a.http.post("/"+e,t).then(function(e){200===e.status?a(e.body):console.log(e.status)})},i=function(){return{set:function(e,t){window.localStorage.setItem(e,t)},get:function(e){return window.localStorage.getItem(e)},remove:function(e){window.localStorage.removeItem(e)}}},l=new n.a;l.get=s,l.post=o,l.storage=i,t.a=l},125:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(92),r=(a.n(n),a(75)),s=a.n(r),o=a(87),i=(a.n(o),a(71)),l=a.n(i),u=a(94),c=(a.n(u),a(77)),m=a.n(c),d=a(95),f=(a.n(d),a(78)),p=a.n(f),g=a(91),v=(a.n(g),a(16)),h=a.n(v),b=a(88),y=(a.n(b),a(72)),_=a.n(y),w=a(89),S=(a.n(w),a(73)),N=a.n(S),k=a(98),O=(a.n(k),a(81)),D=a.n(O),x=a(99),L=(a.n(x),a(82)),C=a.n(L),F=a(97),T=(a.n(F),a(80)),$=a.n(T),I=a(100),j=(a.n(I),a(83)),z=a.n(j),M=a(86),R=(a.n(M),a(70)),V=a.n(R),A=a(96),E=(a.n(A),a(79)),W=a.n(E),J=a(93),q=(a.n(J),a(76)),B=a.n(q),P=a(84),G=(a.n(P),a(31)),H=a.n(G),K=a(90),Q=(a.n(K),a(74)),U=a.n(Q),X=a(85),Y=(a.n(X),a(51)),Z=(a.n(Y),a(69)),ee=a.n(Z),te=a(52),ae=a(101);te.a.config.productionTip=!1,te.a.use(ee.a),te.a.use(U.a),te.a.use(H.a),te.a.use(B.a),te.a.use(W.a),te.a.use(V.a),te.a.use(z.a),te.a.use($.a),te.a.use(C.a),te.a.use(D.a),te.a.use(N.a),te.a.use(_.a),te.a.use(h.a),te.a.use(p.a),te.a.use(m.a),te.a.use(l.a),te.a.use(s.a),new te.a({el:"#app",render:function(e){return e(ae.a)}})},126:function(e,t,a){"use strict";var n=a(172),r=(a.n(n),a(163)),s=a.n(r),o=a(173),i=(a.n(o),a(51)),l=(a.n(i),a(164)),u=a.n(l),c=a(124);t.a={name:"app",data:function(){return{loading:!0,activeName:"orderList",tableData:[],dialogFormVisible:!1,dinnerStatus:!0,myDinnerStatus:!1,myName:"",loginStatus:!1,formOrder:{userName:"",type:1,count:1,others:""},rulesOrder:{userName:{required:!0,message:"请输入点餐人姓名！",trigger:"blur"}},formLogin:{password:""},rulesLogin:{password:{required:!0,message:"请输入管理密码！",trigger:"blur"}},pickDate:"",pickerOptions:{shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"前天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-1728e5),e.$emit("pick",t)}}]},autoWidth:window.innerWidth<500?"100%":"500px",smallScreen:window.innerWidth<500}},computed:{dinnerStatusText:function(){return this.dinnerStatus?"开启":"关闭"}},created:function(){this.getOrderList(),this.getLocalStorage()},methods:{getOrderList:function(e){var t=this;this.loading=!0;var a=void 0;a=e?"getAllDinner?date="+e:"getAllDinner",c.a.get(a,function(e){t.dinnerStatus=e.result.dinnerStatus,t.tableData=e.result.results,t.loginStatus=e.result.loginStatus,t.loading=!1,t.myName&&t.tableData.findIndex(function(e){return e.userName===t.myName})>-1&&(t.myDinnerStatus=!0)})},getLocalStorage:function(){var e=window.JSON.parse(c.a.storage().get("DINNER-userinfos"));e&&(this.formOrder.userName=this.myName=e.userName,this.formOrder.type=Number(e.type)||1,this.formOrder.count=Number(e.count)||1)},setLocalStorage:function(e){var t={userName:e.userName,type:e.type,count:e.count};t=window.JSON.stringify(t),c.a.storage().set("DINNER-userinfos",t)},handleSubmit:function(){var e=this;this.$refs.formOrder.validate(function(t){if(!t)return u()({type:"error",message:"输入有误，请检查后重新提交！"}),!1;-1!==e.tableData.findIndex(function(t){return t.userName===e.myName})||e.myDinnerStatus?u()({type:"error",message:"你已点餐，请勿重复提交！"}):e.orderSubmit()})},orderSubmit:function(){var e=this;this.myDinnerStatus=!0;var t=this.formOrder;c.a.post("addDinner",t,function(a){1===a.code?(u()({type:"success",message:a.msg}),e.getOrderList(),e.setLocalStorage(t),e.myName=t.userName):(e.myDinnerStatus=!1,u()({type:"error",message:a.msg}))})},handleSwitch:function(){c.a.get("toggleDinner",function(e){u()({type:"success",message:e.msg})})},handleTabClick:function(e){this.getOrderList()},login:function(){var e=this;this.$refs.formLogin.validate(function(t){if(!t)return u()({type:"error",message:"请输入管理密码！"}),!1;var a=e.formLogin;c.a.post("signin",a,function(t){1===t.code?(u()({type:"success",message:"登陆成功！"}),e.loginStatus=!0,e.dialogFormVisible=!1):u()({type:"error",message:"密码错误！"})})})},handleDelete:function(e){var t=this;s()("是否撤销此次点餐?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.deleteRow(e)}).catch(function(){})},deleteRow:function(e){var t=this,a="cancelDinner/"+e;c.a.get(a,function(e){1===e.code?(u()({type:"success",message:e.msg}),t.myDinnerStatus=!1,t.getOrderList()):u()({type:"error",message:e.msg})})},chooseMine:function(e){return e.row.userName===this.myName?"positive-row":""},getSummaries:function(){var e=0,t=0;return this.tableData.forEach(function(a){1===a.type?e+=a.count:t+=a.count}),["统计","米饭："+e,"馒头："+t]}},filters:{typeFilter:function(e){return 1===e?"米饭":"馒头"},timeFilter:function(e){return e.slice(-8)}}}},172:function(e,t){},173:function(e,t){},174:function(e,t){},175:function(e,t){},179:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("el-header",[a("h1",{staticClass:"title"},[e._v("逍邦网络点餐系统")]),e._v(" "),e.loginStatus?a("p",{staticClass:"login login-text"},[e._v("欢迎登录!")]):a("el-button",{staticClass:"login",attrs:{type:"text"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("登录")])],1),e._v(" "),a("el-main",[e.loginStatus?["orderList"===e.activeName?a("div",{staticClass:"dinner-status"},[a("el-switch",{staticClass:"switch",on:{change:e.handleSwitch},model:{value:e.dinnerStatus,callback:function(t){e.dinnerStatus=t},expression:"dinnerStatus"}}),e._v(" "),a("span",{staticClass:"text"},[e._v("点餐"+e._s(e.dinnerStatusText))])],1):a("el-date-picker",{staticClass:"date-picker",attrs:{size:"small",align:"right",type:"date",placeholder:"历史数据筛选","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd"},on:{change:e.getOrderList},model:{value:e.pickDate,callback:function(t){e.pickDate=t},expression:"pickDate"}})]:e._e(),e._v(" "),a("el-tabs",{staticClass:"tabs",on:{"tab-click":e.handleTabClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"已点餐列表",name:"orderList"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,"row-class-name":e.chooseMine,"show-summary":"","summary-method":e.getSummaries,"element-loading-text":"拼了老命在加载"}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userName",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{label:"主食"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(e._f("typeFilter")(t.row.type))+"\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"count",label:"数量"}}),e._v(" "),a("el-table-column",{attrs:{label:"时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(e._f("timeFilter")(t.row.createdAt))+"\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"others",label:"备注"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.userName===e.myName||e.loginStatus?a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){a.preventDefault(),e.handleDelete(t.row.objectId)}}},[e._v("\n                撤销\n              ")]):e._e()]}}])})],1)],1),e._v(" "),e.loginStatus?a("el-tab-pane",{attrs:{label:"历史记录",name:"historyLog"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,"show-summary":"","summary-method":e.getSummaries,"element-loading-text":"拼了老命在加载"}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userName",label:"姓名",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{label:"主食",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(e._f("typeFilter")(t.row.type))+"\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"count",label:"数量",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createdAt",label:"时间",width:"220"}}),e._v(" "),a("el-table-column",{attrs:{prop:"others",label:"备注"}})],1)],1):e._e()],1),e._v(" "),"orderList"===e.activeName?a("el-form",{ref:"formOrder",staticClass:"form-order",attrs:{inline:!0,model:e.formOrder,rules:e.rulesOrder}},[a("div",{staticClass:"row"},[a("el-form-item",{attrs:{prop:"userName"}},[a("el-input",{attrs:{size:"small",placeholder:"点餐人"},model:{value:e.formOrder.userName,callback:function(t){e.$set(e.formOrder,"userName",t)},expression:"formOrder.userName"}})],1),e._v(" "),a("el-form-item",[a("el-select",{attrs:{size:"small",placeholder:"主食"},model:{value:e.formOrder.type,callback:function(t){e.$set(e.formOrder,"type",t)},expression:"formOrder.type"}},[a("el-option",{attrs:{value:1,label:"米饭"}}),e._v(" "),a("el-option",{attrs:{value:2,label:"馒头"}})],1)],1),e._v(" "),a("el-form-item",[a("el-select",{attrs:{size:"small",placeholder:"主食数量"},model:{value:e.formOrder.count,callback:function(t){e.$set(e.formOrder,"count",t)},expression:"formOrder.count"}},[a("el-option",{attrs:{value:.5}}),e._v(" "),a("el-option",{attrs:{value:1}}),e._v(" "),a("el-option",{attrs:{value:2}})],1)],1)],1),e._v(" "),a("div",{staticClass:"row pc"},[a("el-form-item",[a("el-input",{staticClass:"textarea",attrs:{type:"textarea",rows:4,resize:"none",placeholder:"备注信息"},model:{value:e.formOrder.others,callback:function(t){e.$set(e.formOrder,"others",t)},expression:"formOrder.others"}})],1),e._v(" "),a("el-form-item",[e.dinnerStatus?a("a",{staticClass:"login-btn normal",class:{ordered:e.myDinnerStatus},attrs:{href:"javascript:;"},on:{click:e.handleSubmit}},[e._v("我要点餐")]):a("a",{staticClass:"login-btn closed",attrs:{href:"javascript:;"}},[e._v("点餐关闭")])])],1),e._v(" "),a("div",{staticClass:"mobile"},[e.dinnerStatus?a("a",{staticClass:"login-btn-m normal",class:{ordered:e.myDinnerStatus},attrs:{href:"javascript:;"},on:{click:e.handleSubmit}},[e._v("我要点餐")]):a("a",{staticClass:"login-btn-m closed",attrs:{href:"javascript:;"}},[e._v("点餐关闭")])])]):e._e()],2),e._v(" "),a("el-dialog",{attrs:{title:"管理员登录",width:e.autoWidth,fullscreen:e.smallScreen,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"formLogin",attrs:{model:e.formLogin,rules:e.rulesLogin}},[a("el-form-item",{attrs:{label:"管理密码",prop:"password"}},[a("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请输入管理密码"},model:{value:e.formLogin.password,callback:function(t){e.$set(e.formLogin,"password",t)},expression:"formLogin.password"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登 录")])],1)],1)],1)},r=[],s={render:n,staticRenderFns:r};t.a=s},182:function(e,t){},51:function(e,t){},84:function(e,t){},85:function(e,t){},86:function(e,t){},87:function(e,t){},88:function(e,t){},89:function(e,t){},90:function(e,t){},91:function(e,t){},92:function(e,t){},93:function(e,t){},94:function(e,t){},95:function(e,t){},96:function(e,t){},97:function(e,t){},98:function(e,t){},99:function(e,t){}},[125]);
//# sourceMappingURL=app.b875e2acd4464b800708.js.map