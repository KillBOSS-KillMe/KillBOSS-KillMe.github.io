webpackJsonp([23],{T3yg:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"header"},[a("el-input",{attrs:{placeholder:"请输入检查比例"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("修改选中")]),t._v(" "),a("el-button",{attrs:{type:"primary"}},[t._v("修改所有")])],1),t._v(" "),a("div",{staticClass:"con"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"row-class-name":t.tableRowClassName}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"numberPlate",label:"车牌号",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"type",label:"车辆类型",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return["0"==t.tableData[e.$index].type?a("el-tag",{attrs:{size:"mini",type:"success"}},[t._v("员工车辆")]):t._e(),t._v(" "),"1"==t.tableData[e.$index].type?a("el-tag",{attrs:{size:"mini",type:"warning"}},[t._v("客户车辆")]):t._e(),t._v(" "),"2"==t.tableData[e.$index].type?a("el-tag",{attrs:{size:"mini",type:"danger"}},[t._v("VIP车辆")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"owner",label:"车辆所有人",width:"110"}}),t._v(" "),a("el-table-column",{attrs:{prop:"driver",label:"驾驶员",width:"90"}}),t._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"驾驶员电话",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ETCCode",label:"ETC编码",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ETCInCode",label:"ETC内码",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"guarantor",label:"企业担保人",width:"120"}}),t._v(" "),a("el-table-column",{attrs:{prop:"enterprise",label:"车辆归属企业",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"examination",label:"车辆检查",width:"80"}}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return["0"==t.tableData[e.$index].status?a("el-tag",{attrs:{size:"mini",type:"success"}},[t._v("正常")]):t._e(),t._v(" "),"1"==t.tableData[e.$index].status?a("el-tag",{attrs:{size:"mini",type:"warning"}},[t._v("待一级审核")]):t._e(),t._v(" "),"2"==t.tableData[e.$index].status?a("el-tag",{attrs:{size:"mini",type:"danger"}},[t._v("待二级审核")]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"startTime",label:"同行开始时间",width:"180"}}),t._v(" "),a("el-table-column",{attrs:{prop:"endTime",label:"同行结束时间",width:"180"}})],1)],1),t._v(" "),a("div",{staticClass:"buttonCon"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:1e3}})],1),t._v(" "),a("el-dialog",{attrs:{title:"批量添加车辆",visible:t.batchAddCarShow},on:{"update:visible":function(e){t.batchAddCarShow=e}}},[a("div",{staticClass:"formCon"},[a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[t._v("上传车辆列表")]),t._v(" "),a("el-link",{attrs:{type:"primary"}},[t._v("获取模板")]),t._v(" "),a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-change":t.handleChange,"file-list":t.fileList}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")]),t._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)]),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.batchAddCarShow=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.batchAddCarShow=!1}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var n=a("C7Lr")({name:"user",data:function(){return{batchAddCarShow:!1,tableData:[{numberPlate:"陕A 88888899",type:"0",owner:"王小虎",driver:"驾驶员1",phone:"18888888888",ETCCode:"000000",ETCInCode:"000000",guarantor:"担保人",enterprise:"公司名称",examination:"20",status:"0",createTime:"2016-05-04 02:02:02",startTime:"2016-05-04 02:02:02",endTime:"2016-05-04 02:02:02"},{numberPlate:"陕A 88888899",type:"1",owner:"王小虎",driver:"驾驶员1",phone:"18888888888",ETCCode:"000000",ETCInCode:"000000",guarantor:"担保人",enterprise:"公司名称",examination:"20",status:"1",createTime:"2016-05-04 02:02:02",startTime:"2016-05-04 02:02:02",endTime:"2016-05-04 02:02:02"},{numberPlate:"陕A 88888899",type:"2",owner:"王小虎",driver:"驾驶员1",phone:"18888888888",ETCCode:"000000",ETCInCode:"000000",guarantor:"担保人",enterprise:"公司名称",examination:"20",status:"2",createTime:"2016-05-04 02:02:02",startTime:"2016-05-04 02:02:02",endTime:"2016-05-04 02:02:02"},{numberPlate:"陕A 88888899",type:"0",owner:"王小虎",driver:"驾驶员1",phone:"18888888888",ETCCode:"000000",ETCInCode:"000000",guarantor:"担保人",enterprise:"公司名称",examination:"20",status:"0",createTime:"2016-05-04 02:02:02",startTime:"2016-05-04 02:02:02",endTime:"2016-05-04 02:02:02"},{numberPlate:"陕A 88888899",type:"0",owner:"王小虎",driver:"驾驶员1",phone:"18888888888",ETCCode:"000000",ETCInCode:"000000",guarantor:"担保人",enterprise:"公司名称",examination:"20",status:"0",createTime:"2016-05-04 02:02:02",startTime:"2016-05-04 02:02:02",endTime:"2016-05-04 02:02:02"}]}},methods:{goCarInfo:function(){this.$router.push("carInfo")},goPassAnnal:function(){this.$router.push("passAnnal")},delList:function(){this.$message.error("请先选择需要删除的车辆")}}},r,!1,function(t){a("vEH/")},"data-v-0c76f430",null);e.default=n.exports},"vEH/":function(t,e){}});
//# sourceMappingURL=23.1e5803c56ca56a794206.js.map