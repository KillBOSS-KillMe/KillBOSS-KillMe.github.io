webpackJsonp([8],{"0KuX":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"header"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addCarShow=!0}}},[e._v("添加车辆")]),e._v(" "),a("el-button",{attrs:{type:"primary"}},[e._v("批量导出")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.batchAddCarShow=!0}}},[e._v("批量导入")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:e.delList}},[e._v("批量删除")]),e._v(" "),a("el-input",{attrs:{placeholder:"搜索车辆","prefix-icon":"el-icon-search"},model:{value:e.input2,callback:function(t){e.input2=t},expression:"input2"}}),e._v(" "),a("el-select",{attrs:{placeholder:"请选择车辆类型"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("el-option",{attrs:{label:"员工",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"客户",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"VIP",value:"beijing"}})],1),e._v(" "),a("el-select",{attrs:{placeholder:"请选择审核状态"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("el-option",{attrs:{label:"审核通过",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"公司审核中",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"客服审核中",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"管理办审核中",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"审核未通过",value:"beijing"}})],1)],1),e._v(" "),a("div",{staticClass:"con"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,"row-class-name":e.tableRowClassName}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"numberPlate",label:"车牌号",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"type",label:"车辆类型",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"==e.tableData[t.$index].type?a("el-tag",{attrs:{size:"mini",type:"success"}},[e._v("员工车辆")]):e._e(),e._v(" "),"1"==e.tableData[t.$index].type?a("el-tag",{attrs:{size:"mini",type:"warning"}},[e._v("客户车辆")]):e._e(),e._v(" "),"2"==e.tableData[t.$index].type?a("el-tag",{attrs:{size:"mini",type:"danger"}},[e._v("VIP车辆")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"owner",label:"车辆所有人",width:"110"}}),e._v(" "),a("el-table-column",{attrs:{prop:"driver",label:"驾驶员",width:"90"}}),e._v(" "),a("el-table-column",{attrs:{prop:"phone",label:"驾驶员电话",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ETCCode",label:"ETC编码",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"ETCInCode",label:"ETC内码",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"guarantor",label:"企业担保人",width:"120"}}),e._v(" "),a("el-table-column",{attrs:{prop:"enterprise",label:"车辆归属企业",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"examination",label:"车辆检查",width:"80"}}),e._v(" "),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return["0"==e.tableData[t.$index].status?a("el-tag",{attrs:{size:"mini",type:"success"}},[e._v("正常")]):e._e(),e._v(" "),"1"==e.tableData[t.$index].status?a("el-tag",{attrs:{size:"mini",type:"warning"}},[e._v("待一级审核")]):e._e(),e._v(" "),"2"==e.tableData[t.$index].status?a("el-tag",{attrs:{size:"mini",type:"danger"}},[e._v("待二级审核")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"startTime",label:"同行开始时间",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"endTime",label:"同行结束时间",width:"180"}}),e._v(" "),a("el-table-column",{attrs:{prop:"operat",fixed:"right",label:"操作",width:"310"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.goCarInfo}},[e._v("查看")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"warning"},on:{click:function(t){e.modifyCarShow=!0}}},[e._v("修改")]),e._v(" "),a("el-popconfirm",{attrs:{title:"确定删除该车辆信息？"}},[a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[e._v("删除")])],1),e._v(" "),a("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.goPassAnnal}},[e._v("检查记录")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"buttonCon"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:1e3}})],1),e._v(" "),a("el-dialog",{attrs:{title:"新增车辆",visible:e.addCarShow},on:{"update:visible":function(t){e.addCarShow=t}}},[a("div",{staticClass:"formCon"},[a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("车牌号")]),e._v(" "),a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("车辆所有人")]),e._v(" "),a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("驾驶员")]),e._v(" "),a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("驾驶员电话")]),e._v(" "),a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("ETC编码")]),e._v(" "),a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("ETC内码")]),e._v(" "),a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("企业担保人")]),e._v(" "),a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("车辆检查")]),e._v(" "),a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("车辆类型")]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("el-option",{attrs:{label:"员工",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"客户",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"VIP",value:"beijing"}})],1)],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("上传行驶证")]),e._v(" "),a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("上传车辆照片")]),e._v(" "),a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("上传注册表")]),e._v(" "),a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-change":e.handleChange,"file-list":e.fileList}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addCarShow=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.addCarShow=!1}}},[e._v("确 定")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"修改车辆信息",visible:e.modifyCarShow},on:{"update:visible":function(t){e.modifyCarShow=t}}},[a("div",{staticClass:"formCon"},[a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("车牌号")]),e._v(" "),a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("车辆所有人")]),e._v(" "),a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("驾驶员")]),e._v(" "),a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("驾驶员电话")]),e._v(" "),a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("ETC编码")]),e._v(" "),a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("ETC内码")]),e._v(" "),a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("企业担保人")]),e._v(" "),a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("车辆检查")]),e._v(" "),a("el-input",{attrs:{autocomplete:"off",placeholder:"请输入"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("车辆类型")]),e._v(" "),a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[a("el-option",{attrs:{label:"员工",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"客户",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"VIP",value:"beijing"}})],1)],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("上传行驶证")]),e._v(" "),a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("上传车辆照片")]),e._v(" "),a("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove}},[a("i",{staticClass:"el-icon-plus"})]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogVisible},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("上传注册表")]),e._v(" "),a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-change":e.handleChange,"file-list":e.fileList}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.modifyCarShow=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.modifyCarShow=!1}}},[e._v("确 定")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"批量添加车辆",visible:e.batchAddCarShow},on:{"update:visible":function(t){e.batchAddCarShow=t}}},[a("div",{staticClass:"formCon"},[a("div",{staticClass:"formitem"},[a("div",{staticClass:"name"},[e._v("上传车辆列表")]),e._v(" "),a("el-link",{attrs:{type:"primary"}},[e._v("获取模板")]),e._v(" "),a("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-change":e.handleChange,"file-list":e.fileList}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1)]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.batchAddCarShow=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.batchAddCarShow=!1}}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var i=a("C7Lr")({name:"user",data:function(){return{form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},formLabelWidth:"120px",modifyCarShow:!1,addCarShow:!1,batchAddCarShow:!1,tableData:[{numberPlate:"陕A 88888899",type:"0",owner:"王小虎",driver:"驾驶员1",phone:"18888888888",ETCCode:"000000",ETCInCode:"000000",guarantor:"担保人",enterprise:"公司名称",examination:"20",status:"0",createTime:"2016-05-04 02:02:02",startTime:"2016-05-04 02:02:02",endTime:"2016-05-04 02:02:02"},{numberPlate:"陕A 88888899",type:"1",owner:"王小虎",driver:"驾驶员1",phone:"18888888888",ETCCode:"000000",ETCInCode:"000000",guarantor:"担保人",enterprise:"公司名称",examination:"20",status:"1",createTime:"2016-05-04 02:02:02",startTime:"2016-05-04 02:02:02",endTime:"2016-05-04 02:02:02"},{numberPlate:"陕A 88888899",type:"2",owner:"王小虎",driver:"驾驶员1",phone:"18888888888",ETCCode:"000000",ETCInCode:"000000",guarantor:"担保人",enterprise:"公司名称",examination:"20",status:"2",createTime:"2016-05-04 02:02:02",startTime:"2016-05-04 02:02:02",endTime:"2016-05-04 02:02:02"},{numberPlate:"陕A 88888899",type:"0",owner:"王小虎",driver:"驾驶员1",phone:"18888888888",ETCCode:"000000",ETCInCode:"000000",guarantor:"担保人",enterprise:"公司名称",examination:"20",status:"0",createTime:"2016-05-04 02:02:02",startTime:"2016-05-04 02:02:02",endTime:"2016-05-04 02:02:02"},{numberPlate:"陕A 88888899",type:"0",owner:"王小虎",driver:"驾驶员1",phone:"18888888888",ETCCode:"000000",ETCInCode:"000000",guarantor:"担保人",enterprise:"公司名称",examination:"20",status:"0",createTime:"2016-05-04 02:02:02",startTime:"2016-05-04 02:02:02",endTime:"2016-05-04 02:02:02"}]}},methods:{goCarInfo:function(){this.$router.push("carInfo")},goPassAnnal:function(){this.$router.push("passAnnal")},delList:function(){this.$message.error("请先选择需要删除的车辆")}}},l,!1,function(e){a("R1vr")},"data-v-04f80054",null);t.default=i.exports},R1vr:function(e,t){}});
//# sourceMappingURL=8.4670f5d817b6146bf012.js.map