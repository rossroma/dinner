webpackJsonp([1],{100:function(e,t){},101:function(e,t){},102:function(e,t){},103:function(e,t){},104:function(e,t){},105:function(e,t){},106:function(e,t){},107:function(e,t){},108:function(e,t){},109:function(e,t){},110:function(e,t){},111:function(e,t){},112:function(e,t){},113:function(e,t){},114:function(e,t,a){"use strict";function n(e){a(187),a(186)}var s=a(55),i=a(204),r=a(33),o=n,l=r(s.a,i.a,!1,o,"data-v-213d5fd2",null);t.a=l.exports},138:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(95),s=(a.n(n),a(76)),i=a.n(s),r=a(96),o=(a.n(r),a(77)),l=a.n(o),u=a(97),c=(a.n(u),a(78)),m=a.n(c),d=a(105),f=(a.n(d),a(85)),p=a.n(f),v=a(100),g=(a.n(v),a(81)),h=a.n(g),b=a(107),y=(a.n(b),a(87)),_=a.n(y),w=a(108),L=(a.n(w),a(88)),S=a.n(L),N=a(104),x=(a.n(N),a(15)),k=a.n(x),C=a(101),T=(a.n(C),a(82)),D=a.n(T),O=a(102),M=(a.n(O),a(83)),$=a.n(M),W=a(111),A=(a.n(W),a(91)),F=a.n(A),z=a(112),E=(a.n(z),a(92)),I=a.n(E),R=a(110),q=(a.n(R),a(90)),V=a.n(q),j=a(113),B=(a.n(j),a(93)),J=a.n(B),H=a(99),P=(a.n(H),a(80)),G=a.n(P),K=a(109),Q=(a.n(K),a(89)),U=a.n(Q),X=a(106),Y=(a.n(X),a(86)),Z=a.n(Y),ee=a(94),te=(a.n(ee),a(35)),ae=a.n(te),ne=a(103),se=(a.n(ne),a(84)),ie=a.n(se),re=a(98),oe=(a.n(re),a(36)),le=(a.n(oe),a(79)),ue=a.n(le),ce=a(1),me=a(114);ce.default.config.productionTip=!1,ce.default.use(ue.a),ce.default.use(ie.a),ce.default.use(ae.a),ce.default.use(Z.a),ce.default.use(U.a),ce.default.use(G.a),ce.default.use(J.a),ce.default.use(V.a),ce.default.use(I.a),ce.default.use(F.a),ce.default.use($.a),ce.default.use(D.a),ce.default.use(k.a),ce.default.use(S.a),ce.default.use(_.a),ce.default.use(h.a),ce.default.use(p.a),ce.default.use(m.a),ce.default.use(l.a),ce.default.use(i.a),new ce.default({el:"#app",render:function(e){return e(me.a)}})},184:function(e,t){},185:function(e,t){},186:function(e,t){},187:function(e,t){},188:function(e,t){},199:function(e,t,a){"use strict";var n=a(56),s=a(203),i=a(33),r=i(n.a,s.a,!1,null,null,null);t.a=r.exports},200:function(e,t,a){"use strict";function n(e){a(188)}var s=a(57),i=a(205),r=a(33),o=n,l=r(s.a,i.a,!1,o,"data-v-31ec4b97",null);t.a=l.exports},201:function(e,t,a){"use strict";function n(e){a(185)}var s=a(58),i=a(202),r=a(33),o=n,l=r(s.a,i.a,!1,o,"data-v-048a8c22",null);t.a=l.exports},202:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.statisticsList,"element-loading-text":"拼了老命在加载"}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-table",{attrs:{border:"",stripe:"",size:"small",data:t.row.childTable}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userName",label:"姓名",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"count",label:"明细",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"createdAt",label:"点餐时间",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"others",label:"备注"}})],1),e._v(" "),a("div",{staticClass:"summary"},[a("span",{staticClass:"cell title"},[e._v("合计")]),e._v(" "),e._l(e.getSummaries(t.row.childTable),function(t,n){return a("span",{key:n,staticClass:"cell"},[e._v("\n          "+e._s(t.name)+": "),a("i",{staticClass:"count"},[e._v(e._s(t.count))])])})],2)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"主食",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"usersCount",label:"人次"}})],1)},s=[],i={render:n,staticRenderFns:s};t.a=i},203:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,"element-loading-text":"拼了老命在加载"}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userName",label:"姓名",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{label:"主食类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n      "+e._s(t.row.menuType&&t.row.menuType[0])+"\n    ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"主食明细"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n      "+e._s(t.row.menuType&&t.row.menuType[1])+"\n    ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"createdAt",label:"时间",width:"220"}}),e._v(" "),a("el-table-column",{attrs:{prop:"others",label:"备注"}})],1)},s=[],i={render:n,staticRenderFns:s};t.a=i},204:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("el-header",[a("h1",{staticClass:"title"},[e._v("逍邦网络点餐系统")]),e._v(" "),e.loginStatus?a("p",{staticClass:"login login-text"},[e._v("欢迎登录!")]):a("el-button",{staticClass:"login",attrs:{type:"text"},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("登录")])],1),e._v(" "),a("el-main",[e.loginStatus?["orderList"===e.activeName?a("div",{staticClass:"dinner-status"},[a("el-switch",{staticClass:"switch",on:{change:e.handleSwitch},model:{value:e.dinnerStatus,callback:function(t){e.dinnerStatus=t},expression:"dinnerStatus"}}),e._v(" "),a("span",{staticClass:"text"},[e._v("点餐"+e._s(e.dinnerStatusText))])],1):e._e(),e._v(" "),"historyLog"===e.activeName?a("el-date-picker",{staticClass:"date-picker",attrs:{size:"small",align:"right",type:"date",placeholder:"历史数据筛选","picker-options":e.pickerOptions,"value-format":"yyyy-MM-dd"},on:{change:e.getOrderList},model:{value:e.pickDate,callback:function(t){e.pickDate=t},expression:"pickDate"}}):e._e()]:e._e(),e._v(" "),a("el-tabs",{staticClass:"tabs",on:{"tab-click":e.handleTabClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"已点餐列表",name:"orderList"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.tableData,"row-class-name":e.chooseMine,"element-loading-text":"拼了老命在加载"}},[a("el-table-column",{attrs:{type:"index",width:"50"}}),e._v(" "),a("el-table-column",{attrs:{prop:"userName",label:"姓名"}}),e._v(" "),a("el-table-column",{attrs:{label:"主食类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.menuType&&t.row.menuType[0])+"\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"主食明细"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(t.row.menuType&&t.row.menuType[1])+"\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n              "+e._s(e._f("timeFilter")(t.row.createdAt))+"\n            ")]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"others",label:"备注"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.userName===e.myName||e.loginStatus?a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){a.preventDefault(),e.handleDelete(t.row.objectId)}}},[e._v("\n                撤销\n              ")]):e._e()]}}])})],1)],1),e._v(" "),a("el-tab-pane",{attrs:{label:"点餐统计",name:"statistics"}},["statistics"===e.activeName?a("statistics-list",{attrs:{"statistics-list":e.statisticsList,loading:e.loading}}):e._e()],1),e._v(" "),e.loginStatus?a("el-tab-pane",{attrs:{label:"设置",name:"setting"}},["setting"===e.activeName?a("setting",{on:{menuList:e.handleMenu}}):e._e()],1):e._e(),e._v(" "),e.loginStatus?a("el-tab-pane",{attrs:{label:"历史记录",name:"historyLog"}},["historyLog"===e.activeName?a("history-list",{attrs:{"table-data":e.tableData,loading:e.loading}}):e._e()],1):e._e()],1),e._v(" "),"orderList"===e.activeName?a("el-form",{ref:"formOrder",staticClass:"form-order",attrs:{inline:!0,model:e.formOrder,rules:e.rulesOrder}},[a("div",{staticClass:"row"},[a("el-form-item",{attrs:{prop:"userName"}},[a("el-input",{attrs:{size:"small",placeholder:"点餐人"},model:{value:e.formOrder.userName,callback:function(t){e.$set(e.formOrder,"userName",t)},expression:"formOrder.userName"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:"menuType"}},[a("el-cascader",{attrs:{size:"small",options:e.formatMenuList},model:{value:e.formOrder.menuType,callback:function(t){e.$set(e.formOrder,"menuType",t)},expression:"formOrder.menuType"}})],1)],1),e._v(" "),a("div",{staticClass:"row pc"},[a("el-form-item",[a("el-input",{staticClass:"textarea",attrs:{type:"textarea",rows:4,resize:"none",placeholder:"备注信息"},model:{value:e.formOrder.others,callback:function(t){e.$set(e.formOrder,"others",t)},expression:"formOrder.others"}})],1),e._v(" "),a("el-form-item",[e.dinnerStatus?a("a",{staticClass:"login-btn normal",class:{ordered:e.myDinnerStatus},attrs:{href:"javascript:;"},on:{click:e.handleSubmit}},[e._v("我要点餐")]):a("a",{staticClass:"login-btn closed",attrs:{href:"javascript:;"}},[e._v("点餐关闭")])])],1),e._v(" "),a("div",{staticClass:"mobile"},[e.dinnerStatus?a("a",{staticClass:"login-btn-m normal",class:{ordered:e.myDinnerStatus},attrs:{href:"javascript:;"},on:{click:e.handleSubmit}},[e._v("我要点餐")]):a("a",{staticClass:"login-btn-m closed",attrs:{href:"javascript:;"}},[e._v("点餐关闭")])])]):e._e()],2),e._v(" "),a("el-dialog",{attrs:{title:"管理员登录",width:e.autoWidth,fullscreen:e.smallScreen,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"formLogin",attrs:{model:e.formLogin,rules:e.rulesLogin}},[a("el-form-item",{attrs:{label:"管理密码",prop:"password"}},[a("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"请输入管理密码"},model:{value:e.formLogin.password,callback:function(t){e.$set(e.formLogin,"password",t)},expression:"formLogin.password"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登 录")])],1)],1)],1)},s=[],i={render:n,staticRenderFns:s};t.a=i},205:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"setting"},[a("el-collapse",{attrs:{accordion:""},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-collapse-item",{attrs:{title:"点餐白名单",name:"1"}},[a("el-form",{ref:"whiteList",staticClass:"menu-form",attrs:{model:e.whiteList,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"白名单",prop:"value",rules:{required:!0,message:"白名单不能为空",trigger:"blur"}}},[a("el-input",{attrs:{type:"textarea",rows:6,placeholder:"输入员工白名单，并以空格隔开"},model:{value:e.whiteList.value,callback:function(t){e.$set(e.whiteList,"value",t)},expression:"whiteList.value"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){e.submitForm("whiteList")}}},[e._v("保 存")])],1)],1)],1),e._v(" "),a("el-collapse-item",{attrs:{title:"菜单设置",name:"2"}},[a("el-form",{ref:"menuList",staticClass:"menu-form",attrs:{model:e.menuList,"label-width":"100px"}},[e._l(e.menuList.value,function(t,n){return a("el-form-item",{key:n,attrs:{label:"主食"+(n+1),prop:"value."+n+".name",rules:{required:!0,message:"主食类型不能为空",trigger:"blur"}}},[a("div",{staticClass:"form-item"},[a("el-input",{attrs:{size:"small",placeholder:"输入新的主食类型"},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"menu.name"}}),e._v(" "),a("el-button",{attrs:{size:"small",type:"danger",plain:""},on:{click:function(t){t.preventDefault(),e.removeMenu(n)}}},[e._v("删除")])],1),e._v(" "),a("div",{staticClass:"form-item"},[a("el-input",{attrs:{type:"textarea",placeholder:"输入该类型的可选餐品，并以空格隔开"},model:{value:t.values,callback:function(a){e.$set(t,"values",a)},expression:"menu.values"}})],1)])}),e._v(" "),a("el-form-item",[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(t){e.submitForm("menuList")}}},[e._v("保 存")]),e._v(" "),a("el-button",{attrs:{size:"small"},on:{click:e.addMenu}},[e._v("新增主食类型")])],1)],2)],1)],1)],1)},s=[],i={render:n,staticRenderFns:s};t.a=i},208:function(e,t){},36:function(e,t){},54:function(e,t,a){"use strict";var n=a(1),s=a(206);n.default.use(s.a);var i=function(e,t){n.default.http.get("/"+e).then(function(e){200===e.status?t(e.body):console.log(e.status)})},r=function(e,t,a){n.default.http.post("/"+e,t).then(function(e){200===e.status?a(e.body):console.log(e.status)})},o=function(){return{set:function(e,t){window.localStorage.setItem(e,t)},get:function(e){return window.localStorage.getItem(e)},remove:function(e){window.localStorage.removeItem(e)}}},l=new n.default;l.get=i,l.post=r,l.storage=o,t.a=l},55:function(e,t,a){"use strict";var n=a(184),s=(a.n(n),a(175)),i=a.n(s),r=a(75),o=(a.n(r),a(36)),l=(a.n(o),a(71)),u=a.n(l),c=a(54),m=a(201),d=a(199),f=a(200),p="";window.location.hash.indexOf("910")>-1&&(p=910),t.a={name:"app",data:function(){return{loading:!0,activeName:"orderList",tableData:[],dialogFormVisible:!1,dinnerStatus:!0,myDinnerStatus:!1,myName:"",loginStatus:!1,formOrder:{userName:"",menuType:[],others:""},rulesOrder:{userName:{required:!0,validator:this.userNameValidator,trigger:"blur"},menuType:{required:!0,type:"array",message:"请选择主食",trigger:"change"}},formLogin:{password:""},rulesLogin:{password:{required:!0,message:"请输入管理密码！",trigger:"blur"}},pickDate:"",pickerOptions:{shortcuts:[{text:"今天",onClick:function(e){e.$emit("pick",new Date)}},{text:"昨天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-864e5),e.$emit("pick",t)}},{text:"前天",onClick:function(e){var t=new Date;t.setTime(t.getTime()-1728e5),e.$emit("pick",t)}}]},autoWidth:window.innerWidth<500?"100%":"500px",smallScreen:window.innerWidth<500,statisticsList:[{name:"饺子",count:23,usersCount:25,childTable:[{userName:"张三",count:.5,createdAt:"2019-08-15 15:23",others:"不要鸡蛋"}]}],menuList:[],whiteList:""}},components:{StatisticsList:m.a,HistoryList:d.a,Setting:f.a},computed:{dinnerStatusText:function(){return this.dinnerStatus?"开启":"关闭"},formatMenuList:function(){return this.menuList.map(function(e){return{value:e.name,label:e.name,children:e.values.match(/\S+/g).map(function(e){return{value:e,label:e}})}})},formatWhiteList:function(){return this.whiteList.match(/\S+/g)}},mounted:function(){this.getOrderList(),this.getLocalStorage(),this.getWhiteList(),this.getMenuList()},methods:{getOrderList:function(e){var t=this;this.loading=!0;var a=void 0;a=e?"getAllDinner?date="+e+"&office="+p:"getAllDinner?office="+p,c.a.get(a,function(e){t.dinnerStatus=e.result.dinnerStatus,t.tableData=e.result.results,t.loginStatus=e.result.loginStatus,t.createStatistics(e.result.results),t.loading=!1,t.myName&&t.tableData.findIndex(function(e){return e.userName===t.myName})>-1&&(t.myDinnerStatus=!0)})},createStatistics:function(e){var t=[];e.map(function(e){return e.menuType&&e.menuType.length?{userName:e.userName,others:e.others,type:e.menuType[0],count:e.menuType[1],createdAt:e.createdAt}:e}).forEach(function(e){var a=t.findIndex(function(t){return t.type===e.type});if(-1===a)t.push({type:e.type,usersCount:1,childTable:[{userName:e.userName,count:e.count,createdAt:e.createdAt,others:e.others}]});else{var n=t[a];n.usersCount++,n.childTable.push({userName:e.userName,count:e.count,createdAt:e.createdAt,others:e.others})}}),this.statisticsList=t},getLocalStorage:function(){var e=c.a.storage().get("DINNER-userinfos");if(e){var t=window.JSON.parse(e);t&&(this.formOrder.userName=this.myName=t.userName)}},setLocalStorage:function(e){var t={userName:e.userName};t=window.JSON.stringify(t),c.a.storage().set("DINNER-userinfos",t)},handleSubmit:function(){var e=this;this.$refs.formOrder.validate(function(t){if(!t)return u()({type:"error",message:"输入有误，请检查后重新提交！"}),!1;-1!==e.tableData.findIndex(function(t){return t.userName===e.myName})||e.myDinnerStatus?u()({type:"error",message:"你已点餐，请勿重复提交！"}):e.orderSubmit()})},orderSubmit:function(){var e=this;this.myDinnerStatus=!0;var t={userName:this.formOrder.userName,office:p||void 0,menuType:this.formOrder.menuType,others:this.formOrder.others};c.a.post("addDinner",t,function(a){1===a.code?(u()({type:"success",message:a.msg}),e.getOrderList(),e.setLocalStorage(t),e.myName=t.userName):(e.myDinnerStatus=!1,u()({type:"error",message:a.msg}))})},handleSwitch:function(){c.a.get("toggleDinner",function(e){u()({type:"success",message:e.msg})})},handleTabClick:function(){this.getOrderList()},login:function(){var e=this;this.$refs.formLogin.validate(function(t){if(!t)return u()({type:"error",message:"请输入管理密码！"}),!1;var a=e.formLogin;c.a.post("signin",a,function(t){1===t.code?(u()({type:"success",message:"登陆成功！"}),e.loginStatus=!0,e.dialogFormVisible=!1):u()({type:"error",message:"密码错误！"})})})},handleDelete:function(e){var t=this;i()("是否撤销此次点餐?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.deleteRow(e)}).catch(function(){})},deleteRow:function(e){var t=this,a="cancelDinner/"+e;c.a.get(a,function(e){1===e.code?(u()({type:"success",message:e.msg}),t.myDinnerStatus=!1,t.getOrderList()):u()({type:"error",message:e.msg})})},chooseMine:function(e){return e.row.userName===this.myName?"positive-row":""},handleMenu:function(e){this.menuList=e},getWhiteList:function(){var e=this;c.a.get("getWhiteList",function(t){e.whiteList=t.result})},getMenuList:function(){var e=this;c.a.get("getMenuList",function(t){e.menuList=t.result})},userNameValidator:function(e,t,a){t?-1===this.formatWhiteList.indexOf(t)?a(new Error("点餐人不再白名单内，请联系行政处理")):a():a(new Error("点餐人姓名不能为空"))}},filters:{timeFilter:function(e){return e.slice(-8)}}}},56:function(e,t,a){"use strict";t.a={name:"HistoryList",props:{tableData:{type:Array,required:!0},loading:Boolean}}},57:function(e,t,a){"use strict";var n=a(75),s=(a.n(n),a(36)),i=(a.n(s),a(71)),r=a.n(i),o=a(54);t.a={name:"setting",props:{},data:function(){return{activeName:"1",whiteList:{value:""},menuList:{value:[{name:"米饭",values:""}]}}},mounted:function(){this.getWhiteList(),this.getMenuList()},methods:{getWhiteList:function(){var e=this;o.a.get("getWhiteList",function(t){e.$set(e.whiteList,"value",t.result)})},setWhiteList:function(){o.a.post("setWhiteList",this.whiteList,function(e){r()({type:"success",message:e.msg})})},getMenuList:function(){var e=this;o.a.get("getMenuList",function(t){e.$set(e.menuList,"value",t.result)})},setMenuList:function(){o.a.post("setMenuList",this.menuList,function(e){r()({type:"success",message:e.msg})})},removeMenu:function(e){if(this.menuList.value.length<=1)return void r()({type:"warning",message:"至少要保留一个主食类型"});this.menuList.value.splice(e,1)},addMenu:function(){this.menuList.value.push({name:"",values:""})},submitForm:function(e){var t=this;this.$refs[e].validate(function(a){if(!a)return r()({type:"error",message:"输入有误，请检查后重新提交"}),!1;"whiteList"===e?t.setWhiteList():"menuList"===e&&t.setMenuList()})}}}},58:function(e,t,a){"use strict";t.a={name:"StatisticsList",props:{statisticsList:{type:Array,required:!0},loading:Boolean},methods:{getSummaries:function(e){var t=[];return e.forEach(function(e,a){var n=t.findIndex(function(t){return t.name===e.count});-1===n?t.push({name:e.count,count:1}):t[n].count++}),t}}}},75:function(e,t){},94:function(e,t){},95:function(e,t){},96:function(e,t){},97:function(e,t){},98:function(e,t){},99:function(e,t){}},[138]);
//# sourceMappingURL=app.a75c8fbab9d1a7b5000b.js.map