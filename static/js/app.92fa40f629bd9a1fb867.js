webpackJsonp([29],{"7Otq":function(t,e,n){t.exports=n.p+"static/img/logo.e9fcd01.png"},"8v/m":function(t,e){},FRpe:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("+RKF"),i={name:"App",data:function(){return{asideWidth:200,isCollapse:!1}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)}}},o={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("el-container",[r("el-header",[r("div",[r("img",{staticClass:"logo",attrs:{src:n("7Otq"),alt:""}}),t._v(" "),r("i",{class:t.isCollapse?"el-icon-s-unfold":"el-icon-s-fold",on:{click:function(e){t.isCollapse=!t.isCollapse}}})]),t._v(" "),r("div",[r("router-link",{attrs:{to:"/newsList"}},[r("el-badge",{staticClass:"item",attrs:{value:12}},[r("i",{staticClass:"el-icon-s-comment"})])],1),t._v(" "),r("img",{staticClass:"avatar",attrs:{src:n("7Otq"),alt:""}}),t._v(" "),r("div",[t._v("超级管理员")])],1)]),t._v(" "),r("el-container",[r("el-aside",{attrs:{width:t.isCollapse?"65px":"400px"}},[r("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1","background-color":"#545c64","active-text-color":"#ffd04b","text-color":"#fff","header-cell-style":{"text-align":"left"},collapse:t.isCollapse},on:{open:t.handleOpen,close:t.handleClose}},[r("el-submenu",{attrs:{index:"1"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-location"}),t._v(" "),r("span",{attrs:{slot:"title"},slot:"title"},[t._v("系统管理")])]),t._v(" "),r("el-menu-item-group",[r("el-menu-item",{attrs:{index:"1-1"}},[r("router-link",{attrs:{to:"/user"}},[t._v("用户管理")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"1-2"}},[r("router-link",{attrs:{to:"/log"}},[t._v("操作日志查询")])],1)],1)],2),t._v(" "),r("el-submenu",{attrs:{index:"2"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-location"}),t._v(" "),r("span",{attrs:{slot:"title"},slot:"title"},[t._v("企业审批权备案申办")])]),t._v(" "),r("el-menu-item-group",[r("el-menu-item",{attrs:{index:"2-1"}},[r("router-link",{attrs:{to:"/enterpriseAuthorization"}},[t._v("审批权申请")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"2-2"}},[r("router-link",{attrs:{to:"/enterpriseAuthorization"}},[t._v("申请资料修改")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"2-3"}},[r("router-link",{attrs:{to:"/reviewPrimary"}},[t._v("初审核")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"2-4"}},[r("router-link",{attrs:{to:"/reviewLevelOne"}},[t._v("一级审批")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"2-5"}},[r("router-link",{attrs:{to:"/reviewLevelTow"}},[t._v("二级审批")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"2-6"}},[t._v("备案资料")])],1)],2),t._v(" "),r("el-submenu",{attrs:{index:"3"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-location"}),t._v(" "),r("span",{attrs:{slot:"title"},slot:"title"},[t._v("区内企业管理")])]),t._v(" "),r("el-menu-item-group",[r("el-menu-item",{attrs:{index:"3-1"}},[r("router-link",{attrs:{to:"/application"}},[t._v("企业员工车辆信息录入")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-2"}},[r("router-link",{attrs:{to:"/batchImportCar"}},[t._v("企业员工车辆信息批量导入")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-3"}},[r("router-link",{attrs:{to:"/outOfService"}},[t._v("企业对本单位员工车辆停运")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-4"}},[r("router-link",{attrs:{to:"/deleteCar"}},[t._v("企业对本单位员工车辆删除")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-5"}},[r("router-link",{attrs:{to:"/outOfServiceCarExport"}},[t._v("企业员工停运车辆查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-6"}},[r("router-link",{attrs:{to:"/outOfServiceCarExport"}},[t._v("企业员工删除车辆查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-7"}},[r("router-link",{attrs:{to:"/passAnnal"}},[t._v("企业员工车辆通行记录查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-8"}},[r("router-link",{attrs:{to:"/reviewPrimary"}},[t._v("供货商车辆申请信息审批")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-8"}},[r("router-link",{attrs:{to:"/outOfServiceCarExport"}},[t._v("供货商车辆查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-10"}},[r("router-link",{attrs:{to:"/outOfService"}},[t._v("供货商车辆停运")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-11"}},[r("router-link",{attrs:{to:"/deleteCar"}},[t._v("供货商车辆删除")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-12"}},[r("router-link",{attrs:{to:"/outOfServiceCarExport"}},[t._v("供货商车辆信息查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-13"}},[r("router-link",{attrs:{to:"/outOfServiceCarExport"}},[t._v("供应商停运车辆查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-14"}},[r("router-link",{attrs:{to:"/outOfServiceCarExport"}},[t._v("供应商删除车辆查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-15"}},[r("router-link",{attrs:{to:"/passAnnal"}},[t._v("供应商车辆通行记录查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-16"}},[r("router-link",{attrs:{to:"/application"}},[t._v("企业VIP车辆信息录入与提交申请")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-17"}},[r("router-link",{attrs:{to:"/approvalProgress"}},[t._v("企业VIP车辆审批进度查询")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-18"}},[r("router-link",{attrs:{to:"/outOfServiceCarExport"}},[t._v("企业VIP车辆查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-19"}},[r("router-link",{attrs:{to:"/outOfServiceCarExport"}},[t._v("企业VIP车辆信息查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-20"}},[r("router-link",{attrs:{to:"/outOfServiceCarExport"}},[t._v("企业VIP车辆档案查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-21"}},[r("router-link",{attrs:{to:"/passAnnal"}},[t._v("企业VIP车辆通行记录查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-22"}},[r("router-link",{attrs:{to:"/sendMessage"}},[t._v("公共消息推送")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-23"}},[r("router-link",{attrs:{to:"/newsList"}},[t._v("公共消息微信推送记录查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"3-24"}},[r("router-link",{attrs:{to:"/trafficStatistics"}},[t._v("车辆通行数据实时统计")])],1)],1)],2),t._v(" "),r("el-submenu",{attrs:{index:"4"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-location"}),t._v(" "),r("span",{attrs:{slot:"title"},slot:"title"},[t._v("客服管理入口")])]),t._v(" "),r("el-menu-item-group",[r("el-menu-item",{attrs:{index:"4-1"}},[r("router-link",{attrs:{to:"/application"}},[t._v("车辆档案录入")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"4-2"}},[r("router-link",{attrs:{to:"/batchImportCar"}},[t._v("车辆档案批量导入")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"4-3"}},[r("router-link",{attrs:{to:"/applicationList"}},[t._v("车辆信息编辑")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"4-4"}},[r("router-link",{attrs:{to:"/inspectionProportion_1"}},[t._v("进入园区检查比例修改")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"4-5"}},[r("router-link",{attrs:{to:"/inspectionProportion_2"}},[t._v("驶出园区检查比例修改")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"4-6"}},[r("router-link",{attrs:{to:"/outOfService"}},[t._v("车辆停运")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"4-7"}},[r("router-link",{attrs:{to:"/deleteCar"}},[t._v("车辆删除")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"4-8"}},[r("router-link",{attrs:{to:"/violationList"}},[t._v("违规上报查询及处理")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"4-9"}},[r("router-link",{attrs:{to:"/enterpriseList"}},[t._v("企业审批权备案查询与处理")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"4-10"}},[r("router-link",{attrs:{to:"/sendMessage"}},[t._v("消息微信推送")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"4-11"}},[r("router-link",{attrs:{to:"/newsList"}},[t._v("消息微信推送记录查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"4-12"}},[r("router-link",{attrs:{to:"/outOfServiceCarExport"}},[t._v("停运车辆档案查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"4-13"}},[r("router-link",{attrs:{to:"/outOfServiceCarExport"}},[t._v("已删除车辆档案查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"4-14"}},[r("router-link",{attrs:{to:"/passAnnal"}},[t._v("车辆通行记录查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"4-15"}},[r("router-link",{attrs:{to:"/entrainmentRecording"}},[t._v("夹带检查记录查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"4-16"}},[r("router-link",{attrs:{to:"/passAnnal"}},[t._v("车辆通行数据记录与统计")])],1)],1)],2),t._v(" "),r("el-submenu",{attrs:{index:"5"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-location"}),t._v(" "),r("span",{attrs:{slot:"title"},slot:"title"},[t._v("管理办入口")])]),t._v(" "),r("el-menu-item-group",[r("el-menu-item",{attrs:{index:"5-1"}},[t._v("园区三种待审核的车辆查询与处理")]),t._v(" "),r("el-menu-item",{attrs:{index:"5-2"}},[r("router-link",{attrs:{to:"/inspectionProportion_1"}},[t._v("车辆进入园区检查比例批量修改")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"5-3"}},[r("router-link",{attrs:{to:"/inspectionProportion_2"}},[t._v("车辆驶出园区检查比例批量修改")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"5-4"}},[r("router-link",{attrs:{to:"/violationList"}},[t._v("违规上报查询及处理")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"5-5"}},[r("router-link",{attrs:{to:"/enterpriseList"}},[t._v("企业审批权备案查询与处理")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"5-6"}},[r("router-link",{attrs:{to:"/sendMessage"}},[t._v("公共消息微信推送")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"5-7"}},[r("router-link",{attrs:{to:"/newsList"}},[t._v("公共消息微信推送记录查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"5-8"}},[r("router-link",{attrs:{to:"/outOfServiceCarExport"}},[t._v("车辆档案查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"5-9"}},[r("router-link",{attrs:{to:"/outOfServiceCarExport"}},[t._v("停运车辆档案查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"5-10"}},[r("router-link",{attrs:{to:"/outOfServiceCarExport"}},[t._v("已删除车辆档案查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"5-11"}},[r("router-link",{attrs:{to:"/passAnnal"}},[t._v("车辆通行记录查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"5-12"}},[r("router-link",{attrs:{to:"/entrainmentRecording"}},[t._v("夹带检查记录查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"5-13"}},[r("router-link",{attrs:{to:"/trafficStatistics"}},[t._v("车辆通行数据实时统计")])],1)],1)],2),t._v(" "),r("el-submenu",{attrs:{index:"6"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-location"}),t._v(" "),r("span",{attrs:{slot:"title"},slot:"title"},[t._v("海关入口")])]),t._v(" "),r("el-menu-item-group",[r("el-menu-item",{attrs:{index:"6-1"}},[t._v("园区三种待复核车辆查询与处理")]),t._v(" "),r("el-menu-item",{attrs:{index:"6-2"}},[r("router-link",{attrs:{to:"/inspectionProportion_1"}},[t._v("车辆进入园区检查比例批量修改")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"6-3"}},[r("router-link",{attrs:{to:"/inspectionProportion_2"}},[t._v("车辆驶出园区检查比例批量修改")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"6-4"}},[r("router-link",{attrs:{to:"/violationList"}},[t._v("违规上报查询及处理")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"6-5"}},[r("router-link",{attrs:{to:"/enterpriseList"}},[t._v("企业审批权备案查询与处理")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"6-6"}},[r("router-link",{attrs:{to:"/sendMessage"}},[t._v("公共消息微信推送")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"6-7"}},[r("router-link",{attrs:{to:"/newsList"}},[t._v("公共消息微信推送记录查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"6-8"}},[r("router-link",{attrs:{to:"/outOfServiceCarExport"}},[t._v("车辆档案查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"6-9"}},[r("router-link",{attrs:{to:"/outOfServiceCarExport"}},[t._v("停运车辆档案查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"6-10"}},[r("router-link",{attrs:{to:"/outOfServiceCarExport"}},[t._v("已删除车辆档案查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"6-11"}},[r("router-link",{attrs:{to:"/passAnnal"}},[t._v("车辆通行记录查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"6-12"}},[r("router-link",{attrs:{to:"/entrainmentRecording"}},[t._v("夹带检查记录查询与导出")])],1),t._v(" "),r("el-menu-item",{attrs:{index:"6-13"}},[r("router-link",{attrs:{to:"/trafficStatistics"}},[t._v("车辆通行数据实时统计")])],1)],1)],2)],1)],1),t._v(" "),r("el-container",[r("el-main",[r("router-view")],1)],1)],1)],1)],1)},staticRenderFns:[]};var a=n("C7Lr")(i,o,!1,function(t){n("FRpe")},null,null).exports,l=n("wlOD"),s={data:function(){return{}},methods:{handleClick:function(t){console.log(t)}}},u={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"container"},[this._v("123123")])},staticRenderFns:[]};n("C7Lr")(s,u,!1,function(t){n("8v/m")},"data-v-b03fef6e",null).exports;r.default.use(l.a);var m=new l.a({routes:[{path:"/",name:"Index",component:function(){return n.e(2).then(n.bind(null,"42Hy"))}},{path:"/user",name:"User",component:function(){return n.e(6).then(n.bind(null,"jyJz"))}},{path:"/log",name:"Log",component:function(){return n.e(9).then(n.bind(null,"Nvtk"))}},{path:"/carManagement",name:"CarManagement",component:function(){return n.e(10).then(n.bind(null,"0KuX"))}},{path:"/carInfo",name:"CarInfo",component:function(){return n.e(4).then(n.bind(null,"a8hP"))}},{path:"/newsList",name:"NewsList",component:function(){return n.e(5).then(n.bind(null,"ERXc"))}},{path:"/passAnnal",name:"PassAnnal",component:function(){return n.e(3).then(n.bind(null,"/lNM"))}},{path:"/inspectionAnnal",name:"InspectionAnnal",component:function(){return n.e(16).then(n.bind(null,"gvm1"))}},{path:"/delCarList",name:"DelCarList",component:function(){return n.e(12).then(n.bind(null,"FK8A"))}},{path:"/application",name:"Application",component:function(){return n.e(22).then(n.bind(null,"za5l"))}},{path:"/applicationList",name:"ApplicationList",component:function(){return n.e(7).then(n.bind(null,"ooge"))}},{path:"/reviewPrimary",name:"ReviewPrimary",component:function(){return n.e(18).then(n.bind(null,"dWW+"))}},{path:"/reviewLevelOne",name:"ReviewLevelOne",component:function(){return n.e(24).then(n.bind(null,"b/6X"))}},{path:"/reviewLevelTow",name:"ReviewLevelTow",component:function(){return n.e(17).then(n.bind(null,"VBOk"))}},{path:"/reviewDetails",name:"ReviewDetails",component:function(){return n.e(20).then(n.bind(null,"p+XZ"))}},{path:"/batchImportCar",name:"BatchImportCar",component:function(){return n.e(1).then(n.bind(null,"mwxA"))}},{path:"/outOfService",name:"OutOfService",component:function(){return n.e(14).then(n.bind(null,"DyN8"))}},{path:"/deleteCar",name:"DeleteCar",component:function(){return n.e(26).then(n.bind(null,"eV4G"))}},{path:"/outOfServiceCarExport",name:"OutOfServiceCarExport",component:function(){return n.e(21).then(n.bind(null,"SM9f"))}},{path:"/inspectionProportion_1",name:"InspectionProportion_1",component:function(){return n.e(19).then(n.bind(null,"+Mi3"))}},{path:"/inspectionProportion_2",name:"InspectionProportion_2",component:function(){return n.e(23).then(n.bind(null,"T3yg"))}},{path:"/trafficStatistics",name:"TrafficStatistics",component:function(){return n.e(15).then(n.bind(null,"N4VM"))}},{path:"/entrainmentRecording",name:"EntrainmentRecording",component:function(){return n.e(0).then(n.bind(null,"QgsY"))}},{path:"/enterpriseList",name:"EnterpriseList",component:function(){return n.e(13).then(n.bind(null,"tsr7"))}},{path:"/enterpriseAuthorization",name:"EnterpriseAuthorization",component:function(){return n.e(25).then(n.bind(null,"xrBE"))}},{path:"/approvalProgress",name:"ApprovalProgress",component:function(){return n.e(27).then(n.bind(null,"xapo"))}},{path:"/violationList",name:"ViolationList",component:function(){return n.e(11).then(n.bind(null,"1qbv"))}},{path:"/sendMessage",name:"SendMessage",component:function(){return n.e(8).then(n.bind(null,"yR/M"))}}]}),v=n("bQIR"),c=n.n(v);n("gFLX");r.default.config.productionTip=!1,r.default.use(c.a),new r.default({el:"#app",router:m,components:{App:a},template:"<App/>"})},gFLX:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.92fa40f629bd9a1fb867.js.map